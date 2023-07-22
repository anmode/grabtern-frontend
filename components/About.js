import React, { useState } from "react";
import style from "../styles/about.module.css";
import { FaPlus } from "react-icons/fa";
function About() {
  const [isVideoPlayed, setIsVideoPlayed] = useState(false);
  const playVideo = () => {
    const video = document.querySelector("video");
    if (isVideoPlayed === false) {
      video.play();
      setIsVideoPlayed(true);
    } else {
      video.pause();
      setIsVideoPlayed(false);
    }
  };
  return (
    <section className="about-area1 fix pt-10">
      <div className="section-tittle text-center mb-5 ">
        <h2>What Grabtern Does For It's Students?</h2>
      </div>
      <div className=" section_tittle mb-50">
        <div className={style.about_text}>
          <p>
            We stay in touch with both the students and mentors throughout the
            mentorship process to ensure that both parties are getting the
            support they need and to address any issues that may arise.
          </p>
        </div>
      </div>
      <div className={style.supports_wrapper}>
        <div className={style.center_img}>
          <video
            controls="controls"
            className="video"
            muted
            style={{ width: "100%", maxWidth: "100%", height: "auto" }}
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
          {/* <div className="video-icon" style={{ position: "relative", left: "-70px", top: "-110px" }}>
            <a className={`popup-video btn-icon ${isVideoPlayed === true ? "videoButton" : ""}`} onClick={() => playVideo()}><i className="fas fa-play" style={{ color: "white" }}></i></a>
          </div> */}
        </div>
        <div className={style.right_content1}>
          <h3>Why Choose Us</h3>
          <div className={style.single_feature}>
            <div className={style.feature_icon}>
              <FaPlus />
            </div>
            <div className={style.feature_caption}>
              <p>One-to-One Interaction and Doubt Solving</p>
            </div>
          </div>
          <div className={style.single_feature}>
            <div className={style.feature_icon}>
              <FaPlus />
            </div>
            <div className={style.feature_caption}>
              <p>Access to Mentorship on Own Schedule and Pace</p>
            </div>
          </div>

          <div className={style.single_feature}>
            <div className={style.feature_icon}>
              <FaPlus />
            </div>
            <div className={style.feature_caption}>
              <p>Connection with Industry Leaders and Insightful Advice</p>
            </div>
          </div>
        </div>

        {/* <div className="right-content1">
          <div className="right-img">
            <video
              controls="controls"
              className="video"
              muted
              autoPlay
              style={{ width: "100%", maxWidth: "100%", height: "auto" }}
            >
              <source src="/video.mp4" type="video/mp4" />
            </video>
           
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default About;
