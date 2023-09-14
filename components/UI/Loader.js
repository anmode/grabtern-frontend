import React from "react";

function Loader({ width }) {
  return (
    //place the image of the div
    <div className={`tw-flex tw-items-center tw-justify-center`}>
      <img width={width} src="/spinner.gif" alt="loading..." />
    </div>
  );
}

export default Loader;
