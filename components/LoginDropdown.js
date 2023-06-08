import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/LoginDropdown.module.css";
import router from "next/router";

const DropdownCard = ({ isUserLoggedIn }) => {
  const [loginOption, setLoginOption] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isMentorLoggedIn, setMentorLoggedIn] = useState(false);
  const dropdownRef = useRef(null);

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

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setLoginOption(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <li>
      <div className={styles.loginOption} ref={dropdownRef}>
        {isLoggedIn || isUserLoggedIn || isMentorLoggedIn ? (
          <button onClick={handleLoginClick} className={styles.loginbutton}>
            <img
              style={{
                width: "35px",
                height: "auto",
                borderRadius: "50%",
                display: "inline",
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
            style={{ color: "white" }}
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
                <button
                  className="login-buttons"
                  onClick={() => {
                    window.location.href = `/userAuth/`;
                  }}
                >
                  User
                </button>
                <button
                  className="login-buttons"
                  onClick={() => {
                    window.location.href = `/mentorLogin`;
                  }}
                >
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
