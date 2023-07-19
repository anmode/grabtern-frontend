import React from "react";
import {useState} from 'react';


const Calender=()=> {
  const [schedule,showSchedule]=useState(false)
const [calender,showCalender]=useState(true);

const [selectedDays,setSelectedDays]=useState([]);
const [selectedTimes, setSelectedTimes] = useState({});

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const timeOptions = {
  '08:00 AM': '08:00 AM',
  '09:00 AM': '09:00 AM',
  '10:00 AM': '10:00 AM',
  '11:00 AM': '11:00 AM',
  '12:00 PM': '12:00 PM',
  '01:00 PM': '01:00 PM',
  '02:00 PM': '02:00 PM',
  '03:00 PM': '03:00 PM',
  '04:00 PM': '04:00 PM',
  '05:00 PM': '05:00 PM',
  '06:00 PM': '06:00 PM',
  '07:00 PM': '07:00 PM',
};
const handleDayChange = (day) => {
  setSelectedTime('');
  if (selectedDays.includes(day)) {
    setSelectedDays(selectedDays.filter((selectedDay) => selectedDay !== day));
  } else {
    setSelectedDays([...selectedDays, day]);
  }
};

const handleTimeChange = (day, time) => {
  setSelectedTimes((prevTimes) => ({ ...prevTimes, [day]: time }));
};

const handleCalender=()=>{
  showSchedule(false);
  showCalender(true);
}
const handleSchedule=()=>{
  showSchedule(true);
  showCalender(false);
}
  return <div className="tw-text-black tw-ml-[19rem]  tw-mt-10"> 
 
    <button onClick={handleCalender} className="tw-border-black tw-border-[2px] tw-p-2 tw-rounded-md">Calender</button>
    <button onClick={handleSchedule} className="tw-ml-9 tw-border-black tw-border-[2px] tw-p-2 tw-rounded-md">Schedule</button>
    <div className="content">
{calender && (
  <div>
    hfhddfkbflbrgpkwr;
  </div>
)}
{schedule && (

<div className="tw-mt-7">
<h2>Schedule Form</h2>
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
        <h3>Select Time:</h3>
        <select
                value={selectedTimes[day] || ''}
                onChange={(e) => handleTimeChange(day, e.target.value)}
              >
                <option value="">Select Time</option>
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
)

}
    </div>
 
    </div>

}

export default Calender;
