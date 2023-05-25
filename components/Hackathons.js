import React from "react";
import Image from "next/image";

function Hackathon({
    hackathonImage,
    hackathonImageAlt,
    hackathonLink,
    hackathonTitle,
}) {
    return(
        <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="single-topic text-center mb-30">
          <div className="topic-img">
          <Image
          width={264}
          height={150}
              src={hackathonImage}
              alt={hackathonImageAlt}
            />
            <div className="topic-content-box">
              <div className="topic-content">
                <h3>
                  <a href={hackathonLink} target="_blank">{hackathonTitle}</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Hackathon;