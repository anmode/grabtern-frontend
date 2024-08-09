import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import { mentorLogout, userLogout } from "../basic/logout";

const DropdownCard = () => {
  const [loginOption, setLoginOption] = useState(false);
  const {
    isMentorLoggedIn,
    setIsMentorLoggedIn,
    isUserLoggedIn,
    setIsUserLoggedIn,
  } = useAuth();

  const userData = JSON.parse(localStorage.getItem("userData"));
  const mentorData = JSON.parse(localStorage.getItem("mentorData"));
  const dropdownRef = useRef(null);

  const handleLoginClick = () => {
    setLoginOption(!loginOption);
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
                    mentorLogout(setIsMentorLoggedIn);
                  } else {
                    userLogout(setIsUserLoggedIn);
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
