import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FcReadingEbook } from "react-icons/fc";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

async function logout(router) {
  try {
    const { data: res } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/logout`,
      {},
      {
        withCredentials: true,
      },
    );
    setTimeout(() => {
      toast.success(res);
    }, 2000);

    return true;
  } catch (error) {
    console.error("Logout error:", error);
    return false;
  }
}

export { logout };

function UserProfile() {
  const [dropDown, setDropDown] = useState(false);
  const {
    isMentorLoggedIn,
    setIsMentorLoggedIn,
    isUserLoggedIn,
    setIsUserLoggedIn,
  } = useAuth();
  const toggleDropdown = () => setDropDown(!dropDown);
  const dropdownRef = useRef(null);
  const router = useRouter();

  async function handleLogout() {
    const success = await logout(router);

    if (success) {
      localStorage.clear();
      setIsMentorLoggedIn(false);
      setIsUserLoggedIn(false);

      if (router.pathname === "/") {
        router.reload(); // You can use router.reload() instead of window.location.reload()
      } else {
        router.push("/");
      }
    }
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      // console.log("Clicked outside:", event.target);
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Determine the dashboard route based on logged-in user type
  let dashboardRoute = "/dashboard/user";
  if (isMentorLoggedIn) {
    dashboardRoute = "/dashboard/mentor";
  }

  //Decrypt Data:
  const decryptedData = JSON.parse(
    localStorage.getItem("userData") || localStorage.getItem("mentorData"),
  );
  // console.log(decryptedData);
  //Get the profile picture URL based on login status
  const userProfilePicture = isUserLoggedIn
    ? decryptedData?.user_picture
    : null;
  const mentorProfilePicture = isMentorLoggedIn
    ? decryptedData?.mentor_picture
    : null;

  return (
    <>
      <ToastContainer />
      <div className="tw-relative" onClick={toggleDropdown}>
        {/* Conditionally render profile pictures */}
        {userProfilePicture || mentorProfilePicture ? (
          <div>
            {isUserLoggedIn && userProfilePicture ? (
              <img
                src={userProfilePicture}
                alt="User Profile"
                className="tw-h-9 tw-rounded-full tw-cursor-pointer tw-mx-auto"
              />
            ) : isMentorLoggedIn && mentorProfilePicture ? (
              <img
                src={mentorProfilePicture}
                alt="Mentor Profile"
                className="tw-h-9 tw-rounded-full tw-cursor-pointer tw-mx-auto"
              />
            ) : (
              <FcReadingEbook className="tw-h-9 tw-bg-white tw-rounded-full tw-px-0.5 tw-w-9 tw-cursor-pointer tw-mx-auto" />
            )}
          </div>
        ) : (
          <div>
            <FcReadingEbook className="tw-h-9 tw-bg-white tw-rounded-full tw-px-0.5 tw-w-9 tw-cursor-pointer tw-mx-auto" />
          </div>
        )}
        {/* dropdown */}
        {dropDown && (
          <div
            ref={dropdownRef}
            className="tw-grid tw-p-2 tw-bg-base-100 tw-rounded-lg tw-shadow-md tw-absolute -tw-left-[100%] tw-top-[120%]"
          >
            <Link
              href={dashboardRoute}
              className="tw-p-2 tw-pb-1 hover:tw-text-primary-100 tw-border-b tw-border-base-300 tw-font-normal"
            >
              Dashboard
            </Link>
            <button
              className="tw-p-2 tw-pt-1 hover:tw-text-primary-100 tw-font-normal"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default UserProfile;
