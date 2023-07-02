import React from "react";
import Link from "next/link";
import styles from "./link.module.css";

function IconLink({ Icon, href, className = "", variant = "primary" }) {
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
    <div>
      <Link
        href={href}
        className={`${styles.linkIcon} ${styles[variantClass]} ${className}`}
      >
        <Icon />
      </Link>
    </div>
  );
}

export default IconLink;
