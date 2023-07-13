import About from "../components/About";
import Header from "../components/layout/Header";
import servicesData from "./data/ServicesData";
import Service from "../components/Service";
import internshipsData from "./data/coursesData";
import Internship from "../components/Internship";
import hackathonsData from "./data/hackathonsData";
import Hackathon from "../components/hackthons/Hackathons";
import teamsData from "./data/teamsData";
import testiomialsData from "./data/testiomialsData";
import Testimonial from "../components/Testimonial.js";
import TeamProfile from "../components/TeamProfile";
import Footer from "../components/layout/Footer";
import Banner from "../components/Banner";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Section } from "../components/UI";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
const OwlCarousel = dynamic(import("react-owl-carousel"), {
  ssr: false,
});

import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import hackathonStyle from "../styles/hackathon.module.css";
import { useState, useEffect } from "react";

const internshipsOptions = {
  margin: 40,
  items: 3,
  nav: true,
  loop: true,
  responsive: {
    0: {
      items: 1,
    },
    880: {
      items: 2,
    },
    1170: {
      items: 3,
    },
  },
};

const testimonialOptions = {
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
      items: 2,
    },
    1170: {
      items: 3,
    },
  },
};

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
    },
  },
};

export default function Home() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isMentorLoggedIn, setIsMentorLoggedIn] = useState(false);
  const [carousel, setCarousel] = useState(false);
  const hasPlayedGreeting = localStorage.getItem("has_played_greeting");
  useEffect(() => {
    if (
      localStorage.getItem("user_name") !== null ||
      localStorage.getItem("token") !== null
    ) {
      setIsUserLoggedIn(true);
    }
    if (
      localStorage.getItem("mentor_name") !== null &&
      localStorage.getItem("mentorToken") !== null
    ) {
      setIsMentorLoggedIn(true);
    }
    console.log(isUserLoggedIn);
    setCarousel(true);
  }, [carousel]);

  return (
    <div>
      {localStorage.getItem("user_name") !== null && !hasPlayedGreeting ? (
        <div className="welcomeAfterLoggedIn">
          Hi 👋🏻 {localStorage.getItem("user_name")} <br /> Welcome to GrabTern
          <audio
            src="/assets/sound/greet.wav"
            autoplay
            onLoadedData={(e) => {
              e.target.play();
              localStorage.setItem("has_played_greeting", true);
            }}
          />
        </div>
      ) : null}
      <Header isUserLoggedIn={isUserLoggedIn} />

      <main>
        <Banner isMentorLoggedIn={isMentorLoggedIn} />

        {/* services section */}
        <section className="tw-w-full tw-px-4">
          <div className="tw-w-full tw-max-w-7xl tw-mx-auto">
            <div className="tw-grid md:tw-grid-cols-3 lg:tw-grid-cols-3 tw-gap-x-6 tw-gap-y-12 tw-items-center tw-justify-center">
              {servicesData.map((service, index) => (
                <Service key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* testimonial section */}
        <Section kicker="internships" heading="Our Featured Internships">
          <div>
            {carousel === true ? (
              <OwlCarousel
                {...internshipsOptions}
                autoplay={true}
                lazyLoad={true}
                smartSpeed={1000}
                autoplayTimeout={3500}
                autoplayHoverPause={true}
                className="owl-carousel owl-theme"
              >
                {internshipsData.map((internship, index) => (
                  <Internship key={index} {...internship} />
                ))}
              </OwlCarousel>
            ) : null}
          </div>
        </Section>

        <About />
        <div className={`${hackathonStyle.hackathonArea} section-padding40`}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8">
                <div className="section-tittle text-center mb-55">
                  <h2>Explore Top Hackathons</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {hackathonsData.slice(0, 4).map((hackathon, index) => (
                <Hackathon
                  key={index}
                  hackathonImage={hackathon.hackathonImage}
                  hackathonImageAlt={hackathon.hackathonImageAlt}
                  hackathonLink={hackathon.hackathonLink}
                  hackathonTitle={hackathon.hackathonTitle}
                />
              ))}
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div className="section-tittle text-center mt-20">
                  <a href="/hackathon" className="border-btn">
                    View More Hackathons
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="about-area3 fix mb-40">
          <div className="support-wrapper align-items-center">
            <div className="right-content3">
              <div className="right-img">
                <img src="/assets/img/gallery/mentors.avif" alt="about" />
              </div>
            </div>
            <div className="left-content3">
              <div className="section-tittle section-tittle2 mb-20">
                <div className="front-text">
                  <h2>Why to be Mentor at Grabtern?</h2>
                </div>
              </div>
              <div className="single-features">
                <div className="features-icon">
                  <img src="/assets/img/icon/right-icon.svg" alt="right-icon" />
                </div>
                <div className="features-caption">
                  <p>
                    <b>Professional networking:</b> Mentors can expand their
                    professional network by connecting with students and other
                    mentors in the community.
                  </p>
                </div>
              </div>
              <div className="single-features">
                <div className="features-icon">
                  <img src="/assets/img/icon/right-icon.svg" alt="right-icon" />
                </div>
                <div className="features-caption">
                  <p>
                    <b>Giving back:</b> Mentors can feel a sense of fulfillment
                    by giving back to the community and contributing to the
                    development of future professionals.
                  </p>
                </div>
              </div>
              <div className="single-features">
                <div className="features-icon">
                  <img src="/assets/img/icon/right-icon.svg" alt="right-icon" />
                </div>
                <div className="features-caption">
                  <p>
                    <b>Continued learning:</b> Mentors can continue to learn and
                    grow by staying up-to-date on the latest industry trends and
                    knowledge through mentoring students.
                  </p>
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
                  <h2>Testimonials</h2>
                </div>
              </div>
            </div>

            <ul className="testimonialsList">
              {carousel === true ? (
                <OwlCarousel
                  {...testimonialOptions}
                  autoplay={true}
                  lazyLoad={true}
                  smartSpeed={1000}
                  autoplayTimeout={3500}
                  nav={true}
                  loop={true}
                  autoplayHoverPause={true}
                  className="owl-carousel owl-theme"
                >
                  {testiomialsData.map((testimonial, index) => (
                    <Testimonial
                      key={index}
                      testimonialUserName={testimonial.testimonialUserName}
                      testimonialUserHeadline={
                        testimonial.testimonialUserHeadline
                      }
                      testimonialUserImage={testimonial.testimonialUserImage}
                      testimonialRate={testimonial.testimonialRate}
                      testimonialDescription={
                        testimonial.testimonialDescription
                      }
                    />
                  ))}
                </OwlCarousel>
              ) : null}
            </ul>
          </div>
        </section>
        <section className="team-area section-padding40 fix">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8">
                <div className="section-tittle text-center mb-55">
                  <h2>Grabtern Community</h2>
                </div>
              </div>
            </div>
            <div className="team-active">
              {carousel === true ? (
                <OwlCarousel
                  {...teamsOptions}
                  autoplay={true}
                  lazyLoad={true}
                  smartSpeed={1000}
                  autoplayTimeout={3500}
                  autoplayHoverPause={true}
                  className="owl-carousel owl-theme"
                >
                  {teamsData.map((profile, index) => (
                    <TeamProfile
                      key={index}
                      imageSrc={profile.imageSrc}
                      imageAlt={profile.imageAlt}
                      profileName={profile.profileName}
                      profileDescription={profile.profileDescription}
                    />
                  ))}
                </OwlCarousel>
              ) : null}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
