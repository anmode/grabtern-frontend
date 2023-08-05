import React, { useState } from "react";
import styles from "../../styles/dashboard.module.css";
import Schedule from "./Schedule/schedule";
import styled from "styled-components";

const Calender = () => {
  const [schedule, showSchedule] = useState(false);
  const [calender, showCalender] = useState(true);
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTimes, setSelectedTime] = useState({});
  const [selectTime, setSelectTime] = useState({});

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
    setSelectedTime("");
    if (selectedDays.includes(day)) {
      setSelectedDays(
        selectedDays.filter((selectedDay) => selectedDay !== day),
      );
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const handleTimeChange = (day, time) => {
    setSelectedTime((prevTimes) => ({ ...prevTimes, [day]: time }));
  };

  const handleTime = (day, time) => {
    setSelectTime((prevTimes) => ({ ...prevTimes, [day]: time }));
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
    height: 600px;
  `;

  const MyInput = styled.input`
    width: 20px;
    height: 20px;
  `;
  return (
    <div className={`${styles.schedule} tw-text-black tw-ml-[19rem]  tw-mt-10`}>
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
        {calender && <div></div>}
        {schedule && (
          <>
            <Schedule />
            <MyDiv className="tw-mt-8 tw-border tw-rounded-md tw-p-10 tw-border-2 tw-mb-[6rem]">
              <div className="tw-flex ">
                <h2 className="tw-font-semibold tw-text-lg">Default</h2>
                <button className=" tw-ml-[43rem] tw-bg-black tw-text-center tw-text-white tw-rounded-md tw-px-4 tw-py-2 tw-p-5 hover:tw-bg-gray-700 tw-font-semibold tw-text-base">
                  Save
                </button>
              </div>
              {weekdays.map((day, index) => (
                <div key={index} className="tw-mt-7 tw-flex">
                  <MyInput
                    type="checkbox"
                    checked={selectedDays.includes(day)}
                    onChange={() => handleDayChange(day)}
                    className=""
                  />
                  <label className="tw-ml-[0.5rem] tw-font-medium tw-text-base">
                    {day}
                  </label>
                  <div>
                    {selectedDays.includes(day) ? (
                      <div className="tw-flex">
                        <div>
                          {/* <h3>Select Time:</h3> */}
                          <select
                            value={selectedTimes[day] || ""}
                            onChange={(e) =>
                              handleTimeChange(day, e.target.value)
                            }
                            className="tw-font-medium tw-ml-[13rem] tw-rounded-md tw-w-2/3 hover:tw-border-black hover:tw-border-2"
                          >
                            <option value="" className="tw-text-gray-200">
                              9:00 AM
                            </option>
                            {Object.values(timeOptions).map((timeOption) => (
                              <option key={timeOption} value={timeOption}>
                                {timeOption}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="">
                          {/* <h3>Select Time:</h3> */}
                          <select
                            value={selectTime[day] || ""}
                            onChange={(e) => handleTime(day, e.target.value)}
                            className="tw-font-medium tw-ml-[10rem] tw-rounded-md  tw-w-2/3 hover:tw-border-black hover:tw-border-2"
                          >
                            <option value="" className="tw-text-gray-200">
                              8:00 PM
                            </option>
                            {Object.values(timeOptions).map((timeOption) => (
                              <option key={timeOption} value={timeOption}>
                                {timeOption}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    ) : (
                      <div className="">
                        <p> &nbsp; &nbsp; &nbsp; Unavailable</p>
                      </div>
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
