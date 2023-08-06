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
import SessionCard from "../newMentorProfile/SessionCard";

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
        price: "50",
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
        price: "60",
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
        price: "70",
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
        price: "100",
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
              <SessionCard
                type={card.session.type}
                name={card.session.title}
                description={card.session.desc}
                duration={card.session.duration}
                price={card.session.price}
                text="Edit Session"
                path="/dashboard/editMentorSession"
              />
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Sessions;
