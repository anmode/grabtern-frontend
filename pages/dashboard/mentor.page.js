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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MentorDashboardTour } from "./dashboardTour";

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
  const { isMentorLoggedIn, setIsMentorLoggedIn } = useAuth();

  const router = useRouter();

  useEffect(() => {
    const checkMentorData = async () => {
      const search = window.location.search;
      const params = new URLSearchParams(search);

      const mentorData = {
        mentor_name: params.get("mentor_name"),
        mentor_email: params.get("mentor_email"),
        mentor_picture: params.get("mentor_picture"),
        mentor_username: params.get("mentor_username"),
      };

      const redirectURL = params.get("redirectURL");
      const decodedURL = decodeURIComponent(redirectURL);

      if (mentorData.mentor_email) {
        localStorage.setItem("mentorData", JSON.stringify(mentorData));
        setMentor(mentorData);
        setIsMentorLoggedIn(true);
        if (decodedURL != "null") {
          router.replace(decodedURL);
        }
      } else {
        const storedMentorData = JSON.parse(localStorage.getItem("mentorData"));
        if (storedMentorData) {
          setMentor(storedMentorData);
          setIsMentorLoggedIn(true);
          if (decodedURL != "null") {
            router.replace(decodedURL);
          }
        } else {
          router.push("/auth/login?entityType=mentor");
        }
      }
    };

    checkMentorData();
  }, [router, setIsMentorLoggedIn]);

  useEffect(() => {
    // Handle query parameters for setting the component
    const search = window.location.search;
    const params = new URLSearchParams(search);
    setComponent(params.get("tab") || "");
  }, [window.location.search]);

  MentorDashboardTour();

  if (!isMentorLoggedIn) {
    return null;
  }

  return (
    <>
      <ToastContainer />
      <div className="tw-flex tw-w-full" id="mentorHome">
        <Sidebar
          mentor={mentor}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <div
          className={`tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center ${
            isSidebarOpen
              ? "tw-transition-all tw-ease-in-out md:tw-ml-[265px]"
              : "tw-duration-200 tw-transition-all tw-ease-in-out md:tw-ml-[72px]"
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
              setMentor={setMentor}
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
