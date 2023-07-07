"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// import DropdownCard from "./LoginDropdown";
// import { AiOutlineSearch } from "react-icons/ai";
import { SunIcon } from "@heroicons/react/24/solid";
import logo from "../../public/logo.png";
import { useAuth } from "../../context/AuthContext";

function Header() {
  const {
    isMentorLoggedIn,
    setIsMentorLoggedIn,
    isUserLoggedIn,
    setIsUserLoggedIn,
  } = useAuth();
  const userData = JSON.parse(localStorage.getItem("userData"));
  const mentorData = JSON.parse(localStorage.getItem("mentorData"));
  const [scrollY, setScrollY] = useState(0);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [searchText, setSearchText] = useState("");
  const dropdownRef = useRef();

  useEffect(() => {
    if (userData?.user_name) {
      setIsUserLoggedIn(true);
    }

    if (mentorData?.mentor_name) {
      setIsMentorLoggedIn(true);
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

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setToggleDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <nav
      className={
        scrollY
          ? "tw-flex tw-justify-between tw-items-center tw-mb-0 tw-bg-white tw-fixed tw-w-full tw-z-20 tw-top-0 tw-left-0 tw-text-black dark:tw-bg-muted-900 tw-shadow-lg tw-shadow-muted-300/30 dark:tw-shadow-muted-900/40 tw-transition-all tw-duration-300"
          : "tw-flex tw-justify-between tw-items-center tw-mb-0 tw-bg-muted-100 tw-transition-all tw-duration-300 tw-fixed tw-w-full tw-z-20 tw-top-0 tw-left-0 dark:tw-bg-muted-900 tw-shadow-lg tw-shadow-muted-300/30 dark:tw-shadow-muted-900/40 tw-text-black"
      }
    >
      <Link
        href="/"
        className="tw-flex tw-gap-2 tw-justify-center tw-items-center"
      >
        <Image
          src={logo}
          alt="grabtern_logo"
          width={85}
          height={85}
          className="tw-ml-2 tw-cursor-pointer tw-object-contain"
        />
      </Link>

      {/* <div className="tw-flex tw-justify-center tw-items-center tw-ml-2">
        <AiOutlineSearch className="tw-text-gray-500 tw-mx-0.5 tw-cursor-pointer" />
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="tw-px-5 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg tw-ml-2 focus:tw-outline-none"
        />
      </div> */}

      {/* For Desktop Navigation*/}
      <div className="sm:tw-flex tw-hidden">
        <div className="tw-flex tw-gap-3 tw-justify-between tw-items-center md:tw-gap-5 tw-cursor-pointer">
          <Link href="/" className="hover:tw-text-blue-800">
            Home
          </Link>
          <Link href="/mentors" className="hover:tw-text-blue-800">
            Mentor
          </Link>
          <Link href="/contact" className="hover:tw-text-blue-800">
            Contact
          </Link>
          <Link href="/" className="hover:tw-text-blue-800">
            Sign In
          </Link>

          {/* <DarkModeToggle /> */}
          <SunIcon className="tw-h-9 tw-bg-white tw-rounded-2xl tw-px-0.5 tw-w-9 tw-text-yellow-400 tw-cursor-pointer" />

          {/* <DropdownCard
            isUserLoggedIn={isUserLoggedIn}
            isMentorLoggedIn={isMentorLoggedIn}
          /> */}

          <button
            type="button"
            onClick=""
            className="tw-text-white tw-mb-8 tw-bg-blue-700 hover:tw-bg-blue-600 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-white tw-font-medium tw-rounded-xl tw-text-md tw-px-3 tw-py-2 tw-text-center tw-mr-3 sm:tw-mb-0 md:tw-mr-5 dark:tw-bg-blue-700 dark:hover:tw-bg-blue-700 dark:focus:tw-ring-blue-100"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* For Mobile Navigation */}
      <div className="sm:tw-hidden tw-flex tw-relative" ref={dropdownRef}>
        <div className="tw-flex">
          <div
            className="tw-text-3xl tw-font-light tw-mx-2 cursor-pointer tw-text-blue-700"
            onClick={() => {
              setToggleDropdown((prev) => !prev);
            }}
          >
            <ion-icon name={toggleDropdown ? "close" : "menu"}></ion-icon>
          </div>
          {toggleDropdown && (
            <div className="tw-absolute tw-right-0 tw-top-full tw-mt-0 tw-w-full tw-p-6 tw-rounded-lg tw-bg-white dark:tw-bg-slate-600 dark:tw-text-white tw-min-w-[100vw] tw-flex tw-flex-col tw-gap-5 tw-justify-center tw-items-center tw-text-sm tw-font-semibold tw-pb-5">
              <Link
                href="/"
                className="tw-text-xl tw-p-2 tw-font-inter tw-text-gray-700 hover:tw-text-gray-500 tw-font-medium"
              >
                Home
              </Link>
              <Link
                href="/mentors"
                className="tw-text-xl tw-p-2 tw-font-inter tw-text-gray-700 hover:tw-text-gray-500 tw-font-medium"
              >
                Mentor
              </Link>
              <Link
                href="/contact"
                className="tw-text-xl tw-p-2 tw-font-inter tw-text-gray-700 hover:tw-text-gray-500 tw-font-medium"
              >
                Contact
              </Link>

              <Link
                href="/"
                className="tw-text-xl tw-p-2 tw-font-inter tw-text-gray-700 hover:tw-text-gray-500 tw-font-medium"
              >
                Sign In
              </Link>
              <SunIcon className="tw-h-10 tw-bg-white tw-rounded-2xl tw-px-0.5 tw-w-9 tw-text-yellow-400 tw-cursor-pointer" />
              <button
                type="button"
                onClick=""
                className=" tw-w-full tw-rounded-lg tw-border tw-border-blue-600 tw-bg-blue-600 tw-py-3 tw-text-white tw-transition-all hover:tw-bg-white hover:tw-text-black tw-text-center tw-text-md tw-font-inter tw-flex tw-items-center tw-justify-center"
              >
                Signup
              </button>

              {/* <DropdownCard
                isUserLoggedIn={isUserLoggedIn}
                isMentorLoggedIn={isMentorLoggedIn}
              /> */}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
