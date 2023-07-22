import { useState } from "react";
import Link from "next/link";
import { FcReadingEbook } from "react-icons/fc";
import { useRouter } from "next/router";

function UserProfile() {
  const router = useRouter(); 
  const [dropDown, setDropDown] = useState(false);
  const toggleDropdown = () => setDropDown(!dropDown);

  function logout() {
    localStorage.clear();
    router.push("/");
    window.location.reload();
  };

  return (
    <div className="tw-relative" onClick={toggleDropdown}>
      {/* profile icon */}
      <div>
        <FcReadingEbook className="tw-h-9 tw-bg-white tw-rounded-full tw-px-0.5 tw-w-9 tw-cursor-pointer tw-mx-auto" />
      </div>
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
