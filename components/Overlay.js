import { useState, useEffect } from "react";
import React from "react";
import styles from "../styles/Overlay.module.css";
import Image from "next/image";
import jwt_decode from "jwt-decode";

const Overlay = ({ InitialFormState, setFormData }) => {
  const [show, setShow] = useState(true);
  const disappearOverlay = () => {
    setShow(false);
  };

  let number = Math.random(0 * 100);
  
  // call back response function
  function handleCallbackResponse(response) {
    var userObject = jwt_decode(response.credential);
    setFormData({
      ...InitialFormState,
      name: userObject.name,
      email: userObject.email,
      mentorImg: {
        name: userObject.name,
        image: userObject.picture,
      },
    });
    disappearOverlay();
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
  return (
    <div>
      {show && (
        <div className={`${styles.overlay} overlay`} onClick={disappearOverlay}>
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
