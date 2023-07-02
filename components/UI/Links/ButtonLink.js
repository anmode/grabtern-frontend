import React from "react";
import Link from "next/link";
import styles from "./Link.module.css";

function ButtonLink({ text, href, className = "", variant = "primary" }) {
  let variantClass;
  switch (variant) {
    case "primary":
      variantClass = "linkPrimary";
      break;
    case "secondary":
      variantClass = "linkSecondary";
      break;
    case "outline":
      variantClass = "linkOutline";
      break;
    default:
      variantClass = "linkPrimary";
      break;
  }
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
