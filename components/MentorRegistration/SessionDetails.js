import React from "react";
import Input from "./Input";

function SessionDetails({
  formData,
  handleSessionPriceChange,
  isChecked,
  setIsChecked,
}) {
  const inputs = [
    {
      label: "30min 1-1 SESSION PRICE",
      type: "text",
      name: "priceSession",
      className: "mentorFormInput",
      onChange: handleSessionPriceChange,
      placeholder: "e.g. ₹51",
      required: true,
      value: formData.bookSession[0].priceSession,
    },
  ];
  return (
    <>
      {/* page inputs start */}
      {inputs.map((input, index) => (
        <Input {...input} key={index}/>
      ))}
      {/* page inputs ends*/}

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
