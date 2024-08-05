import axios from "axios";
import { set } from "js-cookie";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import TableComponent from "../basic/TableComponent";

const Bookings = () => {
  const [activeTab, setActiveTab] = useState("Pending");

  const tabs = ["Pending", "Completed"];

  // session state
  const [sessions, setSessions] = useState([]);

  // error state
  const [error, setError] = useState("");

  //Duumydata for testing 
  // dummy data
  const dummySessions = [
    {
      sessionName: "React Basics",
      userName: "John Doe",
      mentorName: "Jane Smith",
      sessionDate: "2024-08-05",
      sessionTime: "10:00 AM",
      isbooked: true,
    },
    {
      sessionName: "Advanced JavaScript",
      userName: "Alice Johnson",
      mentorName: "Bob Brown",
      sessionDate: "2024-08-06",
      sessionTime: "2:00 PM",
      isbooked: false,
    },
    {
      sessionName: "Python for Data Science",
      userName: "Charlie Davis",
      mentorName: "Eva Green",
      sessionDate: "2024-08-07",
      sessionTime: "1:00 PM",
      isbooked: true,
    },
    {
      sessionName: "Introduction to SQL",
      userName: "Daniel Lee",
      mentorName: "Mary Wilson",
      sessionDate: "2024-08-08",
      sessionTime: "3:00 PM",
      isbooked: false,
    },
  ];
  // function to fetch session
  const fetchSession = async () => {
    try {
      setError("");
      // const response = await axios.get(
      //   `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/dashboard/get/bookings`,
      //   {
      //     withCredentials: true,
      //   },
      // );
      // console.log(response.data);
      // setSessions(response.data);
      setSessions(dummySessions);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  // calling fetch function onload
  useEffect(() => {
    fetchSession();
  }, []);

  return (
    <div className="tw-p-8 tw-w-full">
      <h1 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-mb-4  lg:tw-mb-8">
        Your sessions
      </h1>

      {/* Find mentors */}
      <div className="tw-flex tw-items-center tw-gap-4 tw-mb-8">
        <p className="tw-text-base-500 tw-font-semibold">Find mentors</p>
        <Link href="/mentorList">
          <button className="tw-bg-primary-100 tw-text-white tw-p-2 tw-rounded-md tw-font-semibold hover:tw-bg-primary-200 tw-duration-150 tw-ease-in-out">
            here
          </button>
        </Link>
      </div>

      {/* pending and completed tab */}
      <nav>
        <ul className="tw-flex tw-gap-8 tw-border-b-2">
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`hover:tw-cursor-pointer tw-relative -tw-bottom-[2px] pb-1 ${
                activeTab.toLocaleLowerCase() === tab.toLocaleLowerCase()
                  ? "tw-text-primary-100 tw-font-semibold tw-border-b-2 tw-border-b-primary-100"
                  : "tw-text-base-400"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </nav>

      {/* error message */}
      {error && (
        <p className="tw-text-red-500 tw-text-center tw-mt-8">{error}</p>
      )}

      {/* sessions list */}

      {sessions ? (
        <TableComponent
          sessions={sessions}
          activeTab={activeTab}
          isMentor={false}
        />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Bookings;
