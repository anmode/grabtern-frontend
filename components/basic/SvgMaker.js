import React, { useState } from "react";

const SvgMaker = ({ svgPath }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      className={`hover:tw-animate-bounce ${
        hovered ? "tw-text-primary-10 hover:tw-bg-primary-200" : "tw-text-white"
      } tw-text-3xl tw-bg-primary-100 tw-p-8 tw-rounded-full`}
      onMouseOver={(e) => (e.currentTarget.style.fill = "var(--primary-10)")} // Green color on hover
      onMouseOut={(e) => (e.currentTarget.style.fill = "white")} // Reset color on mouseout
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="SvgIcon"
      style={{
        fill: "white", // Initial color
        transition: "fill 0.3s",
        maxWidth: "130px", // Smooth transition
      }}
    >
      <path d={svgPath}></path>
    </svg>
  );
};

export default SvgMaker;
