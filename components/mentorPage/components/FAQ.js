import React from "react";

function FAQ({ ques, ans, open, setOpen, index }) {
  const toggleOpen = () => {
    open == index ? setOpen(-1) : setOpen(index);
  };

  return (
    <div
      className={`tw-mb-3 tw-px-8 ${
        open === index ? "tw-bg-gray-200 tw-rounded-md tw-p-4" : ""
      }`}
    >
      <div
        className="tw-justify-between tw-flex max-[637px]:tw-gap-4 tw-mt-4 tw-cursor-pointer"
        onClick={toggleOpen}
      >
        <p
          className={`tw-text-xl tw-font-medium max-[348px]:tw-text-xs max-[637px]:tw-text-sm max-[990px]:tw-text-lg tw-items-start ${
            open === index ? "tw-text-primary-200" : "tw-text-slate-900"
          }`}
        >
          {ques}
        </p>
        <div className="tw-text-xl tw-font-medium max-[348px]:tw-text-xs max-[637px]:tw-text-sm max-[990px]:tw-text-lg">
          {open == index ? (
            <i className="fas fa-chevron-up" />
          ) : (
            <i className="fas fa-chevron-down" />
          )}
        </div>
      </div>
      {open == index && (
        <p className="tw-transition-all tw-text-xl tw-font-medium max-[348px]:tw-text-xs max-[637px]:tw-text-sm max-[990px]:tw-text-lg tw-duration-150 tw-ease-in-out tw-p-2 tw-max-w-[1000px]">
          {ans}
        </p>
      )}
    </div>
  );
}

export default FAQ;
