import React from "react";
import clsx from "clsx";

function Input({
  className,
  label,
  Icon,
  type,
  name,
  placeholder,
  value,
  handleChange,
  ...rest
}) {
  return (
    <div className={clsx("tw-relative tw-w-full", className)}>
      {label && <label htmlFor={name}> {label}: </label>}
      {Icon && (
        <Icon className="tw-absolute tw-text-primary-100 tw-text-xl tw-group tw-left-3 tw-top-2" />
      )}
      <input
        className={clsx(
          "tw-w-full tw-text-sans tw-bg-base-100",
          "tw-rounded-xl tw-border tw-border-base-300",
          "tw-text-sm tw-text-base-400 tw-py-1 tw-px-4 tw-leading-8 ",
          "tw-shadow-md",
          "focus:tw-outline-dashed focus:tw-outline-2 focus:tw-outline-offset-1 focus:tw-outline-base-400",
          Icon && "tw-pl-10",
        )}
        id={name}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
        {...rest}
      />
    </div>
  );
}

export default Input;
