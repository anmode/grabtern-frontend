import React, { useState } from "react";
import FAQ from "./FAQ";

function FAQList({ faq }) {
  const [open, setOpen] = useState(-1);
  return (
    <div>
      {faq.map((faq, index) => (
        <FAQ {...faq} key={index} open={open} setOpen={setOpen} index={index} />
      ))}
    </div>
  );
}

export default FAQList;
