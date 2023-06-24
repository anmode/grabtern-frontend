import React, { useState } from "react";
import Input from "./Input";

function SessionDetails({formData, changeArray}) {
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
  // add new session
  const addSession = () => {
    changeArray('sessions', [...formData.sessions, newSession]);
    setNewSession(initialSession);
  };
  // remove session
  const removeSession = (removeIndex) => {
    const updatedSessions = formData.sessions.filter((value, index) => {
      return index != removeIndex;
    });
    changeArray('sessions', updatedSessions);
  };

  // inputs
  const inputs = [
    {
      label: "Session Name",
      type: "text",
      name: "name",
      className: "mentorFormInput",
      onChange: onChange,
      placeholder: "eg. 1 on 1 Mentorship",
      required: true,
      value: newSession.name,
    },
    {
      label: "Session Type",
      type: "text",
      name: "type",
      className: "mentorFormInput",
      onChange: onChange,
      placeholder: "eg. Video Meeting",
      required: true,
      value: newSession.type,
    },
    {
      label: "Session Duration (in minutes)",
      type: "text",
      name: "duration",
      className: "mentorFormInput",
      onChange: onChange,
      placeholder: "eg. 45",
      required: true,
      value: newSession.duration,
    },
    {
      label: "Session Price",
      type: "text",
      name: "price",
      className: "mentorFormInput",
      onChange: onChange,
      placeholder: "eg. $10",
      required: true,
      value: newSession.price,
    },
    {
      label: "Session Description",
      type: "text",
      name: "description",
      className: "mentorFormInput",
      onChange: onChange,
      placeholder: "eg. Achieve your goals faster with customized road map",
      required: true,
      value: newSession.description,
      element: "textarea",
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
    </>
  );
}

export default SessionDetails;
