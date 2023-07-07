import React from "react";
import { BsXLg, BsClipboard } from "react-icons/bs";

export default function SharePageModal({ handleClose, username }) {
  return (
    <>
      {/* Share mentor page modal */}
      <div className="tw-flex tw-flex-row tw-items-center tw-justify-center tw-fixed tw-top-0 tw-left-0 tw-bg-black/25 tw-w-full tw-h-full tw-z-[999]">
        {/* Modal Container */}
        <div className="tw-flex tw-flex-col tw-items-stretch tw-justify-start tw-bg-white tw-rounded-[36px] tw-p-[30px] tw-w-[448px] tw-gap-4">
          {/* Modal Heading */}
          <div className="tw-flex tw-flex-row tw-items-center tw-justify-between">
            <h1 className="tw-text-[28px] tw-font-semibold tw-text-[#4338CA]">
              Share Page
            </h1>
            <button
              className="tw-text-[28px] tw-text-[#4338CA] hover:tw-bg-[#4338CA]/25 active:tw-bg-[#4338CA]/50 tw-p-4 tw-rounded-full tw-transition-all"
              onClick={handleClose}
            >
              <BsXLg />
            </button>
          </div>
          {/* Modal Content */}
          <div className="tw-font-medium">
            Here is the link of the mentor page that you can share with your
            friends:
          </div>
          {/* Modal Link with copy link button */}
          <div className="tw-flex tw-flex-row tw-items-center tw-justify-between tw-bg-gray-100 tw-pl-6 tw-pr-0 tw-py-0 tw-rounded-2xl">
            {/* Modal Link */}
            <div className="tw-font-mono">
              {`${process.env.NEXT_PUBLIC_FRONTEND_URL}/${username}`}
            </div>
            {/* Copy link button */}
            <button
              className="tw-text-[18px] tw-text-gray-800 hover:tw-bg-gray-300 active:tw-bg-gray-300 tw-p-4 tw-rounded-lg  tw-transition-all"
              onClick={() => {
                navigator.clipboard.writeText(
                  `${process.env.NEXT_PUBLIC_FRONTEND_URL}/${username}`,
                );
                alert("Copied to clipboard!");
              }}
            >
              <BsClipboard />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
