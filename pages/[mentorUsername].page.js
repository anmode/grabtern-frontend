import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/Header"));
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";
import SessionCard from "../components/mentorProfile/SessionCard";
import MentorCard from "../components/mentorProfile/MentorCard";
import SharePageModal from "../components/mentorProfile/SharePageModal";
import BookSessionModal from "../components/mentorProfile/BookSessionModal";

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
        <MentorCard
          mentorImage={mentorDetail.mentorImg}
          name={mentorDetail.name}
          internAt={mentorDetail.internAt}
          currentStatus={mentorDetail.currentStatus}
          socialLinks={mentorDetail.social}
          about={mentorDetail.description}
          handleSharePage={() => setShowModal(true)}
        />
        {/* Session Cards Container */}
        <div className="tw-flex tw-flex-col tw-items-stretch tw-max-w-[448px]">
          {/* Session Cards for every session */}
          {mentorDetail.bookSession.length != 0 &&
            mentorDetail.bookSession.map((session, index) => (
              <SessionCard
                key={index}
                type={session.sessionType}
                name={session.sessionName}
                description={session.sessionDescription}
                duration={session.sessionMeetingDuration}
                price={session.priceSession}
                handleBookSession={() => setModalPopup(true)}
              />
            ))}
        </div>
        {/* Share Mentor Page Modal */}
        {showModal && (
          <SharePageModal
            handleClose={() => setShowModal(false)}
            username={mentorDetail.name}
          />
        )}
        {/* Error Display */}
        {error && <div style={{ color: "red" }}>{error}</div>}
        {/* Book Session Modal */}
        {!error && modalPopup === true && (
          <BookSessionModal
            handleClose={() => setModalPopup(false)}
            handleCancel={() => setModalPopup(false)}
            handleBookSession={() => handleClick()}
          />
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
