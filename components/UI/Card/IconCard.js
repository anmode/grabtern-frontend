import React from "react";
import clsx from "clsx";

function IconCard({
  className,
  Icon,
  heading,
  body,
  children,
  intent = "normal",
  size = "sm",
}) {
  return (
    <div
      className={clsx(
        "tw-font-sans tw-flex tw-items-center tw-gap-2.5 tw-ml-4",
        intent == "bg" && [
          "tw-bg-base-100",
          "tw-p-6 tw-rounded-lg tw-border tw-border-base-300",
        ],
        className,
      )}
    >
      {Icon && (
        <Icon
          className={clsx(
            "tw-text-primary-100 tw-w-8 tw-h-8 tw-mb-2",
            size == "lg" && ["tw-w-9 tw-h-9"],
          )}
        />
      )}
      {heading && (
        <h4
          className={clsx(
            "tw-font-light tw-text-lg tw-mb-2",
            size == "lg" && ["tw-text-xl"],
          )}
        >
          {heading}
        </h4>
      )}
      {body && (
        <p className={clsx("tw-text-sm", size == "lg" && ["tw-text-base"])}>
          {body}
        </p>
      )}
      {children}
    </div>
  );
}

export default IconCard;
