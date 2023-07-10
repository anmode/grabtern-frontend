import Link from "next/link";
import React from "react";
import clsx from "clsx";

function ImageCard({
  image,
  imageType = "cover",
  heading,
  subheading,
  body,
  link,
  className,
  children,
}) {
  return (
    <Link href={link}>
      <div
        className={clsx(
          "tw-group tw-relative",
          "tw-rounded-lg tw-border tw-border-base-300 tw-bg-base-100",
          "tw-p-4",
          className
        )}
      >
        {/* cadd image */}
        <div
          className={clsx(
            "tw-rounded-lg tw-bg-base-300 tw-w-fulltw-p-[1px] tw-relative",
            imageType == "popUp" && ["tw-h-40"]
          )}
        >
          <img
            src={image}
            className={clsx(
              "tw-w-full",
              imageType == "popUp" && [
                "tw-absolute tw-bottom-0",
                "tw-inset-x-0 tw-mx-auto tw-w-full tw-max-w-[170px]",
              ]
            )}
          />
        </div>
        {/* card header */}
        <div className="tw-mt-3">
          {heading && (
            <h4 className="tw-font-sans tw-font-semibold tw-leading-normal group-hover:tw-underline">
              {heading}
            </h4>
          )}
          {subheading && (
            <p className="tw-font-sans tw-text-sm tw-text-300">{subheading}</p>
          )}
        </div>
        {/* card body */}
        <div className="tw-mt-2 tw-text-sm">{body && <p>{body}</p>}</div>
        {children}
      </div>
    </Link>
  );
}

export default ImageCard;
