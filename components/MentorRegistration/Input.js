import React from "react";

function Input({
  divClassName,
  label,
  type,
  name,
  className,
  handleChange,
  placeholder,
  value,
  element,
  ...rest
}) {
  return (
    <div className={`div ${divClassName}`}>
      <label className="label uppercase" htmlFor={name}>
        {label}
      </label>
      {element == "textarea" ? (
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
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          className={className}
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
{
}
