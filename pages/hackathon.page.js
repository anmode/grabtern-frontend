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

import ClickAwayListener from '@mui/material/ClickAwayListener';

import { useAuth } from "../context/AuthContext";
import DropdownCard from "../components/LoginDropdown";
import Image from "next/image";
import Head from "next/head";
import gstyles from "../styles/gridhackathon.module.css";
import SearchBar from "../components/Searchbar";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import Tooltip from '@mui/material/Tooltip';
// import Hackathons from "./hackathon.page";
import Link from 'next/link';
import styles from "../styles/LoginDropdown.module.css";

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
const navbarBackground=true;
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
  const [scrollY, setScrollY] = useState(0);
  const [navbarAppear, setNavbarAppear] = useState(false);
  const [loginOption, setLoginOption] = useState(false);
  const {
    isMentorLoggedIn,
    setIsMentorLoggedIn,
    isUserLoggedIn,
    setIsUserLoggedIn,
  } = useAuth();
  const userData = JSON.parse(localStorage.getItem("userData"));
  const mentorData = JSON.parse(localStorage.getItem("mentorData"));
  const [searchQuery, setSearchQuery] = useState("");
  const [tagFilter, setTagFilter] = useState("");

  const [HackathonsData, setHackathonsData] = useState(hackathonsData);

  const filteredHackathons = HackathonsData.filter((hackathon) => {
    const tagMatch = hackathon.tags.some((tag) =>
      tag.toLowerCase().includes(tagFilter.toLowerCase())
    );
  console.log(tagFilter);
    if (tagFilter !== "" && !tagMatch) {
      console.log("hpo");
      if (tagFilter === "bookmarked") {
        console.log("hello");
        return (hackathon.bookmarked);
      }
      return false; // Skip the hackathon if it doesn't match the tag filter
    } 
      console.log("pooh");
    const titleMatch = hackathon.hackathonTitle
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
  
    return titleMatch;
    
  });
  
  
  
  
  console.log(filteredHackathons);
  const handleBookmark = (index) => {
    const updatedHackathons = [...HackathonsData];
    console.log(updatedHackathons[index]);
    console.log("hello"+updatedHackathons[index]+ updatedHackathons[index].bookmarked);
    updatedHackathons[index].bookmarked = !updatedHackathons[index].bookmarked;
    console.log("ua"+updatedHackathons[index]+ updatedHackathons[index].bookmarked);
    setHackathonsData(updatedHackathons);
  };
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = (index) => {
    handleBookmark(index);
    setOpen(true);
  };


  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleTagFilter = (tag) => {
    setTagFilter(tag);
  };
  useEffect(() => {
    if (userData?.user_name) {
      setIsUserLoggedIn(true);
    }

    if (mentorData?.mentor_name) {
      setIsMentorLoggedIn(true);
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuToggle = () => {
    if (navbarAppear === true) {
      setNavbarAppear(false);
    } else {
      setNavbarAppear(true);
    }
  };

  const [showComponent, setShowComponent] = useState(false);
  const [displayedHackathons, setDisplayedHackathons] = useState(4);
  const [showAllHackathons, setShowAllHackathons] = useState(false);
  const handleButtonClick = () => {
    setShowComponent(true);
  };


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
    
    <div className="header-area header-transparent tw-z-[999]">
      <div className="main-header ">
        <div
          className={`header-bottom  header-sticky ${
            scrollY > 400
              ? "sticky-bar"
              : navbarBackground === true
              ? "sticky-bar"
              : ""
          }`}
          style={{ transition: "all 0.5s ease-in" }}
        >
          <div className="container-fluid">
            <div className="row align-items-center justify-content-between">
              <div>
                <div className="logo">
                  <a href="/">
                    <Image
                      width={80}
                      height={80}
                      src="/whitelogo.webp"
                      style={{ padding: "15px 0" }}
                      alt="grabtern_logo"
                    />
                  </a>
                </div>
              </div>
              <div className="col-xl-10 col-lg-10">
                <div className="menu-wrapper d-flex align-items-center justify-content-end">
                  <div
                    className={`main-menu d-none d-lg-block ${
                      navbarAppear === true ? "active" : ""
                    }`}
                  >
                    <nav>
                      <ul id="navigation" className="navigation">
                        <li className="active">
                          <a href="/" className={styles.navLink}>
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="/mentors" className={styles.navLink}>
                            Mentors
                          </a>
                        </li>
                        <li>
                          <a href="/contact" className={styles.navLink}>
                            Contact
                          </a>
                        </li>
                        <DropdownCard
                          isUserLoggedIn={isUserLoggedIn}
                          isMentorLoggedIn={isMentorLoggedIn}
                        />
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div
                className={`menuToggle ${
                  navbarAppear === true ? "active" : ""
                }`}
                onClick={() => menuToggle()}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <main>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <div className="bg-gray-100 py-8 flex justify-center items-center mt-8">
        <div className="container mx-auto">
          <div className="text-center mb-8 flex flex-col items-center">
            <h2
              className="animate-charcter"
              style={{
                textTransform: "uppercase",
                backgroundImage:
                  "linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%)",
                backgroundSize: "auto auto",
                backgroundClip: "border-box",
                backgroundSize: "200% auto",
                color: "#fff",
                backgroundClip: "text",
                textFillColor: "transparent",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "textclip 2s linear infinite",
                display: "inline-block",
                fontSize: "29px",
              }}
            >
              Explore Top Hackathons Now
            </h2>
            <div className="mb-4 p-4">
              <SearchBar
                setSearchQuery={setSearchQuery}
                handleTagFilter={handleTagFilter}
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center">
            {filteredHackathons.map((hackathon, index) => (
              <div
                className={`${gstyles.singleHackathon} bg-white p-4 rounded border border-gray-200 hover:shadow-md mx-4 my-2`}
                key={index}
              >
                {/* Bookmark Icon */}
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <button
                    className={`${
                      hackathon.bookmarked ? "text-red-500" : "text-gray-500"
                    }`}
                    onClick={() => handleTooltipOpen(index)}
                  >
                    {hackathon.bookmarked ? (
                                <ClickAwayListener onClickAway={handleTooltipClose}>
                                <div>
                                <Tooltip  placement="left"  sx={{[`& .MuiTooltip-tooltip`]: {    
                        fontFamily: "'Grape Nuts', Helvetica",
                        color: "deepskyblue",
                        backgroundColor: "red",
                      }}}title={<h2
                        className="animate-charcter"
                       
                        style={{
                          textTransform: "uppercase",
                          backgroundImage:
                            "linear-gradient(#3bff3e,#3bff3e)",
                          backgroundSize: "auto auto",
                          backgroundClip: "border-box",
                          backgroundSize: "200% auto",
                          color: "#FEE715",
                          backgroundClip: "text",
                          textFillColor: "transparent",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          animation: "textclip 2s linear infinite",
                          display: "inline-block",
                          fontSize: "29px",
                        }}
                      >Remove</h2>} >
                      <BookmarkOutlinedIcon
                        className="h-6 w-6"
                        sx={{ fontSize: 40 }}
                        style={{ fill: "red" }}
                      />
                      </Tooltip>
                                </div>
                              </ClickAwayListener>

                    ) : (
<Tooltip  placement="left"  sx={{[`& .MuiTooltip-tooltip`]: {    
                        fontFamily: "'Grape Nuts', Helvetica",
                        color: "deepskyblue",
                        backgroundColor: "red",
                      }}}title={<h2
                        className="animate-charcter"
                       
                        style={{
                          textTransform: "uppercase",
                          backgroundImage:
                            "linear-gradient(#3bff3e,#3bff3e)",
                          backgroundSize: "auto auto",
                          backgroundClip: "border-box",
                          backgroundSize: "200% auto",
                          color: "#FEE715",
                          backgroundClip: "text",
                          textFillColor: "transparent",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          animation: "textclip 2s linear infinite",
                          display: "inline-block",
                          fontSize: "29px",
                        }}
                      >Save it</h2>} >
                                              <BookmarkBorderOutlinedIcon
                        className="h-6 w-6"
                        sx={{ fontSize: 40 }}
                        style={{ fill: "red" }}
                      />
                      </Tooltip>
                    

                    )}
                  </button>
                </div>

                {/* Hackathon Content */}
                <div className={`${gstyles.hackathonImg}`}>
                  <Image
                    className="object-cover w-full h-full rounded"
                    src={hackathon.hackathonImage}
                    alt={hackathon.hackathonImageAlt}
                    width={364}
                    height={260}
                  />
                </div>
                <div className={`${gstyles.hackathonContentBox}`}>
                  <div className={`${gstyles.hackathonContent}`}>
                    <h3 className="text-lg font-bold ">
                      <a
                        href={hackathon.hackathonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white-500 hover:underline"
                      >
                        {hackathon.hackathonTitle}
                      </a>
                    </h3>
                    <p className="text-gray-700 ">
                      {hackathon.hackathonDescription}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    
   
        
      </main>
      <Footer />
    </div>
  );
}