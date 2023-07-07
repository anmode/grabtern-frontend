import React from "react";
import Link from "next/link";
import styles from "./Link.module.css";

function ButtonLink({ text, href, className = "", variant = "Primary" }) {
  let variantClass = `link${variant.charAt(0).toUpperCase()}${variant.slice(
    1,
  )}`;
  return (
    <Link
      href={href}
      className={`${styles.linkBtn} ${styles[variantClass]} ${className}`}
    >
      {text}
    </Link>
  );
}

export default ButtonLink;
