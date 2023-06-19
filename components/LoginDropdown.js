import React, { useState, useEffect, useRef } from "react";
// import styles from "../styles/LoginDropdown.module.css";
import router from "next/router";
import Link from "next/link";

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

    <div ref={dropdownRef}>
        {isLoggedIn || isUserLoggedIn || isMentorLoggedIn ? (
          <button onClick={handleLoginClick} >
            <img
              style={{
                width: "30px",
                height: "auto",
                marginRight: '10px',
                borderRadius: "50%",
                display: "inline",
              }}
              src={
                localStorage.getItem("user_picture") ||
                localStorage.getItem("mentor_picture") ||
                "assets/img/icon/no-profile-picture.webp"
              }
              alt="not found"
            />
          </button>
        ) : (
         
          <button
            type="button"
            onClick={handleLoginClick}
            className="text-white bg-blue-700 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-md px-3 py-2 text-center mr-3 md:mr-0 dark:bg-blue-700 dark:hover:bg-blue-700 dark:focus:ring-blue-100"
            
          >
            Sign In
          </button>

        )}


        {loginOption && (
          <div
        >
            {isLoggedIn || isUserLoggedIn || isMentorLoggedIn ? (
              <div className="absolute mt-4 right-12 top-full border border-gray-700 py-3 px-5 rounded-lg bg-white flex flex-col gap-3 justify-end items-start">
                <Link
                href={isMentorLoggedIn ? '/dashboard' : '/'}
                className="text-xl p-2 font-inter text-gray-700 hover:text-gray-500 font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  className="text-xl p-2 font-inter text-gray-700 hover:text-gray-500 font-medium"
                  href='#'
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
              <div className="absolute mt-4 right-12 top-full border border-gray-700 py-3 px-5 rounded-lg bg-white flex flex-col gap-3 justify-end items-start ">
                <Link
                href="/userAuth/"
                className="text-xl p-2 font-inter text-gray-700 hover:text-gray-500 font-medium "
              >
                User
              </Link>
              <Link
                href="/mentorLogin"
                className="text-xl p-2 font-inter text-gray-700 hover:text-gray-500 font-medium"
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
