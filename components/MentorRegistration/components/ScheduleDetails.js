import React, { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import DayInput from "../../dateAndTime/DayInput";
import TimeZoneInput from "../../dateAndTime/TimeZoneInput";
import Input from "./Input";
import Card from "./Card";

function ScheduleDetails({ formData, changeArray }) {
  const initialSchedule = {
    day: "monday",
    timezone: "(GMT+05:30) Asia/Kolkata",
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
  const scheduleValidator = useRef(
    new SimpleReactValidator({
      validators: {
        // rule to check end time is after start time
        after_time: {
          message:
            "The :attribute must be after :startTime and time gap should be of minimum 30 minutes",
          rule: (val, params) => {
            const startDateTime = new Date(`2000-01-01 ${params[0]}`);
            const endDateTime = new Date(`2000-01-01 ${val}`);

            // difference in time in minutes
            const diff =
              (endDateTime.getTime() - startDateTime.getTime()) / (1000 * 60);

            return endDateTime > startDateTime && diff >= 30;
          },
          messageReplace: (message, params) =>
            message.replace(":startTime", params[0]),
        },
      },
    }),
  );
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

  // remove schedule function
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
      validation: [
        "required",
        { regex: "([01]?[0-9]|2[0-3]):[0-5][0-9]" },
        { after_time: newSchedule.startsAt },
      ],
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

      {/* Disclaimer starts*/}
      <p className="tw-text-sm tw-text-primary-200 tw-underline">
        <span className="tw-font-semibold">Note: </span>You can also add or
        update schedules later using dashboard
      </p>
      {/* Disclaimer ends */}

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
