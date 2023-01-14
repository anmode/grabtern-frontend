import React, { useState } from 'react'

function About() {
    const [isVideoPlayed, setIsVideoPlayed] = useState(false)
    const playVideo = () => {
        const video = document.querySelector("video");
        if (isVideoPlayed === false) {
            video.play();
            setIsVideoPlayed(true)
        } else {
            video.pause();
            setIsVideoPlayed(false)

        }
    }
    return (
        <section className="about-area1 fix pt-10">
            <div className="support-wrapper align-items-center">
                <div className="left-content1">
                    <div className="about-icon">
                        <img src="/assets/img/icon/about.svg" alt="" />
                    </div>
                    <div className="section-tittle section-tittle2 mb-55">
                        <div className="front-text">
                            <h2 className="">Mentor guide you through out the whole Journey.</h2>
                            <p>We stay in touch with both the students and mentors throughout the 
                               mentorship process to ensure that both parties are getting the support they need and
                               to address any issues that may arise.</p>
                        </div>
                    </div>
                    <div className="single-features">
                        <div className="features-icon">
                            <img src="/assets/img/icon/right-icon.svg" alt="" />
                        </div>
                        <div className="features-caption">
                            <p>One to One Interaction between mentors and students</p>
                        </div>
                    </div>
                    <div className="single-features">
                        <div className="features-icon">
                            <img src="/assets/img/icon/right-icon.svg" alt="" />
                        </div>
                        <div className="features-caption">
                            <p>Online sesssions and workshop with doubt solving.</p>
                        </div>
                    </div>

                    <div className="single-features">
                        <div className="features-icon">
                            <img src="/assets/img/icon/right-icon.svg" alt="" />
                        </div>
                        <div className="features-caption">
                            <p>Join the community and start your journey under guidance and have interaction</p>
                        </div>
                    </div>
                </div>
                <div className="right-content1">
                    <div className="right-img">
                        <video controls="controls" muted style={{ width: "570px", position: "relative", top: "50px" }}>
                            <source src='/video.mp4' type='video/mp4' />
                        </video>
                        {/* <div className="video-icon" style={{ position: "relative", left: "-70px", top: "-110px" }}>
                                <a className={`popup-video btn-icon ${isVideoPlayed === true ? "videoButton" : ""}`} onClick={() => playVideo()}><i className="fas fa-play" style={{ color: "white" }}></i></a>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About