import React, { useEffect, useState } from "react";
import axios from "axios";

import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";
export default function MentorForm() {
  const router = useRouter();
  const [modalPopup, setModalPopup] = useState(false);
  const [waitTime, setWaitTime] = useState(5);
  const [formStep, setFormStep] = useState(1);

  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  let number = Math.random(0 * 100);
  const [bookSession, setBookSession] = useState({
    sessionName: "",
    sessionType: "",
    sessionMeetingDuration: "",
    peopleAttend: "",
    priceSession: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    mobile: "",
    internAt: "",
    currentStatus: "",
    social: {
      linkedin: "",
      twitter: "",
    },
    bookSession: [],
    description: "",
    mentorImg: "",
    sessionPrice: "",
    // resume: '',
    password: `GrabternMentorPW!${number}!`,
    confirmPassword: `GrabternMentorPW!${number}!`,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const nextStep = () => {
    console.log(formData)
    setError("");
    if (formStep === 2) return;
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.username === "" ||
      formData.mobile === "" ||
      formData.internAt === "" ||
      formData.currentStatus === "" ||
      formData.linkedin === "" ||
      formData.twitter === "" ||
      formData.description === "" ||
      formData.mentorImg === "" ||
      formData.sessionPrice === ""
    ) {
      return setError("Please fill all input!");
    }
    let format = /[ `!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?~]/;
    setError("");
    if (/[A-Z]/.test(formData.username)) {
      return setError("Username cannot include uppercase letter");
    }
    if (format.test(formData.username)) {
      return setError("Username cannot include space and symbols");
    }
    setFormStep((val) => (val += 1));
  };

  const previousStep = () => {
    setError("");
    if (formStep === 1) return;
    setFormStep((val) => (val -= 1));
  };

  const handleSocialChange = (e) => {
    setFormData({
      ...formData,
      social: { ...formData.social, [e.target.name]: e.target.value },
    });
  };

  useEffect(() => {
    if (modalPopup === true && waitTime !== 0) {
      setTimeout(() => {
        setWaitTime((value) => (value -= 1));
      }, 1000);
    }
    if (waitTime === 0) {
      router.push("/");
    }
  });

  // const handleFileChange = e => {
  //   setFormData({ ...formData, resume: e.target.files[0] });
  // };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const removeSession = (sessionIndex) => {
    let allBookSession = formData.bookSession;
    allBookSession.splice(sessionIndex, 1);
    setFormData({ ...formData, bookSession: allBookSession });
  };

  const addBookSession = () => {
    setError("");
    if (
      bookSession.sessionName === "" ||
      bookSession.sessionType === "" ||
      bookSession.sessionMeetingDuration === "" ||
      // bookSession.peopleAttend === "" ||
      bookSession.priceSession === ""
    ) {
      return setError("Please fill all input!");
    }
    let allBookSession = formData.bookSession;
    allBookSession.push(bookSession);
    setFormData({ ...formData, bookSession: allBookSession });
    console.log(formData, bookSession);
    setBookSession({
      sessionName: "",
      sessionType: "",
      sessionMeetingDuration: "",
      peopleAttend: "",
      priceSession: "",
    });
    setError("");
  };

  const handleUploadImageChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setFormData({ ...formData, mentorImg: base64 });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    // if (formData.bookSession.length !== 2) {
    //   return setError(
    //     "The number of book sessions must be more than 2 or equal to 2!"
    //   );
    // }
    try {
      console.log(formData);
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorRegister`;
      const { data: res } = await axios.post(url, formData);
      sendEmail(res.mentorVerifyLink);
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  const sendEmail = (verifyMentorLink) => {
    const templateParams = {
      mentorName: formData.name,
      message: `Hi I am ${formData.name}
      <br>I want to register my account as mentor at Grabtern and here is my info:
                <br>Email: ${formData.email}
<br>My Phone Number: ${formData.mobile}
<br>Intern At: ${formData.internAt}
<br>Current Status: ${formData.currentStatus}
<br>My linkedin profile: ${formData.social.linkedin}
<br>My twitter profile: ${formData.social.twitter}
<br>Description: ${formData.description}
<br>Session Price for Each Intern: ${formData.sessionPrice}
<br>
<br>Book Session:
<br> ${formData.bookSession.map((session, index) => {
        return `${index + 1}. ${session.sessionName} |
                ${session.sessionMeetingDuration} min
                ${session.priceSession}<br>`;
      })}
<br> Thank you

<br> To Approve the mentor please click the link below: ${verifyMentorLink}`,
    };
    console.log(templateParams);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_MENTOR_REGISTRATION_KEY,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setModalPopup(true);
          console.log(result.text);
        },
        (error) => {
          alert("Cannot send your message sorry!");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="mentorFormRegisration">
      {modalPopup === true ? (
        <div className="modalPopup">
          <div className="modalPopupAfterRegistrationDone">
            <p>
            Thank you for registering. Within one to two days of verification,
             you will receive an email with a link to instantly generate your card.
            </p>
            <img src="/iconMentorRegistrationPopup.jpg" />
            <p>Redirecting you to home in {waitTime} second</p>
          </div>
        </div>
      ) : null}
      <div className="container">
        <form className="mentorForm" onSubmit={handleSubmit}>
          {formStep === 1 ? (
            <>
              {/* Step 1 */}
              <div style={{ gridColumn: "1/3" }} className="mentorUploudPhoto">
                <img
                  src={
                    formData.mentorImg.length === 0
                      ? "/blank-profile-photo.jpg"
                      : formData.mentorImg
                  }
                  className="mentorPhoto"
                />
                <div>
                  <h3>Upload you profile photo here</h3>
                  <input
                    type="file"
                    name="mentorProfile"
                    className="mentorFormInput"
                    onChange={(e) => handleUploadImageChange(e)}
                    required
                  />
                </div>
              </div>
              <div>
                <label for="name">NAME</label>

                <input
                  type="text"
                  name="name"
                  className="mentorFormInput"
                  onChange={(e) => handleChange(e)}
                  placeholder="e.g. Peter Parker"
                  required
                  value={formData.name}
                />
              </div>
              <div>
                <label for="username">USERNAME</label>

                <input
                  type="text"
                  name="username"
                  className="mentorFormInput"
                  onChange={(e) => handleChange(e)}
                  placeholder="e.g. peter-parker12"
                  required
                  value={formData.username}
                />
              </div>
              <div>
                <label for="email">EMAIL</label>

                <input
                  type="text"
                  name="email"
                  className="mentorFormInput"
                  onChange={(e) => handleChange(e)}
                  placeholder="e.g. peterparker4321#gmail.com"
                  required
                  value={formData.email}
                />
              </div>
              <div>
                <label for="mobile">PHONE</label>

                <input
                  type="number"
                  name="mobile"
                  className="mentorFormInput"
                  onChange={(e) => handleChange(e)}
                  placeholder="0123456789"
                  required
                  value={formData.mobile}
                />
              </div>
              <div>
                <label for="internAt">INTERN</label>

                <input
                  type="text"
                  name="internAt"
                  className="mentorFormInput"
                  onChange={(e) => handleChange(e)}
                  placeholder="e.g. MITACS"
                  required
                  value={formData.internAt}
                />
              </div>
              <div>
                <label for="currentStatus">CURRENT STATUS</label>

                <input
                  type="text"
                  name="currentStatus"
                  className="mentorFormInput"
                  onChange={(e) => handleChange(e)}
                  placeholder="e.g. Amazon SDE-I"
                  required
                  value={formData.currentStatus}
                />
              </div>
              <div>
                <label for="linkedin">LINKEDIN</label>

                <input
                  type="text"
                  name="linkedin"
                  className="mentorFormInput"
                  onChange={(e) => handleSocialChange(e)}
                  placeholder="e.g. https://www.linkedin.com/peterparker"
                  required
                  value={formData.social.linkedin}
                />
              </div>
              <div>
                <label for="twitter">TWITTER</label>

                <input
                  type="text"
                  name="twitter"
                  className="mentorFormInput"
                  onChange={(e) => handleSocialChange(e)}
                  placeholder="e.g. https://www.twitter.com/peterparker"
                  required
                  value={formData.social.twitter}
                />
              </div>
              {/* <div>
            <label for="mentorProfile">RESUME/CV</label>
            <input
              type="file"
              name="mentorProfile"
              className="mentorFormInput"
              required
            />
          </div> */}
              <div style={{ gridColumn: "1/3" }}>
                <label for="description">DESCRIPTION</label>

                <textarea
                  cols="10"
                  rows="7"
                  name="description"
                  className="mentorFormInput"
                  onChange={(e) => handleChange(e)}
                  placeholder="I've done my Bacherlor's from IIT Delhi. I have been working as SDE-I for past 1 years at microsoft..."
                  required
                  value={formData.description}
                />
              </div>
              <div style={{ gridColumn: "1/3" }}>
                <label for="sessionPrice">SESSION PRICE</label>
                <input
                  type="text"
                  name="sessionPrice"
                  className="mentorFormInput"
                  onChange={(e) => handleChange(e)}
                  placeholder="e.g. $27"
                  required
                  value={formData.sessionPrice}
                />
              </div>
              {error && (
                <div style={{ color: "red", gridColumn: "1/3" }}>{error}</div>
              )}
              <hr
                style={{
                  margin: "10px 0",
                  borderColor: "grey",
                  gridColumn: "1/3",
                }}
              />
              {msg && (
                <div style={{ color: "green", gridColumn: "1/3" }}>{msg}</div>
              )}
              <div
                style={{ width: "fit-content", padding: "15px 25px" }}
                onClick={() => nextStep()}
                className="mentorFormButotn"
              >
                Next step
              </div>
              {/* End Step 1 */}
            </>
          ) : formStep === 2 ? (
            <>
              <h2>Setup your Book Sessions</h2>
              <ul
                className="bookSessions"
                style={{ gridColumn: "1/3", marginTop: "0" }}
              >
                {formData.bookSession.map((session, sessionIndex) => (
                  <li key={sessionIndex}>
                    <div className="bookSessionHeader">
                      <div>
                        <h2>{session.sessionName}</h2>
                        <p>
                          {session.sessionType} |{" "}
                          {session.sessionMeetingDuration}
                        </p>
                      </div>
                      <div>
                        <i
                          style={{
                            fontSize: "17px",
                            color: "gray",
                            cursor: "pointer",
                          }}
                          onClick={() => removeSession(sessionIndex)}
                          className="fas fa-trash-alt"
                        ></i>
                      </div>
                    </div>
                    <div
                      className="bookSessionIcons"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                      }}
                    >
                      {/* <div>
                        <i className="fas fa-phone"></i>
                        {session.peopleAttend}:1 call
                      </div> */}
                      <div>
                        <i className="far fa-clock"></i>
                        {session.sessionMeetingDuration} min
                      </div>
                      <div>
                        <i className="fas fa-rupee-sign"></i>
                        {session.priceSession}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div>
                <label for="sessionName">Book Session Name</label>
                <input
                  type="text"
                  value={bookSession.sessionName}
                  name="sessionName"
                  placeholder="eg. Mock Interview"
                  onChange={(e) =>
                    setBookSession({
                      ...bookSession,
                      sessionName: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label for="sessionType">Book Session Type</label>
                <input
                  type="text"
                  value={bookSession.sessionType}
                  name="sessionType"
                  placeholder="eg. Video Meeting"
                  onChange={(e) =>
                    setBookSession({
                      ...bookSession,
                      sessionType: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label for="sessionMeetingDuration">
                  Book Session Meeting Duration (Minutes)
                </label>
                <input
                  type="number"
                  value={bookSession.sessionMeetingDuration}
                  name="sessionMeetingDuration"
                  placeholder="eg. 45 min"
                  onChange={(e) =>
                    setBookSession({
                      ...bookSession,
                      sessionMeetingDuration: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                {/* <label for="peopleAttend">
                  peopleAttend many people will attend to meet
                </label> */}
                {/* <input
                  type="number"
                  value={bookSession.peopleAttend}
                  name="peopleAttend"
                  placeholder="eg. 2"
                  onChange={(e) =>
                    setBookSession({
                      ...bookSession,
                      peopleAttend: e.target.value,
                    })
                  }
                /> */}
              </div>
              <div style={{ gridColumn: "1/3" }}>
                <label for="priceSession">Price for each book session</label>
                <input
                  type="number"
                  value={bookSession.priceSession}
                  name="priceSession"
                  placeholder="eg. ₹500"
                  onChange={(e) =>
                    setBookSession({
                      ...bookSession,
                      priceSession: e.target.value,
                    })
                  }
                />
              </div>

              <div style={{ gridColumn: "1/3" }}>
                <div
                  style={{
                    cursor: "pointer",
                    border: "1px solid black",
                    backgroundColor: "white",
                    color: "black",
                    width: "fit-content",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                  onClick={() => addBookSession()}
                >
                  Add book session +
                </div>
              </div>
              {error && (
                <div style={{ color: "red", gridColumn: "1/3" }}>{error}</div>
              )}
              <hr
                style={{
                  margin: "10px 0",
                  borderColor: "grey",
                  gridColumn: "1/3",
                }}
              />
              {msg && (
                <div style={{ color: "green", gridColumn: "1/3" }}>{msg}</div>
              )}
<div style={{display: "flex", alignItems: "center", gap: "20px", flexDirection: "row", flexWrap: "wrap"}}>              <div
                style={{ width: "fit-content", padding: "15px 25px" }}
                onClick={() => previousStep()}
                className="mentorFormButotn"
              >
                Previous step
              </div>
              <button
                style={{ width: "fit-content", padding: "15px 25px" }}
                type="submit"
                className="mentorFormButotn"
              >
                Register
              </button></div>
            </>
          ) : null}
          <p>
            Already have mentor account? <a href="#">Login</a>
          </p>
          <p>
            Facing difficulties? <a href="/mentorRegisterSendCV">Send your CV/Resume to us!</a>
          </p>
          <p>
          <a href="#">Forgot password?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
