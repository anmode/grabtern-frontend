import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Header = React.lazy(() => import("../components/layout/Header"));
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";
import SessionCard from "../components/newMentorProfile/SessionCard";
import MentorCard from "../components/mentorProfile/components/MentorCard";
import SharePageModal from "../components/mentorProfile/components/SharePageModal";
import BookSessionModal from "../components/mentorProfile/components/BookSessionModal";
import { useAuth } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../styles/loader.module.css";
import Testimonial from "../components/Testimonial";
import MentorAbout from "../components/newMentorProfile/mentorAbout";
import MentorTestimonial from "../components/newMentorProfile/mentorTestimonial";
import styles1 from "../styles/mentorTestimonial.module.css";
import { Section } from "../components/UI";
function Index({ mentorDetail }) {
  const [isLoading, setIsLoading] = useState(false);
  const [modalPopup, setModalPopup] = useState(false);
  const [waitTime, setWaitTime] = useState(6);
  const [error, setError] = useState("");
  const [emailSent, setEmailSent] = useState(false); // New state variable
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [selectedSession, setSelectedSession] = useState("");

  const {
    isMentorLoggedIn,
    setIsMentorLoggedIn,
    isUserLoggedIn,
    setIsUserLoggedIn,
  } = useAuth();

  const handleClick = (mentordata) => {
    const { sessionName, sessionMeetingDuration, priceSession } = mentordata;
    const { email, name, username } = mentorDetail;

    if (isUserLoggedIn) {
      sessionStorage.removeItem("redirectUrl");
      handleBookSession(
        sessionName,
        email,
        name,
        sessionMeetingDuration,
        priceSession,
      );
    } else {
      const redirectUrl = window.location.href;
      sessionStorage.setItem("redirectUrl", redirectUrl);
      router.push(`/userAuth#login`);
    }
  };

  const sendMail = async (data) => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/bookSessionMail`,
        data,
      );
      setIsLoading(false);
      setModalPopup(false);
      toast.success(
        "Your session has been booked! Check your inbox for payment details.",
      ); // Success toast
    } catch (error) {
      setIsLoading(false);
      if (error.response && error.response.status === 400) {
        toast.error("You have already booked this session"); // Error toast
      } else if (error.response && error.response.status === 405) {
        toast.error("You are not allowed to book your own session"); // Error toast
      } else {
        console.error("Error sending mail:", error);
        toast.error("Facing any problem? Email Us"); // Error toast
      }
    }
  };

  const handleBookSession = async (
    sessionName,
    mentorEmail,
    mentorName,
    sessionTime,
    sessionPrice,
  ) => {
    const userEmail = userData.user_email;
    const userName = userData.user_name;
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
      <React.Suspense fallback={<div>Loading...</div>}>
        <Head>
          <title>GrabTern | Book Your Session</title>
        </Head>
        <Header navbarBackground={true} />
        {/* Mentor Page */}
        <main className="tw-pt-4">
          <MentorAbout mentorDetail={mentorDetail} />

          {/* session section */}
          <Section
            kicker="mentor schedule"
            heading="Available Sessions"
            subheading="Ignite your inner fire, embrace personalized guidance, and unlock your true potential through transformative mentor sessions."
            align="center"
          >
            <div>
              {/* Session Cards for every session */}
              {mentorDetail?.bookSession?.length !== 0 &&
                mentorDetail?.bookSession?.map((session, index) => (
                  <SessionCard
                    key={index}
                    type={session?.sessionType}
                    name={session?.sessionName}
                    description={session?.sessionDescription}
                    duration={session?.sessionMeetingDuration}
                    pricePerSession={session?.priceSession}
                    handleBookSession={() => {
                      setModalPopup(true);
                      setSelectedSession(session);
                    }}
                    // handleBookSession={() => handleClick(session)}
                  />
                ))}
            </div>
          </Section>

          <MentorTestimonial />

          {/* Share Mentor Page Modal */}
          {showModal && (
            <SharePageModal
              handleClose={() => setShowModal(false)}
              username={mentorDetail?.username}
            />
          )}
          {/* Error Display */}
          {/* {error && <div style={{ color: "red" }}>{error}</div>} */}
          {/* Book Session Modal */}
          {!error && modalPopup && (
            <BookSessionModal
              handleClose={() => setModalPopup(false)}
              handleCancel={() => setModalPopup(false)}
              handleConfirm={() => handleClick(selectedSession)}
            />
          )}
          {/* Successful Alert Message */}
          {/* {emailSent && (
          <div style={{ color: "green" }}>
            Your session has been booked! Check your inbox for payment details.
          </div>
        )} */}
        </main>
        {isLoading && (
          <>
            <div className={styles.overlay}></div>
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 9999,
              }}
            >
              <div className={styles.loader}></div>
            </div>
          </>
        )}
        <ToastContainer />
      </React.Suspense>
    </>
  );
}

export default Index;

export const getStaticPaths = async () => {
  // Fetch all mentor usernames to generate static pages
  const { data: mentors } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorLists`,
  );

  const paths = mentors
    .filter((mentor) => mentor.username !== "") // Filter out the conflicting path
    .map((mentor) => ({
      params: { mentorUsername: mentor.username },
    }));
  return { paths, fallback: "blocking" };
};

export const getStaticProps = async (context) => {
  const { mentorUsername } = context.params;
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorDetail/${mentorUsername}`;
  const { data: res } = await axios.get(url);

  if (res.message === "Invalid link") {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      mentorDetail: res.mentorDetail,
    },
    revalidate: 60, // Revalidate the data every 60 seconds
  };
};
