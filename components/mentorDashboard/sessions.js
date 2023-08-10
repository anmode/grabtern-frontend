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
import { Section } from "../UI";
import Spinner from "../basic/spinner";
import styled from "styled-components";

function Sessions() {
  const [data, setData] = useState({});
  const username = "anmode";
  const fetchData = async () => {
    try {
      const url = `https://grabtern-backend.vercel.app/api/mentors/mentorDetail/${username}`;
      const { data: res } = await axios.get(url);
      return res.mentorDetail;
    } catch (err) {
      console.error("Error in fetching details ", err);
    }
  };

  useEffect(() => {
    fetchData()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(data);

  return (
    <>
      <main className="max-[512px]:tw-pl-6 tw-pb-14 tw-pl-28 tw-flex tw-flex-col max-[708px]:tw-justify-center max-[708px]:tw-items-center tw-mt-[2rem]">
        <p className="tw-text-black tw-flex tw-justify-start tw-items-center tw-text-center tw-text-3xl tw-font-semibold">
          Sessions
        </p>
        <hr className="tw-h-px  tw-my-5 tw-bg-gray-300 tw-border-0" />
        <div className="tw-grid tw-gap-6 md:tw-grid-cols-2 lg:tw-grid-cols-3">
          {data.sessions ? (
            data.sessions.map((card, index) => {
              return (
                <SessionCard
                  key={index}
                  type={card.type}
                  name={card.name}
                  description={card.description}
                  duration={card.duration}
                  price={card.price}
                  text="Edit Session"
                  path={`/dashboard/editMentorSession?username=${username}&sessionId=${card._id}`}
                />
              );
            })
          ) : (
            <div>
              <Spinner />
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default Sessions;
