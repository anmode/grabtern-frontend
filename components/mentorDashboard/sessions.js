import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { BiSolidUser, BiTime, BiCalendar } from "react-icons/bi";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import {
  MdNotifications,
  MdPayment,
  MdOutlineNotificationsNone,
} from "react-icons/md";

import { FaEdit } from "react-icons/fa";
import { GrView } from "react-icons/gr";

function Sessions() {
  const Cards = [
    {
      icon: <BiTime className="tw-w-14 tw-h-14 tw-text-[#00C9A7]" />,
      path: "edit",
      heading: "Your Sessions",
      session: {
        title: "1-1 Mentorship",
        type: "Call",
        duration: "30",
        desc: "Guidance to crack MLH Fellowship",
      },
    },
    {
      icon: <BiTime className="tw-w-14 tw-h-14 tw-text-[#00C9A7]" />,
      path: "sessions",
      heading: "Your Sessions",
      session: {
        title: "1-1 Coffee Chat",
        type: "Chat",
        duration: "15",
        desc: "How to contribute to open source?",
      },
    },
    {
      icon: <BiTime className="tw-w-14 tw-h-14 tw-text-[#00C9A7]" />,
      path: "sessions",
      heading: "Your Sessions",
      session: {
        title: "1-1 Mentorship",
        type: "Call",
        duration: "45",
        desc: "Best practices to master DSA",
      },
    },
    {
      icon: <BiTime className="tw-w-14 tw-h-14 tw-text-[#00C9A7]" />,
      path: "sessions",
      heading: "Your Sessions",
      session: {
        title: "1-1 Mentorship",
        type: "Video Call",
        duration: "60",
        desc: "Master Behavioral interviews",
      },
    },
  ];

  return (
    <>
      <main className="max-[512px]:tw-pl-6 tw-pb-14 tw-pl-28 tw-flex tw-flex-col max-[708px]:tw-justify-center max-[708px]:tw-items-center tw-mt-[2rem]">
        <p className="tw-text-black tw-flex tw-justify-start tw-items-center tw-text-center tw-text-3xl tw-font-semibold">
          Sessions
        </p>
        <hr className="tw-h-px  tw-my-5 tw-bg-gray-300 tw-border-0" />
        <div className="tw-flex-wrap tw-mt-10 tw-flex tw-gap-10 max-[762px]:tw-justify-center max-[762px]:tw-items-center max-[600px]:tw-flex-col">
          {Cards.map((card) => {
            return (
              <div className="tw-w-[300px] tw-flex-wrap tw-bg-white tw-shadow-xl tw-gap-2 tw-p-6 tw-flex tw-justify-around tw-items-center tw-rounded-md hover:tw-scale-110 tw-ease-in-out tw-duration-150 tw-transition-all max-[752px]:tw-w-[500px] max-[686px]:tw-w-[400px] max-[512px]:tw-w-[300px]">
                <div className="tw-justify-center tw-items-center tw-flex tw-flex-col tw-gap-2 tw-w-full">
                  {card.icon}
                  <h2 className="tw-font-semibold tw-text-xl">{card.name}</h2>
                  <div className="tw-flex tw-flex-col tw-gap-2 tw-items-center tw-justify-center">
                    <h2 className="tw-font-semibold tw-text-md">
                      Title:{" "}
                      <span className="tw-text-sm tw-text-primary-200">
                        {card.session.title}
                      </span>
                    </h2>
                    <div className="tw-flex tw-flex-col tw-items-center tw-gap-1">
                      <p className="tw-text-sm tw-font-semibold tw-text-primary-200">
                        {card.session.type}
                      </p>
                      <p className="tw-text-sm tw-font-semibold tw-text-primary-200">
                        {card.session.duration} minutes
                      </p>
                      <p className="tw-text-sm tw-font-semibold tw-text-primary-200">
                        {card.session.desc}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="tw-flex tw-gap-[3rem] ">
                  <Link
                    href="/dashboard/editMentorSession"
                    className="hover:tw-rounded-full hover:tw-py-2 hover:tw-px-4 hover:tw-bg-gray-200"
                  >
                    <span className="">
                      <FaEdit />
                    </span>
                  </Link>
                  <Link
                    href="/"
                    className="hover:tw-rounded-full hover:tw-py-2 hover:tw-px-4 hover:tw-bg-gray-200"
                  >
                    <span>
                      <GrView />
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Sessions;
