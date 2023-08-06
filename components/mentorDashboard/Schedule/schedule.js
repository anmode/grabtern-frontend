import React from "react";

const Schedule = () => {
  return (
    <>
      <div>
        <button className="tw-bg-gray-200 tw-rounded-md tw-px-4 tw-py-3 tw-text-base tw-font-medium">
          Default
        </button>
        <button className="hover:tw-border-2 hover:tw-bg-gray-200 tw-ml-[2rem] tw-border-black tw-text-base tw-font-medium tw-rounded-md tw-px-4 tw-py-3 tw-border">
          + New Schedule
        </button>
      </div>
    </>
  );
};

export default Schedule;
