import Header from "../components/layout/Header";
import hackathonsData from "./data/hackathonsData";
import Footer from "../components/layout/Footer";
import dynamic from "next/dynamic";
import GalleryCard from "../components/GalleryCard";

import ClickAwayListener from "@mui/material/ClickAwayListener";

import { useAuth } from "../context/AuthContext";
import DropdownCard from "../components/basic/LoginDropdown";
import Image from "next/image";
import Head from "next/head";
import { MdCreate } from "react-icons/md";
// import gstyles from "../styles/gridhackathon.module.css";
import SearchBar from "../components/hackthons/components/Searchbar";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import Tooltip from "@mui/material/Tooltip";
// import Hackathons from "./hackathon.page";
import Link from "next/link";
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
import { encryptData, decryptData } from "../hook/encryptDecrypt";
import AddHackathon from "../components/AddHackathon";

const buttonStyle = {
  width: "200px",
  fontSize: "16px",
  fontWeight: 600,
  color: "#fff",
  cursor: "pointer",
  margin: "20px",
  height: "55px",
  textAlign: "center",
  border: "none",
  backgroundSize: "300% 100%",
  borderRadius: "50px",
  MozTransition: "all .4s ease-in-out",
  OTransition: "all .4s ease-in-out",
  WebkitTransition: "all .4s ease-in-out",
  transition: "all .4s ease-in-out",
  backgroundImage:
    "linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673)",
  boxShadow: "0 4px 15px 0 rgba(49, 196, 190, 0.75)",
};
const navbarBackground = true;
const handleButtonHover = (e) => {
  e.target.style.backgroundPosition = "100% 0";
};

const handleButtonHoverOut = (e) => {
  e.target.style.backgroundPosition = "0 0";
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
  const userData = decryptData(localStorage.getItem("userData"));
  const mentorData = decryptData(localStorage.getItem("mentorData"));
  const [searchQuery, setSearchQuery] = useState("");
  const [tagFilter, setTagFilter] = useState(["All"]);
  const [HackathonsData, setHackathonsData] = useState(hackathonsData);
  const [filterHack, setFilterHack] = useState(hackathonsData);
  const [showAddHackathonModal, setShowAddHackathonModal] = useState(false);

  const filteredHackathons = HackathonsData.filter((hackathon) => {
    const tagMatch = tagFilter.every((tag) => hackathon.tags.includes(tag));

    if (tagFilter.toString() === "All") {
      const titleMatch = hackathon.hackathonTitle
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return titleMatch && true;
    } else {
      if (tagFilter.toString() !== "" && !tagMatch) {
        if (tagFilter === "bookmarked") {
          if (searchQuery != " ") {
            const titleMatch = hackathon.hackathonTitle
              .toLowerCase()
              .includes(searchQuery.toLowerCase());

            return titleMatch && hackathon.bookmarked;
          }
          return hackathon.bookmarked;
        }
        return false;
      } // Skip the hackathon if it doesn't match the tag filter
    }
    // console.log("pooh");
    const titleMatch = hackathon.hackathonTitle
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return titleMatch;
  });

  useEffect(() => {
    // if (tagFilter.includes("All") && tagFilter.length === 1) {
    //   setFilterHack(hackathonsData)
    // }
    setFilterHack(
      filteredHackathons.length !== 0 ||
        (!tagFilter.includes("All") && tagFilter.length < 2)
        ? filteredHackathons
        : hackathonsData,
    );
  }, []);

  // console.log(filteredHackathons);
  const handleBookmark = (index) => {
    const updatedHackathons = [...HackathonsData];
    console.log(updatedHackathons[index]);
    // console.log("hello" + updatedHackathons[index] + updatedHackathons[index].bookmarked);
    updatedHackathons[index].bookmarked = !updatedHackathons[index].bookmarked;
    // console.log("ua" + updatedHackathons[index] + updatedHackathons[index].bookmarked);
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
  const HackathonLabels = [
    "web",
    "upcoming",
    "Beginner Friendly",
    "Programming",
    "Blockchain",
  ];

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
      <Header isUserLoggedIn={isUserLoggedIn} />

      <main className="tw-w-full tw-max-w-7xl tw-mx-auto">
        <div className={`${hackathonStyle.hackathonArea} section-padding40`}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8">
                <div className="section-tittle text-center mb-55">
                  <h2 style={{ color: "#845ec2" }}>Explore Top Hackathons</h2>
                </div>
              </div>
            </div>
            <div className="tw-mb-4">
              <SearchBar
                setSearchQuery={setSearchQuery}
                handleTagFilter={handleTagFilter}
                tagFilter={tagFilter}
                HackathonLabels={HackathonLabels}
              />
            </div>
            <div
              onClick={() => setShowAddHackathonModal(true)}
              className="tw-mb-10 tw-text-sm tw-inline-flex tw-gap-2 tw-max-w-max tw-px-4 tw-py-2 mt-2 tw-items-center tw-justify tw-border tw-border-[#845ec2] tw-text-[#845ec2] tw-rounded hover:tw-text-white hover:tw-bg-[#845ec2] hover:tw-cursor-pointer tw-transition-all tw-duration-300 md:tw-text-base"
            >
              <div>
                <MdCreate />
              </div>
              <button className="">Add New</button>
            </div>
            {showAddHackathonModal && (
              <AddHackathon handleShow={setShowAddHackathonModal} />
            )}
            <div className="row">
              {filteredHackathons.map((hackathon, index) => (
                <GalleryCard
                  isInternship={false}
                  key={index}
                  hackathonImage={hackathon.hackathonImage}
                  hackathonImageAlt={hackathon.hackathonImageAlt}
                  hackathonLink={hackathon.hackathonLink}
                  hackathonTitle={hackathon.hackathonTitle}
                />
              ))}
            </div>
            {/* <div className="row justify-content-center">
              <div className="col-xl-12">
                <div className="section-tittle text-center mt-20">
                  <a href="/hackathon" className="border-btn">
                    View More Hackathons
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
