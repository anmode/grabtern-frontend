import React from "react";

function Card({ rows, removeCard, index }) {
  return (
    <div className="scheduleCard tw-flex tw-items-start">
      <div className="tw-flex-1">
        {rows.map((row, index) => (
          <div className="tw-flex tw-gap-4" key={index}>
            {Object.keys(row).map((key, index) => (
              <p key={index}>
                <strong> {key}: </strong> {row[key]}
              </p>
            ))}
          </div>
        ))}
      </div>
      <button type="button" onClick={() => removeCard(index)}>
        ❌
      </button>
    </div>
  );
}

export default Card;
