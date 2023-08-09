import React from "react";

const Schedule = () => {
  return (
    <>
      <div className="tw-flex tw-gap-6 max-[512px]:tw-justify-center max-[512px]:tw-items-center">
        <button className="tw-bg-gray-200 tw-rounded-md tw-p-3 tw-font-semibold hover:tw-bg-gray-300 tw-ease-in-out tw-duration-150 tw-transition-all">
          Default
        </button>
        <button className="tw-bg-gray-200 tw-rounded-md tw-p-3 tw-font-semibold hover:tw-bg-gray-300 tw-ease-in-out tw-duration-150 tw-transition-all">
          + New Schedule
        </button>
      </div>
    </>
  );
};

export default Schedule;
