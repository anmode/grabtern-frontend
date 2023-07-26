import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/sidebar.module.css";

import { FaTh, FaUserAlt, FaCalendar } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { RxRocket } from "react-icons/rx";
import { LuPhoneCall } from "react-icons/lu";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BiCalendar } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { PiBookOpenText } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgMailOpen } from "react-icons/cg";
import { BiGift } from "react-icons/bi";
import { CgSearchFound } from "react-icons/cg";
import Logo from "../../public/assets/img/favicon1.ico";
import Image from "next/image";
import styled from "styled-components";

const Sidebar = ({ setComponent }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("toggle clicked ", isSidebarOpen);

    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuItem1 = [
    {
      title: "Home",
      icon: <AiOutlineHome />,
      path: "sessions",
    },
    {
      title: "Bookings",
      icon: <LuPhoneCall />,
      path: "bookings",
    },
    {
      title: "Priority DM",
      icon: <BiMessageRoundedDots />,
      path: "queries",
    },
  ];

  const menuItem2 = [
    {
      title: "Calendar",
      icon: <BiCalendar />,
      path: "calendar",
    },
    {
      title: "Services",
      icon: <PiBookOpenText />,
      path: "services",
    },
    {
      title: "Payments",
      icon: <MdPayment />,
      path: "payments",
    },
    {
      title: "Queries",
      icon: <CgSearchFound />,
      path: "queries",
    },
    {
      title: "Profile",
      icon: <CgProfile />,
      path: "profile",
    },
  ];

  const menuItem3 = [
    {
      title: "What's New",
      icon: <IoMdNotificationsOutline />,
      path: "new",
    },
    {
      title: "Invite & Earn",
      icon: <CgMailOpen />,
      path: "referral",
    },
    {
      title: "Rewards",
      icon: <BiGift />,
      path: "rewards",
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

  return (
    <>
      <div>
        <button
          type="button"
          className="tw-fixed tw-inline-flex md:tw-hidden sm:tw-block tw-items-center tw-p-2 tw-mt-2 tw-ml-3 tw-z-50 tw-text-sm tw-text-gray-500 tw-rounded-lg tw-sm:hidden tw-hover:bg-gray-100 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-gray-200"
          onClick={toggleSidebar}
        >
          <span className="tw-sr-only">Open sidebar</span>
          <svg
            className="tw-w-6 tw-h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <aside
          className={`tw-fixed tw-top-0 tw-left-0 tw-z-40 tw-w-64 tw-h-screen tw-transform tw-transition-transform tw-bg-base-300 lg:tw-translate-x-0 ${
            isSidebarOpen ? "tw-translate-x-0" : "tw--translate-x-full"
          }`}
        >
          <div className="tw-h-full tw-px-3 tw-py-4 tw-overflow-y-auto">
            <div className="tw-flex  tw-items-center">
              <Image
                className="tw-px-3 tw-py-4"
                src={Logo}
                alt="icon"
                width={50}
                height={50}
              />
              <div className="tw-font-inter tw-font-bold tw-text-3xl ">
                GrabTern
              </div>
            </div>
            <div className="tw-pt-2 tw-pl-1">
              <BookButton className="tw-text-center tw-font-inter tw-text-xs tw-font-light tw-bg-white tw-hover:bg-gray-100 tw-text-gray-800 tw-font-semibold tw-py-4 tw-px-10 tw-border tw-border-gray-400 tw-rounded-lg tw-shadow">
                <div className="tw-flex tw-items-center tw-justify-end">
                  <RxRocket />
                  <div className="tw-ml-2">Get more bookings</div>
                </div>
              </BookButton>
            </div>
            <hr className="tw-h-px tw-my-5 tw-bg-gray-300 tw-border-0 tw-dark:bg-gray-700"></hr>
            <ul className="tw-space-y-2 tw-font-medium tw-py-2">
              {menuItem1.map((val, key) => (
                <HoverListItem
                  key={key}
                  className="tw-group tw-cursor-pointer hoverList"
                >
                  <div
                    className="tw-flex tw-items-center tw-px-2 tw-py-2 tw-text-gray-900 tw-rounded-lg "
                    onClick={() => setComponent(val.path)}
                  >
                    <span className="tw-ml-3">{val.icon}</span>
                    <span className="tw-ml-3">{val.title}</span>
                  </div>
                </HoverListItem>
              ))}
            </ul>
            <ul className="tw-space-y-2 tw-font-medium tw-py-4">
              {menuItem2.map((val, key) => (
                <HoverListItem
                  key={key}
                  className="tw-group tw-cursor-pointer hoverList"
                >
                  <div
                    className="tw-flex tw-items-center tw-px-2 tw-py-2 tw-text-gray-900 tw-rounded-lg "
                    onClick={() => setComponent(val.path)}
                  >
                    <span className="tw-ml-3">{val.icon}</span>
                    <span className="tw-ml-3">{val.title}</span>
                  </div>
                </HoverListItem>
              ))}
            </ul>
            <ul className="tw-space-y-2 tw-font-medium tw-py-4">
              {menuItem3.map((val, key) => (
                <HoverListItem
                  key={key}
                  className="tw-group tw-cursor-pointer hoverList"
                >
                  <div
                    className="tw-flex tw-items-center tw-px-2 tw-py-2 tw-text-gray-900 tw-rounded-lg "
                    onClick={() => setComponent(val.path)}
                  >
                    <span className="tw-ml-3">{val.icon}</span>
                    <span className="tw-ml-3">{val.title}</span>
                  </div>
                </HoverListItem>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};
export default Sidebar;
