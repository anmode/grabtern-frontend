import React, { useState } from "react";
import styles from "./Button.module.css";

function Button({
  text,
  LeftIcon,
  variant = "Primary",
  className,
  type = "button",
  onClick,
}) {
  const [isLoading, setIsLoading] = useState(false);
  let variantClass = `btn${variant.charAt(0).toUpperCase()}${variant.slice(1)}`;
  return isLoading ? (
    <div className="tw-flex tw-justify-center tw-items-center">
      <img
        style={{ maxWidth: "100%", height: "20px" }}
        src="/assets/img/gif/Spinner.gif"
        alt="...loader"
      />
    </div>
  ) : (
    <button
      className={`${styles.btn} ${styles[variantClass]} ${
        className ? className : ""
      }`}
      onClick={(e) => {
        onClick(e);
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 40000);
      }}
      type={type}
    >
      {LeftIcon && <LeftIcon className="tw-text-xl" />}
      {text}
    </button>
  );
}

export default Button;
