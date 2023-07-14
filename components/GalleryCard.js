import React from "react";
import Image from "next/image";
import styles from "../styles/hackathon.module.css";

function GalleryCard({
  hackathonImage,
  hackathonImageAlt,
  hackathonLink,
  hackathonTitle,
  isInternship = false,
  internshipImage,
  internshipImageAlt,
  internshipTitle,
  internshipLink,
}) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className={`${styles.singleHackathon} text-center mb-30`}>
        <div className={styles.hackathonImg}>
          <Image
            width={264}
            height={150}
            src={isInternship ? internshipImage : hackathonImage}
            alt={isInternship ? internshipImageAlt : hackathonImageAlt}
          />
          <div className={styles.hackathonContentBox}>
            <div className={styles.hackathonContent}>
              <h3>
                <a
                  href={isInternship ? internshipLink : hackathonLink}
                  target="_blank"
                >
                  {isInternship ? internshipTitle : hackathonTitle}
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
