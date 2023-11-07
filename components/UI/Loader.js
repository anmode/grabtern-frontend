import clsx from "clsx";
import React, { useEffect } from "react";

function Loader({ width = "25px", className = "" }) {
  return (
    //place the image of the div
    <div
      className={clsx(`tw-flex tw-justify-center tw-items-center`, className)}
    >
      <img width={width} src="/spinner.gif" alt="loading..." />
    </div>
  );
}

export default Loader;
