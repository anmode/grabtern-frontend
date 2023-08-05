import React from "react";
import Image from "next/image";
import clsx from "clsx";

function Hackathon({
  hackathonImage,
  hackathonImageAlt,
  hackathonLink,
  hackathonTitle,
}) {
  return (
    <div>
      <div className="tw-relative tw-group tw-cursor-pointer tw-mx-auto tw-max-w-[400px] sm:tw-max-w-[initial]">
        <Image
          width={264}
          height={150}
          src={hackathonImage}
          alt={hackathonImageAlt}
          className="tw-w-full tw-aspect-{2} tw-object-fit tw-rounded-xl"
        />
        <div
          className={clsx(
            "tw-absolute tw-left-0 tw-bottom-0",
            "tw-w-full tw-rounded-xl tw-h-0 group-hover:tw-h-[50%]",
            "tw-bg-base-300 tw-shadow-inner tw-text-center",
            "tw-flex tw-items-center tw-justify-center tw-overflow-hidden",
            "tw-transition-all",
          )}
        >
          <div>
            <h3 className="tw-font-sans tw-text-xl tw-font-medium">
              {hackathonTitle}
            </h3>
            <a
              className="tw-cursor-pointer !tw-text-primary-100 hover:!tw-text-primary-50"
              href={hackathonLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Know More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hackathon;
