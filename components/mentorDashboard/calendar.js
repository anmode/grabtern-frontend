import React, { useState } from "react";
import styles from "../../styles/dashboard.module.css";
import Card from "./CalendarComponent/card";
import styled from "styled-components";
import { BsTrash3Fill } from "react-icons/bs";

const Calender = () => {
  const [showDefault, setShowDefault] = useState(false);
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
    if (selectedDays.includes(day)) {
      setSelectedDays(
        selectedDays.filter((selectedDay) => selectedDay !== day),
      );
      setSelectedTime((prevTimes) => {
        const updatedTimes = { ...prevTimes };
        delete updatedTimes[day];
        return updatedTimes;
      });
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

  // create new schedule
  const [components, setComponents] = useState([]);            // array of components (store all schedules)  
  const [showNewSchedule, setShowNewSchedule] = useState(false); // show new schedule form

  const createSchedule = () => {
    const newComp = (
      {
        props: {
          id: components.length,
          deleteSchedule: deleteSchedule,
        },
        componentHidden: (
          <div key={components.length} className="tw-mt-8 tw-flex tw-flex-col tw-rounded-md tw-p-10 tw-border-2 max-[512px]:tw-border-0 tw-gap-2 tw-w-[900px] max-[960px]:tw-w-[800px] max-[800px]:tw-w-[700px] max-[708px]:tw-w-[370px] max-[512px]:tw-max-w-screen">
            <div className="tw-flex tw-justify-between max-[512px]:tw-flex-col max-[512px]:tw-justify-start max-[512px]:tw-items  -start">
              <h2 className="tw-font-semibold tw-text-lg">Schedule {components.length + 1}</h2>
              <div className="tw-flex tw-gap-4">
                <button onClick={() => setShowNewSchedule(true)} className=" tw-bg-black tw-text-center tw-text-white tw-rounded-md tw-px-4 tw-py-2 hover:tw-bg-gray-700 tw-font-semibold tw-text-base">
                  Show
                </button>
                <button onClick={() => deleteSchedule(components.length)} className="tw-flex tw-justify-center tw-items-center tw-gap-2 tw-bg-black tw-text-center tw-text-white tw-rounded-md tw-px-4 tw-py-2 hover:tw-bg-gray-700 tw-font-semibold tw-text-base">
                  <BsTrash3Fill /> Delete
                </button>
              </div>
            </div>
          </div>
        ),
        componentShow: (
          <div key={components.length} className="tw-mt-8 tw-flex tw-flex-col tw-rounded-md tw-p-10 tw-border-2 max-[512px]:tw-border-0 tw-gap-2 tw-w-[900px] max-[960px]:tw-w-[800px] max-[800px]:tw-w-[700px] max-[708px]:tw-w-[370px] max-[512px]:tw-max-w-screen">
            <div className="tw-flex tw-justify-between max-[512px]:tw-flex-col">
              <h2 className="tw-font-semibold tw-text-lg">Schedule {components.length + 1}</h2>
              <div className="tw-flex tw-gap-4">
                <button className=" tw-bg-black tw-ease-in-out tw-duration-200 tw-transition-all tw-text-center tw-text-white tw-rounded-md tw-px-4 tw-py-2 hover:tw-bg-gray-700 tw-font-semibold tw-text-base">
                  Save
                </button>
                <button onClick={
                  () => {
                    setShowNewSchedule(false);
                  }
                } className=" tw-bg-black tw-text-center tw-text-white tw-rounded-md tw-px-4 tw-py-2 hover:tw-bg-gray-700 tw-font-semibold tw-text-base">
                  Hide
                </button>
              </div>
            </div>

            {weekdays.map((day, index) => (
              <div
                key={index}
                className="tw-mt-10 tw-flex tw-justify-between tw-items-center max-[708px]:tw-flex-col max-[708px]:tw-items-start max-[512px]:tw-gap-2"
              >
                <div className="tw-flex tw-items-center tw-gap-2 tw-justify-center tw-text-center">
                  <input
                    id={index}
                    type="checkbox"
                    checked={selectedDays.includes(day)}
                    onChange={() => handleDayChange(day)}
                    className="tw-w-5 tw-h-5 tw-rounded-md tw-border-2 tw-flex tw-justify-center tw-items-center tw-border-gray-400"
                  />
                  <label
                    for={index}
                    className="tw-flex tw-justify-center tw-text-center tw-items-center"
                  >
                    <span className="tw-font-medium tw-text-center tw-items-center tw-justify-center tw-flex tw-relative tw-top-1">
                      {day}
                    </span>
                  </label>
                </div>

                {selectedDays.includes(day) ? (
                  <div className="tw-flex tw-gap-5">
                    <div className="tw-flex tw-justify-center tw-items-center">
                      {/* <h3>Select Time:</h3> */}
                      <select
                        value={selectedTimes[day] || ""}
                        onChange={(e) =>
                          handleTimeChange(day, e.target.value)
                        }
                        className="tw-w-28 tw-h-10 tw-rounded-md tw-border-2 tw-flex tw-justify-center tw-items-center tw-border-gray-400 max-[512px]:tw-w-20 max-[512px]:tw-h-8 max-[512px]:tw-text-xs max-[512px]:tw-px-1 max-[512px]:tw-py-1 max-[512px]:tw-text-center max-[512px]:tw-rounded-sm max-[512px]:tw-border-2 max-[512px]:tw-border-gray-400"
                      >
                        <option value="" className="" selected>
                          9:00 AM
                        </option>
                        {Object.values(timeOptions).map((timeOption) => (
                          <option key={timeOption} value={timeOption}>
                            {timeOption}
                          </option>
                        ))}
                      </select>
                    </div>
                    <span className="tw-text-center tw-items-center tw-justify-center tw-flex">
                      -
                    </span>
                    <div className="tw-flex tw-justify-center tw-items-center">
                      {/* <h3>Select Time:</h3> */}
                      <select
                        value={selectTime[day] || ""}
                        onChange={(e) => handleTime(day, e.target.value)}
                        className="tw-w-28 tw-h-10 tw-rounded-md tw-border-2 tw-flex tw-justify-center tw-items-center tw-border-gray-400 max-[512px]:tw-w-20 max-[512px]:tw-h-8 max-[512px]:tw-text-xs max-[512px]:tw-px-1 max-[512px]:tw-py-1 max-[512px]:tw-text-center max-[512px]:tw-rounded-sm max-[512px]:tw-border-2 max-[512px]:tw-border-gray-400"
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
            ))}
          </div>
        )
      }
    )
    setComponents([...components, newComp]);
  }

  const deleteSchedule = (idToDelete) => {
    const updatedSchedules = components.filter(schedule => schedule.props.id !== idToDelete);
    setComponents(updatedSchedules);
  };


  return (
    <div className="tw-text-black tw-flex tw-justify-start tw-items-cnter tw-flex-col tw-pl-[10rem] tw-pt-10 tw-w-[900px] max-[960px]:tw-w-[800px] max-[800px]:tw-w-[700px] max-[800px]:tw-pl-20 max-[708px]:tw-w-[370px] max-[512px]:tw-w-[300px] max-[512px]:tw-pl-10 max-[375px]:tw-pl-14 max-[512px]:tw-justify-center max-[512px]:tw-items-center max-[375px]:tw-w-[250px]">
      <div className="tw-font-semibold tw-text-4xl tw-pb-6">Availability</div>
      <div className="tw-flex tw-gap-6">
        <button
          onClick={handleCalender}
          className="tw-bg-primary-100 hover:tw-bg-primary-200 tw-ease-in-out tw-duration-200 tw-transition-all tw-font-semibold tw-text-white tw-px-5 tw-py-2 tw-text-center hover:tw-font-semibold tw-rounded-md"
        >
          Calendar
        </button>
        <button
          onClick={handleSchedule}
          className="tw-bg-primary-100 hover:tw-bg-primary-200 tw-ease-in-out tw-duration-200 tw-transition-all tw-font-semibold tw-text-white tw-px-5 tw-py-2 tw-text-center hover:tw-font-semibold tw-rounded-md"
        >
          Schedule
        </button>
      </div>
      <hr className="tw-h-px tw-my-5 tw-bg-gray-300 tw-border-0 tw-flex tw-justify-center tw-items-center tw-dark:bg-gray-700 tw-flex-wrap" />
      <div className="tw-flex tw-flex-col tw-flex-wrap tw-pt-6">
        {calender && (
          <div>
            <Card />
          </div>
        )}
        {schedule && (
          <div className="tw-flex tw-flex-col tw-justify-start tw-items-start max-[512px]:tw-pl-8 max-[512px]:tw-justify-center max-[512px]:tw-items-center">

            <div className="tw-flex tw-gap-6 max-[512px]:tw-justify-center max-[512px]:tw-items-center">
              <button onClick={() => setShowDefault(true)} className="tw-bg-gray-200 tw-rounded-md tw-p-3 tw-font-semibold hover:tw-bg-gray-300 tw-ease-in-out tw-duration-150 tw-transition-all">
                Default
              </button>
              <button onClick={createSchedule} className="tw-bg-gray-200 tw-rounded-md tw-p-3 tw-font-semibold hover:tw-bg-gray-300 tw-ease-in-out tw-duration-150 tw-transition-all">
                + New Schedule
              </button>
            </div>

            {
              showDefault ? (
                <div className="tw-mt-8 tw-flex tw-flex-col tw-rounded-md tw-p-10 tw-border-2 max-[512px]:tw-border-0 tw-gap-2 tw-w-[900px] max-[960px]:tw-w-[800px] max-[800px]:tw-w-[700px] max-[708px]:tw-w-[370px] max-[512px]:tw-max-w-screen">
                  <div className="tw-flex tw-justify-between">
                    <h2 className="tw-font-semibold tw-text-lg">Default</h2>
                    <div className="tw-flex tw-gap-4">
                      <button className=" tw-bg-black tw-ease-in-out tw-duration-200 tw-transition-all tw-text-center tw-text-white tw-rounded-md tw-px-4 tw-py-2 hover:tw-bg-gray-700 tw-font-semibold tw-text-base">
                        Save
                      </button>
                      <button onClick={() => setShowDefault(false)} className=" tw-bg-black tw-text-center tw-text-white tw-rounded-md tw-px-4 tw-py-2 hover:tw-bg-gray-700 tw-font-semibold tw-text-base">
                        Hide
                      </button>
                    </div>
                  </div>

                  {weekdays.map((day, index) => (
                    <div
                      key={index}
                      className="tw-mt-10 tw-flex tw-justify-between tw-items-center max-[708px]:tw-flex-col max-[708px]:tw-items-start max-[512px]:tw-gap-2"
                    >
                      <div className="tw-flex tw-items-center tw-gap-2 tw-justify-center tw-text-center">
                        <input
                          id={index}
                          type="checkbox"
                          checked={selectedDays.includes(day)}
                          onChange={() => handleDayChange(day)}
                          className="tw-w-5 tw-h-5 tw-rounded-md tw-border-2 tw-flex tw-justify-center tw-items-center tw-border-gray-400"
                        />
                        <label
                          for={index}
                          className="tw-flex tw-justify-center tw-text-center tw-items-center"
                        >
                          <span className="tw-font-medium tw-text-center tw-items-center tw-justify-center tw-flex tw-relative tw-top-1">
                            {day}
                          </span>
                        </label>
                      </div>

                      {selectedDays.includes(day) ? (
                        <div className="tw-flex tw-gap-5">
                          <div className="tw-flex tw-justify-center tw-items-center">
                            {/* <h3>Select Time:</h3> */}
                            <select
                              value={selectedTimes[day] || ""}
                              onChange={(e) =>
                                handleTimeChange(day, e.target.value)
                              }
                              className="tw-w-28 tw-h-10 tw-rounded-md tw-border-2 tw-flex tw-justify-center tw-items-center tw-border-gray-400 max-[512px]:tw-w-20 max-[512px]:tw-h-8 max-[512px]:tw-text-xs max-[512px]:tw-px-1 max-[512px]:tw-py-1 max-[512px]:tw-text-center max-[512px]:tw-rounded-sm max-[512px]:tw-border-2 max-[512px]:tw-border-gray-400"
                            >
                              <option value="" className="" selected>
                                9:00 AM
                              </option>
                              {Object.values(timeOptions).map((timeOption) => (
                                <option key={timeOption} value={timeOption}>
                                  {timeOption}
                                </option>
                              ))}
                            </select>
                          </div>
                          <span className="tw-text-center tw-items-center tw-justify-center tw-flex">
                            -
                          </span>
                          <div className="tw-flex tw-justify-center tw-items-center">
                            {/* <h3>Select Time:</h3> */}
                            <select
                              value={selectTime[day] || ""}
                              onChange={(e) => handleTime(day, e.target.value)}
                              className="tw-w-28 tw-h-10 tw-rounded-md tw-border-2 tw-flex tw-justify-center tw-items-center tw-border-gray-400 max-[512px]:tw-w-20 max-[512px]:tw-h-8 max-[512px]:tw-text-xs max-[512px]:tw-px-1 max-[512px]:tw-py-1 max-[512px]:tw-text-center max-[512px]:tw-rounded-sm max-[512px]:tw-border-2 max-[512px]:tw-border-gray-400"
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
                  ))}
                </div>
              ) : (
                <div className="tw-mt-8 tw-flex tw-flex-col tw-rounded-md tw-p-10 tw-border-2 max-[512px]:tw-border-0 tw-gap-2 tw-w-[900px] max-[960px]:tw-w-[800px] max-[800px]:tw-w-[700px] max-[708px]:tw-w-[370px] max-[512px]:tw-max-w-screen">
                  <div className="tw-flex tw-justify-between">
                    <h2 className="tw-font-semibold tw-text-lg">Default</h2>
                    <button onClick={() => setShowDefault(true)} className="tw-bg-black tw-text-center tw-text-white tw-rounded-md tw-px-4 tw-py-2 hover:tw-bg-gray-700 tw-font-semibold tw-text-base">
                      Show
                    </button>
                  </div>
                </div>
              )
            }
            {/* New Schedule */}
            <div>
              {
                components.map((component, index) => (
                  <div key={index}>
                    {
                      showNewSchedule ? component.componentShow : component.componentHidden
                    }
                  </div>
                ))
              }
            </div>
          </div>
        )}
      </div>
    </div >
  );
};

export default Calender;











