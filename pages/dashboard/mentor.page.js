import React, { useState, useEffect } from "react";
import Sidebar from "../../components/mentorDashboard/sidebar";
import Profile from "../../components/mentorDashboard/profile";
import Sessions from "../../components/mentorDashboard/sessions";
import Calendar from "../../components/mentorDashboard/calendar";
import Queries from "../../components/mentorDashboard/queries";
import Home from "../../components/mentorDashboard/home";
import Bookings from "../../components/mentorDashboard/Bookings";
import Payments from "../../components/mentorDashboard/Payment";
import ComingSoon from "../../components/basic/ComingSoon";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";
import PreLoader from "../../components/mentorDashboard/PreLoader";

function MentorDashboard() {
  // loading and error state
  const initialState = {
    status: false,
    message: "",
  };
  const [loadingState, setLoadingState] = useState(initialState);
  const [errorState, setErrorState] = useState(initialState);
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
          {(loadingState.status || errorState.status) && (
            <PreLoader loadingState={loadingState} errorState={errorState} />
          )}
          {component === "" && (
            <Home
              setIsSidebarOpen={setIsSidebarOpen}
              isSidebarOpen={isSidebarOpen}
              mentor={mentor}
              setMentor={setMentor}
              setLoadingState={setLoadingState}
              setErrorState={setErrorState}
            />
          )}
          {component === "profile" && (
            <Profile
              isSidebarOpen={isSidebarOpen}
              setLoadingState={setLoadingState}
              setErrorState={setErrorState}
            />
          )}
          {component === "calendar" && (
            <Calendar
              isSidebarOpen={isSidebarOpen}
              setLoadingState={setLoadingState}
              setErrorState={setErrorState}
            />
          )}
          {component === "sessions" && (
            <Sessions
              isSidebarOpen={isSidebarOpen}
              setLoadingState={setLoadingState}
              setErrorState={setErrorState}
            />
          )}
          {component == "queries" && (
            <Queries
              isSidebarOpen={isSidebarOpen}
              setLoadingState={setLoadingState}
              setErrorState={setErrorState}
            />
          )}
          {component == "bookings" && (
            <Bookings
              isSidebarOpen={isSidebarOpen}
              setLoadingState={setLoadingState}
              setErrorState={setErrorState}
            />
          )}
          {component == "payments" && (
            <Payments
              isSidebarOpen={isSidebarOpen}
              setLoadingState={setLoadingState}
              setErrorState={setErrorState}
            />
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
