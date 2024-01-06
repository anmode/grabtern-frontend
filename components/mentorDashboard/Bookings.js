import axios from "axios";
import React, { useState, useEffect } from "react";
import Spinner from "../basic/spinner";
import TableComponent from "../basic/TableComponent";

const Bookings = ({ setLoadingState, setErrorState }) => {
  const [activeTab, setActiveTab] = useState("Pending");

  const tabs = ["Pending", "Completed"];

  // session state
  const [sessions, setSessions] = useState([]);

  // function to fetch session
  const fetchSession = async () => {
    try {
      setLoadingState({ status: true });
      setErrorState({ status: false });
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/dashboard/get/bookings`,
        {
          withCredentials: true,
        },
      );
      console.log(response.data);
      setSessions(response.data);
      setLoadingState({ status: false });
    } catch (error) {
      setLoadingState({ status: false });
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setErrorState({ status: true, message: error.response.data.message });
      } else {
        setErrorState({ status: true });
      }
    }
  };

  // calling fetch function onload
  useEffect(() => {
    fetchSession();
  }, []);

  return (
    <div className="md:tw-p-8 tw-p-[10px] tw-py-12 tw-w-full">
      <h1 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-mb-4  lg:tw-mb-8">
        Your sessions
      </h1>

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

      {/* sessions list */}
      <div className="tw-mt-8">
        {sessions ? (
          <TableComponent
            sessions={sessions}
            activeTab={activeTab}
            isMentor={true}
          />
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Bookings;
