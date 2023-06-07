import React, { useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
const Header = dynamic(() => import("../../../components/Header"));
function bookSessionPage({ mentorDetail, sessionName }) {
  const [day, setDay] = useState();
  const [time, setTime] = useState();
  const bookSession = mentorDetail.bookSession.find(
    (obj) => obj.sessionName === sessionName
  );

  function updateTime() {
    // Retrieve the selected time zone from the dropdown
    var timezone = document.getElementById("timezone").value;

    // Get the current date and time in the selected time zone
    var currentDate = new Date().toLocaleString("en-US", {
      timeZone: timezone,
    });

    // Split the date and time components
    var [date, time] = currentDate.split(", ");

    // Remove the seconds from the time
    time = time.split(":").slice(0, 2).join(":");

    // Update the time in the date picker
    var timeElements = document
      .getElementById("datePickerDayTime")
      .getElementsByTagName("li");
    for (var i = 0; i < timeElements.length; i++) {
      timeElements[i].textContent = time;
    }
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
                    <li onClick={addActive}>
                      Monday <span>13 Jun</span>
                    </li>
                    <li onClick={addActive}>
                      Sunday <span>13 Jun</span>
                    </li>
                    <li onClick={addActive}>
                      Wednesday <span>13 Jun</span>
                    </li>
                  </ul>
                  <span>Select date:</span>
                  <ul id="datePickerDayTime" className="datePickerDayTime">
                    <li onClick={addActive}>10:30 PM</li>
                    <li onClick={addActive}>11:30 PM</li>
                    <li onClick={addActive}>12:30 PM</li>
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
                  onClick={() => setModalPopup(true)}
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
