import React from "react";
import Image from "next/image";
import styles from "../styles/gridhackathon.module.css";
// import styles from "../styles/hackathon.module.css";

function Hackathon({
  hackathonImage,
  hackathonImageAlt,
  hackathonLink,
  hackathonTitle,
  hackathonDescription,
}) {
  const description =
    hackathonDescription?.length >500
      ? `${hackathonDescription.substring(0, 500)}…`
      : hackathonDescription;
    const handleInternshipLinkClick = (e) => {
      e.preventDefault();
      window.open(hackathonLink, "_blank");

    };
    
  return (
    
    <div
    className={`${styles.singleHackathon} bg-white p-4 rounded border border-gray-200 hover:shadow-md mx-4 my-2`}
    
  >
    <div className={`${styles.hackathonImg}`}>
      <Image
        className="object-cover w-full h-full rounded"
        src={hackathonImage}
        alt={ hackathonImageAlt}
        width={364}
        height={260}
      />
    </div>
    <div className={`${styles.hackathonContentBox}`}>
      <div className={`${styles.hackathonContent}`}>
        <h3 className="text-lg font-bold ">
          <a
            href={hackathonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-500 hover:underline"
          >
            {hackathonTitle}
          </a>
        </h3>
        <p className="text-gray-700 ">{description}</p>
      </div>
    </div>
  </div>

     
  );
}

export default Hackathon;
