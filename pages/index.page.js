import {
  About,
  Internship,
  MentorSection,
  Service,
  TeamProfile,
  Testimonial,
  Banner,
} from "../components/homePage";
import Hackathon from "../components/hackthons/Hackathons";
import internshipsData from "./data/coursesData";
import servicesData from "./data/ServicesData";
import hackathonsData from "./data/hackathonsData";
import teamsData from "./data/teamsData";
import testiomialsData from "./data/testiomialsData";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import dynamic from "next/dynamic";
import Head from "next/head";
import { ButtonLink, Section } from "../components/UI";

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
        <section className="tw-w-full tw-px-4 md: tw-mt-8 lg:-tw-mt-20">
          <div className="tw-w-full tw-max-w-7xl tw-mx-auto">
            <div className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-x-6 tw-gap-y-6 tw-items-stretch tw-justify-center">
              {servicesData.map((service, index) => (
                <Service key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* internship section */}
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
          <ButtonLink
            text="View More Internships"
            href="/internship"
            className="tw-mx-auto tw-block tw-w-max tw-mt-10"
          />
        </Section>

        <About />

        {/* hackathon section */}
        <Section
          kicker="hackathon"
          heading="Explore Top Hackathons"
          align="center"
        >
          <div className="tw-grid tw-gap-8 sm:tw-grid-cols-2 lg:tw-grid-cols-4">
            {hackathonsData.slice(0, 4).map((hackathon, index) => (
              <Hackathon key={index} {...hackathon} />
            ))}
          </div>
          <ButtonLink
            text="View More Hackathons"
            href="/hackathon"
            className="tw-mx-auto tw-block tw-w-max tw-mt-10"
          />
        </Section>

        {/* why to be a mentor section */}
        <MentorSection />

        {/* testimonial */}
        <Section
          kicker="Glowing Praise"
          heading="Testimonials"
          subheading="See what our mentor and students say about us"
          align="center"
        >
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
                  <Testimonial key={index} {...testimonial} />
                ))}
              </OwlCarousel>
            ) : null}
          </ul>
        </Section>

        {/* team section */}
        <Section
          kicker="Grabtern team"
          heading="Our Community"
          subheading="Meet the members of Grabtern Community"
          align="center"
        >
          <div>
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
                  <TeamProfile key={index} {...profile} />
                ))}
              </OwlCarousel>
            ) : null}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
