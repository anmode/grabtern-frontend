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
                            <h2 className="">Learn new skills online with top educators</h2>
                            <p>The automated process all your website tasks. Discover tools and
                                techniques to engage effectively with vulnerable children and young
                                people.</p>
                        </div>
                    </div>
                    <div className="single-features">
                        <div className="features-icon">
                            <img src="/assets/img/icon/right-icon.svg" alt="" />
                        </div>
                        <div className="features-caption">
                            <p>Techniques to engage effectively with vulnerable children and young people.</p>
                        </div>
                    </div>
                    <div className="single-features">
                        <div className="features-icon">
                            <img src="/assets/img/icon/right-icon.svg" alt="" />
                        </div>
                        <div className="features-caption">
                            <p>Join millions of people from around the world  learning together.</p>
                        </div>
                    </div>

                    <div className="single-features">
                        <div className="features-icon">
                            <img src="/assets/img/icon/right-icon.svg" alt="" />
                        </div>
                        <div className="features-caption">
                            <p>Join millions of people from around the world learning together. Online learning is as easy and natural.</p>
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