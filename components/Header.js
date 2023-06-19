"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import DropdownCard from "./LoginDropdown";
import { AiOutlineSearch } from "react-icons/ai";
import { SunIcon } from "@heroicons/react/24/solid";

function Header({ isUserLoggedIn }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isMentorLoggedIn, setMentorLoggedIn] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [searchText, setSearchText] = useState("");

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

  return (
    <nav className="flex justify-between items-center mb-6 bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 pt-3 text-black">
      <Link href="/" className="flex gap-2 justify-center items-center">
        <Image
          src="/whitelogo.webp"
          alt="grabtern_logo"
          width={50}
          height={50}
          className="mx-2 mb-2 bg-violet-500 py-2 rounded-sm "
        />
      </Link>

      <div className="flex justify-center items-center ml-2">
        <AiOutlineSearch className="text-gray-500 mx-0.5 cursor-pointer" />
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg ml-2 focus:outline-none"
        />
      </div>

      {/* For Desktop Navigation*/}
      <div className="sm:flex hidden">
        <div className="flex gap-3 justify-between items-center md:gap-5">
          <Link href="/" className="hover:text-blue-800">
            Home
          </Link>
          <Link href="/mentors" className="hover:text-blue-800">
            Mentor
          </Link>
          <Link href="/contact" className="hover:text-blue-800">
            Contact
          </Link>

          {/* <DarkModeToggle /> */}
          <SunIcon className="h-7 w-7 text-yellow-400 cursor-pointer" />

          <DropdownCard
            isUserLoggedIn={isUserLoggedIn}
            isMentorLoggedIn={isMentorLoggedIn}
          />
        </div>
      </div>

      {/* For Mobile Navigation */}
      <div className="sm:hidden flex relative">
        <div className="flex">
          <RxHamburgerMenu
            className="h-10 w-12 mx-2"
            onClick={() => {
              setToggleDropdown((prev) => !prev);
            }}
          />
          {toggleDropdown && (
            <div className="absolute right-10 top-full mt-5 w-full p-5 rounded-lg bg-white dark:bg-slate-600 dark:text-white min-w-[200px] flex flex-col gap-5 justify-end items-center">
              <Link
                href="/"
                className="text-xl p-2 font-inter text-gray-700 hover:text-gray-500 font-medium"
              >
                Home
              </Link>
              <Link
                href="/mentors"
                className="text-xl p-2 font-inter text-gray-700 hover:text-gray-500 font-medium"
              >
                Mentor
              </Link>
              <Link
                href="/contact"
                className="text-xl p-2 font-inter text-gray-700 hover:text-gray-500 font-medium"
              >
                Contact
              </Link>

              <DropdownCard
                isUserLoggedIn={isUserLoggedIn}
                isMentorLoggedIn={isMentorLoggedIn}
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
