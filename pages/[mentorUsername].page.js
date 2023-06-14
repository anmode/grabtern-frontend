import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/Header"));
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from 'next/image';
import Link from "next/link";
import { MdAlternateEmail, MdRingVolume, MdVideoCameraFront } from 'react-icons/md';
import { FaLinkedin, FaTwitter, FaShareAlt } from 'react-icons/fa';
import { BsClock, BsCurrencyRupee, BsPlus, BsXLg, BsClipboard } from 'react-icons/bs'

function Index({ mentorDetail }) {
  const [isLoading, setIsLoading] = useState(false);
  const [modalPopup, setModalPopup] = useState(false);
  const [waitTime, setWaitTime] = useState(6);
  const [error, setError] = useState("");
  const router = useRouter();
  localStorage.setItem("redirectUrl", window.location.href);
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  // useEffect(() => {
  //   if (localStorage.getItem("user_name") !== null) {
  //     setLoggedIn(true);
  //   }
  //   if (modalPopup === true && waitTime > 0) {
  //     setTimeout(() => {
  //       setWaitTime((value) => (value -= 1));
  //     }, 1000);
  //   }
  // }, [modalPopup, waitTime]);

  // useEffect(() => {
  //   if (modalPopup === true) {
  //     router.push("/mentors");
  //   }
  // }, [modalPopup]);
  const handleClick = (Mentordata) => () => {
    if (isLoggedIn) {
      setModalPopup(true);
      handleBookSession(
        Mentordata.sessionName,
        mentorDetail.email,
        mentorDetail.name,
        Mentordata.sessionMeetingDuration,
        Mentordata.priceSession
      );
    } else {
      router.push("/login");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("user_name") !== null) {
      setLoggedIn(true);
    }
    if (modalPopup === true && waitTime !== 0) {
      setTimeout(() => {
        setWaitTime((value) => (value -= 1));
      }, 1000);
    }
    if (waitTime === 0) {
      router.push("/");
    }
  });

  const sendMail = async (data) => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/bookSessionMail`,
        data
      );
      setIsLoading(false);
      setModalPopup(true);
    } catch (error) {
      setIsLoading(false);
      if (error.response && error.response.status === 400) {
        setError("You have already booked this session");
        setTimeout(() => {
          setError("");
        }, 3000); // remove the error after 5 seconds
      } else if (error.response && error.response.status === 405) {
        setError("You are not allowed to book your own session");
        setTimeout(() => {
          setError("");
        }, 3000); // remove the error after 5 seconds
      } else {
        console.error("Error sending mail:", error);
        setError("Facing any problem? Email Us");
      }
    }
  };

  const handleBookSession = async (
    sessionName,
    mentorEmail,
    mentorName,
    sessionTime,
    sessionPrice
  ) => {
    const userEmail = localStorage.getItem("user_email");
    const userName = localStorage.getItem("user_name");
    const data = {
      sessionName,
      mentorEmail,
      userEmail,
      mentorEmail,
      userName,
      mentorName,
      sessionTime,
      sessionPrice,
    };

    try {
      await sendMail(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Head>
        <title>GrabTern | Book Your Session</title>
      </Head>
      <Header navbarBackground={true} />
      {/* Mentor Page */}
      <main className="tw-flex tw-flex-row tw-justify-center tw-items-start tw-my-44 tw-gap-[60px] tw-flex-wrap">
        {/* Mentor card */}
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-max-w-[448px] tw-gap-5 tw-rounded-b-[36px] tw-shadow-xl tw-shadow-black/10 tw-rounded-[36px]">
          {/* Mentor Pic with Name and Status - upper half*/}
          <div className="tw-flex tw-flex-col tw-items-middle tw-justify-center tw-relative">
            {/* Mentor Pic Container with Overlay*/}
            <div className="relative">
              {/* Mentor Pic */}
              <Image 
                src={mentorDetail.mentorImg} 
                alt="mentor" 
                width="448" 
                height="448" 
                className="tw-z-0 tw-rounded-t-[36px]"
              />
              {/* Mentor Pic Overlay */}
              <div 
                className="tw-z-10 tw-absolute tw-w-full tw-h-full tw-top-0 tw-right-0 tw-rouned-t-[36px]"
                // style attribute is used to add one-off custom gradient
                style={{
                  background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 67.25%, rgba(0, 0, 0, 1) 100%)"
                }}
              ></div>
            </div>
            {/* Mentor Name and Mentor InternAt/Status */}
            <div className="tw-z-20 tw-flex tw-flex-col tw-item-center tw-absolute tw-bottom-0 tw-mx-[30px] tw-mb-6 tw-gap-3">
              {/* Mentor Name */}
              <h1 className="tw-text-[36px] tw-text-white">
                {mentorDetail.name}
              </h1>
              {/* Mentor Current Status and Intern Position */}
              <h3 className="tw-text-[16px] tw-font-semibold tw-text-white/80">
                {/* internAt and CurrentStatus is sliced when it exceeds 40 Characters */}
                {mentorDetail.internAt.length > 40 ? `${mentorDetail.internAt.slice(0, 40)}...` : mentorDetail.internAt} | {mentorDetail.currentStatus.length > 40 ? `${mentorDetail.currentStatus.slice(0, 40)}...` : mentorDetail.currentStatus}
              </h3>
            </div>
          </div>
          {/* Lower half of the card */}
          <div className="tw-pt-[20px] tw-pb-[30px] tw-px-[30px] tw-items-stretch tw-w-full">
            {/* Mentor Social Links, Share Icon and About section */}
            <div className="tw-flex tw-flex-col tw-mb-[22px]">
              {/* Mentor Social Links and Share Icon */}
              <div className="tw-flex tw-flex-row tw-justify-between">
                {/* Mentor Social Links Container */}
                <div className="tw-flex tw-flex-row tw-text-[#4338CA] tw-gap-4">
                  <Link href={`mailto:${mentorDetail.email}`}>
                    <MdAlternateEmail className="tw-text-[28px] hover:tw-text-[#4338CA]/75 tw-transition-opacity active:tw-scale-75"/>
                  </Link>
                  <Link href={`https://www.linkedin.com/in/${mentorDetail.social.linkedin}`}>
                    <FaLinkedin className="tw-text-[28px] hover:tw-text-[#4338CA]/75 tw-transition-opacity active:tw-scale-75"/>
                  </Link>
                  <Link href={`https://www.twitter.com/${mentorDetail.social.twitter}`}>
                    <FaTwitter className="tw-text-[28px] hover:tw-text-[#4338CA]/75 tw-transition-opacity active:tw-scale-75"/>
                  </Link>
                </div>
                {/* Mentor Share Icon Container */}
                <div 
                  onClick={() => setShowModal(true)}
                  className="tw-flex tw-flex-row"
                >
                  <FaShareAlt className="tw-text-[28px] tw-text-[#4338CA] tw-cursor-pointer hover:tw-text-[#4338CA]/75 tw-transitional-all active:tw-scale-75"/>
                </div>
              </div>
            </div>
            {/* About Section */}
            <div className="tw-flex tw-flex-col">
              {/* About Section Heading */}
              <h1 className="tw-text-[36px] tw-font-normal tw-text-[#4338CA] tw-mb-[12px]">About</h1>
              <p className="tw-text-justify">{mentorDetail.description}</p>
            </div>
          </div>
        </div>
        {/* Session Cards Container */}
        <div className="tw-flex tw-flex-col tw-items-stretch tw-max-w-[448px]">
          {/* Session Cards for every session */}
          {mentorDetail.bookSession.length != 0 && mentorDetail.bookSession.map((session, index) => (
            <>
              {/* session card */}
              <div className="tw-flex tw-flex-row tw-w-full tw-p-8 tw-bg-white tw-rounded-[36px] tw-shadow-[0px_0px_40px_0px_#00000025] tw-gap-5 tw-border-t-[1px] tw-mb-[30px]">
                {/* Session card Icon */}
                { session.sessionType === "video-meeting" ? <MdVideoCameraFront className="tw-text-[36px] tw-text-[#4338CA]"/>: <MdRingVolume className="tw-text-[36px] tw-text-[#4338CA]"/>}
                <div className="tw-flex tw-flex-col">
                  {/* Session card title */}
                  <h1 className="tw-text-[36px] tw-font-semibold tw-text-[#4338CA]">{session.sessionName}</h1>
                  {/* Session card description */}
                  <h3 className="tw-text-[16px] tw-font-semibold tw-text-[#4338CA]/80">{session.sessionDescription}</h3>
                  {/* Session card duration */}
                  <p className="tw-flex tw-flex-row tw-items-center tw-gap-3 tw-text-[16px] tw-whitespace-nowrap tw-font-medium tw-text-black/50"><BsClock /> {session.sessionMeetingDuration} mins</p>
                  {/* Session card Charge */}
                  <p className="tw-flex tw-flex-row tw-items-center tw-gap-3 tw-text-[16px] tw-whitespace-nowrap tw-font-medium tw-text-black/50"><BsCurrencyRupee /> {session.priceSession} mins</p>
                  {/* Session Book Button */}
                  <button
                    type="button" 
                    role="button" 
                    className="tw-flex tw-flex-row tw-self-end tw-justify-center tw-gap-3 tw-text-white tw-bg-[#4338CA] tw-rounded-[16px] tw-py-2 tw-pr-7 tw-pl-4 tw-mt-4 tw-items-center tw-max-w-[210px] hover:tw-bg-[#322995] active:tw-outline active:tw-outline-2 active:tw-outline-[#4338CA]/80 tw-transition-all"
                    onClick={() => setModalPopup(true)}
                  >
                    <BsPlus className="tw-text-[32px]"/><span className="tw-text-[22px] tw-text-semibold"> Book Session</span>
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
        {/* Share Mentor Page Modal */}
        {showModal && (
          <div className="tw-flex tw-flex-row tw-items-center tw-justify-center tw-fixed tw-top-0 tw-left-0 tw-bg-black/25 tw-w-full tw-h-full tw-z-[999]">
            {/* Modal Container */}
            <div className="tw-flex tw-flex-col tw-items-stretch tw-justify-start tw-bg-white tw-rounded-[36px] tw-p-[30px] tw-w-[448px] tw-gap-4">
              {/* Modal Heading */}
              <div className="tw-flex tw-flex-row tw-items-center tw-justify-between">
                <h1 className="tw-text-[28px] tw-font-semibold tw-text-[#4338CA]">Share Page</h1>
                <button 
                  className="tw-text-[28px] tw-text-[#4338CA] hover:tw-bg-[#4338CA]/25 active:tw-bg-[#4338CA]/50 tw-p-4 tw-rounded-full tw-transition-all"
                  onClick={() => setShowModal(false)}
                >
                  <BsXLg />
                </button>
              </div>
              {/* Modal Content */}
              <div className="tw-font-medium">
                Here is the link of the mentor page that you can share with your friends:
              </div>
              {/* Modal Link with copy link button */}
              <div className="tw-flex tw-flex-row tw-items-center tw-justify-between tw-bg-gray-100 tw-pl-6 tw-pr-0 tw-py-0 tw-rounded-2xl">
                {/* Modal Link */}
                <div className="tw-font-mono">
                  {`${process.env.NEXT_PUBLIC_FRONTEND_URL}/${mentorDetail.username}`}
                </div>
                {/* Copy link button */}
                <button
                  className="tw-text-[18px] tw-text-gray-800 hover:tw-bg-gray-300 active:tw-bg-gray-300 tw-p-4 tw-rounded-lg  tw-transition-all"
                  onClick={( event ) => {
                    navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/${mentorDetail.username}`);
                    alert("Copied to clipboard!");
                  }}
                >
                  <BsClipboard />
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Error Display */}
        {error && <div style={{ color: "red" }}>{error}</div>}
        {/* Book Session Modal */}
        { !error && modalPopup === true && (
          <div className="tw-flex tw-flex-row tw-items-center tw-justify-center tw-fixed tw-top-0 tw-left-0 tw-bg-black/25 tw-w-full tw-h-full tw-z-[999]">
            {/* Modal Container */}
            <div className="tw-flex tw-flex-col tw-items-stretch tw-justify-start tw-bg-white tw-rounded-[36px] tw-p-[30px] tw-w-[448px] tw-gap-8">
              {/* Modal Header */}
              <div className="tw-flex tw-flex-row tw-items-center tw-justify-between">
                <h1 className="tw-text-[28px] tw-font-semibold tw-text-[#4338CA] tw-leading-none tw-mt-[4px]">Book Session</h1>
                {/* Modal Close button */}
                <button 
                  className="tw-text-[28px] tw-text-[#4338CA] hover:tw-bg-[#4338CA]/25 active:tw-bg-[#4338CA]/50 tw-p-4 tw-rounded-full tw-transition-all"
                  onClick={() => setModalPopup(false)}
                >
                  <BsXLg />
                </button>
              </div>
              {/* Modal Content */}
              <div className="tw-font-medium">
                Hurrah! Just one step left to get your session booked <br /> Our team will contact you for payment, soon!!
              </div>
              {/* Modal Cancel and Book button */}
              <div className="tw-flex tw-flex-row tw-items-center tw-justify-end tw-gap-8">
                <button 
                  className="tw-bg-gray-500 tw-px-6 tw-py-3 tw-text-white tw-rounded-2xl"
                  onClick={() => setModalPopup(false)}
                >
                  Cancel
                </button>
                {/* confirm button */}
                <button 
                  className="tw-bg-[#4338CA] tw-px-6 tw-py-3 tw-text-white tw-rounded-2xl hover:tw-bg-[#322995] active:tw-outline active:tw-outline-2 active:tw-outline-[#4338CA]/80 tw-transition-all"
                  onClick={() => handleClick()}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default Index;

export const getServerSideProps = async (context) => {
  const { mentorUsername } = context.params;
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorDetail/${mentorUsername}`;
  const { data: res } = await axios.get(url);
  if (res.message === "Invalid link") {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {
        mentorDetail: null,
      },
    };
  }
  return {
    props: {
      mentorDetail: res.mentorDetail,
    },
  };
};
