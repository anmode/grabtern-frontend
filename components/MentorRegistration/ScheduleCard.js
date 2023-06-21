import React from "react";

function ScheduleCard({ schedule, removeSchedule, index }) {
  return (
    <div className="scheduleCard flex items-start">
      <div className="flex-1">
        <div className="flex gap-4">
          <p>
            <strong>Day: </strong> {schedule.day}
          </p>
          <p>
            <strong>Time Zone: </strong>
            {schedule.timezone}
          </p>
        </div>
        <div className="flex gap-4">
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
