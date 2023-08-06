import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import styles from "../../styles/sessions.module.css";
import axios from "axios";

function Sessions() {
  const [sessionData, setSessionData] = useState({});
  useEffect(() => {
    const { mentor_username } = JSON.parse(localStorage.getItem("mentorData"));
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/dashboard/get/session`;
    const res = axios.get(url, { withCredentials: true });
    console.log("res of session detail of mentor: ", res);
    console.log(mentor_username);
  }, []);

  return (
    <>
      <div className="tw-flex tw-flex-col tw-gap-2 tw-items-center tw-justify-center">
        <h2 className="tw-font-semibold tw-text-md">
          Title: kjadf
          <span className="tw-text-sm tw-text-primary-200">
            {sessionData?.session?.title}
          </span>
        </h2>
        <div className="tw-flex tw-flex-col tw-items-center tw-gap-1">
          <p className="tw-text-sm tw-font-semibold tw-text-primary-200">
            {sessionData?.session?.type}
          </p>
          <p className="tw-text-sm tw-font-semibold tw-text-primary-200">
            {sessionData?.session?.duration} minutes
          </p>
          <p className="tw-text-sm tw-font-semibold tw-text-primary-200">
            {sessionData?.session?.desc}
          </p>
        </div>
      </div>
    </>
  );
}

export default Sessions;
