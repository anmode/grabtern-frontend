import React from "react";

function ImageCard({ image, heading, subheading, body, link }) {
  return (
    <div className="tw-relative tw-rounded-lg tw-border tw-border-base-300 tw-bg-base-100 p-4">
      {/* cadd image */}
      <div className="tw-rounded-lg tw-bg-base-300 tw-w-full tw-p-[1px]">
        <img src={image} className="tw-w-full tw-object-fill" />
      </div>
      {/* card header */}
      <div className="tw-font-sans tw-mt-3">
        {heading && (
          <h4 className="tw-font-semibold tw-leading-normal">{heading}</h4>
        )}
        {subheading && <p className="tw-text-sm tw-text-300">{subheading}</p>}
      </div>
      {/* card body */}
      <div className="tw-mt-2 tw-text-sm">{body && <p>{body}</p>}</div>
    </div>
  );
}

export default ImageCard;
