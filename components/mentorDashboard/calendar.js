import React, { useState } from "react";
import styles from "../../styles/dashboard.module.css";

const Calender = () => {
  const [schedule, showSchedule] = useState(false);
  const [calender, showCalender] = useState(true);

  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedStartTime, setSelectedStartTime] = useState({});
  const [selectedEndTime, setSelectedEndTime] = useState({});
  const [meetingLink, setMeetingLink] = useState("");
  const[timezone,setTimezone]=useState(null);
  const [showSave, setShowSave] = useState(false);
  const getTimezoneOffset = (timezone) => {
    const now = moment(); // Get the current time
    return now.tz(timezone).format('Z'); // Get the timezone offset in hours and minutes
  };
  const timezones = moment.tz.names().map((timezone) => ({
    label: `${timezone} (GMT ${getTimezoneOffset(timezone)})`,
    value: timezone,
  }));

  const handleTimezoneChange=(timezone)=>{
  setTimezone(timezone);
  }

  const selectedTimezone = timezones.find((option) => option.value === timezone);
  const handleMeetingLink = (event) => {
    setMeetingLink(event.target.value);
    setShowSave(true);
  };
  const handleSave = () => {};
  const handleCancel = () => {
    setMeetingLink("");
    setShowSave(false);
  };
  

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
  const handleDayChange = (day) => {
    setSelectedStartTime('');
    setSelectedEndTime('');
    if (selectedDays.includes(day)) {
      setSelectedDays(
        selectedDays.filter((selectedDay) => selectedDay !== day),
      );
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const handleStartTime = (day, time) => {
    setSelectedStartTime((prevTimes) => ({ ...prevTimes, [day]: time }));
  };
  const handleEndTime = (day, time) => {
    setSelectedEndTime((prevTimes) => ({ ...prevTimes, [day]: time }));
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
        {calender && <div>hfhddfkbflbrgpkwr;</div>}
        {calender && (
          <div className="tw-mt-7 tw-w-[600px]">
            <hr className="tw-border-t-2 tw-border-[#c0c0c0] tw-mt-14 tw-width-[100%] tw-shadow-lg  tw-text-opacity-50" />
            <div
              className={`${styles.container1} tw-flex-row tw-items-center tw-grid tw-grid-cols-2   tw-gap-2 tw-mt-[6rem]`}
            >
              <div
                className={`${styles.container} tw-mb-8 tw-flex tw-flex-row`}
              >
                <RxLapTimer/>
                <h1 className="tw-mr-4 tw-ml-4"> Select the required timezone</h1>
              </div>
              <div className="tw-flex tw-mb-8 tw-w-[300px] ">
              <Select className="tw-w-[293px]"
    options={timezones}
    value={selectedTimezone}
    onChange={handleTimezoneChange}
    placeholder="Select a timezone"
    />
       {timezone && (
        <div className="tw-w-[300px]">
 {setTimezone.label}
        </div>
      
      )}
              </div>
              <div
                className={`${styles.container} tw-mb-8 tw-flex tw-flex-row`}
              >
                <BiLinkAlt />
                <h1 className="tw-mr-4 tw-ml-4"> Enter the meeting link</h1>
              </div>
              <div>
                <input
                  className="tw-h-10 tw-border-2 tw-border-[#E2E8F0] tw-rounded-md tw-mb-8 tw-w-[294px]"
                  type="url"
                  value={meetingLink}
                  onChange={handleMeetingLink}
                  placeholder="enter the meeting link"
                />

                {showSave && (
                  <div>
                    <button
                      className="tw-border-black tw-border-[2px] tw-p-1 tw-rounded-md tw-mr-3 tw-w-16"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                    <button
                      className="tw-border-black tw-border-[2px] tw-p-1 tw-rounded-md"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
              <div
                className={`${styles.container} tw-mb-8 tw-flex tw-flex-row`}
              >
                <BsCalendarCheck />
                <h1 className="tw-ml-4">Booking period</h1>
              </div>
              <div className="tw-mb-8">
                <select
                  name="BookingPeriod"
                  value={BookingPeriod}
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
                <IoMdTime />
                <h1 className="tw-ml-4">Notice period</h1>
              </div>
              <div className="tw-flex tw-flex-row tw-mb-8">
                <input type="number" />
                <select
                  className="tw-w-[94px] tw-pr-[6px]"
                  value={NoticePeriod}
                  onChange={handleNoticePeriod}
                >
                  {noticePeriod.map((period) => (
                    <option key={period} value={period}>
                      {period}
                    </option>
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
                  <div className="tw-flex tw-flex-row">
                  <div>
                    {/* <h3>Select Time:</h3> */}
                    <select className="tw-w-36"
                      value={selectedStartTime[day] || ""}
                      onChange={(e) => handleStartTime(day, e.target.value)}
                    >
                      <option value="" className="tw-text-gray-200">
                         start Time
                      </option>
                      {Object.values(timeOptions).map((timeOption) => (
                        <option key={timeOption} value={timeOption}>
                          {timeOption}
                        </option>
                        
                      
                      ))}
                    
                    </select>
                    {selectedStartTime[day] && (
                      <div>
                        <h3>Selected Time:</h3>
                        <div>{selectedStartTime[day]}</div>
                      </div>
                    )}
                  </div>
                  <div className="tw-m-2">-</div>
                  
                  <div>
                    {/* <h3>Select Time:</h3> */}
                    <select className="tw-w-36"
                      value={selectedEndTime[day] || ""}
                      onChange={(e) => handleEndTime(day, e.target.value)}
                      
                    >
                      <option value="8:00AM" className="tw-text-gray-200">
                      end time
                      </option>
                      {Object.values(timeOptions).map((timeOption) => (
                        <option key={timeOption} value={timeOption}>
                          {timeOption}
                        </option>
                        
                      
                      ))}
                    
                    </select>
                    {selectedEndTime[day] && (
                      <div>
                        <h3>Selected Time:</h3>
                        <div>{selectedEndTime[day]}</div>
                      </div>
                    )}
                  </div>
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
