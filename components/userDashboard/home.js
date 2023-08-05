import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiSolidUser } from "react-icons/bi";
import {
  MdNotifications,
  MdPayment,
  MdOutlineNotificationsNone,
} from "react-icons/md";

const Home = ({ setComponent, setIsSidebarOpen, user }) => {
  const [Notification, setNotification] = useState(false);
  const [mobileNotification, setMobileNotification] = useState(false);

  const reference = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        Notification &&
        reference.current &&
        !reference.current.contains(e.target)
      ) {
        setNotification(false);
        setMobileNotification(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [Notification]);

  return (
    <>
      <header className="max-[762px]:tw-justify-center max-[762px]:tw-items-center tw-gap-4 tw-py-10 min-[513px]:tw-pl-28 min-[513px]:tw-pr-12 tw-flex tw-justify-between tw-flex-wrap max-[512px]:tw-flex-col">
        <h1 className="tw-text-4xl tw-font-bold">
          Welcome <span>{user.name?.split(" ")[0]}</span>!
        </h1>{" "}
        {/* User = USER's NAME */}
        <div className="tw-flex tw-justify-center tw-items-center tw-gap-2 min-[513px]:tw-pl-10">
          {user ? (
            <p className="tw-flex tw-justify-center tw-gap-2 tw-bg-primary-100 hover:tw-bg-primary-200 tw-cursor-pointer tw-transition-all tw-duration-200 tw-ease-in-out tw-p-2 tw-rounded-md tw-items-center">
              <h2 className="tw-font-semibold tw-text-white">{user.name}</h2>
              <Image
                src={user?.image}
                alt="Picture of the user"
                width={30}
                height={30}
                className="tw-rounded-full"
              />
            </p>
          ) : (
            <p className="tw-flex tw-justify-center tw-gap-2 tw-bg-primary-100 hover:tw-bg-primary-200 tw-cursor-pointer tw-transition-all tw-duration-200 tw-ease-in-out tw-p-2 tw-rounded-md tw-items-center">
              <h2 className="tw-font-semibold tw-text-white">User</h2>
              <BiSolidUser className="tw-w-7 tw-h-7 tw-text-[#FBEAFF]" />
            </p>
          )}

          {/* Notification */}
          <div
            title="Notifications"
            className="tw-cursor-pointer tw-transition-all tw-duration-200 tw-ease-in-out hover:tw-bg-primary-200 tw-bg-primary-100 tw-justify-center tw-items-center tw-relative tw-p-2 tw-rounded-md"
          >
            {Notification || mobileNotification ? (
              <MdOutlineNotificationsNone
                onClick={() => {
                  setNotification(false);
                  setMobileNotification(false);
                }}
                className="tw-w-[30px] tw-h-[30px] tw-text-[#FBEAFF]"
              />
            ) : (
              <MdNotifications
                onClick={() => {
                  setNotification(true);
                  setMobileNotification(true);
                }}
                className="tw-w-[30px] tw-h-[30px] tw-text-[#FBEAFF]"
              />
            )}
          </div>
          {Notification && (
            // Notification Pop-up for devices with width > 512px
            <div
              ref={reference}
              className="tw-z-50 tw-absolute tw-top-[90px] tw-right-[47px] tw-w-[300px] tw-h-[500px] tw-bg-[#FBEAFF] tw-rounded-md tw-shadow-xl tw-p-4 tw-flex tw-flex-col tw-gap-2 tw-overflow-y-scroll max-[512px]:tw-hidden max-[696px]:tw-top-[150px] max-[696px]:tw-right-[200px]"
            >
              <h2 className="tw-text-2xl tw-font-semibold tw-text-center tw-mb-5">
                Notifications
              </h2>
              <p className="tw-text-lg tw-font-medium tw-text-center">
                Coming Soon...
              </p>
            </div>
          )}
        </div>
      </header>

      <main className="max-[512px]:tw-pl-6 tw-pb-14 tw-pl-28 tw-flex tw-flex-col max-[708px]:tw-justify-center max-[708px]:tw-items-center">
        <p className="tw-flex tw-justify-start tw-items-center tw-text-center tw-text-xl tw-font-semibold">
          Here you can view your bookings and other important information.
        </p>
        <div className="tw-flex-wrap tw-mt-10 tw-flex tw-gap-10 max-[762px]:tw-justify-center max-[762px]:tw-items-center max-[600px]:tw-flex-col">
          <div className="tw-w-[300px] tw-flex-wrap tw-bg-white tw-shadow-xl tw-gap-2 tw-p-6 tw-flex tw-justify-around tw-items-center tw-rounded-md hover:tw-scale-110 tw-ease-in-out tw-duration-150 tw-transition-all max-[752px]:tw-w-[500px] max-[686px]:tw-w-[400px] max-[512px]:tw-w-[300px]">
            <div className="tw-justify-center tw-items-center tw-flex tw-flex-col tw-gap-2 tw-w-full">
              <div className="tw-flex tw-justify-center tw-gap-2 tw-mt-2">
                <h2 className="tw-font-semibold tw-text-xl">Your Bookings</h2>
              </div>
            </div>
            <div className="tw-p-2 tw-text-center tw-relative tw-rounded-md tw-font-semibold hover:tw-bg-primary-200 tw-transition-all tw-duration-150 tw-cursor-pointer tw-ease-in-out tw-w-full tw-bg-primary-100">
              <Link href={`/dashboard/user/bookings`}>
                <p className="tw-text-white">View Bookings</p>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
