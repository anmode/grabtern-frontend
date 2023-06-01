import React from "react";
import Image from "next/image";
import styles from '../styles/testimonials.module.css'

function Testimonial({
  testimonialUserName,
  testimonialUserHeadline,
  testimonialUserImage,
  testimonialRate,
  testimonialDescription,
}) {
  return (
    <div className={styles.box}>
      <i className="fas fa-quote-left quote"></i>
      <p>
        {testimonialDescription.split(" ").length < 400
          ? testimonialDescription
          : testimonialDescription.split(" ").slice(0, 400).join(" ") + "..."}
      </p>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.name}>{testimonialUserName}</div>
          <div className={styles.job}>{testimonialUserHeadline}</div>
          <div className={styles.stars}>
            {Array(Math.floor(testimonialRate))
              .fill("")
              .map((_, index) => (
                <i key={index} className="fas fa-star"></i>
              ))}

            {testimonialRate.toString().includes(".") ? (
              <i className="fas fa-star-half"></i>
            ) : null}
          </div>
        </div>
        <div className={styles.image}>
          <Image
            width={69}
            height={69}
            src={`/assets/img/testimonials/${testimonialUserImage}`}
            alt="testimonial-profile"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
