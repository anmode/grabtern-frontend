import axios from "axios";
import { set } from "js-cookie";
import React, { useState, useEffect } from "react";
import EventLogin from "../eventLogin/EventLogin";

const Bookings = () => {
  const [activeTab, setActiveTab] = useState("Pending");
  const [isLoading, setIsLoading] = useState(false);
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

  const tableHeadings = ["Topic", "Mentee", "Day", "Time"];

  // const sessions = [
  //   {
  //     userID: 1,
  //     userName: "justin",
  //     mentorUsername: "robert",
  //     sessionID: 1,
  //     sessionName: "Breaking into open source",
  //     sessionDay: "monday",
  //     sessionTime: "10:30 AM",
  //     paymentProof: "https://picsum.photos/200",
  //     bookedAt: "2021-12-11T00:00:00.000+00:00",
  //     isbooked: true,
  //   },
  //   {
  //     userID: 1,
  //     userName: "john",
  //     mentorUsername: "roger",
  //     sessionID: 2,
  //     sessionName: "Blockchain for beginners",
  //     sessionDay: "wednesday",
  //     sessionTime: "2:45 AM",
  //     paymentProof: "https://picsum.photos/200",
  //     bookedAt: "2021-09-01T00:00:00.000+00:00",
  //     isbooked: false,
  //   },
  //   {
  //     userID: 1,
  //     userName: "katie Perry",
  //     mentorUsername: "jennifer",
  //     sessionID: 3,
  //     sessionName: "How to get a job at Google",
  //     sessionDay: "friday",
  //     sessionTime: "11:00 AM",
  //     paymentProof: "https://picsum.photos/200",
  //     bookedAt: "2021-09-01T00:00:00.000+00:00",
  //     isbooked: true,
  //   },
  //   {
  //     userID: 1,
  //     userName: "james bond",
  //     mentorUsername: "taylor",
  //     sessionID: 4,
  //     sessionName: "How to maintain a work-life balance and excel in life",
  //     sessionDay: "saturday",
  //     sessionTime: "1:10 AM",
  //     paymentProof: "https://picsum.photos/200",
  //     bookedAt: "2021-01-04T00:00:00.000+00:00",
  //     isbooked: true,
  //   },
  //   {
  //     userID: 1,
  //     userName: "lisa",
  //     mentorUsername: "sarah",
  //     sessionID: 5,
  //     sessionName: "Designing a website from scratch",
  //     sessionDay: "tuesday",
  //     sessionTime: "5:30 AM",
  //     paymentProof: "https://picsum.photos/200",
  //     bookedAt: "2021-09-01T00:00:00.000+00:00",
  //     isbooked: false,
  //   },
  // ];

  // session state
  const [sessions, setSessions] = useState([]);

  // error state
  const [error, setError] = useState("");

  // function to fetch session
  const fetchSession = async () => {
    try {
      setIsLoading(true);
      setError("");
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/dashboard/get/bookings`,
        {
          withCredentials: true,
        },
      );
      setSessions(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  // calling fetch function onload
  useEffect(() => {
    fetchSession();
  }, []);

  return (
    <div>
      {isLoading? (
        <div>
          <EventLogin/>
        </div>
      ):(
        <div>
    <div className="min-[512px]:tw-ml-[76px] tw-p-8 tw-py-12 sm:tw-px-8 md:tw-px-12 sm:tw-py-16 lg:tw-p-16">
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

      {/* error message */}
      {error && (
        <p className="tw-text-red-500 tw-text-center tw-mt-8">{error}</p>
      )}

      {/* sessions list */}
      <div className="tw-mt-8">
        <ul className="tw-bg-primary-100 tw-text-white  min-[500px]:tw-grid tw-grid-cols-[auto_10rem]  [&>*]:tw-capitalize tw-p-4  sm:tw-grid-cols-[minmax(10rem,auto)_8rem_8rem] md:tw-grid-cols-[minmax(10rem,auto)_8rem_13rem] tw-gap-6 tw-border tw-border-b-0 tw-rounded-t">
          <li className="tw-hidden min-[540px]:tw-inline">topic</li>
          <li className="min-[540px]:tw-hidden">Session List</li>
          <li className="tw-hidden sm:tw-inline">mentee</li>
          <div className="tw-hidden md:tw-grid md:tw-justify-between md:tw-grid-cols-[5rem_5rem]">
            <li>day</li>
            <li className="tw-text-right">time</li>
          </div>
          <li className="tw-hidden min-[540px]:tw-inline tw-text-right md:tw-hidden">
            Mentoring On
          </li>
        </ul>
        <ul className="tw-bg-white tw-border tw-rounded-b">
          {sessions
            .filter((session) =>
              activeTab.toLocaleLowerCase() === "pending"
                ? session.isbooked
                : !session.isbooked,
            )
            .map((session, index) => (
              <li
                key={index}
                className="min-[540px]:tw-grid min-[540px]:tw-grid-cols-[auto_7rem] min-[540px]:tw-justify-between sm:tw-justify-normal tw-p-4 sm:tw-grid-cols-[auto_8rem] md:tw-grid-cols-[auto_13rem] tw-text-base-400 tw-border-b last:tw-border-b-0 tw-gap-6"
              >
                <div className="sm:tw-grid min-[540px]:tw-grid-cols-[auto_8rem] sm:tw-grid-cols-[auto_8rem] tw-gap-6">
                  <p className="tw-font-medium">{session.sessionName}</p>
                  <p className="tw-capitalize sm:tw-hidden">
                    Mentee • {session.userName}
                  </p>
                  <p className="tw-capitalize tw-hidden sm:tw-block">
                    {session.userName}
                  </p>
                </div>
                <div>
                  <div className="md:tw-grid tw-hidden md:tw-grid-cols-[5rem_5rem] md:tw-justify-between">
                    <p className="tw-capitalize">{session.sessionDay}</p>
                    <p className="tw-uppercase tw-text-right">
                      {session.sessionTime}
                    </p>
                  </div>
                  <p className="tw-capitalize min-[540px]:tw-text-right md:tw-hidden">
                    {session.sessionDay.substring(0, 3)},&nbsp;
                    {session.sessionTime}
                  </p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
    </div>
      )
      }
    </div>
  );
};

export default Bookings;
