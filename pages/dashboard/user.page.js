import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Sidebar from "../../components/userDashboard/sidebar";
import Profile from "../../components/userDashboard/profile";
import Bookings from "../../components/userDashboard/Bookings";
import Application from "../../components/userDashboard/application";
import Home from "../../components/userDashboard/home";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";
import ComingSoon from "../../components/basic/ComingSoon";
import PreLoader from "../../components/mentorDashboard/PreLoader";
import { ToastContainer, toast } from "react-toastify";
import { UserDashboardTour } from "./dashboardTour";

function UserDashboard() {
  const [loadingState, setLoadingState] = useState({
    status: false,
    message: "",
  });
  const [errorState, setErrorState] = useState({ status: false, message: "" });
  const [component, setComponent] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState({});
  const { setIsUserLoggedIn } = useAuth();
  const router = useRouter();

  const fetchUser = useCallback(async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/profile/fetch`,
        { withCredentials: true },
      );
      const userData = response.data;
      const decodedURL = decodeURIComponent(router.query.redirect || "null");

      if (userData.email) {
        const localStorageUserData = {
          user_picture: userData.image,
          user_email: userData.email,
          user_name: userData.fullName,
        };
        localStorage.setItem("userData", JSON.stringify(localStorageUserData));
        setUser(userData);
        setIsUserLoggedIn(true);
      } else {
        const storedUserData = JSON.parse(localStorage.getItem("userData"));
        if (storedUserData) {
          setUser(storedUserData);
          setIsUserLoggedIn(true);
        } else {
          router.push("/auth/login?entityType=user");
        }
      }

      if (decodedURL !== "null") {
        router.push(decodedURL);
      }
    } catch (error) {
      toast.error("Error fetching user data");
      console.error("Error fetching user data:", error);
    }
  }, [router, setIsUserLoggedIn, setUser, toast]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setComponent(params.get("tab") || "");
  }, [router.query]);

  UserDashboardTour();

  return (
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
        {component === "bookings" && (
          <Bookings
            isSidebarOpen={isSidebarOpen}
            setLoadingState={setLoadingState}
            setErrorState={setErrorState}
          />
        )}
        {component === "application" && (
          <Application
            isSidebarOpen={isSidebarOpen}
            setLoadingState={setLoadingState}
            setErrorState={setErrorState}
            user={user}
            setUser={setUser}
          />
        )}
        {["services", "new", "referral", "rewards"].includes(component) && (
          <ComingSoon isSidebarOpen={isSidebarOpen} />
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default UserDashboard;
