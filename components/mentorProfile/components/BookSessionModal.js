import React from "react";
import { BsXLg } from "react-icons/bs";

export default function BookSessionModal({
  handleClose,
  handleCancel,
  handleConfirm,
}) {
  return (
    <>
      <div className="tw-flex tw-flex-row tw-items-center tw-justify-center tw-fixed tw-top-0 tw-left-0 tw-bg-black/25 tw-w-full tw-h-full tw-z-[999]">
        {/* Modal Container */}
        <div className="tw-flex tw-flex-col tw-items-stretch tw-justify-start tw-bg-white tw-rounded-[36px] tw-p-[30px] tw-w-[448px] tw-gap-8">
          {/* Modal Header */}
          <div className="tw-flex tw-flex-row tw-items-center tw-justify-between">
            <h1 className="tw-text-[28px] tw-font-semibold tw-text-[#845EC2] tw-leading-none tw-mt-[4px]">
              Book Session
            </h1>
            {/* Modal Close button */}
            <button
              className="tw-text-[28px] tw-text-[#845EC2] hover:tw-bg-[#4338CA]/25 active:tw-bg-[#4338CA]/50 tw-p-4 tw-rounded-full tw-transition-all"
              onClick={handleClose}
            >
              <BsXLg />
            </button>
          </div>
          {/* Modal Content */}
          <div className="tw-font-medium">
            Hurrah! Just one step left to get your session booked <br /> Our
            team will contact you for payment, soon!!
          </div>
          {/* Modal Cancel and Book button */}
          <div className="tw-flex tw-flex-row tw-items-center tw-justify-end tw-gap-8">
            <button
              className="tw-bg-gray-500 tw-px-6 tw-py-3 tw-text-white tw-rounded-2xl"
              onClick={handleCancel}
            >
              Cancel
            </button>
            {/* confirm button */}
            <button
              className="tw-bg-[#845EC2] tw-px-6 tw-py-3 tw-text-white tw-rounded-2xl hover:tw-bg-[#845EC2] active:tw-outline active:tw-outline-2 active:tw-outline-[#4338CA]/80 tw-transition-all"
              onClick={handleConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
