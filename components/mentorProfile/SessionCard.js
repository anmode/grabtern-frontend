import React from "react";
import { BsClock, BsCurrencyRupee, BsPlus } from "react-icons/bs";
import { MdRingVolume, MdVideoCameraFront } from "react-icons/md";

export default function SessionCard({
  type,
  name,
  description,
  duration,
  pricePerSession,
  handleBookSession,
}) {
  return (
    <>
      {/* session card */}
      <div className="tw-m-4 hover:tw-scale-105 tw-shadow-2xl tw-shadow-slate-700 tw-transition-all tw-flex tw-flex-row md:tw-w-full tw-p-8 tw-bg-white tw-rounded-3xl tw-gap-5 tw-border-t-[1px] tw-mb-[30px] tw-border-2 tw-border-black tw-mt-2">
        {/* Session card Icon */}
        {type === "video-meeting" ? (
          <MdVideoCameraFront className="tw-text-[36px] tw-text-[#4338CA]" />
        ) : (
          <MdRingVolume className="tw-text-[36px] tw-text-[#4338CA]" />
        )}
        <div className="tw-flex tw-flex-col tw-w-full">
          {/* Session card title */}
          <h1 className="tw-text-[36px] tw-font-semibold tw-text-[#4338CA]">
            {name}
          </h1>
          {/* Session card description */}
          <h3 className="tw-text-[16px] tw-font-semibold tw-text-[#4338CA]/80">
            {description}
          </h3>
          <div className="tw-flex tw-justify-between">
            {/* Session card duration */}
            <p className="tw-flex tw-flex-row tw-items-center tw-gap-3 tw-text-[16px] tw-whitespace-nowrap tw-font-medium tw-text-black/50">
              <BsClock /> {duration} mins
            </p>
            {/* Session card Charge */}
            <p className="tw-flex tw-flex-row tw-items-center tw-gap-3 tw-text-[16px] tw-whitespace-nowrap tw-font-medium tw-text-black/50">
              <BsCurrencyRupee /> {pricePerSession}
            </p>
          </div>
          {/* Session Book Button */}
          <div className="tw-flex tw-justify-center">
            <button
              type="button"
              role="button"
              className="tw-mt-4 tw-font-serif tw-flex tw-flex-row tw-self-end tw-justify-center tw-gap-3 tw-py-3 tw-px-28 md:tw-px-44 tw-text-white tw-bg-[#4338CA] hover:tw-bg-white hover:tw-text-black hover:tw-border-2 hover:tw-border-blue-700 tw-rounded-3xl"
              onClick={handleBookSession}
            >
              <BsPlus className="tw-text-[24px]" />
              <span className="tw-text-[18px] tw-font-normal"> Book Session</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
