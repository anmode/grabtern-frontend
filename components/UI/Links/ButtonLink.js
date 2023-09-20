import React from "react";
import Link from "next/link";
import clsx from "clsx";
import styles from "./Link.module.css";

function ButtonLink({
  text,
  href,
  className = "",
  variant = "Primary",
  size = "normal",
}) {
  let variantClass = `link${variant.charAt(0).toUpperCase()}${variant.slice(
    1,
  )}`;
  return (
    <Link
      href={href}
      className={clsx(
        `${styles.linkBtn} ${styles[variantClass]} ${className}`,
        size == "sm" && [
          "tw-text-xs tw-font-medium tw-items-center tw-flex tw-content-center",
        ],
      )}
    >
      {text}
    </Link>
  );
}

export default ButtonLink;
