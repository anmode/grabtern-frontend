import React from "react";

function FAQ({ ques, ans, open, setOpen, index }) {
  const toggleOpen = () => {
    open == index ? setOpen(-1) : setOpen(index);
  };

  return (
    <div className="tw-mb-3 tw-px-8">
      <div
        className="tw-justify-between tw-flex tw-mt-4 tw-cursor-pointer"
        onClick={toggleOpen}
      >
        <p className="tw-text-xl tw-text-slate-900 tw-font-medium max-[990px]:tw-text-sm tw-items-start">{ques}</p>
        <div className="">
          {open == index ? (
            <i className="fas fa-chevron-up" />
          ) : (
            <i className="fas fa-chevron-down" />
          )}
        </div>
      </div>
      {open == index && <p className="tw-p-2 tw-max-w-[1000px]">{ans}</p>}
    </div>
  );
}

export default FAQ;
