import React, { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import Card from "./Card";
import Input from "./Input";

function SessionDetails({ formData, changeArray }) {
  const initialSession = {
    name: "1 on 1 Mentorship",
    type: "Video Meeting",
    duration: "",
    price: "",
    description: "",
  };
  const [newSession, setNewSession] = useState(initialSession);
  // handle change function
  const onChange = (e) => {
    const target = e.target;
    setNewSession({ ...newSession, [target.name]: target.value });
  };

  // for validator
  const sessionValidator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState();

  // add new session
  const addSession = () => {
    if (sessionValidator.current.allValid()) {
      sessionValidator.current.hideMessages();
      changeArray("sessions", [...formData.sessions, newSession]);
      setNewSession(initialSession);
      forceUpdate(1);
    } else {
      sessionValidator.current.showMessages();
      forceUpdate(2);
    }
  };
  // remove session
  const removeSession = (removeIndex) => {
    const updatedSessions = formData.sessions.filter((value, index) => {
      return index != removeIndex;
    });
    changeArray("sessions", updatedSessions);
  };

  // inputs
  const inputs = [
    {
      label: "Session Name",
      element: "select",
      options: [
        { text: "1 on 1 Mentorship", value: "1 on 1 Mentorship" },
        { text: "Resume Review", value: "Resume Review" },
        { text: "Other", value: "" },
      ],
      name: "name",
      id: "name",
      className: "mentorFormInput",
      handleChange: onChange,
      required: true,
      value: newSession.name,
      defaultValue: "1 on 1 Mentorship",
      placeholder: "eg: Mock Interview",
      validator: sessionValidator,
      validation: "required|alpha_num_dash_space",
    },
    {
      label: "Session Type",
      element: "select",
      options: [
        { text: "Video Meeting", value: "Video Meeting" },
        { text: "Group Discussion/Call", value: "Group Discussion/Call" },
        { text: "Text or Messaging", value: "Text or Messaging" },
      ],
      name: "type",
      id: "type",
      className: "mentorFormInput",
      handleChange: onChange,
      required: true,
      value: newSession.type,
      validator: sessionValidator,
      validation: "required|string",
    },
    {
      label: "Session Duration (in minutes)",
      type: "text",
      name: "duration",
      id: "duration",
      className: "mentorFormInput",
      onChange: onChange,
      placeholder: "eg. 45",
      required: true,
      value: newSession.duration,
      validator: sessionValidator,
      validation: "required|numeric",
    },
    {
      label: "Session Price",
      type: "text",
      name: "price",
      id: "price",
      className: "mentorFormInput",
      onChange: onChange,
      placeholder: "eg. $10",
      required: true,
      value: newSession.price,
      validator: sessionValidator,
      validation: "required|currency",
    },
    {
      divClassName: "tw-col-span-2",
      label: "Session Description",
      type: "text",
      name: "description",
      id: "description",
      className: "mentorFormInput",
      onChange: onChange,
      placeholder: "eg. Achieve your goals faster with customized road map",
      required: true,
      value: newSession.description,
      element: "textarea",
      validator: sessionValidator,
      validation: "required",
    },
  ];
  return (
    <>
      <p className="mentorFormHeading">Tell us about your Sessions</p>

      {/* inputs starts*/}
      {inputs.map((input, index) => (
        <Input {...input} key={index} />
      ))}
      {/* inputs ends */}

      {/* add session button starts */}
      <div className="tw-col-span-2 tw-text-right">
        <button
          type="button"
          className="mentorFormButton theme-button-color"
          onClick={addSession}
        >
          Add Session
        </button>
      </div>
      {/* add session button ends */}

      {/* Disclaimer starts*/}
      <p className="tw-text-sm tw-text-primary-200 tw-underline">
        <span className="tw-font-semibold">Note: </span>You can also add or
        update sessions later using dashboard
      </p>
      {/* Disclaimer ends */}

      {/* session card starts */}
      <div className="tw-col-span-2 tw-grid lg:tw-grid-cols-2 tw-gap-12">
        {formData.sessions.map((session, index) => (
          <Card
            key={index}
            rows={[
              { name: session.name, type: session.type },
              { duration: session.duration, price: session.price },
              { description: session.description },
            ]}
            index={index}
            removeCard={removeSession}
          />
        ))}
      </div>
      {/* session card ends */}
    </>
  );
}

export default SessionDetails;
