import React from "react";
import Image from "next/image";

function Testimonial({
  testimonialUserName,
  testimonialUserHeadline,
  testimonialUserImage,
  testimonialRate,
  testimonialDescription,
}) {
  return (
    <div className="box">
      <i className="fas fa-quote-left quote"></i>
      <p>
        {testimonialDescription.split(" ").length < 100
          ? testimonialDescription
          : testimonialDescription.split(" ").slice(0, 100).join(" ") + "..."}
      </p>
      <div className="content">
        <div className="image">
          <Image
            width={69}
            height={69}
            src={`/assets/img/testimonials/${testimonialUserImage}`}
            alt="testimonial-profile"
          />
        </div>
        <div className="info">
          <div className="name">{testimonialUserName}</div>
          <div className="job">{testimonialUserHeadline}</div>
          <div className="stars">
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
      </div>
    </div>
  );
}

export default Testimonial;
