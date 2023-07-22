import React from "react";
import Image from "next/image";
import styles from "../styles/hackathon.module.css";

function Hackathon({
  hackathonImage,
  hackathonImageAlt,
  hackathonLink,
  hackathonTitle,
}) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className={`${styles.singleHackathon} text-center mb-30`}>
        <div className={styles.hackathonImg}>
          <Image
            width={264}
            height={150}
            src={hackathonImage}
            alt={hackathonImageAlt}
          />
          <div className={styles.hackathonContentBox}>
            <div className={styles.hackathonContent}>
              <h3>
                <a href={hackathonLink} target="_blank">
                  {hackathonTitle}
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hackathon;
