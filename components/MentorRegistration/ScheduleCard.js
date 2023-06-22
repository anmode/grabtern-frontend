import React from "react";

function ScheduleCard({ schedule, removeSchedule, index }) {
  return (
    <div className="scheduleCard tw-flex tw-items-start">
      <div className="tw-flex-1">
        <div className="tw-flex tw-gap-4">
          <p>
            <strong>Day: </strong> {schedule.day}
          </p>
          <p>
            <strong>Time Zone: </strong>
            {schedule.timezone}
          </p>
        </div>
        <div className="tw-flex tw-gap-4">
          <p>
            {" "}
            <strong>Starts At: </strong>
            {schedule.startsAt}
          </p>
          <p>
            {" "}
            <strong>Ends At:</strong> {schedule.endsAt}
          </p>
        </div>
      </div>
      <button type="button" onClick={() => removeSchedule(index)}>
        ❌
      </button>
    </div>
  );
}

export default ScheduleCard;
