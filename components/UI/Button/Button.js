import React from "react";
import styles from "./Button.module.css";

function Button({
  text,
  variant = "primary",
  className,
  type = "button",
  onClick,
}) {
  return (
    <button
      className={`${styles.btn} ${className ? className : ""}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}

export default Button;
