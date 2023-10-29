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
  const [selectedDay, setSelectedDay] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [qrPopup, setQrPopup] = useState(false);
  const [paymentIssuePopup, setPaymentIssuePopup] = useState(true);
  const [listDates, setListDates] = useState([]);
  const [availableDays, setAvailableDays] = useState([]);

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
  ] 

  // TODO: Move it to utils/date file 
  const findAvailableDays = (schedules = []) => {
    const availableDays = new Array(7).fill(false);
    schedules.map(schedule => {
      availableDays[daysOfWeek.indexOf(schedule.day)] = true;
    })

    return availableDays;
  }

  // TODO: Move it to utils/date file 
  const getDateByDayName = (availableDays, fromDate = new Date(), noOfNextDays = 5) => {
    const result = [];
    if(availableDays.length === 0) return result;

    const currentDate = fromDate;
    for (let i = 0; result.length < noOfNextDays; i++) {
      const currentDay = new Date(currentDate).getDay();

      if(availableDays[currentDay]){
        result.push(new Date(currentDate));
      }
      
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return result;
  }

    // calculating available dates from mentor schedule
  useEffect(()=> {
    const availableDays = findAvailableDays(mentorDetail.schedules);
    setAvailableDays(availableDays);
    const nextDates = getDateByDayName(availableDays);
    setListDates(nextDates);
  },[]);

  // TODO: MOve this to utils/image file
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

  // TODO: MOve this to utils/image file
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
      return res.data.secure_url;
    } catch (error) {
      console.error("Error in uploading to cloudinary ", error);
      setLoading(false);
      toast.error("Sorry couldn't upload the image to our server", error);
    }
  };

  // TODO: MOve this to utils/image file
  const handleImageChange = async (e) => {
    setLoading(true);
    const file = e.target.files[0];
    if (!file) return;
    const base64 = await convertBase64(file);
    const imageClouindaryUrl = await uploadToCloudinary(base64);
    if (!imageClouindaryUrl) {
      setLoading(false);
      toast.error("Sorry couldn't upload the image to our server");
      return;
    }
    bookedSession(imageClouindaryUrl);
  };

  const bookSessionPaymentStep = () => {
    if (!userName) {
      toast.error("Please login as a user before booking a session!");
      setTimeout(() => {
        router.push(
          `/auth/login?entityType=user&redirectURL=${window.location.href}`,
        );
      }, 2000);
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

  const bookedSession = async (imageCloudinaryUrl) => {
    try {
      if (imageCloudinaryUrl === null) {
        setLoading(false);
        toast.error("Upload transaction proof first to book a session!");
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
        // Add any further logic or redirection based on the response
      } else {
        // Handle the case when the response does not contain expected 'data'
        toast.error(
          "Error booking session: Unexpected response from the server.",
        );
      }
    } catch (error) {
      setLoading(false);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
        console.error("Error booking session:", error.response.data.message);
      } else {
        toast.error("Error booking session: An unexpected error occurred.");
        console.error("Error booking session:", error);
      }
      // Handle error scenario
    }
  };

  function splitTimeRange() {
    if (selectedDay.length < 1) {
      return;
    }
    if (mentorDetail.schedules.length === 0) {
      const selectedSchedule = defaultSchedules.find(
        (schedule) => schedule.day === selectedDay,
      );
      if (!selectedSchedule) {
        return [];
      }

      const result = [];
      const startTime = new Date(`2000-01-01 ${selectedSchedule.startsAt}`);
      const endTime = new Date(`2000-01-01 ${selectedSchedule.endsAt}`);

      result.push(formatTime(startTime));

      while (startTime < endTime) {
        startTime.setMinutes(startTime.getMinutes() + 30);
        result.push(formatTime(startTime));
      }

      return result;
    } else if (mentorDetail.schedules.length !== 0) {
      const selectedSchedule = mentorDetail.schedules.find(
        (schedule) => schedule.day === selectedDay,
      );
      // const selectedSchedule = mentorDetail.schedules.find(
      //   (schedule) => schedule.day === selectedDay,
      // );
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

      return result;
    }
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
                <ButtonUI text="Copy" onClick={handleCopy} />
                <div className="fileUpload">
                  <ButtonUI text="Upload proof" />
                  <input type="file" onChange={(e) => handleImageChange(e)} />

                  {loading === true ? (
                    <img src="/assets/img/gif/Spinner.gif" />
                  ) : null}
                </div>
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
                        onClick={(e) => {
                          setSelectedDay(date.toString());
                          dayChangeActive(e);
                        }}
                      >
                        {date.toDateString()}
                      </li>
                    )) : 
                    null}
                  <div
                    className="tw-text-base-400 tw-underline tw-cursor-pointer tw-text-xs hover:tw-scale-90"
                    onClick={()=> {
                      const lastDate = new Date(listDates[listDates.length-1])
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
                <ButtonUI
                  text="Book Session Now"
                  onClick={() => bookSessionPaymentStep()}
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
  const bookSession = res.mentorDetail.sessions.find(
    (obj) => obj._id === sessionID,
  );
  if (bookSession === undefined) {
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
      bookSession,
      sessionID,
    },
  };
};

export default Index;
