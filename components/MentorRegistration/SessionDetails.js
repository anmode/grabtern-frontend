import React, { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import DayInput from "../dateAndTime/DayInput";
import TimeZoneInput from "../dateAndTime/TimeZoneInput";
import Input from "./Input";
import ScheduleCard from "./ScheduleCard";

function SessionDetails({
  formData,
  handleChange,
  isChecked,
  setIsChecked,
  changeSchedule,
  validator,
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

  // for validator
  const sessionValidator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState();

  // adding schedule function
  const addSchedule = () => {
    if (sessionValidator.current.allValid()) {
      sessionValidator.current.hideMessages();
      changeSchedule([...formData.schedules, newSchedule]);
      setNewSchedule(initialSchedule);
      forceUpdate(1);
    } else {
      sessionValidator.current.showMessages();
      forceUpdate(2);
    }
  };

  // removing schedule function
  const removeSchedule = (removeIndex) => {
    const updatedSchedule = formData.schedules.filter((value, index) => {
      return index != removeIndex;
    });
    changeSchedule(updatedSchedule);
  };

  // inputs
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
      validator: validator,
      validation: 'required|currency',
    },
  ];

  // time inputs
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
      validator: sessionValidator,
      validation: ['required', {regex: '([01]?[0-9]|2[0-3]):[0-5][0-9]'}],
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
      validator: sessionValidator,
      validation: ['required', {regex: '([01]?[0-9]|2[0-3]):[0-5][0-9]'}],
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

      {/* schedule list starts */}
      <div className="tw-col-span-2 tw-grid lg:tw-grid-cols-2 tw-gap-12">
        {formData.schedules.map((schedule, index) => (
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
