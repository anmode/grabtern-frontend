import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
const Header = dynamic(() => import("../../../components/Header"));
function bookSessionPage({ mentorDetail, sessionName }) {
  const [day, setDay] = useState();
  const [time, setTime] = useState();
  const [timezone, setTimeZoneVal] = useState();
  const bookSession = mentorDetail.bookSession.find(
    (obj) => obj.sessionName === sessionName,
  );
  const datePickerDay = bookSession.datePickerDay.join(" ");
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  const datePickerDayDate = datePickerDay.split(" ").map((word) => {
    const currentDate = new Date();
    if (daysOfWeek.includes(word)) {
      const currentDayIndex = daysOfWeek.indexOf(word);
      const daysToAdd = (currentDayIndex - currentDate.getDay() + 7) % 7;
      const nextDate = new Date(
        currentDate.setDate(currentDate.getDate() + daysToAdd),
      );
      const nextDay = nextDate.getDate();
      const nextMonth = nextDate.toLocaleString("default", { month: "long" });

      return `${nextDay} ${nextMonth}`;
    }
  });
  console.log(datePickerDayDate);

  function updateTime() {
    // Retrieve the selected time zone from the dropdown
    var timezone = document.getElementById("timezone").value;
    let datePickerDayTimeLists = document.querySelectorAll(
      "#datePickerDayTime li",
    );
    datePickerDayTimeLists.forEach((time, index) => {
      let timeToArray = bookSession.datePickerTime[index].split(":");
      let timeInfo = {
        hour: timeToArray[0],
        minute: timeToArray[1].replace(" AM", "").replace(" PM", ""),
        period: timeToArray[1].includes("AM") ? "AM" : "PM",
      };
      const currentTime = new Date();
      currentTime.setHours(timeInfo.hour);
      currentTime.setMinutes(timeInfo.minute);
      const convertedTime = currentTime.toLocaleString("en-US", {
        timeZone: timezone,
        hour12: true,
        hour: "numeric",
        minute: "numeric",
      });

      time.innerHTML = convertedTime;
    });
  }

  function addActive(e) {
    if (e.target.parentElement.className === "datePickerDay") {
      setDay(e.target.innerText);
      document.querySelectorAll(".datePickerDay li").forEach((li) => {
        li.classList.remove("active");
      });
    }
    if (e.target.parentElement.className === "datePickerDayTime") {
      setTime(e.target.innerText);
      document.querySelectorAll(".datePickerDayTime li").forEach((li) => {
        li.classList.remove("active");
      });
    }
    console.log(day);
    console.log(time);
    e.target.classList.add("active");
  }

  useEffect(() => {
    const timezoneOptions = document.querySelectorAll("#timezone option");
    console.log(timezoneOptions);
    timezoneOptions.forEach((timezone) => {
      if (timezone.textContent === bookSession.datePickerTimezone) {
        timezone.selected = true;
      }
    });
  }, []);

  const bookedSession = async () => {
    try {
      if (
        localStorage.getItem("user_name") === null ||
        localStorage.getItem("user_email") === null
      ) {
        return "Please login as user first before booked a session!";
      }
      const data = {
        userName: localStorage.getItem("user_name"),
        userEmail: localStorage.getItem("user_email"),
        bookSessionDay: day.replace("\n", " "),
        bookSessionTime: document.querySelector("#datePickerDayTime li.active")
          .innerText,
        bookSessionTimezone: document.getElementById("timezone").value,
        bookSessionName: sessionName,
        bookSessionPrice: bookSession.priceSession,
        bookSessionMentorName: mentorDetail.name,
        bookSessionMentorEmail: mentorDetail.email,
      };
      console.log(data);
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/bookSession`,
        data,
      );
      alert("You have successfully booked a session");
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };
  console.log(bookSession);
  return (
    <div>
      <Header navbarBackground={true} />
      <main style={{ marginTop: "119px" }}>
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "20px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <img
              src={mentorDetail.mentorImg}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "contain",
                borderRadius: "50%",
              }}
            />
            <h1>{mentorDetail.name}</h1>
          </div>
          <ul className="bookSessions" style={{ marginTop: "0" }}>
            <li style={{ width: "650px" }}>
              <div
                className="bookSessionHeader"
                style={{ alignItems: "center" }}
              >
                <i
                  class={
                    bookSession.sessionType === "video-meeting"
                      ? "fas fa-video"
                      : bookSession.sessionType === "call-meeting"
                      ? "fas fa-phone"
                      : ""
                  }
                  style={{ fontSize: "20px", color: "#303030" }}
                ></i>
                <div>
                  <h2>{bookSession.sessionName}</h2>
                  <p style={{ maxWidth: "100%" }}>
                    {bookSession.sessionDescription}
                  </p>
                </div>
              </div>
              <div className="bookSessionFooter">
                {" "}
                <div
                  className="bookSessionIcons"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                  }}
                >
                  <div>
                    <i className="far fa-clock"></i>
                    {bookSession.sessionMeetingDuration} min
                  </div>
                  <div>
                    <i className="fas fa-rupee-sign"></i>
                    {bookSession.priceSession}
                  </div>
                </div>
                <div className="datePicker">
                  <span>Select day:</span>
                  <ul className="datePickerDay">
                    {bookSession.datePickerDay.map((day, index) => (
                      <li onClick={addActive}>
                        {day} <span>{datePickerDayDate[index]}</span>
                      </li>
                    ))}
                  </ul>
                  <span>Select time:</span>
                  <ul id="datePickerDayTime" className="datePickerDayTime">
                    {bookSession.datePickerTime.map((time, index) => (
                      <li onClick={addActive}>{time}</li>
                    ))}
                  </ul>
                  <span>Select timezone:</span>
                  <select id="timezone" onChange={() => updateTime()}>
                    <option value="Pacific/Midway">
                      (GMT-11:00) Pacific/Midway
                    </option>
                    <option value="Pacific/Niue">
                      (GMT-11:00) Pacific/Niue
                    </option>
                    <option value="Pacific/Pago_Pago">
                      (GMT-11:00) Pacific/Pago_Pago
                    </option>
                    <option value="Pacific/Honolulu">
                      (GMT-10:00) Pacific/Honolulu
                    </option>
                    <option value="America/Anchorage">
                      (GMT-09:00) America/Anchorage
                    </option>
                    <option value="America/Los_Angeles">
                      (GMT-08:00) America/Los_Angeles
                    </option>
                    <option value="America/Denver">
                      (GMT-07:00) America/Denver
                    </option>
                    <option value="America/Chicago">
                      (GMT-06:00) America/Chicago
                    </option>
                    <option value="America/New_York">
                      (GMT-05:00) America/New_York
                    </option>
                    <option value="America/Caracas">
                      (GMT-04:00) America/Caracas
                    </option>
                    <option value="America/Buenos_Aires">
                      (GMT-03:00) America/Buenos_Aires
                    </option>
                    <option value="Atlantic/South_Georgia">
                      (GMT-02:00) Atlantic/South_Georgia
                    </option>
                    <option value="Atlantic/Azores">
                      (GMT-01:00) Atlantic/Azores
                    </option>
                    <option value="Europe/London">
                      (GMT+00:00) Europe/London
                    </option>
                    <option value="Europe/Paris">
                      (GMT+01:00) Europe/Paris
                    </option>
                    <option value="Africa/Johannesburg">
                      (GMT+02:00) Africa/Johannesburg
                    </option>
                    <option value="Asia/Dubai">(GMT+04:00) Asia/Dubai</option>
                    <option value="Asia/Kolkata">
                      (GMT+05:30) Asia/Kolkata
                    </option>
                    <option value="Asia/Jakarta">
                      (GMT+07:00) Asia/Jakarta
                    </option>
                    <option value="Asia/Tokyo">(GMT+09:00) Asia/Tokyo</option>
                    <option value="Australia/Sydney">
                      (GMT+10:00) Australia/Sydney
                    </option>
                    <option value="Pacific/Noumea">
                      (GMT+11:00) Pacific/Noumea
                    </option>
                    <option value="Pacific/Auckland">
                      (GMT+12:00) Pacific/Auckland
                    </option>
                  </select>
                </div>
                <button
                  style={{ cursor: "pointer" }}
                  onClick={() => bookedSession()}
                >
                  <span>Confirm detail</span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default bookSessionPage;

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
