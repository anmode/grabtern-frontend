import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";

function error() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  useEffect(() => {
    if (
      localStorage.getItem("user_name") !== null ||
      localStorage.getItem("token") !== null
    ) {
      setIsUserLoggedIn(true);
    }
  }, []);
  return (
    <>
    <section className="slider-error slider-area">
          <div className="slick-track" style={{ opacity: 1, width: "1423px" }}>
            <div
              className="single-slider slider-height d-flex align-items-center slick-slide slick-current slick-active"
              data-slick-index="0"
              aria-hidden="false"
              tabIndex="0"
              style={{
                width: "1423px",
                position: "relative",
                left: "0px",
                top: "0px",
                zIndex: 999,
                opacity: 1,
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-7 col-md-12">
                    <div className="hero__caption">
                      <h1
                        data-animation="fadeInLeft"
                        data-delay="0.2s"
                        className="animate__animated animate__fadeInLeft"
                        style={{ animationDelay: "0.8s" }}
                      >
                        Page Not Found
                      </h1>
                      <p
                        data-animation="fadeInLeft"
                        data-delay="0.4s"
                        className="animate__animated animate__fadeInLeft"
                        style={{ animationDelay: "1s" }}
                      >
                        I think there is a problem with the link you followed or the page you are looking for does not exist.
                      </p>
                      <a
                        href="/"
                        className="btn hero-btn animate__animated animate__fadeInLeft"
                        data-animation="fadeInLeft"
                        data-delay="1s"
                        tabIndex="0"
                        style={{ animationDelay: "1s" }}
                      >
                        Back to Home
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
    </section>
    </>
  );
}

export default error;
