import React from "react";
import styles from "./GoogleBtn.module.css";
// import googleLogo from 'path-to-your-google-logo.png'; // Ensure you have a Google logo image in your project

const GoogleBtn = ({ onClick, text }) => {
  return (
    <button
      className={styles.loginWithGoogleBtn}
      type="button"
      onClick={onClick}
    >
      {/* <img src={googleLogo} alt="Google Logo" width="20" height="20" /> */}
      {text}
    </button>
  );
};

export default GoogleBtn;
