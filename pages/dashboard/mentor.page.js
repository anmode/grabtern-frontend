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
import Image from "next/image";
import { useTour } from "@reactour/tour";
import logo from "../../public/logo.png";

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
      setMentor(mentorData);
      setIsMentorLoggedIn(true); // Set mentorLoggedIn to true
    } else {
      router.push("/auth/login?entityType=mentor");
    }
  }, [window.location.search, history]);

  //guided tour

  const { setIsOpen, setSteps, setCurrentStep } = useTour();

  useEffect(() => {
    setCurrentStep(0);
    const mentorTour = localStorage.getItem("mentorTour");
    if (mentorTour) return;
    setIsOpen(true);

    setSteps([
      {
        selector: "#mentorHome",
        content: (
          <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
            <div className="tw-flex tw-justify-center tw-items-center">
              <Image src={logo} width={60} height={60} />
            </div>
            <p className="tw-text-black">Welcome to the mentor dashboard</p>
            <div className="tw-flex tw-justify-center tw-items-center">
              <span className="tw-font-bold tw-text-xl">GrabTern</span>
            </div>
          </div>
        ),
      },
      {
        selector: "#mentorSidebar",
        content:
          "This is the sidebar. You can navigate to other pages from here.",
      },
      {
        selector: "#publishProfile",
        content: "You can publish or unpublish your profile from here.",
      },
      {
        selector: "#mentorSidebarToggle",
        content: "You can toggle the sidebar from here.",
      },
      {
        selector: "#mentorProfile",
        content: "This is your profile. You can edit your profile from here.",
      },
      {
        selector: "#mentorHomepage",
        content:
          "This is your homepage. You can view your bookings and sessions from here.",
      },
      {
        selector: "#mentorBookings",
        content: "This is your bookings. You can view your bookings from here.",
      },
      {
        selector: "#mentorSessions",
        content: "This is your sessions. You can view your sessions from here.",
      },
      {
        selector: "#mentorQueries",
        content: "This is your queries. You can view your queries from here.",
      },
      {
        selector: "#mentorCalendar",
        content: "This is your calendar. You can view your sessions from here.",
      },
      {
        selector: "#mentorServices",
        content: "This is your services. You can view your services from here.",
      },
      {
        selector: "#mentorPayments",
        content:
          "This is your payments. You can view and manage your payments from here.",
      },
      {
        selector: "#mentorWhatsNew",
        content:
          "This is your what's new. You can view your what's new from here.",
      },
      {
        selector: "#mentorReferral",
        content:
          "This is your referral. You can view your referrals from here, Refer and Earn.",
      },
      {
        selector: "#mentorRewards",
        content: "This is your rewards. You can view your rewards from here.",
      },
      {
        selector: "#mentorNotifications",
        content:
          "This is your notifications. You can view your notifications from here.",
      },
      {
        selector: "#mentorLogout",
        content: "This is your logout. You can logout from here.",
      },
      {
        selector: "#mentorHome",
        content: (
          <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
            <div className="tw-flex tw-justify-center tw-items-center">
              <Image src={logo} width={60} height={60} />
            </div>
            <p className="tw-text-black">Have a great time</p>
            <div className="tw-flex tw-justify-center tw-items-center">
              <span className="tw-font-bold tw-text-xl">GrabTern</span>
            </div>
          </div>
        ),
      },
    ]);

    localStorage.setItem("mentorTour", true);
  }, []);

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
