import React from "react";
import clsx from "clsx";

function ProfileCard({
  className,
  image,
  imageAlt,
  heading,
  subheading,
  body,
  children,
  intent = "default",
  rounded = "md",
  size = "md",
  direction = "row",
  align = "left",
  imageShadow = false,
  bodyHeight = "variable",
}) {
  return (
    <div
      className={clsx(
        "tw-flex",
        size == "sm" && ["tw-gap-3"],
        size == "md" && ["tw-gap-4"],
        size == "lg" && ["tw-gap-5"],
        size == "xl" && ["tw-gap-5"],
        direction == "col" && ["tw-flex-col"],
        direction == "row-reverse" && ["tw-flex-row-reverse"],
        align == "center" && ["tw-text-center tw-items-center"],
        intent == "bg" && [
          "tw-bg-base-100 tw-rounded-xl tw-shadow-xl tw-shadow-base-300 tw-p-4",
        ],
        className,
      )}
    >
      <div
        className={clsx(
          size == "sm" && ["tw-w-10 tw-h-10"],
          size == "md" && ["tw-w-14 tw-h-14"],
          size == "lg" && ["tw-w-40 tw-h-40"],
          size == "xl" && ["tw-w-52 tw-h-52"],
        )}
      >
        <img
          className={clsx(
            "tw-aspect-square tw-object-cover tw-w-full",
            rounded == "sm" && ["tw-rounded-xl"],
            rounded == "md" && [" tw-rounded-3xl"],
            rounded == "lg" && ["tw-rounded-full"],
            imageShadow == true && ["tw-shadow-xl"],
          )}
          src={image}
          alt={imageAlt}
        />
      </div>
      <div>
        <h4
          className={clsx(
            "tw-font-heading tw-font-medium",
            size == "sm" && ["tw-text-sm tw-leading-5"],
            size == "md" && ["tw-leading-6"],
            size == "lg" && ["tw-text-2xl tw-leading-8"],
            size == "xl" && ["tw-text-3xl tw-leading-9"],
          )}
        >
          {heading}
        </h4>
        <p
          className={clsx(
            "tw-font-sans tw-text-300",
            (size == "sm" || size == "md") && ["tw-text-xs tw-mb-2"],
            (size == "lg" || size == "xl") && ["tw-text-sm tw-mb-4"],
          )}
        >
          {subheading}
        </p>
        <p
          className={clsx(
            "tw-font-sans tw-overflow-hidden tw-text-ellipsis tw-line-clamp-4",
            (size == "sm" || size == "md") && ["tw-text-sm"],
            size == "lg" && ["tw-text-base"],
            size == "xl" && ["tw-text-lg"],
            bodyHeight == "fixed" &&
              ((size == "sm" || size == "md") && ["tw-h-20"],
              (size == "lg" || size == "xl") && ["tw-h-24"]),
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
