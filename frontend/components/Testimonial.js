import React from "react";

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
        {testimonialDescription.length < 400
          ? testimonialDescription
          : testimonialDescription.split(" ").slice(0, 400).join(" ") + "..."}
      </p>
      <div className="content">
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
        <div className="image">
          <img
            src={`/assets/img/testimonials/${testimonialUserImage}`}
            alt="testimonial-profile"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
