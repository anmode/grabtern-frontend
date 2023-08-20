import { React, useState, useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
const AlertBox = ({ message, redirectTo, color }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress > 0) {
        setProgress((prevProgress) => prevProgress - 10);
      } else {
        clearInterval(interval);
      }
      if (progress === 0) {
        clearInterval(interval);
        window.location.href = redirectTo;
      }
    }, 100);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <>
      <div className="tw-flex tw-justify-center tw-items-center">
        <div className="progress-bar tw-flex tw-flex-row tw-relative tw-w-[330px] tw-h-[40px] tw-bg-white ">
          <div className="tw-text-[#b497e2] tw-w-10 tw-h-5 tw-absolute tw-left-0">
            <AiFillCheckCircle className="tw-w-10 tw-h-10" />
          </div>
          <div className="alert-content tw-absolute tw-text-black  tw-mb-7 tw-flex  tw-text-[19px] ">
            <p className="tw-text-black ">{message}</p>
          </div>
          <div
            className="progress-bar-fill tw-relative tw-top-[37px]  tw-h-[10%] tw-bg-[#b497e2] "
            style={{ width: `${progress}%`, backgroundColor: color }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default AlertBox;
