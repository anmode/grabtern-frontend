import React from "react";
import Link from "next/link";
import styles from "./Link.module.css";
import { BsArrowRight } from "react-icons/bs";

function TextLink({ text, href, className = "", arrow = false }) {
  return (
    <Link href={href} className={`${styles.linkText} ${className}`}>
      {text}
      {arrow && <BsArrowRight />}
    </Link>
  );
}

export default TextLink;
