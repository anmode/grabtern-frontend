import React, { useState } from "react";
import Input from "./Input";
import ScheduleCard from "./ScheduleCard";

function SessionDetails({
  formData,
  handleChange,
  isChecked,
  setIsChecked,
  changeSchedule,
}) {
  const initialSchedule = {
    day: "monday",
    timezone: "(GMT-11:00) Pacific/Midway",
    startsAt: "",
    endsAt: "",
  };
  const [newSchedule, setNewSchedule] = useState(initialSchedule);
  // handle change function
  const onChange = (e) => {
    const target = e.target;
    setNewSchedule({ ...newSchedule, [target.name]: target.value });
  };
  // adding schedule function
  const addSchedule = () => {
    changeSchedule([...formData.schedules, newSchedule]);
    setNewSchedule(initialSchedule);
  };
  const removeSchedule = (removeIndex) => {
    const updatedSchedule = formData.schedules.filter((value, index) => {
      return index != removeIndex;
    });
    changeSchedule(updatedSchedule);
  };
  const inputs = [
    {
      label: "30min 1-1 SESSION PRICE",
      type: "text",
      name: "price",
      className: "mentorFormInput",
      onChange: handleChange,
      placeholder: "e.g. ₹51",
      required: true,
      value: formData.price,
    },
  ];
  const timeInputs = [
    {
      label: "Start Time",
      type: "time",
      name: "startsAt",
      className: "mentorFormInput",
      onChange: onChange,
      placeholder: "12:30 PM",
      required: true,
      value: newSchedule.startsAt,
    },
    {
      label: "End Time",
      type: "time",
      name: "endsAt",
      className: "mentorFormInput",
      onChange: onChange,
      placeholder: "2:30 PM",
      required: true,
      value: newSchedule.endsAt,
    },
  ];
  return (
    <>
      <p className="mentorFormHeading">Tell us about your Schedule</p>
      {/* available day and time picker */}

      {/* day input starts */}
      <div className="div">
        <label className="label uppercase" htmlFor="day">
          Day
        </label>
        <select name="day" id="day" onChange={onChange} value={newSchedule.day}>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
          <option value="sunday">Sunday</option>
        </select>
      </div>
      {/* day input ends */}

      {/* time zone input starts */}
      <div className="div">
        <label htmlFor="timezone">Book session Date picker timezone</label>
        <select
          id="timezone"
          name="timezone"
          onChange={onChange}
          value={newSchedule.timezone}
        >
          <option value="(GMT-11:00) Pacific/Midway">
            (GMT-11:00) Pacific/Midway
          </option>
          <option value="(GMT-11:00) Pacific/Niue">
            (GMT-11:00) Pacific/Niue
          </option>
          <option value="(GMT-11:00) Pacific/Pago_Pago">
            (GMT-11:00) Pacific/Pago_Pago
          </option>
          <option value="(GMT-10:00) Pacific/Honolulu">
            (GMT-10:00) Pacific/Honolulu
          </option>
          <option value="(GMT-09:00) America/Anchorage">
            (GMT-09:00) America/Anchorage
          </option>
          <option value="(GMT-08:00) America/Los_Angeles">
            (GMT-08:00) America/Los_Angeles
          </option>
          <option value="(GMT-07:00) America/Denver">
            (GMT-07:00) America/Denver
          </option>
          <option value="(GMT-06:00) America/Chicago">
            (GMT-06:00) America/Chicago
          </option>
          <option value="(GMT-05:00) America/New_York">
            (GMT-05:00) America/New_York
          </option>
          <option value="(GMT-04:00) America/Caracas">
            (GMT-04:00) America/Caracas
          </option>
          <option value="(GMT-03:00) America/Buenos_Aires">
            (GMT-03:00) America/Buenos_Aires
          </option>
          <option value="(GMT-02:00) Atlantic/South_Georgia">
            (GMT-02:00) Atlantic/South_Georgia
          </option>
          <option value="(GMT-01:00) Atlantic/Azores">
            (GMT-01:00) Atlantic/Azores
          </option>
          <option value="(GMT+00:00) Europe/London">
            (GMT+00:00) Europe/London
          </option>
          <option value="(GMT+01:00) Europe/Paris">
            (GMT+01:00) Europe/Paris
          </option>
          <option value="(GMT+02:00) Africa/Johannesburg">
            (GMT+02:00) Africa/Johannesburg
          </option>
          <option value="(GMT+04:00) Asia/Dubai">(GMT+04:00) Asia/Dubai</option>
          <option value="(GMT+05:30) Asia/Kolkata">
            (GMT+05:30) Asia/Kolkata
          </option>
          <option value="(GMT+07:00) Asia/Jakarta">
            (GMT+07:00) Asia/Jakarta
          </option>
          <option value="(GMT+09:00) Asia/Tokyo">(GMT+09:00) Asia/Tokyo</option>
          <option value="(GMT+10:00) Australia/Sydney">
            (GMT+10:00) Australia/Sydney
          </option>
          <option value="(GMT+11:00) Pacific/Noumea">
            (GMT+11:00) Pacific/Noumea
          </option>
          <option value="(GMT+12:00) Pacific/Auckland">
            (GMT+12:00) Pacific/Auckland
          </option>
        </select>
        {/* time zone input ends */}
      </div>
      {/* time zone input starts */}

      {/* time inputs start */}
      {timeInputs.map((input, index) => (
        <Input {...input} key={index} />
      ))}
      {/* time inputs ends */}

      {/* add schedule button starts */}
      <div className="tw-col-span-2 tw-text-right">
        <button
          type="button"
          className="mentorFormButton theme-button-color"
          onClick={addSchedule}
        >
          Add Schedule
        </button>
      </div>
      {/* add schedule button ends */}

      {/* schedule list starts */}
      <div className="tw-col-span-2 tw-grid lg:tw-grid-cols-2 tw-gap-12">
        {(formData.schedules).map((schedule, index) => (
          <ScheduleCard
            key={index}
            schedule={schedule}
            index={index}
            removeSchedule={removeSchedule}
          />
        ))}
      </div>
      {/* schedule list starts */}

      {/* price inputs start */}
      {inputs.map((input, index) => (
        <Input {...input} key={index} />
      ))}
      {/* price inputs ends*/}

      {/* terms and consition checkbox start*/}
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        &nbsp;We will take 11% of your session price as platform fee. So
        according to it keep your session price. Thank you!
      </label>
      {/* terms and consition checkbox  end*/}
    </>
  );
}

export default SessionDetails;
