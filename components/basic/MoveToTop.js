import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    const topBtn = document.getElementById("top-btn");
    if (scrolled > 300) {
      setVisible(true);
      topBtn.classList.add("tw-opacity-100");
    } else if (scrolled <= 300) {
      topBtn.classList.remove("tw-opacity-100");
      setTimeout(() => {
        setVisible(false);
      }, 100);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      id="top-btn"
      className="tw-flex tw-opacity-0 tw-flex-col tw-z-[1000] tw-text-center tw-text-[#845ec2] tw-fixed tw-bottom-0 tw-right-0 tw-mr-8 tw-mb-8 tw-cursor-pointer hover:tw-text-blue-500 tw-duration-300 tw-transition-all"
    >
      <FaArrowCircleUp
        onClick={scrollToTop}
        className="tw-bg-white tw-rounded-full"
        fontSize={45}
        style={{ display: visible ? "inline" : "none" }}
      />
    </div>
  );
};

export default ScrollButton;
