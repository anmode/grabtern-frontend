import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/userDashboard/sidebar";
import Profile from "../../components/userDashboard/profile";
import Bookings from "../../components/userDashboard/Bookings";
import Home from "../../components/userDashboard/home";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";
import ComingSoon from "../../components/basic/ComingSoon";
import PreLoader from "../../components/mentorDashboard/PreLoader";

function userDashboard() {
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
  const [user, setuser] = useState({});
  const { isUserLoggedIn, setIsUserLoggedIn } = useAuth();

  const router = useRouter();

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    setComponent(params.get("tab") || "");

    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setIsUserLoggedIn(true);
    } else {
      router.push("/auth/login?entityType=user");
    }
  }, [window.location.search]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/profile/fetch`,
          { withCredentials: true },
        );
        const userData = response.data;
        setuser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <div className="tw-flex tw-w-full">
        <Sidebar
          user={user}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <div
          className={`tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center ${
            isSidebarOpen
              ? "tw-transition-all tw-ease-in-out md:tw-ml-[176px]"
              : "tw-duration-200 tw-transition-all tw-ease-in-out md:tw-ml-[70px]"
          }`}
        >
          {(loadingState.status || errorState.status) && (
            <PreLoader loadingState={loadingState} errorState={errorState} />
          )}
          {component === "" && (
            <Home
              setIsSidebarOpen={setIsSidebarOpen}
              isSidebarOpen={isSidebarOpen}
              user={user}
            />
          )}
          {component === "profile" && (
            <Profile
              isSidebarOpen={isSidebarOpen}
              setLoadingState={setLoadingState}
              setErrorState={setErrorState}
              user={user}
              setUser={setuser}
            />
          )}
          {component == "bookings" && (
            <Bookings
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

export default userDashboard;
