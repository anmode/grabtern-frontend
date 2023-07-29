import React from "react";

const Input = ({
  label,
  type,
  name,
  placeholder,
  handleChange,
  value,
  validator,
  validation,
  element,
  ...rest
}) => {
  return (
    <div className="tw-relative tw-w-full">
      <label className="tw-uppercase tw-mb-1" htmlFor={name}>
        {label}
      </label>
      {element == "textarea" ? (
        <textarea
          cols="10"
          rows="7"
          id={name}
          type={type}
          name={name}
          className="tw-border tw-w-full tw-resize-none tw-p-2 tw-px-3"
          onChange={(e) => handleChange(e)}
          placeholder={placeholder}
          value={value}
          {...rest}
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          className="tw-border tw-w-full tw-p-2 tw-px-3"
          placeholder={placeholder}
          onChange={(e) => handleChange(e)}
          value={value}
          onKeyDown={(e) =>
            type.toLowerCase() === "number" &&
            ["e", "E"].includes(e.key) &&
            e.preventDefault()
          }
          {...rest}
        />
      )}
      <div className="tw-relative tw-mt-0.5">
        {validator.current.message(label, value, validation)}
      </div>
    </div>
  );
};

export default Input;
