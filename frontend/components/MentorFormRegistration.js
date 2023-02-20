import React, { useEffect, useState } from "react";
import axios from "axios";

import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";
export default function MentorForm() {
  const router = useRouter();
  const [modalPopup, setModalPopup] = useState(false);
  const [waitTime, setWaitTime] = useState(5);
  const [bookSession, setBookSession] = useState({
    sessionName: "1 on 1 Mentorship",
    sessionDescription: "Achieve your goals faster with customized road map",
    sessionType: "video-meeting",
    sessionMeetingDuration: "30",
    // peopleAttend: "",
    priceSession: "",
  })
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
    bookSession: [],
    description: "",
    mentorImg: "",
    // resume: '',
    password: `GrabternMentorPW!${number}!`,
    confirmPassword: `GrabternMentorPW!${number}!`,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  const handleUploadImageChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setFormData({ ...formData, mentorImg: base64 });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setFormData({...formData, bookSession: [bookSession]})
    // if (formData.bookSession.length !== 2) {
    //   return setError(
    //     "The number of book sessions must be more than 2 or equal to 2!"
    //   );
    // }
    try {
      console.log(formData);
      let headers = new Headers();
      headers.append(
        "Access-Control-Allow-Origin",
        process.env.NEXT_PUBLIC_FRONTEND_URL
      );
      headers.append("Access-Control-Allow-Credentials", "true");
      headers.append("Content-Type", "application/json");
      headers.append("Accept", "application/json");
      headers.append("Origin", process.env.NEXT_PUBLIC_FRONTEND_URL);
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorRegister`;
      const { data: res } = await axios.post(url, formData, {
        headers: headers,
      });
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
              you will receive an email with a link to instantly generate your
              card.
            </p>
            <img src="/iconMentorRegistrationPopup.jpg" />
            <p>Redirecting you to home in {waitTime} second</p>
          </div>
        </div>
      ) : null}
      <div className="container">
        <form className="mentorForm" onSubmit={handleSubmit}>
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
            <label for="priceSession">30min 1-1 SESSION PRICE</label>
            <input
              type="text"
              name="priceSession"
              className="mentorFormInput"
              onChange={(e) => setBookSession({...bookSession, priceSession: e.target.value})}
              placeholder="e.g. ₹100"
              required
              value={bookSession.priceSession}
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
          <button
            style={{ width: "fit-content", padding: "15px 25px" }}
            type="submit"
            className="mentorFormButotn"
          >
            Register
          </button>

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
