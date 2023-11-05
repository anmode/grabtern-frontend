import clsx from "clsx";
import React, { useState } from "react";

function Input({
  divClassName,
  label,
  type,
  name,
  className,
  handleChange,
  placeholder,
  value,
  defaultValue,
  validator,
  validation,
  element,
  options = [],
  ...rest
}) {
  const [isSelect, setIsSelect] = useState(true);

  return (
    <div className={`div ${divClassName}`}>
      <label className="label uppercase tw-text-base-500" htmlFor={name}>
        {label}
      </label>
      {validator.current.message(name, value, validation)}
      {{
        textarea: (
          <textarea
            cols="10"
            rows="7"
            id={name}
            type={type}
            name={name}
            className={className}
            onChange={(e) => handleChange(e)}
            placeholder={placeholder}
            value={value}
            {...rest}
          />
        ),
        select: (
          <>
            <select
              defaultValue="other"
              id={name}
              name={name}
              onChange={(e) => {
                e.target.selectedOptions[0].value == ""
                  ? setIsSelect(false)
                  : setIsSelect(true);
                handleChange(e);
              }}
              value={!isSelect && value != defaultValue ? "" : value}
              className={clsx("!tw-text-base-500", className)}
              {...rest}
            >
              {options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
            {!isSelect && value != defaultValue && (
              <input
                id={name}
                type={type}
                name={name}
                className={clsx("tw-text-base-500", className)}
                onChange={(e) => handleChange(e)}
                placeholder={placeholder}
                value={value}
                {...rest}
              />
            )}
          </>
        ),
      }[element] || (
        <input
          id={name}
          type={type}
          name={name}
          className={clsx("tw-text-base-500", className)}
          onChange={(e) => handleChange(e)}
          placeholder={placeholder}
          value={value}
          {...rest}
        />
      )}
    </div>
  );
}

export default Input;
