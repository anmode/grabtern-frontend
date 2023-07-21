import React from "react";
import styles from "./Button.module.css";

function Button({
  text,
  LeftIcon,
  variant = "Primary",
  className,
  type = "button",
  onClick,
}) {
  console.log("variant", variant);
  let variantClass = `btn${variant.charAt(0).toUpperCase()}${variant.slice(1)}`;
  return (
    <button
      className={`${styles.btn} ${styles[variantClass]} ${
        className ? className : ""
      }`}
      onClick={onClick}
      type={type}
    >
      {LeftIcon && <LeftIcon className="tw-text-xl" />}
      {text}
    </button>
  );
}

export default Button;
