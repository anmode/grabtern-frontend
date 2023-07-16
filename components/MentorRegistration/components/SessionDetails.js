import React, { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import Card from "./Card";
import Input from "./Input";

function SessionDetails({ formData, changeArray, validator }) {
  const initialSession = {
    name: "",
    type: "",
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
      type: "text",
      name: "name",
      id: "name",
      className: "mentorFormInput",
      onChange: onChange,
      placeholder: "eg. 1 on 1 Mentorship",
      required: true,
      value: newSession.name,
      validator: sessionValidator,
      validation: "required|alpha_num_dash_space",
    },
    {
      label: "Session Type",
      type: "text",
      name: "type",
      id: "type",
      className: "mentorFormInput",
      onChange: onChange,
      placeholder: "eg. Video Meeting",
      required: true,
      value: newSession.type,
      validator: sessionValidator,
      validation: "required|alpha_num_dash_space",
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

      {/* error if it does not have any session */}
      {validator.current.message(
        "sessions",
        formData.sessions,
        "required|min:1",
        { className: "tw-relative tw-text-red-600 tw-text-2xl" },
      )}
      {/* error if it does not have any session */}

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
