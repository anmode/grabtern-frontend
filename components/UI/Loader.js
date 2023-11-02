import React, { useEffect } from "react";

function Loader({ width = "25px" }) {
  return (
    //place the image of the div
    <div className={`tw-flex tw-justify-center tw-items-center`}>
      <img width={width} src="/spinner.gif" alt="loading..." />
    </div>
  );
}

export default Loader;
