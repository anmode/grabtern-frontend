import React from "react";

function IconCard({ className, Icon, heading, body, children}) {
  return (
    <div className={`tw-font-sans ${className ? className : ""}`}>
      {Icon && <Icon className="tw-text-primary-100 tw-w-7 tw-h-7 tw-mb-2" />}
      {heading && <h4 className="tw-font-light tw-text-lg tw-mb-2">{heading}</h4>}
      {body && <p className="tw-text-sm">{body}</p>}
      {children}
    </div>
  );
}

export default IconCard;
