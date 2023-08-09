import React from "react";

function TimeZoneInput({ id, name, onChange, value }) {
  return (
    <select id={id} name={name} onChange={onChange} value={value}>
      <option value="(GMT-11:00) Pacific/Midway">
        (GMT-11:00) Pacific/Midway
      </option>
      <option value="(GMT-11:00) Pacific/Niue">(GMT-11:00) Pacific/Niue</option>
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
      <option value="(GMT+01:00) Europe/Paris">(GMT+01:00) Europe/Paris</option>
      <option value="(GMT+02:00) Africa/Johannesburg">
        (GMT+02:00) Africa/Johannesburg
      </option>
      <option value="(GMT+04:00) Asia/Dubai">(GMT+04:00) Asia/Dubai</option>
      <option value="(GMT+05:30) Asia/Kolkata" selected>
        (GMT+05:30) Asia/Kolkata
      </option>
      <option value="(GMT+07:00) Asia/Jakarta">(GMT+07:00) Asia/Jakarta</option>
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
  );
}

export default TimeZoneInput;
