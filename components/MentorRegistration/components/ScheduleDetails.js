import React, { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import DayInput from "../../dateAndTime/DayInput";
import TimeZoneInput from "../../dateAndTime/TimeZoneInput";
import Input from "./Input";
import Card from "./Card";

function ScheduleDetails({ formData, changeArray, validator }) {
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

  // for validator
  const scheduleValidator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState();

  // adding schedule function
  const addSchedule = () => {
    if (scheduleValidator.current.allValid()) {
      scheduleValidator.current.hideMessages();
      changeArray("schedules", [...formData.schedules, newSchedule]);
      setNewSchedule(initialSchedule);
      forceUpdate(1);
    } else {
      scheduleValidator.current.showMessages();
      forceUpdate(2);
    }
  };
  const removeSchedule = (removeIndex) => {
    const updatedSchedule = formData.schedules.filter((value, index) => {
      return index != removeIndex;
    });
    changeArray("schedules", updatedSchedule);
  };

  const timeInputs = [
    {
      label: "Start Time",
      type: "time",
      name: "startsAt",
      id: "startsAt",
      className: "mentorFormInput",
      onChange: onChange,
      placeholder: "12:30 PM",
      required: true,
      value: newSchedule.startsAt,
      validator: scheduleValidator,
      validation: ["required", { regex: "([01]?[0-9]|2[0-3]):[0-5][0-9]" }],
    },
    {
      label: "End Time",
      type: "time",
      name: "endsAt",
      id: "endsAt",
      className: "mentorFormInput",
      onChange: onChange,
      placeholder: "2:30 PM",
      required: true,
      value: newSchedule.endsAt,
      validator: scheduleValidator,
      validation: ["required", { regex: "([01]?[0-9]|2[0-3]):[0-5][0-9]" }],
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
        <DayInput
          id="day"
          name="day"
          onChange={onChange}
          value={newSchedule.value}
        />
      </div>
      {/* day input ends */}

      {/* time zone input starts */}
      <div className="div">
        <label className="label uppercase" htmlFor="timezone">
          Time Zone
        </label>
        <TimeZoneInput
          id="timezone"
          name="timezone"
          onChange={onChange}
          value={newSchedule.timezone}
        />
      </div>
      {/* time zone input ends */}

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

      {/* error if it does not have any schedule */}
      {validator.current.message(
        "schedules",
        formData.schedules,
        "required|min:1",
        { className: "tw-relative tw-text-red-600 tw-text-2xl" },
      )}
      {/* error if it does not have any schedule */}

      {/* schedule list starts */}
      <div className="tw-col-span-2 tw-grid lg:tw-grid-cols-2 tw-gap-12">
        {formData.schedules.map((schedule, index) => (
          <Card
            key={index}
            rows={[
              { day: schedule.day, timezone: schedule.timezone },
              { "starts at": schedule.startsAt, "ends at": schedule.endsAt },
            ]}
            index={index}
            removeCard={removeSchedule}
          />
        ))}
      </div>
      {/* schedule list starts */}
    </>
  );
}

export default ScheduleDetails;
