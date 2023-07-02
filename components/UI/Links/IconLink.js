import React from "react";
import Link from "next/link";
import styles from "./Link.module.css";

function IconLink({ Icon, href, className = "", variant = "Primary" }) {
  let variantClass = `link${variant}`;
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
