import React, { useEffect, useState } from "react";
import { AiFillCloseCircle, AiFillInfoCircle } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dynamic from "next/dynamic";
import axios from "axios";
import ButtonUI from "../../../components/UI/Button/Button";
import { useRouter } from "next/router";

const Header = dynamic(() => import("../../../components/layout/Header"));

function Index({ mentorDetail, bookSession, sessionID }) {
  const router = useRouter();
  const defaultSchedules = [
    { day: "Saturday", startsAt: "09:00", endsAt: "21:00" },
    // { day: "Monday", startsAt: "09:00", endsAt: "21:00" },
  ];

  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [qrPopup, setQrPopup] = useState(false);
  const [paymentIssuePopup, setPaymentIssuePopup] = useState(true);
  const [listDates, setListDates] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("paymentIssuePopup") === "0") {
      setPaymentIssuePopup(false);
    }
    getDateByDayName();
  }, []);

  const getDateByDayName = () => {
    const targetDays = mentorDetail.schedules.map((v) => v.day.toLowerCase());
    const daysOfWeek = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    const currentDate = new Date();
    const nextOccurrences = [];

    if (targetDays.length === 0) return;

    while (nextOccurrences.length < targetDays.length) {
      currentDate.setDate(currentDate.getDate() + 1);
      const dayIndex = currentDate.getDay();

      if (targetDays.includes(daysOfWeek[dayIndex])) {
        const options = { month: "short", day: "2-digit" };
        nextOccurrences.push(currentDate.toLocaleDateString("en-US", options));
        currentDate.setDate(currentDate.getDate() + 6);
      }
    }

    setListDates(nextOccurrences);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = (error) => reject(error);
    });
  };

  const uploadToCloudinary = async (imageSrc) => {
    if (!imageSrc) {
      toast.error("Please select an image before uploading.");
      return;
    }

    try {
      const res = await fetch(imageSrc);
      const blob = await res.blob();
      const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;

      const formData = new FormData();
      formData.append("file", blob);
      formData.append("upload_preset", "image_preset");

      const response = await axios.post(url, formData);
      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      toast.error("Failed to upload the image to our server");
      setLoading(false);
    }
  };

  const handleImageChange = async (e) => {
    setLoading(true);
    const file = e.target.files[0];
    if (!file) return;

    try {
      const base64 = await convertBase64(file);
      const imageCloudinaryUrl = await uploadToCloudinary(base64);

      if (!imageCloudinaryUrl) {
        setLoading(false);
        toast.error("Failed to upload the image to our server");
        return;
      }

      bookedSession(imageCloudinaryUrl);
    } catch (error) {
      setLoading(false);
      toast.error("An error occurred while processing the image.");
    }
  };

  const bookSessionPaymentStep = () => {
    if (!userName) {
      toast.error("Please log in as a user before booking a session.");
      setTimeout(() => {
        router.push(
          `/auth/login?entityType=user&redirectURL=${window.location.href}`,
        );
      }, 2000);
      return;
    }

    if (!selectedDay || !selectedTime) {
      toast.error("Please select a day and time to book a session.");
      return;
    }

    setQrPopup(true);
  };

  const handleCopy = () => {
    const paymentDetails = "9368086395@paytm";
    navigator.clipboard.writeText(paymentDetails);
    alert("Successfully copied!");
  };

  const dayChangeActive = (e) => {
    document
      .querySelectorAll(".bookSessionSchedules .day li")
      .forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");
  };

  const timeChangeActive = (e) => {
    document
      .querySelectorAll(".bookSessionSchedules .time li")
      .forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");
  };

  const bookedSession = async (imageCloudinaryUrl) => {
    try {
      if (imageCloudinaryUrl === null) {
        setLoading(false);
        toast.error("Upload transaction proof first to book a session.");
        return;
      }

      const requestData = {
        mentorUsername: mentorDetail.username,
        sessionID: bookSession._id,
        sessionDay: selectedDay,
        sessionTime: selectedTime,
        paymentProof: imageCloudinaryUrl,
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/bookSessionMail`,
        requestData,
        { withCredentials: true },
      );

      setLoading(false);

      if (response.data) {
        toast.success("You have successfully booked a session!");
        window.location.href = "/";
      } else {
        toast.error(
          "Error booking session: Unexpected response from the server.",
        );
      }
    } catch (error) {
      setLoading(false);
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
        console.error("Error booking session:", error.response.data.message);
      } else {
        toast.error("Error booking session: An unexpected error occurred.");
        console.error("Error booking session:", error);
      }
    }
  };

  const splitTimeRange = () => {
    if (selectedDay.length < 1) return [];

    const selectedSchedule = mentorDetail.schedules.find(
      (schedule) => schedule.day === selectedDay,
    );

    if (!selectedSchedule) return [];

    const result = [];
    const startTime = new Date(`2000-01-01 ${selectedSchedule.startsAt}`);
    const endTime = new Date(`2000-01-01 ${selectedSchedule.endsAt}`);
    result.push(formatTime(startTime));

    while (startTime < endTime) {
      startTime.setMinutes(startTime.getMinutes() + 30);
      result.push(formatTime(startTime));
    }

    return result;
  };

  const formatTime = (time) => {
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const userName = JSON.parse(localStorage.getItem("userData"))?.user_name;

  return (
    <div>
      <Header navbarBackground={true} />
      <div
        className="container sessionContainer"
        style={{ marginTop: "100px" }}
      >
        {paymentIssuePopup && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div
                className="modal-close"
                onClick={() => {
                  localStorage.setItem("paymentIssuePopup", "0");
                  setPaymentIssuePopup(false);
                }}
              >
                <AiFillCloseCircle />
              </div>
              <br />
              <span className="flex">
                <AiFillInfoCircle /> Currently, the payment gateway is on hold!
                You will get a QR code and upload the pic/pdf of the
                transaction. An automatic verification model will book your
                session.
              </span>
            </div>
          </div>
        )}
        {qrPopup && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="modal-close" onClick={() => setQrPopup(false)}>
                <AiFillCloseCircle />
              </div>
              <img src="/assets/img/QR.png" alt="QR" className="w-96 h-96" />
              <span className="p-3">
                <b>UPI ID</b>: 9368086395@paytm
              </span>
              <div className="buttons">
                <ButtonUI text="Copy" onClick={handleCopy} />
                <div className="fileUpload">
                  <ButtonUI text="Upload proof" />
                  <input type="file" onChange={(e) => handleImageChange(e)} />
                  {loading && <img src="/assets/img/gif/Spinner.gif" />}
                </div>
              </div>
            </div>
          </div>
        )}
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
                {mentorDetail.schedules.map((schedule, index) => (
                  <li
                    onClick={(e) => {
                      setSelectedDay(schedule.day);
                      dayChangeActive(e);
                    }}
                  >
                    <span>{listDates[index]}</span>
                    {schedule.day}
                  </li>
                ))}
              </ul>
              <b>Pick Time:</b>
              <ul className="time">
                {selectedDay.length === 0
                  ? "Please select day"
                  : splitTimeRange().map((time) => (
                      <li
                        onClick={(e) => {
                          timeChangeActive(e);
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
              <div className="button">
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
