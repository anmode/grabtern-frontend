import React from "react";

function SimpleBanner({ bannerTittle, siteName }) {
  return (
    <section className="slider-area slider-area2">
      <div className="slider-active">
        <div className="single-slider slider-height2">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-11 col-md-12">
                <div className="hero__caption hero__caption2">
                  <h1 data-animation="bounceIn" data-delay="0.2s">
                    {bannerTittle}
                  </h1>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">{siteName}</a>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SimpleBanner;
