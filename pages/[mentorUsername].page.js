import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/Header"));
import axios from "axios";
import { useRouter } from "next/router";

function Index({ mentorDetail }) {
  const [isLoading, setIsLoading] = useState(false);
  const [modalPopup, setModalPopup] = useState(false);
  const [waitTime, setWaitTime] = useState(6);
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
      console.log("I am in sendMail client side");
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/bookSessionMail`,
        data
      );
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error sending mail:", error);
      // Handle the error here, such as showing an error message to the user
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
      setIsLoading(true);
      await sendMail(data);
      setModalPopup(true);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Header navbarBackground={true} />
      <main style={{ marginTop: "119px" }}>
        {!mentorDetail ? (
          <p>Loading...</p>
        ) : (
          <div className="mentorDetail">
            <div className="container">
              {showModal === true ? (
                <div className="modalPopup">
                  <div className="modalPopupAfterRegistrationDone">
                    <i
                      onClick={() => setShowModal(false)}
                      style={{
                        cursor: "pointer",
                        marginLeft: "auto",
                        fontSize: "25px",
                      }}
                      className="fas fa-times"
                    ></i>
                    <p style={{ marginBottom: "0" }}>
                      Here is the link of the mentor detail that you can share
                      with your friends: <br />
                      <br />
                      <span
                        onClick={(e) => {
                          navigator.clipboard.writeText(e.target.innerText);
                          alert("Copied to clipboard!");
                        }}
                        style={{
                          backgroundColor: "whitesmoke",
                          width: "100%",
                          padding: "15px",
                        }}
                      >{`${process.env.NEXT_PUBLIC_FRONTEND_URL}/${mentorDetail.username}`}</span>
                    </p>
                    <button
                      onClick={() => setShowModal(false)}
                      style={{
                        marginRight: "auto",
                        cursor: "pointer",
                        border: "none",
                        backgroundColor: "green",
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "10px",
                      }}
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : null}
              <div className="row1">
                <img src={mentorDetail.mentorImg} />
                <i
                  class="fas fa-share-square"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowModal(true)}
                ></i>
              </div>
              <h1>{mentorDetail.name}</h1>
              <h3>
                {mentorDetail.internAt} | {mentorDetail.currentStatus}
              </h3>
              <ul
                className="contactLinks"
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  margin: "20px 0",
                }}
              >
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontWeight: "600",
                  }}
                >
                  <i class="fas fa-envelope"></i>
                  <a target="_blank" href={`mailto:${mentorDetail.email}`}>
                    {mentorDetail.email}
                  </a>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontWeight: "600",
                  }}
                >
                  <i class="fab fa-linkedin"></i>
                  <a target="_blank" href={mentorDetail.social.linkedin}>
                    {mentorDetail.social.linkedin}
                  </a>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontWeight: "600",
                  }}
                >
                  <i class="fab fa-twitter"></i>
                  <a target="_blank" href={mentorDetail.social.twitter}>
                    {mentorDetail.social.twitter}
                  </a>
                </li>
              </ul>
              <br />
              <h2 style={{ fontSize: "24px" }}>About</h2>
              <p>{mentorDetail.description}</p>
              <br />
              <h2 style={{ fontSize: "24px" }}>Sessions</h2>
              <ul className="bookSessions">
                {mentorDetail.bookSession.length !== 0 ? (
                  mentorDetail.bookSession.map((session) => (
                    <li>
                      <div
                        className="bookSessionHeader"
                        style={{ alignItems: "center" }}
                      >
                        <i
                          class={
                            session.sessionType === "video-meeting"
                              ? "fas fa-video"
                              : session.sessionType === "call-meeting"
                              ? "fas fa-phone"
                              : ""
                          }
                          style={{ fontSize: "25px" }}
                        ></i>
                        <div>
                          <h2>{session.sessionName}</h2>
                          <p>{session.sessionDescription}</p>
                        </div>
                      </div>
                      <div
                        className="bookSessionIcons"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "20px",
                        }}
                      >
                        <div>
                          <i className="far fa-clock"></i>
                          {session.sessionMeetingDuration} min
                        </div>
                        <div>
                          <i className="fas fa-rupee-sign"></i>
                          {session.priceSession}
                        </div>
                      </div>
                      <button
                        style={{ cursor: "pointer" }}
                        onClick={handleClick(session)}
                      >
                        {isLoading ? (
                          <img
                            style={{
                              width: "50px",
                              height: "50px",
                              border: "none",
                              margin: "0 60px",
                            }}
                            src="/assets/img/gif/Spinner.gif"
                            alt="loading..."
                          />
                        ) : (
                          <span>Book Session</span>
                        )}
                      </button>

                      {modalPopup === true ? (
                        <div className="modalPopup">
                          <div className="modalPopupAfterRegistrationDone">
                            <p>
                              Thank you Our team Will contacting you, check your
                              inbox.
                            </p>
                            <img src="/iconMentorRegistrationPopup.jpg" />
                            <p>Redirecting you to home in {waitTime} second</p>
                          </div>
                        </div>
                      ) : null}
                      <div></div>
                    </li>
                  ))
                ) : mentorDetail.bookSession.length === 0 ? (
                  <p>You not have book sessions yet</p>
                ) : null}
              </ul>
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
