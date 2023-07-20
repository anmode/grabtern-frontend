"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
// import DropdownCard from "./LoginDropdown";
// import { AiOutlineSearch } from "react-icons/ai";
import UserProfile from "./UserProfile";
import { SunIcon } from "@heroicons/react/24/solid";
import logo from "../../public/logo.png";
import { useAuth } from "../../context/AuthContext";
import { ButtonLink } from "../UI";
import clsx from "clsx";
import { encryptData, decryptData } from "../../hook/encryptDecrypt";

function Header() {
  const {
    isMentorLoggedIn,
    setIsMentorLoggedIn,
    isUserLoggedIn,
    setIsUserLoggedIn,
  } = useAuth();
  const userData = decryptData(localStorage.getItem("userData"));
  const mentorData = decryptData(localStorage.getItem("mentorData"));
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
    <header
      className={clsx(
        "tw-w-full tw-px-4 tw-mb-0",
        scrollY
          ? "tw-bg-white tw-fixed tw-w-full tw-z-20 tw-top-0 tw-left-0 tw-text-black dark:tw-bg-muted-900 tw-transition-all tw-duration-300"
          : "tw-bg-base-200 tw-transition-all tw-duration-300 tw-fixed tw-w-full tw-z-20 tw-top-0 tw-left-0 dark:tw-bg-muted-900 tw-text-black",
      )}
    >
      <nav className="tw-w-full tw-max-w-7xl tw-mx-auto tw-flex tw-justify-between tw-items-center tw-relative">
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
            <Link href="/" className="hover:tw-text-primary-100">
              Home
            </Link>
            <Link href="/mentors" className="hover:tw-text-primary-100">
              Mentor
            </Link>
            <Link href="/contact" className="hover:tw-text-primary-100">
              Contact
            </Link>

            {/* show profile card if user is logged in else show signin link */}
            {isUserLoggedIn || isMentorLoggedIn ? (
              <UserProfile />
            ) : (
              <Link href="/" className="hover:tw-text-primary-100">
                Sign In
              </Link>
            )}

            {/* <DarkModeToggle /> */}
            <SunIcon className="tw-h-9 tw-bg-white tw-rounded-2xl tw-px-0.5 tw-w-9 tw-text-yellow-400 tw-cursor-pointer" />

            {/* <DropdownCard
            isUserLoggedIn={isUserLoggedIn}
            isMentorLoggedIn={isMentorLoggedIn}
          /> */}

            {/* signup button appear only if no user logged in*/}
            {!(isUserLoggedIn || isMentorLoggedIn) && (
              <ButtonLink text="Sign Up" href="/" />
            )}
          </div>
        </div>

        {/* For Mobile Navigation */}
        <div className="sm:tw-hidden tw-flex" ref={dropdownRef}>
          <div className="tw-flex">
            <div
              className="tw-text-3xl tw-font-light tw-mx-2 cursor-pointer tw-text-[#845ec2]"
              onClick={() => {
                setToggleDropdown((prev) => !prev);
              }}
            >
              <ion-icon name={toggleDropdown ? "close" : "menu"}></ion-icon>
            </div>
            {toggleDropdown && (
              <div className="tw-absolute tw-right-0 tw-top-full tw-w-full tw-mt-0 tw-p-6 tw-rounded-lg tw-bg-white tw-flex tw-flex-col tw-gap-5 tw-justify-center tw-items-center tw-text-sm tw-font-semibold tw-pb-5">
                <Link
                  href="/"
                  className="tw-text-xl tw-p-2 tw-font-inter tw-text-gray-500  hover:tw-text-gray-500 tw-font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/mentors"
                  className="tw-text-xl tw-p-2 tw-font-inter tw-text-gray-500   hover:tw-text-gray-500 tw-font-medium"
                >
                  Mentor
                </Link>
                <Link
                  href="/contact"
                  className="tw-text-xl tw-p-2 tw-font-inter tw-text-gray-500  hover:tw-text-gray-500 tw-font-medium"
                >
                  Contact
                </Link>

                {!(isUserLoggedIn || isMentorLoggedIn) && (
                  <Link
                    href="/"
                    className="tw-text-xl tw-p-2 tw-font-inter tw-text-gray-500  hover:tw-text-gray-500 tw-font-medium"
                  >
                    Sign In
                  </Link>
                )}

                {/* theme icon */}
                <SunIcon className="tw-h-10 tw-bg-white tw-rounded-2xl tw-px-0.5 tw-w-9 tw-text-yellow-400 tw-cursor-pointer" />

                {/* show profile card if user is logged in else show signup button */}
                {isUserLoggedIn || isMentorLoggedIn ? (
                  <UserProfile />
                ) : (
                  <ButtonLink text="Sign Up" href="/" />
                )}

                {/* <DropdownCard
                isUserLoggedIn={isUserLoggedIn}
                isMentorLoggedIn={isMentorLoggedIn}
              /> */}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
