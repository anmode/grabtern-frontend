import React from "react";
import { MdVideoCameraFront, MdRingVolume } from "react-icons/md";
import { BsClock, BsCurrencyRupee, BsPlus } from "react-icons/bs";

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
      <div className="tw-flex tw-flex-row tw-w-full tw-p-8 tw-bg-white tw-rounded-[36px] tw-shadow-[0px_0px_40px_0px_#00000025] tw-gap-5 tw-border-t-[1px] tw-mb-[30px]">
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
          {/* Session card duration */}
          <p className="tw-flex tw-flex-row tw-items-center tw-gap-3 tw-text-[16px] tw-whitespace-nowrap tw-font-medium tw-text-black/50">
            <BsClock /> {duration} mins
          </p>
          {/* Session card Charge */}
          <p className="tw-flex tw-flex-row tw-items-center tw-gap-3 tw-text-[16px] tw-whitespace-nowrap tw-font-medium tw-text-black/50">
            <BsCurrencyRupee /> {pricePerSession}
          </p>
          {/* Session Book Button */}
          <button
            type="button"
            role="button"
            className="tw-flex tw-flex-row tw-self-end tw-justify-center tw-gap-3 tw-text-white tw-bg-[#4338CA] tw-rounded-[12px] tw-py-2 tw-pr-7 tw-pl-4 tw-mt-4 tw-items-center tw-max-w-[210px] hover:tw-bg-[#322995] active:tw-outline active:tw-outline-2 active:tw-outline-[#4338CA]/80 tw-transition-all"
            onClick={handleBookSession}
          >
            <BsPlus className="tw-text-[24px]" />
            <span className="tw-text-[18px] tw-font-normal"> Book Session</span>
          </button>
        </div>
      </div>
    </>
  );
}
