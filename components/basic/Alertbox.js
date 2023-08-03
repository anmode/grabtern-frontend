import { React, useState, useEffect } from "react";

const AlertBox = ({ message, redirectTo }) => {
  const [progress, setProgress] = useState(0);
  const redirectTime = 3;
  useEffect(() => {
    const progressInterval = 1000 / 10;
    const steps = redirectTime * 10;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep += 1;
      const currentProgress = (currentStep / steps) * 100;
      setProgress(currentProgress);

      if (currentStep === steps) {
        clearInterval(timer);
        window.location.href = redirectTo;
      }
    }, progressInterval);
    return () => clearInterval(timer);
  }, [redirectTime]);

  return (
    <>
      <div className="tw-flex tw-justify-center tw-items-center">
        <div className="alert-box tw-flex  tw-border-2 tw-border-[#6E4FA0] tw-mt-32 tw-h-[107px] tw-w-[350px] tw-justify-center tw-items-center tw-rounded-lg tw-bg-[#FFFFFF]">
          <div className="tw-flex tw-flex-col tw-justify-center tw-m-2 tw-w-[90%]">
            <div className="alert-content tw-relative tw-top-2 tw-w-full tw-mb-7 tw-flex tw-justify-center tw-text-[19px] ">
              <p className="tw-text-[#6E4FA0]">{message}</p>
            </div>
            {/* <p>Redirecting you in {time} seconds</p> */}
            <div className="progress-bar tw-relative tw-w-full tw-h-2 tw-bg-gray-200 tw-rounded">
              <div
                className="progress-bar-fill tw-absolute tw-top-0 tw-left-0 tw-h-full tw-bg-[#8461bd] tw-rounded-md"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlertBox;
