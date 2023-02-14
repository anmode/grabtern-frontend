import React from 'react'
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('../components/Footer'))
const Header = dynamic(() => import('../components/Header'))
const SimpleBanner = dynamic(() => import('../components/SimpleBanner'))
const Service = dynamic(() => import('../components/Service'))
const AboutComponent = dynamic(() => import('../components/About'))
import TeamProfile from '../components/TeamProfile';

import servicesData from './data/ServicesData';
import teamsData from './data/teamsData';
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
const OwlCarousel = dynamic(import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import { useState, useEffect } from 'react';

const teamsOptions = {
  margin: 40,
  items: 4,
  nav: true,
  loop: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,

    },
    900: {
      items: 3,

    },
    1170: {
      items: 4,
    }
  },
}


function About() {
  const [carousel, setCarousel] = useState(false);

  useEffect(() => {
    setCarousel(true);
  }, [carousel])
  return (
    <>
      <Header />
      <SimpleBanner bannerTittle="About us" siteName="about" />
      <main>
        <div className="services-area" style={{ padding: "12.5em 0 10rem" }}>
          <div className="container">
            <div className="row justify-content-sm-center">
              {servicesData.map((service, index) => (
                <Service key={index} imageSrc={service.imageSrc} imageAlt={service.imageAlt} serviceHeading={service.serviceHeading} serviceDescription={service.serviceDescription} />
              ))}
            </div>
          </div>
        </div>
        <AboutComponent />
        <div className="topic-area section-padding40">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8">
                <div className="section-tittle text-center mb-55">
                  <h2>Explore Top Hackathons</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="/assets/img/hackathons/tata Imagination.png" alt="tata Imagination" />
                    <div className="topic-content-box">
                      <div className="topic-content">
                        <h3><a href="#">Tata Imagination</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="/assets/img/hackathons/Apple Swift Challenge.png" alt="Apple Swift Challenge" />
                    <div className="topic-content-box">
                      <div className="topic-content">
                        <h3><a href="#">Apple Swift <br /> Challenge</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="/assets/img/hackathons/Hackoctoberfest.png" alt="Hackoctoberfest" />
                    <div className="topic-content-box">
                      <div className="topic-content">
                        <h3><a href="#">Hackoctoberfest</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="/assets/img/hackathons/Microsoft Image Cup.png" alt="Microsoft Image Cup" />
                    <div className="topic-content-box">
                      <div className="topic-content">
                        <h3><a href="#">Microsoft Image Cup</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="/assets/img/hackathons/SIH.png" alt="SIH" />
                    <div className="topic-content-box">
                      <div className="topic-content">
                        <h3><a href="#">SIH</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div className="section-tittle text-center mt-20">
                  <a href="courses.html" className="border-btn">View More Hackathons</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="about-area3 fix">
          <div className="support-wrapper align-items-center">
            <div className="right-content3">
              <div className="right-img">
                <img src="/assets/img/gallery/about3.png" alt="about" />
              </div>
            </div>
            <div className="left-content3">
              <div className="section-tittle section-tittle2 mb-20">
                <div className="front-text">
                  <h2>What Grabtern Do for their Mentors</h2>
                </div>
              </div>
              <div className="single-features">
                <div className="features-icon">
                  <img src="/assets/img/icon/right-icon.svg" alt="right-icon" />
                </div>
                <div className="features-caption">
                  <p>hello
                  </p>
                </div>
              </div>
              <div className="single-features">
                <div className="features-icon">
                  <img src="/assets/img/icon/right-icon.svg" alt="right-icon" />
                </div>
                <div className="features-caption">
                  <p>Join millions of people from around the world
                    learning together.</p>
                </div>
              </div>
              <div className="single-features">
                <div className="features-icon">
                  <img src="/assets/img/icon/right-icon.svg" alt="right-icon" />
                </div>
                <div className="features-caption">
                  <p>Focus builds and correct mentorship given to achieve the dream intern easily</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="team-area section-padding40 fix">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8">
                <div className="section-tittle text-center mb-55">
                  <h2>Community Mentors</h2>
                </div>
              </div>
            </div>
            <div className="team-active">
              {carousel === true ? (<OwlCarousel
                {...teamsOptions}
                autoplay={true}
                lazyLoad={true}
                smartSpeed={1000}
                autoplayTimeout={3500}
                autoplayHoverPause={true}
                className="owl-carousel owl-theme"
              >
                {teamsData.map((profile, index) => (
                  <TeamProfile key={index} imageSrc={profile.imageSrc} imageAlt={profile.imageAlt} profileName={profile.profileName} profileDescription={profile.profileDescription} />
                ))}
              </OwlCarousel>) : null}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default About
