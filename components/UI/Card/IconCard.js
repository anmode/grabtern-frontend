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
        "tw-font-sans",
        intent == "bg" && [
          "tw-bg-base-100",
          "tw-p-6 tw-rounded-lg tw-border tw-border-base-300",
        ],
        className
      )}
    >
      {Icon && (
        <Icon
          className={clsx(
            "tw-text-primary-100 tw-w-7 tw-h-7 tw-mb-2",
            size == "lg" && ["tw-w-8 tw-h-8"]
          )}
        />
      )}
      {heading && (
        <h4
          className={clsx(
            "tw-font-light tw-text-lg tw-mb-2",
            size == "lg" && ["tw-text-xl"]
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
