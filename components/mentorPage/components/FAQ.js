import React from "react";

function FAQ({ ques, ans, open, setOpen, index }) {
  const toggleOpen = () => {
    open == index ? setOpen(-1) : setOpen(index);
  };

  return (
    <div className="gray-bg mb-20 rounded container py-5 text-justify">
      <div
        className="row justify-content-between align-items-center cursor-pointer"
        onClick={toggleOpen}
      >
        <p className="h2 col-10 col-sm-11">{ques}</p>
        <div className="col-1">
          {open == index ? (
            <i className="fas fa-chevron-up" />
          ) : (
            <i className="fas fa-chevron-down" />
          )}
        </div>
      </div>
      {open == index && <p className="pt-5 col-10 col-sm-11">{ans}</p>}
    </div>
  );
}

export default FAQ;
