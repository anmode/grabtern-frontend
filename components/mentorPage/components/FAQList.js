import React, { useState, useRef, useEffect } from "react";
import FAQ from "./FAQ";

function FAQList({ faq }) {
  const ref = useRef();

  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setOpen(-1);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const [open, setOpen] = useState(-1);
  return (
    <div ref={ref} className="tw-flex tw-flex-col tw-flex-1">
      {faq.map((faq, index) => (
        <FAQ {...faq} key={index} open={open} setOpen={setOpen} index={index} />
      ))}
    </div>
  );
}

export default FAQList;
