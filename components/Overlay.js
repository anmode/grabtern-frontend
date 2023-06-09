import { useState, useEffect } from "react";
import React from "react";
import styles from "../styles/Overlay.module.css";
import Image from "next/image";
import jwt_decode from "jwt-decode";

const Overlay = () => {
  const [show, setShow] = useState(true);
  const disappearOverlay = () => {
    setShow(false);
  };

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

  function handleCallbackResponse(response) {
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
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
        // if (document.querySelector("#credential_picker_container") !== null) {
        //    document.querySelector(".overlay").classList.add("show");
        // }
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
  return (
    <div>
      {show && (
        <div className={styles.overlay} onClick={disappearOverlay}>
          <Image
            className={styles.overlayArrow}
            src="/Arrow.svg"
            width={500}
            height={500}
          />
          <div className={styles.overlayText}>
            <h1>Sign In</h1>
            <p>Please select an account to continue using Grabtern</p>
            <p>By logging in you agree to the Terms & Conditions</p>
            <ul>
              <li>
                <p>Privacy Policy</p>
              </li>
              <li>
                <p>Terms & Conditions</p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Overlay;
