import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaCopy, FaUpload } from "react-icons/fa";
import dynamic from "next/dynamic";
import axios from "axios";

const Header = dynamic(() => import("../../../components/layout/Header"));

function BookSessionPage({ mentorDetail, sessionName }) {
  console.log(mentorDetail);
  const [selectedDay, setSelectedDay] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [paymentProof, setPaymentProof] = useState("");
  const [fileName, setFileName] = useState("");
  const bookSession = mentorDetail.sessions.find(
    (obj) => obj.name === sessionName,
  );
  const [qrPopup, setQrPopup] = useState(false);
  const [popupStep, setPopupStep] = useState(1);

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const base64 = await convertBase64(file);
    setPaymentProof(base64);
    setFileName(file.name);
    if (base64.length > 0) {
      setPopupStep(2);
    }
  };

  const bookSessionPaymentStep = () => {
    const user = JSON.parse(localStorage.getItem("userData"));
    const userName = user.user_name;
    const userEmail = user.user_email;

    if (!userName || !userEmail) {
      return alert("Please login as a user before booking a session!");
    }

    if (!selectedDay) {
      return alert("Please select day to book a session");
    }

    if (!selectedTime) {
      return alert("Please select time to book a session");
    }

    setQrPopup(true);
    setPopupStep(1);
  };

  const handleCopy = () => {
    const paymentDetails = "9368086395@paytm";
    navigator.clipboard.writeText(paymentDetails);
    alert("Successfully copied!");
  };

  const dayChangeActive = (e) => {
    document.querySelectorAll(".bookSessionSchedules .day li").forEach((el) => {
      el.classList.remove("active");
    });

    e.target.classList.add("active");
  };
  const timeChangeActive = (e) => {
    document
      .querySelectorAll(".bookSessionSchedules .time li")
      .forEach((el) => {
        el.classList.remove("active");
      });

    e.target.classList.add("active");
  };

  const bookedSession = async () => {
    try {
      setLoading(true);
      console.log("Start....!");
      const user = JSON.parse(localStorage.getItem("userData"));
      const userName = user.user_name;
      const userEmail = user.user_email;

      if (paymentProof.length <= 0 || fileName.length <= 0) {
        return alert("Upload transaction proof first to book a session!");
      }

      const data = {
        userName,
        userEmail,
        mentorName: mentorDetail.name,
        mentorEmail: mentorDetail.email,
        sessionName: bookSession.name,
        sessionPrice: bookSession.price,
        sessionDay: selectedDay,
        sessionTime: selectedTime,
        paymentProof,
        imageName: fileName,
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/bookSessionMail`,
        data,
      );
      setLoading(false);
      alert("You have successfully booked a session!");
      window.location.href = "/";
      console.log(response.data);
      // Add any further logic or redirection based on the response
    } catch (error) {
      setLoading(false);
      alert(error.response.data.message);
      console.error("Error booking session:", error);
      // Handle error scenario
    }
  };

  function splitTimeRange() {
    console.log(selectedDay);
    if (selectedDay.length < 1) {
      return;
    }
    const selectedSchedule = mentorDetail.schedules.find(
      (schedule) => schedule.day === selectedDay,
    );
    if (!selectedSchedule) {
      return [];
    }

    const result = [];
    const startTime = new Date(`2000-01-01 ${selectedSchedule.startsAt}`);
    const endTime = new Date(`2000-01-01 ${selectedSchedule.endsAt}`);

    // Add the initial time to the result array
    result.push(formatTime(startTime));

    // Increment the time by 30 minutes until it reaches the end time
    while (startTime < endTime) {
      startTime.setMinutes(startTime.getMinutes() + 30);
      result.push(formatTime(startTime));
    }

    console.log(result);

    return result;
  }

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
        {qrPopup && popupStep === 1 ? (
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
                <button onClick={handleCopy}>
                  <FaCopy className="mr-2" />
                  <span>Copy</span>
                </button>
                <button className="fileUpload">
                  <FaUpload className="mr-2" />
                  <span>Upload proof</span>
                  <input type="file" onChange={(e) => handleImageChange(e)} />
                </button>
              </div>
            </div>
          </div>
        ) : popupStep === 2 ? (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="modal-close" onClick={() => setPopupStep(0)}>
                <AiFillCloseCircle />
              </div>
              <br />
              <div className="bookSessionBtn">
                <button onClick={() => bookedSession()}>
                  Book Session Now
                </button>
                {loading === true ? (
                  <img src="/assets/img/gif/Spinner.gif" />
                ) : null}
              </div>
            </div>
          </div>
        ) : null}
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
                <b>Book Dession type:</b> <p>{bookSession.type}</p>
              </h4>
              <p className="description">
                <b>Book Session description:</b>{" "}
                <p>{bookSession.description}</p>
              </p>
            </div>
            <div className="bookSessionSchedules">
              <b>Pick Day:</b>
              <ul className="day">
                {mentorDetail.schedules.map((schedule) => (
                  <li
                    onClick={(e) => {
                      setSelectedDay(schedule.day);
                      dayChangeActive(e);
                    }}
                  >
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
                <b>Book Session Price:</b>
                {bookSession.price}
              </div>
              <div className="button">
                <button onClick={() => bookSessionPaymentStep()}>
                  Book Session Now{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { mentorUsername, sessionName } = context.params;
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorDetail/${mentorUsername}`;
  const { data: res } = await axios.get(url);
  if (res.message === "Invalid link") {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {
        mentorDetail: null,
      },
    };
  }
  return {
    props: {
      mentorDetail: res.mentorDetail,
      sessionName,
    },
  };
};

export default BookSessionPage;
