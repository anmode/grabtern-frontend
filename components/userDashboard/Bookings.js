import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Table from "../../components/basic/Table";
import Loader from "../../components/UI/Loader";

const Bookings = () => {
  const [activeTab, setActiveTab] = useState("Pending");
  const tabs = ["Pending", "Completed"];
  const [sessions, setSessions] = useState([]);
  const router = useRouter();
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);

  const fetchSession = async () => {
    try {
      setError("");
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/dashboard/get/bookings`,
        {
          withCredentials: true,
        },
      );
      setSessions(response.data);
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    }
  };

  useEffect(() => {
    fetchSession();
  }, []);

  const formatDate = (isoDate) => {
    if (!isoDate) return "...";
    const date = new Date(isoDate);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };
  const filterFunction = (session, activeTab) => {
    return (
      (activeTab.toLowerCase() === "pending" && session.isbooked) ||
      (activeTab.toLowerCase() === "completed" && !session.isbooked)
    );
  };

  // Filter sessions based on the active tab and format data for the table
  const sessionData = sessions
    .filter((session) => filterFunction(session, activeTab))
    .map((session) => ({
      topic: session.sessionName,
      mentor: session.mentorName,
      date: formatDate(session.sessionDate),
      time: session.sessionTime,
    }));

  return (
    <div className="tw-p-3 md:tw-p-8 tw-w-full">
      <h1 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-mb-4 lg:tw-mb-8">
        Your sessions
      </h1>

      <div className="tw-flex tw-items-center tw-gap-4 tw-mb-8">
        <p className="tw-text-base-500 tw-font-semibold">Find mentors</p>
        <div>
          {!loader ? (
            <button
              onClick={() => {
                setLoader(true);
                router.push("/mentor/list");
              }}
              className="tw-bg-primary-100 tw-text-white tw-p-2 tw-rounded-md tw-font-semibold hover:tw-bg-primary-200 tw-duration-150 tw-ease-in-out"
            >
              here
            </button>
          ) : (
            <Loader width="25px" />
          )}
        </div>
      </div>

      {
        <Table
          tabs={tabs}
          headers={["Topic", "Mentor", "Date", "Time"]}
          data={sessionData}
          filterFunction={filterFunction}
          formatDate={formatDate}
        />
      }

      {error && (
        <p className="tw-text-red-500 tw-text-center tw-mt-8">{error}</p>
      )}
    </div>
  );
};

export default Bookings;
