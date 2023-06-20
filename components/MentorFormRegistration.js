import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

import { useRouter } from "next/router";
import Overlay from "./Overlay";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MentorForm() {
  const router = useRouter();
  //const [modalPopup, setModalPopup] = useState(false);
  // const [waitTime, setWaitTime] = useState(5);
  const [isChecked, setIsChecked] = useState(false);
  const [addtoast, setaddToast] = useState(false);
  const [step, setStep] = useState(1);
  const [bookSession, setBookSession] = useState({
    sessionName: "1 on 1 Mentorship",
    sessionDescription: "Achieve your goals faster with customized road map",
    sessionType: "video-meeting",
    sessionMeetingDuration: "30",
    // peopleAttend: "",
    priceSession: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  let number = Math.random(0 * 100);
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
    bookSession: [
      {
        sessionName: "1 on 1 Mentorship",
        sessionDescription:
          "Achieve your goals faster with customized road map",
        sessionType: "video-meeting",
        sessionMeetingDuration: "30",
        datePicker: [],
        datePickerTimezone: "",
        // peopleAttend: "",
        priceSession: "",
      },
    ],
    description: "",
    mentorImg: "",
    // resume: '',
    password: `GrabternMentorPW!${number}!`,
    confirmPassword: `GrabternMentorPW!${number}!`,
    verified: false,
  });

  const handleChange = (e) => {
    console.log(formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSocialChange = (e) => {
    setFormData({
      ...formData,
      social: { ...formData.social, [e.target.name]: e.target.value },
    });
  };

  const handleAddSession = () => {
    let bookSessionCopy = formData.bookSession[0];
    let dayVal = document.querySelector("#dayDatePicker").value;
    let timeVal = document.querySelector(
      "#__next > main > div > div.container > form > div:nth-child(2) > input"
    ).value;
    let AMPMVal = document.querySelector("#AMPM").value;
    if (dayVal.length < 3 || timeVal.length < 3) {
      return alert("Day and Time input must field more than 3 chracters");
    }
    if (dayVal === "Select a day") {
      return alert("Day must be field");
    }
    if (AMPMVal === "Select AM/PM") {
      return alert("AM or PM dropdown must be field");
    }
    bookSessionCopy.datePicker.push({
      day: dayVal,
      time: `${timeVal} ${AMPMVal}`,
    });

    setFormData({
      ...formData,
      datePicker: bookSessionCopy,
    });
    console.log(formData);
  };
  const handleDeleteSession = (index) => {
    let bookSessionCopy = formData.bookSession[0];
    bookSessionCopy.datePicker.splice(index, 1);
    setFormData({
      ...formData,
      datePicker: bookSessionCopy,
    });
    console.log(formData);
  };

  function handleCallbackResponse(response) {
    var userObject = jwt_decode(response.credential);
    // console.log(userObject);
    setFormData({
      name: userObject.name,
      email: userObject.email,
      username: "",
      mobile: "",
      internAt: "",
      currentStatus: "",
      social: {
        linkedin: "",
        twitter: "",
      },
      bookSession: [
        {
          sessionName: "1 on 1 Mentorship",
          sessionDescription:
            "Achieve your goals faster with customized road map",
          sessionType: "video-meeting",
          sessionMeetingDuration: "30",
          // peopleAttend: "",
          priceSession: "",
        },
      ],
      description: "",
      mentorImg: userObject.picture,
      // resume: '',
      password: `GrabternMentorPW!${number}!`,
      confirmPassword: `GrabternMentorPW!${number}!`,
      verified: false,
    });
    console.log(formData);
  }

  useEffect(() => {
    setInterval(() => {
      if (typeof window !== "undefined") {
        if (document.querySelector("#credential_picker_container") !== null) {
          document.querySelector(".overlay").classList.add("show");
        }
      }
    }, 1300);

    google.accounts.id.initialize({
      client_id:
        "1094459761-kbb3qbgafu8avkgfe9fk8f85fr5418a8.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById("googleSignInButton"),
      { theme: "outline", size: "large" }
    );
    google.accounts.id.prompt();
  }, []);

  // useEffect(() => {
  //   if (addtoast === true && waitTime !== 0) {
  //     setTimeout(() => {
  //       setWaitTime((value) => (value -= 1));
  //     }, 1000);
  //   }
  //   if (waitTime === 0) {
  //     router.push("/");
  //   }
  // });

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

  const handleUploadImageChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setFormData({ ...formData, mentorImg: base64 });
  };

  const handleSessionPriceChange = (e) => {
    let bookSessionCopy = formData.bookSession[0];
    bookSessionCopy.priceSession = e.target.value;
    setFormData({
      ...formData,
      bookSession: [bookSessionCopy],
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    // if (formData.bookSession.length !== 2) {
    //   return setError(
    //     "The number of book sessions must be more than 2 or equal to 2!"
    //   );
    // }
    if (isChecked) {
      // Register mentor
      try {
        // console.log(formData);
        setIsLoading(true);
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorRegister`;
        console.log(error);
        const { data: res } = await axios.post(url, formData);
        console.log(res);
        setIsLoading(false);
        //setModalPopup(true);
        setaddToast(true);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          toast.error(error.response.data.message);
        }
      }
    } else {
      toast.error("Please agree to the terms before submitting");
    }
  };

  function hideitems(className) {
    document.querySelector(className).style.display = "none";
  }

  function updateTime() {
    var timezone = document.getElementById("timezone").value;
    let bookSessionCopy = formData.bookSession[0];
    bookSessionCopy.datePickerTimezone = timezone;
    setFormData({
      ...formData,
      bookSession: [bookSessionCopy],
    });
  }

  return (
    <div className="mentorFormRegisration">
      <div className="overlay" onClick={() => hideitems(".overlay")}></div>
      {/* {modalPopup === true ? (
        <div className="modalPopup">
          <div className="modalPopupAfterRegistrationDone">
            <p>
              Thank you for registering. Within one to two days of verification,
              you will receive an email with a link to instantly generate your
              card.
            </p>
            <img src="/iconMentorRegistrationPopup.webp" />
            <p>Redirecting you to home in {waitTime} second</p>
          </div>
        </div>
      ) : null} */}
      {addtoast === true ? toast.success("Registered successfully") : null}
      <div className="container">
        <img
          src="/assets/img/vector_images/vector-registration.svg"
          alt="vector image"
        />
        <form className="mentorForm" onSubmit={handleSubmit}>
          {step === 1 ? (
            <>
              <div style={{ gridColumn: "1/3" }}>
                <div id="googleSignInButton"></div>
              </div>
              <div style={{ gridColumn: "1/3" }} className="mentorUploudPhoto">
                <img
                  src={
                    formData.mentorImg.length === 0
                      ? "/assets/img/icon/no-profile-picture.webp"
                      : formData.mentorImg
                  }
                  className="mentorPhoto"
                />
                <div>
                  <h3>
                    {formData.mentorImg.length > 0
                      ? "Change your profile image"
                      : "Upload you profile photo here"}
                  </h3>
                  {formData.mentorImg.length > 0 ? (
                    <input
                      type="file"
                      name="mentorProfile"
                      className="mentorFormInput"
                      onChange={(e) => handleUploadImageChange(e)}
                    />
                  ) : (
                    <input
                      type="file"
                      name="mentorProfile"
                      className="mentorFormInput"
                      onChange={(e) => handleUploadImageChange(e)}
                      required
                    />
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="name">NAME</label>

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
                <label htmlFor="username">USERNAME</label>

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
                <label htmlFor="email">EMAIL</label>

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
                <label htmlFor="mobile">PHONE</label>

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
                <label htmlFor="internAt">INTERN</label>

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
                <label htmlFor="currentStatus">CURRENT STATUS</label>

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
                <label htmlFor="linkedin">LINKEDIN</label>

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
                <label htmlFor="twitter">TWITTER</label>

                <input
                  type="text"
                  name="twitter"
                  className="mentorFormInput"
                  onChange={(e) => handleSocialChange(e)}
                  placeholder="e.g. https://www.twitter.com/peterparker"
                  value={formData.social.twitter}
                />
              </div>
              <div style={{ gridColumn: "1/3" }}>
                <label htmlFor="description">DESCRIPTION</label>

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
              <button
                style={{ width: "fit-content", padding: "15px 25px" }}
                className="mentorFormButotn"
                onClick={() => setStep(2)}
              >
                Next
              </button>
            </>
          ) : (
            <>
              <div>
                <label htmlFor="priceSession">
                  Book session Date picker day
                </label>
                <select id="dayDatePicker" className="mentorFormInput">
                  <option value="">Select a day</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
              </div>
              <div>
                <label htmlFor="priceSession">
                  Book session Date picker time
                </label>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "65% 35%",
                  }}
                >
                  <input
                    type="text"
                    name="priceSession"
                    className="mentorFormInput"
                    placeholder="e.g. 11:05"
                    value={formData.bookSession[0].datePicker.time}
                  />
                  <select id="AMPM">
                    <option value="">Select AM/PM</option>
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="priceSession">
                  Book session Date picker timezone
                </label>
                <select id="timezone" onChange={() => updateTime()}>
                  <option value="(GMT-11:00) Pacific/Midway">
                    (GMT-11:00) Pacific/Midway
                  </option>
                  <option value="(GMT-11:00) Pacific/Niue">
                    (GMT-11:00) Pacific/Niue
                  </option>
                  <option value="(GMT-11:00) Pacific/Pago_Pago">
                    (GMT-11:00) Pacific/Pago_Pago
                  </option>
                  <option value="(GMT-10:00) Pacific/Honolulu">
                    (GMT-10:00) Pacific/Honolulu
                  </option>
                  <option value="(GMT-09:00) America/Anchorage">
                    (GMT-09:00) America/Anchorage
                  </option>
                  <option value="(GMT-08:00) America/Los_Angeles">
                    (GMT-08:00) America/Los_Angeles
                  </option>
                  <option value="(GMT-07:00) America/Denver">
                    (GMT-07:00) America/Denver
                  </option>
                  <option value="(GMT-06:00) America/Chicago">
                    (GMT-06:00) America/Chicago
                  </option>
                  <option value="(GMT-05:00) America/New_York">
                    (GMT-05:00) America/New_York
                  </option>
                  <option value="(GMT-04:00) America/Caracas">
                    (GMT-04:00) America/Caracas
                  </option>
                  <option value="(GMT-03:00) America/Buenos_Aires">
                    (GMT-03:00) America/Buenos_Aires
                  </option>
                  <option value="(GMT-02:00) Atlantic/South_Georgia">
                    (GMT-02:00) Atlantic/South_Georgia
                  </option>
                  <option value="(GMT-01:00) Atlantic/Azores">
                    (GMT-01:00) Atlantic/Azores
                  </option>
                  <option value="(GMT+00:00) Europe/London">
                    (GMT+00:00) Europe/London
                  </option>
                  <option value="(GMT+01:00) Europe/Paris">
                    (GMT+01:00) Europe/Paris
                  </option>
                  <option value="(GMT+02:00) Africa/Johannesburg">
                    (GMT+02:00) Africa/Johannesburg
                  </option>
                  <option value="(GMT+04:00) Asia/Dubai">
                    (GMT+04:00) Asia/Dubai
                  </option>
                  <option value="(GMT+05:30) Asia/Kolkata">
                    (GMT+05:30) Asia/Kolkata
                  </option>
                  <option value="(GMT+07:00) Asia/Jakarta">
                    (GMT+07:00) Asia/Jakarta
                  </option>
                  <option value="(GMT+09:00) Asia/Tokyo">
                    (GMT+09:00) Asia/Tokyo
                  </option>
                  <option value="(GMT+10:00) Australia/Sydney">
                    (GMT+10:00) Australia/Sydney
                  </option>
                  <option value="(GMT+11:00) Pacific/Noumea">
                    (GMT+11:00) Pacific/Noumea
                  </option>
                  <option value="(GMT+12:00) Pacific/Auckland">
                    (GMT+12:00) Pacific/Auckland
                  </option>
                </select>
              </div>
              <div style={{ gridColumn: "1/3" }}>
                <div
                  style={{
                    width: "fit-content",
                    padding: "10px 20px",
                    fontSize: "15px",
                  }}
                  className="mentorFormButotn"
                  onClick={handleAddSession}
                >
                  Add date
                </div>
              </div>
              <div
                style={{
                  gridColumn: "1/3",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  flexDirection: "row",
                }}
              >
                {formData.bookSession[0].datePicker.map((session, index) => (
                  <div
                    key={index}
                    style={{
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      padding: "10px",
                      marginBottom: "10px",
                      width: "fit-content",
                    }}
                  >
                    <p>Date: {session.day}</p>
                    <p>Time: {session.time}</p>
                    <button
                      onClick={() => handleDeleteSession(index)}
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        padding: "5px",
                        borderRadius: "5px",
                        marginTop: "10px",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>

              <div style={{ gridColumn: "1/3" }}>
                <label htmlFor="priceSession">30min 1-1 SESSION PRICE</label>
                <input
                  type="text"
                  name="priceSession"
                  className="mentorFormInput"
                  onChange={(e) => handleSessionPriceChange(e)}
                  placeholder="e.g. ₹51"
                  required
                  value={formData.bookSession[0].priceSession}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  flexDirection: "row",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    flexDirection: "row",
                  }}
                >
                  <div
                    style={{ width: "fit-content", padding: "15px 25px" }}
                    className="mentorFormButotn"
                    onClick={() => setStep(1)}
                  >
                    Previous
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    flexDirection: "row",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "2rem",
                    }}
                  >
                    <button
                      style={{ width: "fit-content", padding: "15px 25px" }}
                      type="submit"
                      className="mentorFormButotn"
                      onClick={addtoast}
                    >
                      Register
                    </button>
                    <ToastContainer />
                    <div>
                      {isLoading && (
                        <img
                          style={{ width: "50px", height: "50px" }}
                          src="/assets/img/gif/Spinner.gif"
                          alt="...jljk"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {error && (
            <div style={{ color: "red", gridColumn: "1/3" }}>
              Error: {error}
            </div>
          )}
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            &nbsp;We will take 11% of your session price as platform fee. So
            according to it keep your session price. Thank you!
          </label>
          {msg && (
            <div style={{ color: "green", gridColumn: "1/3" }}>{msg}</div>
          )}
          <p>
            Already have mentor account? <a href="/mentorLogin">Login</a>
          </p>
          <p>
            Facing difficulties?{" "}
            <a href="/mentorRegisterSendCV">Send your CV/Resume to us!</a>
          </p>
        </form>
      </div>
    </div>
  );
}
