import React, { useState,useEffect } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/Header"));
const Footer = dynamic(() => import("../components/Footer"));
import axios from "axios";
import jwt_decode from "jwt-decode";
import emailjs from "@emailjs/browser";
// import GoogleSignInButton from './googleSign';

function beMentor() {
  let number = Math.random(0 * 100);
  const [formData, setFormData] = useState({
    name: "N/A",
    email: "N/A",
    username: "N/A",
    mobile: "N/A",
    internAt: "N/A",
    currentStatus: "N/A",
    social: {
      linkedin: "N/A",
      twitter: "N/A",
    },
    bookSession: [{
      sessionName: "1 on 1 Mentorship",
      sessionDescription: "Achieve your goals faster with customized road map",
      sessionType: "video-meeting",
      sessionMeetingDuration: "30",
      // peopleAttend: "",
      priceSession: "N/A",
    }],
    description: "N/A",
    mentorImg: "N/A",
    // resume: '',
    password: `GrabternMentorPW!${number}!`,
    confirmPassword: `GrabternMentorPW!${number}!`,
    verified: false,
  });

//   const makeCard = async ()=>{

//     try{

//       const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorRegister`;
//   const res  = await axios.post(url, formData)
//     }
// catch{
//   console.log("error while posting mentor data")
// }
//   }

  const handleCallBackResponse = (response) => {
    console.log("Encoded JWT ID token " + response.credential);
    const mentorObject = jwt_decode(response.credential);
    console.log(mentorObject);
    const {name, email, picture}=mentorObject;
    // console.log(name,email, mentorImg)
    setFormData({...formData, name:name, email:email, mentorImg:picture,username:name});
    console.log("form data: ", formData)
  };
  useEffect(() => {
    console.log("form data updated: ", formData);

  }, [formData]);
  
  useEffect(() => {
    // global google
    google.accounts.id.initialize({
      client_id:
      "587921623953-23fr6m7muhh45pf3j36rvi0lvmfse4aj.apps.googleusercontent.com",
      callback: handleCallBackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });

    google.accounts.id.prompt();
  }, []);
  const [error, setError] = useState("");
  const [showTerms, setShowTerms] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit =async (event) => {
    event.preventDefault();

    // const mentorData = event.target.value;
    // if (!formData.agreeToTerms) {
    //   setError("You must agree to the Terms and Conditions");
    // } else {
    //   // submit the form data

    // }

    try{
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorRegister`;
  const {data:res}  = await axios.post(url, formData);
  sendEmail(res.mentorVerifyLink);
    }
catch{
  console.log("error while posting mentor data")
    
  };
  }
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
    console.log("template params",templateParams);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_MENTOR_REGISTRATION_KEY,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          alert("Cannot send your message sorry!");
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Header navbarBackground={true} />
      <main>
        <div className="mentorFormRegisration">
          <div className="formContainer ">
            <form className="mentorFormw" onSubmit={handleSubmit}>
              <h2 className="formTitle">Intern Application</h2>
              <div className="formGroup">
                <label htmlFor="internAt">Intern at</label>
                <input
                  type="text"
                  name="internAt"
                  className="FormInput"
                  onChange={handleChange}
                  placeholder="e.g. ABC Company"
                  required
                  value={formData.internAt}
                />
              </div>
              <div className="formGroup">
                <label htmlFor="sessionPrice">Session Price</label>
                <input
                  type="text"
                  name="sessionPrice"
                  className="FormInput"
                  onChange={handleChange}
                  value={formData.sessionPrice}
                  placeholder="e.g. $50"
                />
              </div>
              {/* <div className="formGroup">
                <label htmlFor="agreeToTerms">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    onChange={handleCheckboxChange}
                    checked={formData.agreeToTerms}
                  />
                  &nbsp;I agree to the&nbsp;
                  <a href="#" onClick={() => setShowTerms(true)}>
                    Terms and Conditions
                  </a>
                </label>
              </div> */}
              {error && <div className="formError">{error}</div>}
              <button type="submit" className="formButton">
                Continue Filling Form
              </button>
              <div className="formOr">or</div>
              <div id="signInDiv"></div>
              {/* <button
                type="button"
                className="formButton"
                style={{ backgroundColor: "#de5246", color: "#fff" }}
              >
                Sign Up with Google
              </button> */}
            {formData.name!=""&& <button type="submit" onClick={handleSubmit}>Continue</button> }
            </form>
          </div>
        </div>
      </main>
      <Footer />
      {showTerms && (
        <div className="termsPopup">
          <div className="terms">
            <div className="termsPopupContent">
              <button
                className="closeButton"
                onClick={() => setShowTerms(false)}
              >
                &times;
              </button>
              <h2 className="popupTitle">Terms and Conditions</h2>
              <p className="popupText">hello there</p>
              <p className="popupText">How are you!</p>
              <div className="popupCheckbox">
                <input
                  type="checkbox"
                  id="agreeToPopupTerms"
                  name="agreeToPopupTerms"
                  onChange={() => setShowTerms(false)}
                />
                <label htmlFor="agreeToPopupTerms">
                  I agree to the Terms and Conditions
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
      ;
    </>
  );
}

export default beMentor;
