import React, { useState } from "react";
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('../../components/Header'))
import axios from "axios";
import Image from 'next/image'

function Index({mentorDetail}) {
  const [showModal, setShowModal] = useState(false);

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
                      >{`${process.env.NEXT_PUBLIC_FRONTEND_URL}/mentors/${mentorDetail.name}`}</span>
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

              <div>
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
                  {mentorDetail.email}
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
              </div>
              <i
                  class="fas fa-share-square"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowModal(true)}
                ></i>
              </div>
              <br />
              <h2 style={{ fontSize: "24px" }}>About</h2>
              <p>{mentorDetail.description}</p>
              <br />
              <h2 style={{ fontSize: "24px" }}>Book Sessions</h2>
              <ul className="bookSessions">
                {mentorDetail.bookSession.length !== 0 ? mentorDetail.bookSession.map((session) => (
                  <li>
                    <div className="bookSessionHeader">
                      <div>
                        <h2>{session.sessionName}</h2>
                        <p>
                          {session.sessionType} |{" "}
                          {session.sessionMeetingDuration}
                        </p>
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
                      {/* <div>
                        <i className="fas fa-phone"></i>
                        {session.peopleAttend}:1 call
                      </div> */}
                      <div>
                        <i className="far fa-clock"></i>
                        {session.sessionMeetingDuration} min
                      </div>
                      <div>
                        <i className="fas fa-rupee-sign"></i>
                        {session.priceSession}
                      </div>
                    </div>
                  <button style={{cursor:"pointer"}}>Book Session</button>
                  </li>
                )) : mentorDetail.bookSession.length === 0 ? (
                  <p>
                    {mentorDetail.name} not have book sessions yet
                </p>) : null}
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
      }
    }
    
  }
  return {
    props: {
      mentorDetail: res.mentorDetail
    }
  }
}
