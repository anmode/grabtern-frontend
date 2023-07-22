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
    <div className="box tw-flex tw-flex-col-reverse tw-border-dashed tw-shadow-2xl tw-p-5">
      <p>
        {testimonialDescription.split(" ").length < 100
          ? testimonialDescription
          : testimonialDescription.split(" ").slice(0, 100).join(" ") + "..."}
      </p>
      <div className="content">
        <div className="image">
          {
            <Image
              width={75}
              height={75}
              className="tw-w-4 tw-h-auto"
              src={testimonialUserImage}
              alt="testimonial-profile"
            />
          }
        </div>
        <div className="info">
          <div className="name tw-font-bold">{testimonialUserName}</div>
          <div className="job tw-font-semibold">{testimonialUserHeadline}</div>
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
      <i className="fas fa-quote-left quote"></i>
    </div>
  );
}

export default Testimonial;
