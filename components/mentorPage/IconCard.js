import React from "react";

function IconCard({ iconClass, heading, text }) {
  return (
    <div className="text-center">
      <div className="bg-icon d-inline-flex align-items-center justify-content-center">
        <i className={`${iconClass} display-4 text-white`} />
      </div>
      <p className="h2 text-muted font-weight-bold">{heading}</p>
      <p>
        <small>{text}</small>
      </p>
    </div>
  );
}

export default IconCard;
