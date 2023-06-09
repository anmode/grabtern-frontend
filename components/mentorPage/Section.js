import React from "react";

function Section({
  className,
  headingText,
  bodyText,
  bodyTextClass,
  bodyList,
  actionButtonText,
  actionButtonlink,
  imageSrc,
  altText,
}) {
  return (
    <section className="mentor-page-section about-area1 fix pt-10">
      <div className={`support-wrapper align-items-center ${className}`}>
        <div className="left-content1">
          <div className="section-tittle section-tittle2 mb-55">
            <div className="front-text">
              {headingText && <h2> {headingText} </h2>}
              {bodyText && <p className={bodyTextClass}> {bodyText} </p>}
            </div>
          </div>

          {bodyList &&
            bodyList.map((item) => (
              <div className="single-features">
                <div className="features-icon">
                  <img src="/assets/img/icon/right-icon.svg" alt="" />
                </div>
                <div className="features-caption">
                  <p>{item}</p>
                </div>
              </div>
            ))}

          {actionButtonlink && (
            <a
              href={actionButtonlink}
              className="mentor-section-btn theme-button-color"
            >
              {actionButtonText}
            </a>
          )}
        </div>

        {imageSrc && (
          <div className="right-content1 w-100 ">
            <div className="right-img">
              <img src={imageSrc} alt={altText} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Section;
