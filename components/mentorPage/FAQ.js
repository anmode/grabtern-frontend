import React, { useState } from "react";

function FAQ({ ques, ans }) {
  const [open, setOpen] = useState(false);
  const toggleAns = () => setOpen(!open);

  return (
    <div className="gray-bg mb-20 rounded container py-5 text-justify">
      <div className="row justify-content-between align-items-center cursor-pointer"  onClick={toggleAns}>
        <p className="h2 col-10 col-sm-11">{ques}</p>
        <div className="col-1" >
          {open ? (
            <i className="fas fa-chevron-up"  />
          ) : (
            <i className="fas fa-chevron-down"  />
          )}
        </div>
      </div>
      {open && <p className="pt-5 col-10 col-sm-11">{ans}</p>}
    </div>
  );
}

export default FAQ;
