import { useState, useEffect } from "react";
import { RxRocket } from "react-icons/rx";
import { toast } from "react-toastify";
import axios from "axios";
import { logout } from "../../layout/UserProfile";
import { useRouter } from "next/router";
import { useAuth } from "../../../context/AuthContext";

const PublishProfile = ({ isSidebarOpen, className }) => {
  const [isPublished, setIsPublished] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { setIsMentorLoggedIn, setIsUserLoggedIn } = useAuth();

  async function handleLogout() {
    const success = await logout(router);
    if (success) {
      localStorage.clear();
      setIsMentorLoggedIn(false);
      setIsUserLoggedIn(false);

      if (router.pathname === "/") {
        router.reload();
      } else {
        router.push("/");
      }
    }
  }

  const Publish = async () => {
    setIsLoading(true);
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/publishProfile`;
    try {
      await axios.put(url, {}, { withCredentials: true });
      setIsPublished(true);
      setIsLoading(false);
      toast.success("You Profile published successfully");
    } catch (error) {
      setIsLoading(false);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred while publishing your profile.");
      }
    }
  };

  const UnPublish = async () => {
    setIsLoading(true);
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/unpublishProfile`;
    try {
      await axios.put(url, {}, { withCredentials: true });
      setIsPublished(false);
      setIsLoading(false);
      toast.success("You Profile is unpublished now");
    } catch (error) {
      setIsLoading(false);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred while unpublishing your profile.");
      }
    }
  };

  const getIsPublished = async () => {
    setIsLoading(true);
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/getIsProfilePublished`;
    try {
      const response = await axios.get(url, { withCredentials: true });
      setIsPublished(response.data.isProfilePublished);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.response.status);
      if (error.response.status === 401) {
        handleLogout();
      } else if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred while getting your profile status.");
      }
    }
  };

  // getting state of profile on load
  useEffect(() => {
    getIsPublished();
  }, []);

  return (
    <div
      onClick={() => {
        if (!isLoading) {
          isPublished ? UnPublish() : Publish();
        }
      }}
      className={`tw-group tw-p-4 tw-flex tw-justify-center ${
        isSidebarOpen && "tw-gap-4"
      } ${className} tw-items-center tw-mt-10 tw-rounded-md tw-transition-all tw-duration-150 tw-ease-in-out tw-bg-white tw-cursor-pointer`}
      id="publishProfile"
    >
      <RxRocket className="group-hover:tw-text-primary-100 tw-text-xl" />
      <span
        className={`${
          isSidebarOpen
            ? "tw-block group-hover:tw-text-primary-100"
            : "tw-hidden"
        }`}
      >
        {isPublished ? "Unpublish your profile" : "Publish your profile"}
      </span>
    </div>
  );
};

export default PublishProfile;
