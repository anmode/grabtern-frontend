import React from "react";
import Image from "next/image";

function Service({ imageSrc, imageAlt, serviceHeading, serviceDescription }) {
  console.log(imageSrc, imageAlt, serviceHeading, serviceDescription);
  return (
    <div className="">
      <div className="tw-flex tw-shadow-md tw-rounded-lg tw-bg-base-100 tw-py-6 tw-px-5 tw-h-full">
        <div className="tw-mt-3">
          <Image width={60} height={60} src={imageSrc} alt={imageAlt} />
        </div>
        <div className="tw-pl-5">
          <h3 className="tw-text-xl tw-font-medium">{serviceHeading}</h3>
          <p>{serviceDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default Service;
