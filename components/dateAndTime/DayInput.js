import React from "react";

function DayInput({ id, name, onChange, value }) {
  return (
    <select name={name} id={id} onChange={onChange} value={value}>
      <option value="monday">Monday</option>
      <option value="tuesday">Tuesday</option>
      <option value="wednesday">Wednesday</option>
      <option value="thursday">Thursday</option>
      <option value="friday">Friday</option>
      <option value="saturday">Saturday</option>
      <option value="sunday">Sunday</option>
    </select>
  );
}

export default DayInput;
