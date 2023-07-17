import React from "react";
import clsx from "clsx";
import SectionHeader from "./SectionHeader";

function Section({
  className,
  divClassName,
  kicker,
  heading,
  subheading,
  children,
  align = "left",
  direction = "col",
}) {
  return (
    <section className={clsx("tw-w-full tw-py-16 tw-px-4", className)}>
      <div
        className={clsx(
          "tw-w-full tw-max-w-7xl tw-mx-auto",
          direction == "row" && ["md:tw-flex tw-items-center tw-py-6"],
          direction == "row-reverse" && [
            "tw-flex tw-items-center tw-py-6 tw-flex-col-reverse md:tw-flex-row-reverse",
          ],
          divClassName,
        )}
      >
        {/* column */}
        <div
          className={clsx(
            (direction == "row" || direction == "row-reverse") && [
              "tw-p-6 md:tw-w-1/2",
            ],
          )}
        >
          {/* header */}
          <SectionHeader
            kicker={kicker}
            heading={heading}
            subheading={subheading}
            className={clsx(
              "",
              align == "center" && ["tw-text-center tw-mx-auto"],
              direction == "col" && ["tw-mb-14"],
            )}
          />
          {/* content under header */}
          {children && children.length > 1 ? children[0] : children}
        </div>
        {/* column */}
        <div
          className={clsx(
            (direction == "row" || direction == "row-reverse") && [
              "tw-p-6 md:tw-w-1/2",
            ],
          )}
        >
          {children && children.length > 1 && children[1]}
        </div>
      </div>
    </section>
  );
}

export default Section;
