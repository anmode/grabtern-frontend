import React from "react";
import Image from "next/image";
import styles from "../styles/hackathon.module.css";
function Hackathon({
  hackathonImage,
  hackathonImageAlt,
  hackathonLink,
  hackathonTitle,
  hackathonDescription,
}) {
  

  const handleInternshipLinkClick = (e) => {
    e.preventDefault();
    window.open(hackathonLink, "_blank");
  };

  const imageSize = {
    width: 300,
    height: 140,
  };

  return (
    <div className="item relative" style={{ margin: "10px" }}>
      <div className={`${styles.singleHackathon} text-center mb-30`}>
        <div className={styles.hackathonImg}>

            <Image
              width={imageSize.width}
              height={imageSize.height}
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
