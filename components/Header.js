import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../styles/LoginDropdown.module.css";
import DropdownCard from "./LoginDropdown";

function Header({ isUserLoggedIn, navbarBackground }) {
  // localStorage.setItem('redirectUrl', window.location.href);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isMentorLoggedIn, setMentorLoggedIn] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [navbarAppear, setNavbarAppear] = useState(false);

  useEffect(() => {
    const userName = localStorage.getItem("user_name");
    if (userName) {
      setLoggedIn(true);
    }
    const mentorName = localStorage.getItem("mentor_name");
    if (mentorName) {
      setMentorLoggedIn(true);
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuToggle = () => {
    if (navbarAppear === true) {
      setNavbarAppear(false);
    } else {
      setNavbarAppear(true);
    }
  };

  return (
    <div className="header-area header-transparent">
      <div className="main-header ">
        <div
          className={`header-bottom  header-sticky ${
            scrollY > 400
              ? "sticky-bar"
              : navbarBackground === true
              ? "sticky-bar"
              : ""
          }`}
          style={{ transition: "all 0.5s ease-in" }}
        >
          <div className="container-fluid">
            <div className="row align-items-center justify-content-between">
              <div>
                <div className="logo">
                  <a href="/">
                    <Image
                      width={80}
                      height={80}
                      src="/whitelogo.png"
                      style={{ padding: "15px 0" }}
                      alt="grabtern_logo"
                    />
                  </a>
                </div>
              </div>
              <div className="col-xl-10 col-lg-10">
                <div className="menu-wrapper d-flex align-items-center justify-content-end">
                  <div
                    className={`main-menu d-none d-lg-block ${
                      navbarAppear === true ? "active" : ""
                    }`}
                  >
                    <nav>
                      <ul id="navigation" className="navigation">
                        <li className="active">
                          <a href="/" className={styles.navLink}>
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="/mentors" className={styles.navLink}>
                            Mentors
                          </a>
                        </li>
                        <li>
                          <a href="/contact" className={styles.navLink}>
                            Contact
                          </a>
                        </li>
                        <DropdownCard
                          isUserLoggedIn={isUserLoggedIn}
                          isMentorLoggedIn={isMentorLoggedIn}
                        />
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div
                className={`menuToggle ${
                  navbarAppear === true ? "active" : ""
                }`}
                onClick={() => menuToggle()}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
