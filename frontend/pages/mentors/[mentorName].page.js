import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import axios from "axios";

function Index() {
  const router = useRouter();
  const { mentorName } = router.query;
  const [mentorDetail, setMentorDetail] = useState();
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const getMentorDetail = async () => {
      if (mentorName !== undefined) {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorDetail/${mentorName}`;
        const { data: res } = await axios.get(url);
        if(res.message === "Invalid link") {
          router.push("/")
        }
        setMentorDetail(res.mentorDetail);
        console.log(mentorDetail);
      }
    };
    getMentorDetail();
  });
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
              <i onClick={() => setShowModal(false)} style={{cursor:"pointer", marginLeft: "auto", fontSize:"25px"}} className="fas fa-times"></i>
                <p style={{marginBottom: "0"}}>
                  Here is the link of the mentor detail that you can share with your friends: <br /><br />
                  <span onClick={(e) => {
                    navigator.clipboard.writeText(e.target.innerText);
                    alert("Copied to clipboard!")
                  }} style={{backgroundColor: "whitesmoke", width: "100%", padding: "15px"}}>{`${process.env.NEXT_PUBLIC_FRONTEND_URL}/mentors/${mentorName}`}</span>
                </p>
                <button onClick={() => setShowModal(false)} style={{marginRight: "auto", cursor:"pointer", border: "none", backgroundColor: "green", color: "white", padding: "10px 20px", borderRadius:"10px"}}>Done</button>
              </div>
            </div>
) : null}
              <div className="row1">
            <img src={mentorDetail.mentorImg} />
            <i class="fas fa-share-square" style={{cursor: "pointer"}} onClick={() => setShowModal(true)}></i>
              </div>
            <h1>{mentorDetail.name}</h1>
            <h3>
              {mentorDetail.internAt} | {mentorDetail.currentStatus}
            </h3>
            <ul className="contactLinks" style={{flexDirection: "column", alignItems: "flex-start", margin: "20px 0"}}>
              <li style={{display: "flex", alignItems:"center", gap:"10px", fontWeight: "600"}}><i class="fas fa-envelope"></i>{mentorDetail.email}</li>
              <li style={{display: "flex", alignItems:"center", gap:"10px", fontWeight: "600"}}><i class="fab fa-linkedin"></i><a target="_blank" href={mentorDetail.social.linkedin}>{mentorDetail.social.linkedin}</a></li>
              <li style={{display: "flex", alignItems:"center", gap:"10px", fontWeight: "600"}}><i class="fab fa-twitter"></i><a target="_blank" href={mentorDetail.social.twitter}>{mentorDetail.social.twitter}</a></li>
            </ul>
            <br />
            <h2 style={{fontSize: "24px"}}>About</h2>
            <p>{mentorDetail.description}</p>
            <br />
            <h2 style={{fontSize: "24px"}}>Book Sessions</h2>
            <ul className="bookSessions">
              <li>
                <div className="bookSessionHeader">
                  <h2>Mock Interview</h2>
                  <p>Video Meeting | 45 min</p>
                </div>
                <div className="bookSessionIcons">
                  <div><i class="fas fa-phone"></i>1:1 call</div>
                  <div><i class="far fa-clock"></i>45 min</div>
                  <div><i class="fas fa-rupee-sign"></i>500</div>
                </div>
                <button>Book Session</button>
              </li>
              <li>
                <div className="bookSessionHeader">
                  <h2>CAT/OMETs Preparation Guidance</h2>
                  <p>Video Meeting | 45 min</p>
                </div>
                <div className="bookSessionIcons">
                  <div><i class="fas fa-phone"></i>1:1 call</div>
                  <div><i class="far fa-clock"></i>45 min</div>
                  <div><i class="fas fa-rupee-sign"></i>500</div>
                </div>
                <button>Book Session</button>
              </li>
              <li>
                <div className="bookSessionHeader">
                  <h2>1 on 1 Mentorship</h2>
                  <p>Video Meeting | 45 min</p>
                </div>
                <div className="bookSessionIcons">
                  <div><i class="fas fa-phone"></i>1:1 call</div>
                  <div><i class="far fa-clock"></i>45 min</div>
                  <div><i class="fas fa-rupee-sign"></i>500</div>
                </div>
                <button>Book Session</button>
              </li>
              <li>
                <div className="bookSessionHeader">
                  <h2>Resume & CV Review</h2>
                  <p>Video Meeting | 45 min</p>
                </div>
                <div className="bookSessionIcons">
                  <div><i class="fas fa-phone"></i>1:1 call</div>
                  <div><i class="far fa-clock"></i>45 min</div>
                  <div><i class="fas fa-rupee-sign"></i>500</div>
                </div>
                <button>Book Session</button>
              </li>
              <li>
                <div className="bookSessionHeader">
                  <h2>Case Competitions Guidance</h2>
                  <p>Video Meeting | 45 min</p>
                </div>
                <div className="bookSessionIcons">
                  <div><i class="fas fa-phone"></i>1:1 call</div>
                  <div><i class="far fa-clock"></i>45 min</div>
                  <div><i class="fas fa-rupee-sign"></i>500</div>
                </div>
                <button>Book Session</button>
              </li>
            </ul>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default Index;
