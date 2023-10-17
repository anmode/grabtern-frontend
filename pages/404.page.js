import React from "react";
import Link from "next/link";
import styles from "../styles/404.module.css";

function ErrorPage() {
  return (
    <>
      <section className={styles.boxx}>
        <div className={styles.mainContainer}>
          <div className={styles.imageContainer}>
            <img src="/Error.svg" alt="bg" />
          </div>
          <div className={`${styles.mainSection}`}>
            <div className={styles.text1}>
              <div className={styles.text2}>
                <h1>Error page 404</h1>
                <p>
                  We're sorry, but the page you're looking for cannot be found.
                  It seems that the link you followed may be outdated or
                  incorrect. Please double-check the URL or try searching for
                  the content you're looking for using the search bar. If you
                  continue to experience difficulties, feel free to contact our
                  support team for further assistance.
                </p>
              </div>
              <div className={styles.btn}>
                <button className="md:tw-w-auto tw-h-16 tw-text-white tw-bg-[#845ec2] tw-border-0 tw-py-2 tw-px-6 focus:tw-outline-none hover:tw-bg-[#6b21a8] tw-rounded-lg tw-font-semibold">
                  <Link href="/">Go Back</Link>
                </button>
              </div>
            </div>
            <div className={styles.image2}>
              <img src="/404.svg" alt="404" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ErrorPage;
