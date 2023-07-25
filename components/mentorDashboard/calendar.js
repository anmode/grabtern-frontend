import React, { useState } from "react";
import styles from "../../styles/dashboard.module.css";
import {BiLinkAlt} from "react-icons/bi";
import {BsCalendarCheck} from "react-icons/bs";
import {IoMdTime} from "react-icons/io";
const Calender = () => {
  const [schedule, showSchedule] = useState(false);
  const [calender, showCalender] = useState(true);

  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTimes, setSelectedTime] = useState({});
  const [meetingLink,setMeetingLink]=useState('');
  const [showSave,setShowSave]=useState(false);
  
  const handleMeetingLink=(event)=>{
    setMeetingLink(event.target.value);
    setShowSave(true);
  }
  const handleSave=()=>{
    
    
  }
  const handleCancel=()=>{
    setMeetingLink('');
    setShowSave(false);
  }


  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
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
  };
  const bookingPeriod = [
    "2 weeks",
    "3 weeks",
    "4 weeks",
    "2 months",
    "3 months"
  ];
  const noticePeriod=[
    "minutes",
    "hours",
    "days"
  ]
  const [BookingPeriod,setBookingPeriod]=useState(bookingPeriod[0]);
  const [NoticePeriod,setNoticePeriod]=useState(noticePeriod[0]);
  const handleBookingPeriod=(event)=>{
setBookingPeriod(event.target.value);
  }
  const handleNoticePeriod=(event)=>{
    setNoticePeriod(event.target.value);
  }
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

  const handleCalender = () => {
    showSchedule(false);
    showCalender(true);
  };
  const handleSchedule = () => {
    showSchedule(true);
    showCalender(false);
  };
  return (
    <div className={`${styles.schedule} tw-text-black tw-ml-[19rem]  tw-mt-10`}>
      <button
        onClick={handleCalender}
        className="tw-border-black tw-border-[2px] tw-p-2 tw-rounded-md"
      >
        Calendar
      </button>
      <button
        onClick={handleSchedule}
        className="tw-ml-9 tw-border-black tw-border-[2px] tw-p-2 tw-rounded-md"
      >
        Schedule
      </button>
      <div className="content">
        {calender && (
          <div className="tw-mt-7 tw-w-[600px]">
            <hr className="tw-border-t-2 tw-border-[#c0c0c0] tw-mt-14 tw-width-[100%] tw-shadow-lg  tw-text-opacity-50" />
          <div className={ `${styles.container1} tw-flex-row tw-items-center tw-grid tw-grid-cols-2   tw-gap-2 tw-mt-[6rem]`}>
            <div className={`${styles.container} tw-mb-8 tw-flex tw-flex-row`}>
              <BiLinkAlt/>
            <h1 className="tw-mr-4 tw-ml-4">  Enter the meeting link</h1>
            </div>
            <div>
            <input className="tw-h-10 tw-border-2 tw-border-[#E2E8F0] tw-rounded-md tw-mb-8 tw-w-[294px]"
            type="url"
            value={meetingLink}
            onChange={handleMeetingLink}
            placeholder="enter the meeting link" />
             
             {showSave && (
              <div>
                <button  className="tw-border-black tw-border-[2px] tw-p-1 tw-rounded-md tw-mr-3 tw-w-16"  onClick={handleSave}>Save</button>
                <button className="tw-border-black tw-border-[2px] tw-p-1 tw-rounded-md" onClick={handleCancel}>Cancel</button>
              </div>
            )}
            </div>
           <div className={`${styles.container} tw-mb-8 tw-flex tw-flex-row`}>
            <BsCalendarCheck/>
            <h1 className="tw-ml-4">Booking period</h1>
           </div>
           <div className="tw-mb-8">
           <select
        
        name="BookingPeriod"
        value={setBookingPeriod}
        onChange={handleBookingPeriod}
        className="border border-gray-400 p-2 rounded"
      >
          {bookingPeriod.map((period) => (
          <option key={period} value={period}>
            {period}
          </option>
        ))}

      
      </select>
    
           </div>
           <div className={`${styles.container}tw-mb-8 tw-flex tw-flex-row`}>
            <IoMdTime/>
            <h1 className="tw-ml-4">Notice period</h1>
           </div>
           <div className="tw-flex tw-flex-row tw-mb-8">
            <input 
            type="number" />
            <select className="tw-w-[94px] tw-pr-[6px]"
            value={setNoticePeriod}
            onChange={handleNoticePeriod}

            >
              {noticePeriod.map((period)=>(
                <option key={period} value={period}>{period}</option>
                 
              ))}
            </select>
           </div>
          </div>
          </div>
        )}
        {schedule && (
          <div className="tw-mt-7">
            <h2 className="tw-font-semibold">Schedule Form</h2>
            <hr className="tw-border-t-2 tw-border-[#c0c0c0] tw-mt-4 tw-width-[90%] tw-shadow-lg  tw-text-opacity-50" />
            {weekdays.map((day, index) => (
              <div key={index} className="tw-mt-7">
                <input
                  type="checkbox"
                  checked={selectedDays.includes(day)}
                  onChange={() => handleDayChange(day)}
                />
                <label>{day}</label>
                {selectedDays.includes(day) && (
                  <div>
                    {/* <h3>Select Time:</h3> */}
                    <select
                      value={selectedTimes[day] || ""}
                      onChange={(e) => handleTimeChange(day, e.target.value)}
                    >
                      <option value="" className="tw-text-gray-200">
                        Select Time
                      </option>
                      {Object.values(timeOptions).map((timeOption) => (
                        <option key={timeOption} value={timeOption}>
                          {timeOption}
                        </option>
                      ))}
                    </select>
                    {selectedTimes[day] && (
                      <div>
                        <h3>Selected Time:</h3>
                        <div>{selectedTimes[day]}</div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Calender;
