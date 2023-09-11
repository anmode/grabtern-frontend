import React, { useState } from "react";
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
  const [isLoading, setIsLoading] = useState(false);
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
      onClick={() => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 60000);
      }}
    >
      {isLoading ? (
        <div className="tw-flex tw-justify-center tw-items-center">
          <img
            style={{ maxWidth: "100%", height: "25px" }}
            src="/assets/img/gif/Spinner.gif"
            alt="...loader"
          />
        </div>
      ) : (
        text
      )}
    </Link>
  );
}

export default ButtonLink;
