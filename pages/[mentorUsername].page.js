import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Header = React.lazy(() => import("../components/layout/Header"));
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";
import SessionCard from "../components/mentorProfile/components/SessionCard";
import MentorCard from "../components/mentorProfile/components/MentorCard";
import SharePageModal from "../components/mentorProfile/components/SharePageModal";
import BookSessionModal from "../components/mentorProfile/components/BookSessionModal";
import { useAuth } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../styles/loader.module.css";
import Testimonial from "../components/Testimonial";
import MentorTestimonial from "../components/mentorTestimonial/mentorTestimonial"
import Link from "next/link";
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedin, FaTwitter, FaShareAlt } from "react-icons/fa";
import styles1 from "../styles/mentorTestimonial.module.css"
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
        priceSession
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
        data
      );
      setIsLoading(false);
      setModalPopup(false);
      toast.success(
        "Your session has been booked! Check your inbox for payment details."
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
    sessionPrice
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
        <main className="tw-flex tw-flex-col tw-items-center">
          {/* <div className="About  tw-min-w-full tw-h-[500px]"> */}
          <div className=" about tw-flex tw-flex-col tw-relative   tw-items-start tw-my-44 tw-gap-[60px] tw-flex-wrap">
            <div className="about-section tw-relative tw-right-[107px] tw-flex tw-flex-row">
            <div className=" mentor-div1 tw-ml-32 tw-p-32 tw-relative tw-flex tw-flex-col tw-items-center tw-justify-center tw-border-r-2 tw-border-r-[black]">
            <img src={mentorDetail.mentorImg} alt="not found" className="tw-rounded-full tw-w-48 tw-shadow-xl tw-shadow-black/10 tw-h-48 tw-justify-center tw-flex"/>
           <h1 className="tw-mt-10 tw-text-5xl tw-font-semibold">{mentorDetail.name}</h1> 
           <h2 className="tw-mt-4">{mentorDetail.internAt}|{mentorDetail.currentStatus}</h2>
           </div>
           <div className="mentor-div2 tw-flex tw-flex-col tw-relative tw-top-28 tw-mt-8">
            
           <h1 className=" tw-ml-8 tw-relative tw-top-10 tw-text-5xl">About</h1>
           <p className="tw-w-[500px] tw-ml-8 tw-relative tw-top-10">{mentorDetail.description}</p>
           <div className="links tw-flex tw-flex-row tw-relative tw-top-36  tw-pl-14">
            <div className="tw-flex tw-flex-row tw-p-6">
             <span className="tw-mr-2">Email</span> 
           <Link
           
              className="tw-flex tw-items-center tw-justify-center tw-bg-[#eceeef] tw-text-[#818a91] tw-w-[30px] tw-h-[30px] tw-rounded-full tw-transition-all tw-duration-[0.2s] tw-ease-linear tw-mr-2 hover:tw-bg-[#ea4c89] hover:tw-text-white"
              // href={`mailto:${email}`} 
              href="/"
            >

              <MdAlternateEmail className="tw-text-[20px] " />
              
            </Link>
            </div>
            <div className="tw-flex tw-flex-row tw-p-6">
              <span className="tw-mr-2">linkedin</span>
            <Link
              className="tw-flex tw-items-center tw-justify-center tw-bg-[#eceeef] tw-text-[#818a91] tw-w-[30px] tw-h-[30px] tw-rounded-full tw-transition-all tw-duration-[0.2s] tw-ease-linear tw-mr-2 hover:tw-bg-[#007bb6] hover:tw-text-white"
              // href={`https://www.linkedin.com/in/${socialLinks.linkedin}`}
              href="/"
            >
              <FaLinkedin className="tw-text-[20px] " />
            </Link>
            </div>
            <div className="tw-flex tw-flex-row tw-p-6">
              <span className="tw-mr-2">Twitter</span>
            <Link
              className="tw-flex tw-items-center tw-justify-center tw-bg-[#eceeef] tw-text-[#818a91] tw-w-[30px] tw-h-[30px] tw-rounded-full tw-transition-all tw-duration-[0.2s] tw-ease-linear tw-mr-2 hover:tw-bg-[#00aced] hover:tw-text-white"
              // href={`https://www.twitter.com/${socialLinks.twitter}`}
              href="/"
            >
              <FaTwitter className="tw-text-[20px] " />
            </Link>
            </div>
           </div>
           </div>
           </div>
            {/* <MentorCard
              mentorImage={mentorDetail.mentorImg}
              name={mentorDetail.name}
              internAt={mentorDetail.internAt}
              currentStatus={mentorDetail.currentStatus}
              socialLinks={mentorDetail.social}
              about={mentorDetail.description}
              handleSharePage={() => setShowModal(true)}
            /> */}
            {/* Session Cards Container */}
           
            </div>
          
          
          
            <div className="sessions tw-bg-[#E6E6E3] tw-min-w-full  tw-py-11 tw-flex tw-flex-col">
              <div  className="  tw-relative tw-flex tw-flex-col tw-items-center tw-justify-center">

              <h1 className="tw-text-7xl tw-items-center tw-px-8 tw-relative tw-top-8  ">Sessions</h1>
              </div>
            <div className="session-card tw-flex tw-flex-col tw-items-stretch tw-max-w-[448px] tw-ml-32 tw-relative tw-mt-32">
              {/* Session Cards for every session */}
              {mentorDetail.bookSession.length !== 0 &&
                mentorDetail.bookSession.map((session, index) => (
                  <SessionCard
                    key={index}
                    type={session.sessionType}
                    name={session.sessionName}
                    description={session.sessionDescription}
                    duration={session.sessionMeetingDuration}
                    pricePerSession={session.priceSession}
                    handleBookSession={() => {
                      setModalPopup(true);
                      setSelectedSession(session);
                    }}
                    // handleBookSession={() => handleClick(session)}
                  />
                ))}
            </div>
            </div>
            <div className="testimonials tw-min-w-full tw-justify-center tw-flex tw-flex-col tw-mt-6">
              <div className="tw-flex tw-justify-center">
            <h1 className="tw-text-7xl tw-flex tw-items-center tw-px-8 tw-relative tw-top-8  ">Testimonials</h1>
            </div>
            <div className={`${styles1.testimonialdiv2} tw-flex tw-relative tw-justify-center `}>
           <MentorTestimonial />
         

</div>
            </div>
            <div></div>
           
          <div className="tw-w-22 tw-h-auto tw-flex tw-flex-wrap ">
            {/* {for testing purpose}  */}
            {/* <Testimonial
              testimonialUserName="test_user"
              testimonialUserHeadline="test headline"
              testimonialRate="4"
              testimonialUserImage="/assets/img/icon/no-profile-picture.webp"
              testimonialDescription="jdsfkjksadjfkaf askdjflsadkfk kfas kasjdfk sadklfjsd fs dfljsadfkasdl lorem50"

            /> */}
     
            {/* {mentorDetail?.testimonials?.map(data => <Testimonial testimonialUserName={data.name} testimonialUserHeadline={data.headline} testimonialRate={data.rate} testimonialUserImage={data.image} testimonialDescription={data.description} />)} */}
          </div>
          {/* Share Mentor Page Modal */}
          {showModal && (
            <SharePageModal
              handleClose={() => setShowModal(false)}
              username={mentorDetail.username}
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

// export const getServerSideProps = async (context) => {
//   const { mentorUsername } = context.params;
//   const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorDetail/${mentorUsername}`;
//   const { data: res } = await axios.get(url);
//   if (res.message === "Invalid link") {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/",
//       },
//       props: {
//         mentorDetail: null,
//       },
//     };
//   }
//   return {
//     props: {
//       mentorDetail: res.mentorDetail,
//     },
//   };
// };

export const getStaticPaths = async () => {
  // Fetch all mentor usernames to generate static pages
  const { data: mentors } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorLists`
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