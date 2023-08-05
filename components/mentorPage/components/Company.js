import React from "react";
import Image from "next/image";

function Company({ imgSrc, name }) {
  return (
    <div className="max-[637px]:tw-w-[50px] tw-flex-col tw-flex tw-justify-center tw-items-center tw-gap-3 tw-transform tw-duration-200 hover:tw-scale-125">
      <Image src={imgSrc} alt={name} width={150} height={200} />
      <h2 className="tw-font-bold tw-text-[#64748b]">{name}</h2>
    </div>
  );
}

export default Company;
