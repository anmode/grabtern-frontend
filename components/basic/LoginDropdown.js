import React, { useState, useEffect, useRef } from "react";
// import styles from "../styles/LoginDropdown.module.css";
import router from "next/router";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";
// import styles from "../../styles/LoginDropdown.module.css";
import { encryptData, decryptData } from "../../hook/encryptDecrypt";

const DropdownCard = () => {
  const [loginOption, setLoginOption] = useState(false);
  const {
    isMentorLoggedIn,
    setIsMentorLoggedIn,
    isUserLoggedIn,
    setIsUserLoggedIn,
  } = useAuth();

  const userData = decryptData(localStorage.getItem("userData"));
  const mentorData = decryptData(localStorage.getItem("mentorData"));
  const dropdownRef = useRef(null);

  const handleLoginClick = () => {
    setLoginOption(!loginOption);
  };

  const mentorlogout = () => {
    localStorage.clear();
    setIsMentorLoggedIn(false);
    router.push("/");
    window.location.reload();
  };

  const userlogout = () => {
    localStorage.clear();
    setIsUserLoggedIn(false);
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
    <div ref={dropdownRef}>
      {isUserLoggedIn || isMentorLoggedIn ? (
        <button onClick={handleLoginClick}>
          <img
            style={{
              width: "30px",
              height: "auto",
              marginRight: "10px",
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
          type="button"
          onClick={handleLoginClick}
          className="tw-text-white tw-mb-8 tw-bg-blue-700 hover:tw-bg-blue-600 focus:tw-ring-4 focus:tw-outline-none tw-font-medium tw-rounded-lg tw-text-md tw-px-3 tw-py-2 tw-text-center tw-mr-3 sm:tw-mb-0 md:tw-mr-5 dark:tw-bg-blue-700 dark:hover:tw-bg-blue-700 "
        >
          Sign Up
        </button>
      )}

      {loginOption && (
        <div>
          {isUserLoggedIn || isMentorLoggedIn ? (
            <div className="tw-relative md:tw-absolute md:tw-mt-5 md:tw-right-12 tw-top-full tw-border tw-border-gray-300 tw-py-3 tw-px-5 tw-rounded-lg tw-bg-white tw-flex tw-flex-col tw-gap-3 tw-justify-center tw-items-start">
              <Link
                href={isMentorLoggedIn ? "/dashboard" : "/"}
                className="tw-text-xl tw-p-2 tw-font-inter tw-text-gray-700 hover:tw-text-gray-500 tw-font-medium"
              >
                Dashboard
              </Link>
              <Link
                className="tw-text-xl tw-p-2 tw-font-inter tw-text-gray-700 hover:tw-text-gray-500 tw-font-medium"
                href="#"
                onClick={() => {
                  if (isMentorLoggedIn) {
                    mentorlogout();
                  } else {
                    userlogout();
                  }
                }}
              >
                Logout
              </Link>
            </div>
          ) : (
            <div className="tw-relative md:tw-absolute md:tw-mt-5 md:tw-right-12 tw-top-full tw-border tw-border-gray-300 tw-py-3 tw-px-5 tw-rounded-lg tw-bg-white tw-flex tw-flex-col tw-gap-3 tw-justify-center tw-items-start ">
              <Link
                href="/userAuth/"
                className="tw-text-xl tw-p-2 tw-font-inter tw-text-gray-700 hover:tw-text-gray-500 tw-font-medium "
              >
                User
              </Link>
              <Link
                href="/mentorLogin"
                className="tw-text-xl tw-p-2 tw-font-inter tw-text-gray-700 hover:tw-text-gray-500 tw-font-medium"
              >
                Mentor
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownCard;
