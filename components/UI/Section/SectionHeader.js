import React from "react";

function SectionHeader({ kicker, heading, subheading, className }) {
  return (
    <header className={`tw-w-full tw-max-w-xl ${className ? className : ""}`}>
      {kicker && (
        <p className="tw-font-sans tw-font-semibold tw-text-xs tw-tracking-widest tw-uppercase tw-mb-3 tw-text-primary-100">
          {kicker}
        </p>
      )}
      {heading && (
        <h2 className="tw-font-sans tw-text-4xl tw-font-medium tw-mb-4">
          {heading}
        </h2>
      )}
      {subheading && <p className="tw-text-lg mb-3">{subheading}</p>}
    </header>
  );
}

export default SectionHeader;
