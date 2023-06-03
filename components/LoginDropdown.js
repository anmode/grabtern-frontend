import React from "react";
import styles from "../styles/LoginDropdown.module.css";
import router from "next/router";
import { useState } from "react";

const DropdownCard = ({ isUserLoggedIn }) => {
  const [loginOption, setLoginOption] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isMentorLoggedIn, setMentorLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setLoginOption(!loginOption);
  };

  const mentorlogout = () => {
    localStorage.clear();
    setMentorLoggedIn(false);
    router.push("/");
    window.location.reload();
  };

  const userlogout = () => {
    localStorage.clear();
    setLoggedIn(false);
    router.push("/");
    window.location.reload();
  };

  return (
    <li>
      <div className={styles.loginOption}>
        {isLoggedIn || isUserLoggedIn || isMentorLoggedIn ? (
          <button onClick={handleLoginClick} className={styles.userName}>
            <img
              style={{
                width: "35px",
                height: "auto",
                borderRadius: "50%",
              }}
              src={
                localStorage.getItem("user_picture") ||
                localStorage.getItem("mentor_picture") ||
                "assets/img/icon/no-profile-picture.png"
              }
              alt="not found"
            />
          </button>
        ) : (
          <button
            className={styles.loginbutton}
            onClick={handleLoginClick}
          >
            Login
          </button>
        )}

        {loginOption && (
          <div className="login-optionslist">
            {isLoggedIn || isUserLoggedIn || isMentorLoggedIn ? (
              <>
                <button
                  className="login-buttons"
                  // style={{ marginTop: "20px" }}
                  onClick={() => {
                    if (isMentorLoggedIn) {
                      window.location.href = `/dashboard`;
                    } else {
                      window.location.href = `/`;
                    }
                  }}
                >
                  Dashboard
                </button>
                <button
                  className="login-buttons"
                  onClick={() => {
                    if (isMentorLoggedIn) {
                      mentorlogout();
                    } else {
                      userlogout();
                    }
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button className="login-buttons" onClick={() => {
                      window.location.href = `/login`;
                  }}
                  >
                  User
                </button>
                <button className="login-buttons" onClick={() => {
                      window.location.href = `/mentorLogin`;
                  }}>
                  Mentor
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </li>
  );
};

export default DropdownCard;
