import React, { useState, useEffect } from "react";
import Sidebar from "../../components/mentorDashboard/sidebar";
import Profile from "../../components/mentorDashboard/profile";
import Sessions from "../../components/mentorDashboard/sessions";
import Calendar from "../../components/mentorDashboard/calendar";
import Queries from "../../components/mentorDashboard/queries";
import Home from "../../components/mentorDashboard/home";
import Header from "../../components/layout/Header";
import Bookings from "../../components/mentorDashboard/Bookings";
import Payments from "../../components/mentorDashboard/Payment";
import ComingSoon from "../../components/basic/ComingSoon";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";

function MentorDashboard() {
  // getting page name on change in tab
  const [component, setComponent] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mentor, setMentor] = useState({});
  const {
    isMentorLoggedIn,
    setIsMentorLoggedIn,
    isUserLoggedIn,
    setIsUserLoggedIn,
  } = useAuth();

  const router = useRouter();

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    setComponent(params.get("tab") || "");

    const mentorData = localStorage.getItem("mentorData");

    if (mentorData) {
      setIsMentorLoggedIn(true); // Set mentorLoggedIn to true
    } else {
      router.push("/auth/login?entityType=mentor");
    }
  }, [window.location.search, history]);

  if (!isMentorLoggedIn) {
    return null;
  }

  return (
    <>
      <div className="tw-flex">
        {/* <Header navbarBackground={true} /> */}
        <Sidebar
          mentor={mentor}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <div
          className={`tw-flex tw-flex-col tw-justify-center tw-items-center ${
            isSidebarOpen
              ? "tw-translate-x-36 tw-duration-200 tw-transition-all tw-ease-in-out"
              : "tw-translate-0 tw-duration-200 tw-transition-all tw-ease-in-out tw-pl-5"
          }`}
        >
          {component === "" && (
            <Home
              setIsSidebarOpen={setIsSidebarOpen}
              isSidebarOpen={isSidebarOpen}
              mentor={mentor}
              setMentor={setMentor}
            />
          )}
          {component === "profile" && <Profile isSidebarOpen={isSidebarOpen} />}
          {component === "calendar" && (
            <Calendar isSidebarOpen={isSidebarOpen} />
          )}
          {component === "sessions" && (
            <Sessions isSidebarOpen={isSidebarOpen} />
          )}
          {component == "queries" && <Queries isSidebarOpen={isSidebarOpen} />}
          {component == "bookings" && (
            <Bookings isSidebarOpen={isSidebarOpen} />
          )}
          {component == "payments" && (
            <Payments isSidebarOpen={isSidebarOpen} />
          )}
          {["services", "new", "referral", "rewards"].includes(component) && (
            <ComingSoon isSidebarOpen={isSidebarOpen} />
          )}
        </div>
      </div>
    </>
  );
}

export default MentorDashboard;
