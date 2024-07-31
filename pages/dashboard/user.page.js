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
import { ToastContainer, toast } from "react-toastify";
import { UserDashboardTour } from "./dashboardTour";

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
  const [user, setUser] = useState({});
  const { isUserLoggedIn, setIsUserLoggedIn } = useAuth();

  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/profile/fetch`,
          { withCredentials: true },
        );
        const userData = response.data;
        setUser(userData);
      } catch (error) {
        toast.error("Error fetching user data");
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    // Function to handle user data from URL
    const checkUserData = async () => {
      const search = window.location.search;
      const params = new URLSearchParams(search);

      const userData = {
        user_id: params.get("user_id"),
        user_name: params.get("user_name"),
        user_email: params.get("user_email"),
        user_picture: params.get("user_picture"),
      };

      const redirectURL = params.get("redirectURL");
      const decodedURL = decodeURIComponent(redirectURL);

      if (userData.user_email) {
        localStorage.setItem("userData", JSON.stringify(userData));
        setUser(userData);
        setIsUserLoggedIn(true);
        if (decodedURL != "null") {
          router.push(decodedURL);
        }
      } else {
        const storedUserData = JSON.parse(localStorage.getItem("userData"));
        if (storedUserData) {
          setUser(storedUserData);
          setIsUserLoggedIn(true);
          if (decodedURL != "null") {
            router.push(decodedURL);
          }
        } else {
          router.push("/auth/login?entityType=user");
        }
      }
    };

    checkUserData();
  }, [router, setIsUserLoggedIn]);

  useEffect(() => {
    // Handle query parameters for setting the component
    const search = window.location.search;
    const params = new URLSearchParams(search);
    setComponent(params.get("tab") || "");
  }, [window.location.search]);

  UserDashboardTour();

  return (
    <>
      <div className="tw-flex tw-w-full" id="homepage">
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
              setUser={setUser}
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
        <ToastContainer />
      </div>
    </>
  );
}

export default userDashboard;
