import React, { useEffect, useState } from "react";
import { AiFillCloseCircle, AiFillInfoCircle } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dynamic from "next/dynamic";
import axios from "axios";
import ButtonUI from "../../../components/UI/Button/Button";
import { useRouter } from "next/router";
import { razorpay_object } from "../../../hook/razorpay";

const Header = dynamic(() => import("../../../components/layout/Header"));

function Index({ mentorDetail, bookSession, sessionID }) {
  const router = useRouter();
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [qrPopup, setQrPopup] = useState(false);
  const [paymentIssuePopup, setPaymentIssuePopup] = useState(true);
  const [listDates, setListDates] = useState([]);
  const [availableDays, setAvailableDays] = useState([]);
  const [loading, setLoading] = useState(false);
  //User Info
  const user = JSON.parse(localStorage.getItem("userData"));
  const userName = user?.user_name;
  // const userID = user?.user_id;

  // TODO: Move it o constants/date folder
  const daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  // TODO: Move it to utils/date file
  const findAvailableDays = (schedules = []) => {
    const availableDays = new Array(7).fill(false);
    schedules.map((schedule) => {
      availableDays[daysOfWeek.indexOf(schedule.day)] = true;
    });

    return availableDays;
  };

  // TODO: Move it to utils/date file
  const getDateByDayName = (
    availableDays,
    fromDate = new Date(),
    noOfNextDays = 5,
  ) => {
    const result = [];
    if (availableDays.length === 0) return result;

    const currentDate = fromDate;
    for (let i = 0; result.length < noOfNextDays; i++) {
      const currentDay = new Date(currentDate).getDay();

      if (availableDays[currentDay]) {
        result.push(new Date(currentDate));
      }

      currentDate.setDate(currentDate.getDate() + 1);
    }
    return result;
  };

  // calculating available dates from mentor schedule
  useEffect(() => {
    const availableDays = findAvailableDays(mentorDetail.schedules);
    setAvailableDays(availableDays);
    const nextDates = getDateByDayName(availableDays);
    setListDates(nextDates);
  }, []);

  const showToast = (status, message) => {
    if (status === 2) {
      toast.success(message);
    } else if (status === 1) {
      toast.error(message);
    }
  };
  const [paymentStatus, setPaymentStatus] = useState({
    status: 0,
    message: "",
  });
  const updatePaymentStatus = (e) => {
    setPaymentStatus({ status: e.detail.status, status: e.detail.message });
  };
  const status = document.addEventListener("razorpay", updatePaymentStatus);
  useEffect(() => {
    const handleRazorpay = (e) => {
      showToast(e.detail.status, e.detail.message);
    };
    document.addEventListener("razorpay", handleRazorpay);
  }, []);

  const bookSessionPaymentStep = async (e) => {
    try {
      if (!userName) {
        toast.info("Redirecting to Register/Login");
        setTimeout(() => {
          router.push(`/auth/register?&redirectURL=${window.location.href}`);
        }, 2000);
        return;
      }

      if (!selectedDay || !selectedTime) {
        toast.error("Please select a day and time to book a session.");
        return;
      }

      // Check session availability
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/bookSessionMail/checkAvailability`,
        {
          mentorUsername: mentorDetail.username,
          sessionID: bookSession._id,
          sessionDate: new Date(selectedDay).toDateString(),
          sessionTime: selectedTime,
        },
        { withCredentials: true },
      );

      console.log("Response:", response.data);

      if (response.status !== 200) {
        console.error("Error checking session availability:", response.data);
        toast.error(`${response.data.message}`);
        return;
      }

      // Session is available, proceed to Razorpay payment
      razorpay_object(e, bookSession, mentorDetail, selectedDay, selectedTime);
    } catch (error) {
      console.error("Error checking session availability:", error);
      toast.error(error.response?.data || "An unexpected error occurred.");
    }
  };

  // TODO: We do not find a way to use this function in razorpay.js... Neet to work on it
  // const bookedSession = async () => {
  //   try {
  //     const requestData = {
  //       mentorUsername: mentorDetail.username,
  //       sessionID: bookSession._id,
  //       sessionDate: new Date(selectedDay).toDateString(),
  //       sessionTime: selectedTime,
  //       paymentProof: imageCloudinaryUrl,
  //     };

  //     const response = await axios.post(
  //       `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/bookSessionMail`,
  //       requestData,
  //       { withCredentials: true },
  //     );

  //     setLoading(false);

  //     if (response.data) {
  //       toast.success("You have successfully booked a session!");
  //       window.location.href = "/";
  //     } else {
  //       toast.error(
  //         "Error booking session: Unexpected response from the server.",
  //       );
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //     if (error.response?.data?.message) {
  //       toast.error(error.response.data.message);
  //       console.error("Error booking session:", error.response.data.message);
  //     } else {
  //       toast.error("Error booking session: An unexpected error occurred.");
  //       console.error("Error booking session:", error);
  //     }
  //   }
  // };

  function splitTimeRange() {
    if (!selectedDay) return [];

    const selectedSchedule = mentorDetail.schedules.filter(
      (schedule) => schedule.day === daysOfWeek[new Date(selectedDay).getDay()],
    );

    if (selectedSchedule.length === 0) return [];

    const result = [];

    selectedSchedule.forEach((schedule) => {
      const startTime = new Date(`2000-01-01 ${schedule.startsAt}`);
      const endTime = new Date(`2000-01-01 ${schedule.endsAt}`);
      result.push(formatTime(startTime));

      while (startTime < endTime) {
        startTime.setMinutes(startTime.getMinutes() + 30);
        result.push(formatTime(startTime));
      }
    });

    return result;
  }

  // TODO: MOve to utils.date file
  function formatTime(time) {
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  return (
    <div>
      <Header navbarBackground={true} />
      <div
        className="container sessionContainer"
        style={{ marginTop: "100px" }}
      >
        <h1>Let's book a session</h1>

        <div className="session">
          <div className="mentorInfo">
            <h2>{mentorDetail.name}</h2>
            <h3>
              {mentorDetail.internAt} | {mentorDetail.currentStatus}
            </h3>
            <p>{mentorDetail.description}</p>
          </div>
          <div className="bookSession">
            <div className="bookSesssionInfo">
              <h2>{bookSession.name}</h2>
              <h4>
                <b>Book Session type:</b> <p>{bookSession.type}</p>
              </h4>
              <p className="description">
                <b>Book Session description:</b>{" "}
                <p>{bookSession.description}</p>
              </p>
            </div>
            <div className="bookSessionSchedules">
              <b>Pick Day:</b>
              <ul className="day">
                {mentorDetail.schedules.length !== 0
                  ? listDates.map((date, index) => (
                      <li
                        key={index}
                        className={
                          selectedDay === date.toString() ? "active" : ""
                        }
                        onClick={() => {
                          setSelectedDay(date.toString());
                        }}
                      >
                        <span>
                          {date.toLocaleDateString("en-US", {
                            month: "short",
                            day: "2-digit",
                          })}
                        </span>
                        {daysOfWeek[date.getDay()]}
                      </li>
                    ))
                  : null}
                <div
                  className="tw-text-base-400 tw-underline tw-cursor-pointer tw-text-xs hover:tw-scale-90"
                  onClick={() => {
                    const lastDate = new Date(listDates[listDates.length - 1]);
                    const fromDate = new Date(lastDate);
                    fromDate.setDate(lastDate.getDate() + 1);
                    const dates = getDateByDayName(availableDays, fromDate);
                    const newListDates = [...listDates, ...dates];
                    setListDates(newListDates);
                  }}
                >
                  Load More
                </div>
              </ul>
              <b>Pick Time:</b>
              <ul className="time">
                {selectedDay.length === 0
                  ? "Please select day"
                  : splitTimeRange().map((time) => (
                      <li
                        key={time}
                        className={selectedTime == time ? "active" : ""}
                        onClick={() => {
                          setSelectedTime(time);
                        }}
                      >
                        {time}
                      </li>
                    ))}
              </ul>
            </div>
            <div className="bookSesssionPriceAndOrder">
              <div className="price">
                <b>Book Session Price:</b> {bookSession.price}
              </div>
              <div id="pay-button" className="button">
                <ButtonUI
                  text="Book Session Now"
                  onClick={bookSessionPaymentStep}
                />
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { mentorUsername } = context.params;
  const sessionID = context.query.sessionID;
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorDetail/${mentorUsername}`;
  const { data: res } = await axios.get(url);

  if (res.message === "Invalid link" || !res.mentorDetail) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  const bookSession = res.mentorDetail.sessions.find(
    (obj) => obj._id === sessionID,
  );

  if (!bookSession) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  return {
    props: {
      mentorDetail: res.mentorDetail,
      bookSession,
      sessionID,
    },
  };
};

export default Index;
