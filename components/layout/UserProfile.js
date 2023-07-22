import { useState } from "react";
import Link from "next/link";
import { FcReadingEbook } from "react-icons/fc";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";
import { encryptData, decryptData } from "../../hook/encryptDecrypt";

function UserProfile() {
  const router = useRouter();
  const [dropDown, setDropDown] = useState(false);
  const toggleDropdown = () => setDropDown(!dropDown);
  const {
    isMentorLoggedIn,
    setIsMentorLoggedIn,
    isUserLoggedIn,
    setIsUserLoggedIn,
  } = useAuth();

  function logout() {
    localStorage.clear();
    setIsMentorLoggedIn(false);
    setIsUserLoggedIn(false);
    if (router.pathname === "/") {
      window.location.reload();
    } else {
      router.push("/");
    }
  }

  //Decrypt Data:
  const decryptedData = decryptData(
    localStorage.getItem("userData") || localStorage.getItem("mentorData"),
  );
  console.log(decryptedData);
  //Get the profile picture URL based on login status
  const userProfilePicture = isUserLoggedIn ? decryptedData.user_picture : null;
  const mentorProfilePicture = isMentorLoggedIn ? decryptedData.image : null;

  return (
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
        <div className="tw-grid tw-p-2 tw-bg-base-100 tw-rounded-lg tw-shadow-md tw-absolute -tw-left-[100%] tw-top-[120%]">
          <Link
            href="/dashboard"
            className="tw-p-2 tw-pb-1 hover:tw-text-primary-100 tw-border-b tw-font-normal"
          >
            Dashboard
          </Link>
          <button
            className="tw-p-2 tw-pt-1 hover:tw-text-primary-100 tw-font-normal"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
