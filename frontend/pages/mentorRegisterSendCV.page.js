import React, { useState, useEffect } from "react";
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('../components/Header'))
const Footer = dynamic(() => import('../components/Footer'))
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";
function mentorRegisterSendCV() {
  const router = useRouter();
  const [modalPopup, setModalPopup] = useState(false);
  const [waitTime, setWaitTime] = useState(5);
  const [formData, setFormData] = useState({
    email: "",
    cvResume: "",
  });

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (fileBase64) => {
    let fileData = new FormData();
    fileData.append("file", fileBase64);
    const templateParams = {
      mentorName: formData.email,
      message: `Hi new mentor want register from email: ${formData.email}
                    <br />And here is his resume/cv: ${formData.cvResume}`,
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    sendEmail();
  };
  return (
    <>
      <Header navbarBackground={true} />
      <main>
        <div className="mentorFormRegisration">
          {modalPopup === true ? (
            <div className="modalPopup">
              <div className="modalPopupAfterRegistrationDone">
                <p>
                  Thank you for Send your CV/Resume you will be recevied an email 1-2
                  days if you got accepted and your card will be generated automatically
                </p>
                <img src="/iconMentorRegistrationPopup.jpg" />
                <p>Redirecting you to home in {waitTime} second</p>
              </div>
            </div>
          ) : null}
          <div className="container">
            <form className="mentorForm" onSubmit={handleSubmit}>
              <div>
                <label for="email">EMAIL</label>

                <input
                  type="email"
                  name="email"
                  className="mentorFormInput"
                  onChange={(e) => handleChange(e)}
                  placeholder="e.g. peterparker@gmail.com"
                  required
                  value={formData.email}
                />
              </div>
              <div>
                <label for="cvResume">Put your CV/Resume Link File Here</label>

                <input
                  type="text"
                  name="cvResume"
                  className="mentorFormInput"
                  onChange={(e) => handleChange(e)}
                  value={formData.cvResume}
                  placeholder="e.g. https://drive.google.com/file/d/1rAC5M.../view?usp=sharing"
                />
              </div>
              <button
                type="submit"
                className="mentorFormButotn"
                style={{ width: "fit-content", padding: "15px 25px" }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default mentorRegisterSendCV;
