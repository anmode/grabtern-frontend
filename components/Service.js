import React from "react";
import Image from "next/image";

function Service({ imageSrc, imageAlt, serviceHeading, serviceDescription }) {
  console.log(imageSrc, imageAlt, serviceHeading, serviceDescription);
  return (
    <div className="col-lg-4 col-md-6 col-sm-8">
      <div className="single-services mb-30">
        <div className="features-icon">
          <Image width={60} height={60} src={imageSrc} alt={imageAlt} />
        </div>
        <div className="features-caption">
          <h3>{serviceHeading}</h3>
          <p>{serviceDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default Service;
