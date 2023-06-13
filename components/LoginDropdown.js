import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import styles from "../styles/LoginDropdown.module.css";

const DropdownCard = () => {
  const [loginOption, setLoginOption] = useState(false);
  const {
    isMentorLoggedIn,
    setIsMentorLoggedIn,
    isUserLoggedIn,
    setIsUserLoggedIn,
  } = useAuth();
  const dropdownRef = useRef(null);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const mentorData = JSON.parse(localStorage.getItem("mentorData"));
  const router = useRouter();

  const handleLoginClick = () => {
    if (isUserLoggedIn || isMentorLoggedIn) {
      setLoginOption(!loginOption);
    } else {
      setLoginOption(true);
    }
  };

  const mentorlogout = () => {
    localStorage.clear();
    setIsMentorLoggedIn(false);
    router.push("/");
  };

  const userlogout = () => {
    localStorage.clear();
    setIsUserLoggedIn(false);
    router.push("/");
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setLoginOption(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLoginOption(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <li>
      <div className={styles.loginOption} ref={dropdownRef}>
        {isUserLoggedIn || isMentorLoggedIn ? (
          <button onClick={handleLoginClick} className={styles.loginbutton}>
            <img
              style={{
                width: "35px",
                height: "auto",
                borderRadius: "50%",
                display: "inline",
              }}
              src={
                userData?.user_picture ||
                mentorData?.mentor_picture ||
                "assets/img/icon/no-profile-picture.webp"
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
            {isUserLoggedIn || isMentorLoggedIn ? (
              <>
                <button
                  className="login-buttons"
                  onClick={() => {
                    if (isMentorLoggedIn) {
                      router.push("/dashboard");
                    } else {
                      router.push("/");
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
                    setLoginOption(false);
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
                    router.push("/userAuth/#login");
                  }}
                >
                  User
                </button>
                <button
                  className="login-buttons"
                  onClick={() => {
                    router.push("/mentorLogin");
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
