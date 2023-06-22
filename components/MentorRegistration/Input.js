import React from "react";

function Input({
  label,
  type,
  name,
  className,
  handleChange,
  placeholder,
  value,
  validator,
  validation,
  ...rest
}) {
  return (
    <div className="div">
      <label className="label uppercase" htmlFor={name}>
        {label}
      </label>
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
      {validator.current.message(name, value, validation)}
    </div>
  );
}

export default Input;
{
}
