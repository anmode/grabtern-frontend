import React, { useEffect, useState } from "react";
import { AiFillCloseCircle, AiFillInfoCircle } from "react-icons/ai";
import { FaCopy, FaUpload } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dynamic from "next/dynamic";
import axios from "axios";
import { encryptData, decryptData } from "../../../hook/encryptDecrypt";

const Header = dynamic(() => import("../../../components/layout/Header"));

function BookSessionPage({ mentorDetail, sessionID }) {
  console.log(mentorDetail);
  const [selectedDay, setSelectedDay] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [paymentProof, setPaymentProof] = useState("");
  const [fileName, setFileName] = useState("");
  const bookSession = mentorDetail.sessions.find(
    (obj) => obj._id === sessionID,
  );
  console.log("Book Session", sessionID);
  const [qrPopup, setQrPopup] = useState(false);
  const [paymentIssuePopup, setPaymentIssuePopup] = useState(true);

  //User Info
  const user = decryptData(localStorage.getItem("userData"));
  const userName = user?.user_name;
  const userEmail = user?.user_email;
  const userID = user?.user_id;

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

  useEffect(() => {
    if (localStorage.getItem("paymentIssuePopup") === "0") {
      setPaymentIssuePopup(false);
    }
  });

  const uploadToCloudinary = async (imageSrc) => {
    if (!imageSrc) {
      toast.error(
        "Please select an image first before uploading to our server!",
      );
      return;
    }
    const res = await fetch(imageSrc);
    const blob = await res.blob();
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;
    try {
      const formData = new FormData();
      formData.append("file", blob);
      formData.append("upload_preset", "image_preset");
      const res = await axios.post(url, formData);
      console.log(res.data.secure_url);
      bookedSession();
      return res.data.secure_url;
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Sorry couldn't upload the image to our server", error);
    }
  };

  const handleImageChange = async (e) => {
    setLoading(true);
    const file = e.target.files[0];
    if (!file) return;
    const base64 = await convertBase64(file);
    const imageClouindaryUrl = await uploadToCloudinary(base64);
    console.log(imageClouindaryUrl);
    setPaymentProof(imageClouindaryUrl);
  };

  const bookSessionPaymentStep = () => {
    if (!userName || !userEmail) {
      toast.error("Please login as a user before booking a session!");
      return;
    }

    if (!selectedDay) {
      toast.error("Please select day to book a session");
      return;
    }

    if (!selectedTime) {
      toast.error("Please select time to book a session");
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
      if (paymentProof === null) {
        setLoading(false);
        toast.error("Upload transaction proof first to book a session!");
        return;
      }

      const data = {
        userID,
        mentorUsername: mentorDetail.username,
        sessionID: bookSession._id,
        sessionDay: selectedDay,
        sessionTime: selectedTime,
        paymentProof,
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/bookSessionMail`,
        data,
      );
      setLoading(false);
      toast.success("You have successfully booked a session!");
      window.location.href = "/";
      console.log(response.data);
      // Add any further logic or redirection based on the response
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
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
        {paymentIssuePopup === true ? (
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
                <AiFillInfoCircle /> Currently payment gateway is on hold so we
                have to do like this
              </span>
            </div>
          </div>
        ) : null}
        {qrPopup ? (
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
                  <span>
                    Upload proof{" "}
                    {loading === true ? (
                      <img src="/assets/img/gif/Spinner.gif" />
                    ) : null}
                  </span>
                  <input type="file" onChange={(e) => handleImageChange(e)} />
                </button>
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
        <ToastContainer />
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { mentorUsername, sessionID } = context.params;
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
      sessionID,
    },
  };
};

export default BookSessionPage;
