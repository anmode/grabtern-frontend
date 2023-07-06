import React from "react";
import clsx from "clsx";

function ProfileCard({
  className,
  image,
  heading,
  subheading,
  body,
  children,
  intent = "default",
  rounded = "md",
  size = "md",
  direction = "row",
  align = "left",
}) {
  return (
    <div
      className={clsx(
        "tw-flex",
        size == "sm" && ["tw-gap-3"],
        size == "md" && ["tw-gap-4"],
        size == "lg" && ["tw-gap-5"],
        direction == "col" && ["tw-flex-col"],
        direction == "row-reverse" && ["tw-flex-row-reverse"],
        align == "center" && ["tw-text-center tw-items-center"],
        intent == "bg" && [
          "tw-bg-base-100 tw-rounded-xl  tw-shadow-xl tw-shadow-base-300 tw-p-4",
        ],
        className
      )}
    >
      <div>
        <img
          className={clsx(
            "tw-aspect-square tw-object-cover",
            size == "sm" && ["tw-w-10 tw-h-10"],
            size == "md" && ["tw-w-14"],
            size == "lg" && ["tw-w-52"],
            rounded == "sm" && ["tw-rounded-xl"],
            rounded == "md" && [" tw-rounded-3xl"],
            rounded == "lg" && ["tw-rounded-full"]
          )}
          src={image}
        />
      </div>
      <div>
        <h4
          className={clsx(
            "tw-font-heading tw-font-medium",
            size == "sm" && ["tw-text-sm tw-leading-5"],
            size == "md" && ["tw-leading-6"],
            size == "lg" && ["tw-text-2xl tw-leading-8"]
          )}
        >
          {heading}
        </h4>
        <p
          className={clsx(
            "tw-font-sans tw-text-300",
            (size == "sm" || size == "md") && ["tw-text-xs tw-mb-2"],
            size == "lg" && ["tw-text-sm tw-mb-4"]
          )}
        >
          {subheading}
        </p>
        <p
          className={clsx(
            "tw-font-sans tw-overflow-hidden tw-text-ellipsis tw-line-clamp-4",
            (size == "sm" || size == "md") && ["tw-text-sm tw-h-20"],
            size == "lg" && ["tw-text-base tw-h-24"]
          )}
        >
          {body}
        </p>
      </div>
      {children}
    </div>
  );
}

export default ProfileCard;
