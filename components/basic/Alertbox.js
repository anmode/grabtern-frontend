import { React, useState, useEffect } from "react";

const AlertBox = ({ message, redirectTo }) => {
  const [progress, setProgress] = useState(100);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (progress > 0) {
        setProgress(prevProgress => prevProgress - 5);
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
          <div className="progress-bar tw-relative tw-w-[300px] tw-h-[70px] tw-bg-gray-200 ">
              <div
                className="progress-bar-fill tw-absolute tw-top-0 tw-left-0 tw-h-full tw-bg-[#b497e2] "
                style={{ width: `${progress}%` }}
              >
                 <div className="alert-content tw-absolute   tw-mb-7 tw-flex tw-justify-center tw-text-[19px] ">
              <p className="tw-text-[#6E4FA0]">{message}</p>
            </div>
              </div>

            </div>
      </div>
    </>
  );
};

export default AlertBox;
