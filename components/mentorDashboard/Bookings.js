import axios from "axios";
import React, { useState, useEffect } from "react";
import Spinner from "../basic/spinner";

const Bookings = ({ setLoadingState, setErrorState }) => {
  const [activeTab, setActiveTab] = useState("Pending");

  const tabs = ["Pending", "Completed"];

  /* ------------------ schema will be like this ---------------- */
  // const SessionBookingSchema = new mongoose.Schema({
  //   userID: { type: String, required: true },
  //   mentorUsername: { type: String, required: true },
  //   sessionID: { type: String, required: true },
  //   sessionDay: { type: String, required: true },
  //   sessionTime: { type: String, required: true },
  //   paymentProof: { type: String, required: true },
  //   bookedAt: { type: Date, default: null },
  //   isbooked: { type: Boolean, default: false },
  // });

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
    <div className="tw-p-8 tw-py-12 tw-w-full">
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
      <table className="tw-mt-8">
        <thead className="tw-bg-primary-100 tw-text-white tw-border tw-rounded-t tw-w-full">
          <tr className="tw-w-full">
            <th className="tw-p-2">Topic</th>
            <th className="tw-w-full tw-p-2">Mentor</th>
            <th className="tw-w-full tw-p-2">Day</th>
            <th className="tw-w-full tw-p-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {sessions ? (
            sessions
              .filter((session) =>
                activeTab.toLocaleLowerCase() === "pending"
                  ? session.isbooked
                  : !session.isbooked,
              )
              .map((session, index) => (
                <tr className="tw-bg-white tw-border tw-w-full tw-rounded-b">
                  <td className="tw-w-full p-2">{session.sessionName}</td>
                  <td className="tw-w-full p-2">{session.userName}</td>
                  <td className="tw-w-full p-2">{session.sessionDay}</td>
                  <td className="tw-w-full p-2">{session.sessionTime}</td>
                </tr>
              ))
          ) : (
            <Spinner />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
