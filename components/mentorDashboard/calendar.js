import React, { useState } from "react";
import styles from "../../styles/dashboard.module.css";
import Schedule from "./Schedule/schedule";
import Card from "./CalendarComponent/card";
import styled from "styled-components";
import axios from "axios";

const Calender = () => {
  const [schedule, showSchedule] = useState(false);
  const [calender, showCalender] = useState(true);
  const [listSchedules, setListSchedules] = useState([]);
  const [checkedDays, setCheckedDays] = useState([]);
  const [timeStart, setTimeStart] = useState({});
  const [timeEnd, setTimeEnd] = useState({});
  const [key, setKey] = useState(0);

  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const timeOptions = {
    "08:00 AM": "08:00 AM",
    "09:00 AM": "09:00 AM",
    "10:00 AM": "10:00 AM",
    "11:00 AM": "11:00 AM",
    "12:00 PM": "12:00 PM",
    "01:00 PM": "01:00 PM",
    "02:00 PM": "02:00 PM",
    "03:00 PM": "03:00 PM",
    "04:00 PM": "04:00 PM",
    "05:00 PM": "05:00 PM",
    "06:00 PM": "06:00 PM",
    "07:00 PM": "07:00 PM",
    "08:00 PM": "08:00 PM",
  };
  const handleDayChange = (day) => {
    console.log(listSchedules);
    if (checkedDays.includes(day)) {
      setCheckedDays(checkedDays.filter((days) => days !== day));
    }
    setCheckedDays([...checkedDays, day]);
    listSchedules.forEach((schedule) => {
      if (schedule.day === day) {
        return setListSchedules(
          listSchedules.filter((schedule) => schedule.day !== day),
        );
      }
    });
    let newSchedule = {
      day,
      startsAt: "09:00",
      endsAt: "20:00",
      timezone: "(GMT-11:00) Pacific/Midway"
    };
    let currentSchedules = listSchedules;
    currentSchedules.push(newSchedule);

    setListSchedules(currentSchedules);
    console.log(listSchedules.some((schedule) => schedule.day === day));
  };

  const handleTimeStartChange = (day, time) => {
    let findShecdule = listSchedules.find((schedule) => schedule.day === day);
    let findIndexNum = listSchedules.findIndex(
      (schedule) => schedule.day === day,
    );
    let newSchedule = {
      ...findShecdule,
      startsAt: time,
    };
    listSchedules[findIndexNum] = newSchedule;
    setKey(key + 1);
  };

  const handleTimeEndChange = (day, time) => {
    let findShecdule = listSchedules.find((schedule) => schedule.day === day);
    let findIndexNum = listSchedules.findIndex(
      (schedule) => schedule.day === day,
    );
    let newSchedule = {
      ...findShecdule,
      endsAt: time,
    };
    listSchedules[findIndexNum] = newSchedule;
    setKey(key + 1);
  };

  const updateSchedules = async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/updateSchedules`;
      console.log({
        username: JSON.parse(localStorage.getItem("mentorData")).mentor_username,
        schedules: listSchedules,
      })
      const { data: res } = await axios.put(url, {
        username: JSON.parse(localStorage.getItem("mentorData")).mentor_username,
        schedules: listSchedules,
      });
      console.log(res);
    } catch (error) {
      console.log(error);

    }
  };

  const handleCalender = () => {
    showSchedule(false);
    showCalender(true);
  };
  const handleSchedule = () => {
    showSchedule(true);
    showCalender(false);
  };

  const MyDiv = styled.div`
    width: 900px;
    height: 900px;
  `;

  const MyInput = styled.input`
    width: 20px;
    height: 20px;
  `;

  return (
    <div
      className={`${styles.schedule} tw-text-black tw-ml-[19rem]  tw-mt-10`}
      key={key}
    >
      <div className="tw-font-semibold tw-text-4xl tw-pb-6">Availability</div>
      <button
        onClick={handleCalender}
        className="hover:tw-bg-gray-100 default:tw-bg-gray-100 tw-border-black hover:tw-border-[2px] tw-border-[1px] tw-px-5 tw-py-2 tw-text-black tw-text-center hover:tw-font-semibold tw-rounded-full"
      >
        Calendar
      </button>
      <button
        onClick={handleSchedule}
        className="tw-ml-5  hover:tw-bg-gray-100 tw-border-black hover:tw-border-[2px] tw-border-[1px] tw-px-5 tw-py-2 tw-text-black tw-text-center hover:tw-font-semibold tw-rounded-full"
      >
        Schedule
      </button>
      <hr className="tw-h-px  tw-my-5 tw-bg-gray-300 tw-border-0 tw-dark:bg-gray-700" />
      <div className="content tw-pt-5">
        {calender && (
          <div>
            <Card />
          </div>
        )}
        {schedule && (
          <>
            <Schedule />
            <MyDiv className="tw-mt-8 tw-border tw-rounded-md tw-p-10 tw-border-2 tw-mb-[6rem]">
              <div className="tw-flex ">
                <h2 className="tw-font-semibold tw-text-lg">Default</h2>
                <button className=" tw-ml-[43rem] tw-bg-black tw-text-center tw-text-white tw-rounded-md tw-px-4 tw-py-2 tw-p-5 hover:tw-bg-gray-700 tw-font-semibold tw-text-base" onClick={() => updateSchedules()}>
                  Save
                </button>
              </div>
              {weekdays.map((dayName, index) => (
                <div key={index} className="tw-mt-7 ">
                  <MyInput
                    type="checkbox"
                    checked={checkedDays.includes(dayName)}
                    onChange={() => handleDayChange(dayName)}
                  />
                  <label className="tw-ml-[0.5rem] tw-font-medium tw-text-base">
                    {dayName}
                  </label>
                  <div>
                    {listSchedules.filter((obj) => obj.day === dayName).length >
                    0 ? (
                      listSchedules
                        .filter((obj) => obj.day === dayName)
                        .map((schedule) => (
                          <div className="tw-flex">
                            <div className="">
                              {/* <h3>Select Time:</h3> */}
                              <select
                                value={schedule.startsAt || ""}
                                onChange={(e) =>
                                  handleTimeStartChange(dayName, e.target.value)
                                }
                                className="tw-font-medium tw-ml-[13rem] tw-rounded-md tw-w-2/3 hover:tw-border-black hover:tw-border-2"
                              >
                                <option value="" className="tw-text-gray-200">
                                  9:00 AM
                                </option>
                                {Object.values(timeOptions).map(
                                  (timeOption) => (
                                    <option key={timeOption} value={timeOption}>
                                      {timeOption}
                                    </option>
                                  ),
                                )}
                              </select>
                            </div>
                            <div className="">
                              {/* <h3>Select Time:</h3> */}
                              <select
                                value={
                                  listSchedules[
                                    listSchedules.findIndex(
                                      (schedule) => schedule.day === dayName,
                                    )
                                  ].endsAt || ""
                                }
                                onChange={(e) =>
                                  handleTimeEndChange(dayName, e.target.value)
                                }
                                className="tw-font-medium tw-ml-[10rem] tw-rounded-md  tw-w-2/3 hover:tw-border-black hover:tw-border-2"
                              >
                                <option value="" className="tw-text-gray-200">
                                  8:00 PM
                                </option>
                                {Object.values(timeOptions).map(
                                  (timeOption) => (
                                    <option key={timeOption} value={timeOption}>
                                      {timeOption}
                                    </option>
                                  ),
                                )}
                              </select>
                            </div>
                          </div>
                        ))
                    ) : (
                      <p>Unavailble</p>
                    )}
                  </div>
                </div>
              ))}
            </MyDiv>
          </>
        )}
      </div>
    </div>
  );
};

export default Calender;
