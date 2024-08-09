import React, { Component, useState, useRef, useEffect } from "react";
import Switch from "react-switch";
import Link from "next/link";
import styles from "../../styles/sidebar.module.css";
import { FaTh, FaUserAlt, FaCalendar } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { RxRocket } from "react-icons/rx";
import { LuPhoneCall } from "react-icons/lu";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { VscGist } from "react-icons/vsc";
import { CgSearchFound } from "react-icons/cg";
import Logo from "../../public/assets/img/favicon1.ico";
import Image from "next/image";
import styled from "styled-components";
import { userIcon } from "../../public/assets";

const Sidebar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const refOne = useRef(null);

  //detects if clicked on outside of element for smaller devices

  const handleClickOutside = (event) => {
    if (refOne.current && !refOne.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  const menuItem = [
    {
      title: "Profile",
      icon: user?.image ? (
        <Image
          src={user?.image}
          width={30}
          height={30}
          className={`tw-rounded-full tw-bg-base-400`}
        />
      ) : (
        <Image
          src={userIcon}
          width={30}
          height={30}
          className={`tw-rounded-full tw-bg-base-400`}
        />
      ),
      path: "profile",
      id: "profile",
    },
    {
      title: "Home",
      icon: <AiOutlineHome />,
      path: "",
      id: "home",
    },
    {
      title: "Bookings",
      icon: <LuPhoneCall />,
      path: "bookings",
      id: "bookings",
    },
    {
      title: "Application",
      icon: <VscGist />,
      path: "application",
      id: "application",
    },
  ];

  const mobileItem = [
    {
      title: "Profile",
      icon: user?.image ? (
        <Image
          src={user?.image}
          width={30}
          height={30}
          className="tw-rounded-full tw-bg-base-400"
        />
      ) : (
        <Image
          src={userIcon}
          width={30}
          height={30}
          className={`tw-rounded-full tw-bg-base-400`}
        />
      ),
      path: "profile",
      id: "mobileProfile",
    },
    {
      title: "Home",
      icon: <AiOutlineHome />,
      path: "",
      id: "mobileHome",
    },
    {
      title: "Bookings",
      icon: <LuPhoneCall />,
      path: "bookings",
      id: "mobileBookings",
    },
    {
      title: "Application",
      icon: <VscGist />,
      path: "application",
      id: "mobileApplication",
    },
  ];

  const BookButton = styled.button`
    margin: 5px;
    :hover {
      background-color: #f0f0f0;
    }
  `;

  const HoverListItem = styled.li`
    background-color: transparent;
    &.hoverList:hover {
      background-color: rgba(240, 240, 240, 0.5);
    }
  `;

  // getting page name on change in tab
  const [currentPage, setCurrentPage] = useState("");
  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    setCurrentPage(params.get("tab") || "");
  }, [window.location.search]);

  const BlackSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: "black",
      "&:hover": {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "black",
    },
  }));

  return (
    <>
      <div className="max-md:tw-hidden tw-text-base-500">
        {/* For laptops and tablets  */}
        <aside
          ref={refOne}
          className={`tw-fixed max-md:tw-pt-6 tw-top-0 tw-z-40 tw-h-screen tw-ease-in-out tw-duration-300 tw-bg-base-300 ${
            isSidebarOpen ? "tw-translate-x-0" : "-tw-translate-x-1"
          }`}
          id="sidebar"
        >
          <div className="tw-h-screen tw-px-3 tw-py-4 tw-overflow-y-auto">
            <div
              className={`${
                isSidebarOpen ? "tw-block" : "tw-hidden"
              } tw-flex tw-justify-center  tw-items-center`}
            >
              <Link
                href="/"
                className="hover:tw-text-[#6E4FA0] tw-font-inter tw-font-bold tw-text-3xl"
              >
                GrabTern
              </Link>
            </div>
            <hr className="tw-h-px tw-my-5 tw-bg-gray-300 tw-border-0 tw-dark:bg-gray-700"></hr>
            {/* expand/collapse button */}
            <div
              className={`tw-p-1 tw-flex tw-w-10 ${
                isSidebarOpen
                  ? "tw-justify-start tw-gap-4"
                  : "tw-justify-center"
              } tw-items-center tw-mt-6 tw-rounded-md tw-transition-all tw-duration-150 tw-ease-in-out tw-cursor-pointer`}
              id="toggle"
            >
              <div
                className={`${
                  isSidebarOpen
                    ? "tw-flex tw-justify-center tw-items-center tw-gap-2"
                    : "tw-flex-col tw-flex"
                }`}
              >
                {isSidebarOpen ? (
                  <label
                    className="tw-relative tw-top-1 tw-font-semibold tw-text-base-400 tw-text-center tw-items-center tw-justify-center tw-flex tw-cursor-pointer"
                    for="toggle"
                  >
                    Collapse
                  </label>
                ) : null}
                <Switch
                  className="tw-items-center tw-justify-center tw-flex tw-w-10"
                  id="toggle"
                  checked={isSidebarOpen ? true : false}
                  onChange={() => {
                    toggleSidebar();
                  }}
                  onColor="#845EC2"
                  activeBoxShadow="0 0 2px 3px #00C9A7"
                  uncheckedIcon={false}
                  checkedIcon={false}
                  width={40}
                  height={20}
                  handleDiameter={10}
                  onHandleColor="#fff"
                  offHandleColor="#845EC2"
                />
              </div>
            </div>
            <ul
              className={`tw-gap-4 tw-flex tw-flex-col tw-font-medium tw-py-2`}
            >
              {menuItem.map((val, key) => (
                <HoverListItem
                  key={key}
                  className="tw-group tw-cursor-pointer hoverList"
                  id={val.id}
                >
                  <Link
                    href={`/dashboard/user?tab=${val.path}`}
                    className={`tw-flex ${
                      isSidebarOpen ? "tw-justify-start" : "tw-justify-center"
                    } ${
                      currentPage === val.path
                        ? "tw-bg-primary-100 tw-text-white"
                        : ""
                    } tw-p-2 hover:tw-bg-primary-100 group-hover:tw-text-white tw-transition-all tw-text-xl tw-duration-150 tw-ease-in-out tw-items-center tw-rounded-lg`}
                  >
                    <span>{val.icon}</span>
                    <span
                      className={`tw-ml-3 ${
                        isSidebarOpen ? "tw-block" : "tw-hidden"
                      }`}
                    >
                      {val.title}
                    </span>
                  </Link>
                </HoverListItem>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <div className="md:tw-hidden w-full">
        {/* For mobile devices max-w-512px */}
        <aside
          className="tw-fixed tw-flex tw-items-center tw-bottom-0 tw-left-0 tw-right-0 tw-z-40 tw-bg-base-300 tw-w-full tw-px-4 tw-text-base-500"
          id="mobileNav"
        >
          <div
            className="tw-items-center max-[400px]:tw-hidden"
            id="mobileFindMentors"
          >
            <Link href="/mentorList">
              <RxRocket className="group-hover:tw-text-primary-100 tw-text-xl" />
            </Link>
          </div>
          <div
            className={`tw-w-full tw-flex tw-font-medium tw-p-2 tw-items-center tw-justify-center tw-gap-4 tw-py-4`}
          >
            {mobileItem.map((val, key) => (
              <HoverListItem
                key={key}
                className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-cursor-pointer"
                id={val.id}
              >
                <Link
                  href={`/dashboard/user?tab=${val.path}`}
                  className={`tw-flex tw-flex-col tw-gap-1 tw-flex-wrap ${
                    currentPage === val.path
                      ? "tw-bg-primary-100 tw-text-white"
                      : ""
                  } tw-p-2 hover:tw-bg-primary-100 group-hover:tw-text-primary-100 tw-transition-all tw-text-xl tw-duration-150 tw-ease-in-out tw-items-center tw-rounded-lg`}
                >
                  <span>{val.icon}</span>
                  <span className="tw-text-xs max-[350px]:tw-hidden">
                    {val.title}
                  </span>
                </Link>
              </HoverListItem>
            ))}
          </div>
          <div
            className="tw-flex tw-justify-center tw-items-center"
            id="mobileMenu"
          >
            {/* a button for expanding the remaining buttons */}
            <button className="tw-flex tw-flex-col tw-gap-1 tw-justify-center tw-items-center">
              {
                <AiOutlineMenu
                  className="tw-text-2xl"
                  onClick={() => setIsMobileSidebarOpen(true)}
                />
              }
              <span className="tw-text-xs max-[350px]:tw-hidden">More</span>
            </button>
          </div>
        </aside>

        {/* Modal for opening menu */}
        <div>
          <div
            className={`tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-overflow-auto tw-bottom-0 tw-bg-base-300 tw-z-50 tw-transition-all tw-duration-300 tw-ease-in-out ${
              isMobileSidebarOpen
                ? "tw-opacity-100"
                : "tw-opacity-0 tw-pointer-events-none"
            }`}
          >
            <div className="tw-flex tw-justify-end tw-items-center tw-p-4">
              <button className="tw-flex tw-justify-center tw-items-center">
                <AiOutlineClose
                  className="tw-text-4xl tw-text-base-500"
                  onClick={() => setIsMobileSidebarOpen(false)}
                />
              </button>
            </div>
            <div className="tw-flex tw-justify-center tw-items-center">
              <Link
                href="/"
                onClick={() => setIsMobileSidebarOpen(false)}
                className="hover:text-primary-100 tw-text-base-500 tw-font-inter tw-font-bold tw-text-xl"
              >
                GrabTern
              </Link>
            </div>
            <div className="tw-flex tw-justify-center tw-items-center tw-mt-8">
              <div className="tw-flex tw-justify-center tw-items-center tw-gap-4 tw-bg-white tw-p-3 tw-rounded-lg">
                <Link href="/mentorList">
                  <RxRocket className="group-hover:tw-text-primary-100 tw-text-xl" />
                </Link>
                <span className="tw-font-semibold">Book a session</span>
              </div>
            </div>
            <div
              className={`tw-flex tw-mt-6 tw-justify-around tw-items-start tw-font-medium tw-p-2`}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
