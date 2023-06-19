import React from "react";

function SessionDetails({formData, handleChange, isChecked}) {
  return (
    <>
      <div style={{ gridColumn: "1/3" }}>
        <label className="label" htmlFor="priceSession">
          30min 1-1 SESSION PRICE
        </label>
        <input
          type="text"
          name="priceSession"
          className="mentorFormInput"
          onChange={(e) => handleSessionPriceChange(e)}
          placeholder="e.g. ₹51"
          required
          value={formData.bookSession[0].priceSession}
        />
      </div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        &nbsp;We will take 11% of your session price as platform fee. So
        according to it keep your session price. Thank you!
      </label>
    </>
  );
}

export default SessionDetails;
