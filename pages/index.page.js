import About from "../components/About";
import Header from "../components/Header";
import servicesData from "./data/ServicesData";
import Service from "../components/Service";
import internshipsData from "./data/coursesData";
import Internship from "../components/Internship";
import hackathonsData from "./data/hackathonsData";
import Hackathon from "../components/Hackathons";
import teamsData from "./data/teamsData";
import TeamProfile from "../components/TeamProfile";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import dynamic from "next/dynamic";
import Gridh from"../components/Gridh"
import Head from "next/head";
// import Hackathons from "./hackathon.page";
import Link from 'next/link';

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

const buttonStyle = {
  width: '200px',
  fontSize: '16px',
  fontWeight: 600,
  color: '#fff',
  cursor: 'pointer',
  margin: '20px',
  padding:'10px',
  height: '55px',
  textAlign: 'center',
  border: 'none',
  backgroundSize: '300% 100%',
  borderRadius: '50px',
  MozTransition: 'all .4s ease-in-out',
  OTransition: 'all .4s ease-in-out',
  WebkitTransition: 'all .4s ease-in-out',
  transition: 'all .4s ease-in-out',
  backgroundImage: 'linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673)',
  boxShadow: '0 4px 15px 0 rgba(49, 196, 190, 0.75)',
};

const handleButtonHover = (e) => {
  e.target.style.backgroundPosition = '100% 0';
};

const handleButtonHoverOut = (e) => {
  e.target.style.backgroundPosition = '0 0';
};

const internshipsOptions = {
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
  const [showComponent, setShowComponent] = useState(false);
  const [displayedHackathons, setDisplayedHackathons] = useState(4);
  const [showAllHackathons, setShowAllHackathons] = useState(false);
  const handleButtonClick = () => {
    setShowComponent(true);
  };

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
  }, []);

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
        <div className="services-area">
          <div className="container">
            <div className="row justify-content-sm-center">
              {servicesData.map((service, index) => (
                <Service
                  key={index}
                  imageSrc={service.imageSrc}
                  imageAlt={service.imageAlt}
                  serviceHeading={service.serviceHeading}
                  serviceDescription={service.serviceDescription}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="courses-area section-padding40 fix">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-7 col-lg-8">
        <div className="section-tittle text-center mb-55">
          <h2>Our Featured Internships</h2>
        </div>
      </div>
    </div>
    <div className="courses-actives">
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
            <Internship
              key={index}
              internshipImage={internship.internshipImage}
              internshipImageAlt={internship.internshipImageAlt}
              internshipCategories={internship.internshipCategories}
              internshipTitle={internship.internshipTitle}
              internshipDescription={internship.internshipDescription}
              internshipRating={internship.internshipRating}
              internshipPayed={internship.internshipPayed}
              internshipPrice={internship.internshipPrice}
              internshipLink={internship.internshipLink}
            />
          ))}
        </OwlCarousel>
      ) : null}
    </div>
  </div>
</div>
<About />
<div className={`${hackathonStyle.hackathonArea} section-padding40`}>
  <div className="  container">
    <div className="row justify-content-center">
      <div className="col-xl-7 col-lg-8">
        <div className="section-tittle text-center mb-55">
          <h2 className="animate-charcter" style={{
            textTransform: 'uppercase',
            backgroundImage: 'linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%)',
            backgroundSize: 'auto auto',
            backgroundClip: 'border-box',
            backgroundSize: '200% auto',
            color: '#fff',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'textclip 2s linear infinite',
            display: 'inline-block',
            fontSize: '29px',
          }}>Explore Top Hackathons</h2>
        </div>
      </div>
    </div>
    <div className="row">
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
          {hackathonsData.map((hackathon, index) => (
            <Hackathon
              key={index}
              hackathonImage={hackathon.hackathonImage}
              hackathonImageAlt={hackathon.hackathonImageAlt}
              hackathonLink={hackathon.hackathonLink}
              hackathonTitle={hackathon.hackathonTitle}
              hackathonDescription={hackathon.hackathonDescription}
            />
          ))}
        </OwlCarousel>
      ) : (
<div className="row">
  {hackathonsData.map((hackathon, index) => (
    <div key={index}>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4">
        <Gridh
          hackathonImage={hackathon.hackathonImage}
          hackathonImageAlt={hackathon.hackathonImageAlt}
          hackathonLink={hackathon.hackathonLink}
          hackathonTitle={hackathon.hackathonTitle}
          hackathonDescription={hackathon.hackathonDescription}
        />
      </div>
      {(index + 1) % 3 === 0 && <div className="w-full"></div>}
    </div>
  ))}
</div>
      )}
    </div>
 

{carousel && (
   <div className="row justify-content-center">
   <div className="col-xl-12">
     <div className="section-tittle text-center mt-20">
       <a  href="/hackathon" className="click"  type="button" style={buttonStyle}
          onMouseOver={handleButtonHover}
          onMouseOut={handleButtonHoverOut}
>
        View More Hackathons
       </a>
     </div>
   </div>
 </div>
   
)}



            {/* <div className="row justify-content-center">
            <Link href="/hackathon">
            <button className="border-btn">View More Hackathons</button>
          </Link>
            </div> */}
          </div>
        </div>
        <section className="about-area3 fix">
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
        {/* <section className='testimonials'>
          <h2>Testimonials</h2>
          <p>Here is what client say to us!</p>
          <ul className='testimonialsList'>
            {carousel === true ? (<OwlCarousel
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
                <Testimonial key={index} testimonialUserName={testimonial.testimonialUserName} testimonialUserHeadline={testimonial.testimonialUserHeadline} testimonialUserImage={testimonial.testimonialUserImage} testimonialRate={testimonial.testimonialRate} testimonialDescription={testimonial.testimonialDescription} />
              ))}

            </OwlCarousel>) : null}
          </ul>
        </section> */}
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
