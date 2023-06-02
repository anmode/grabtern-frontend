import React from "react";
import Image from "next/image";
import styles from '../styles/Properties.module.css'

function Internship({
  internshipImage,
  internshipImageAlt,
  internshipCategories,
  internshipTitle,
  internshipDescription,
  internshipRating,
  internshipPayed,
  internshipPrice,
  internshipLink,
}) {
  const description =
    internshipDescription?.length > 120
      ? `${internshipDescription.substring(0, 120)}…`
      : internshipDescription;
  return (
    <div
      className="properties pb-20 item"
      style={{ minHeight: "469px !important" }}
    >
      <div className={styles.properties__card}>
        <div className="properties__img overlay1">
          <a href="#">
            <Image
              width={360}
              height={219}
              src={internshipImage}
              alt={internshipImageAlt}
            />
          </a>
        </div>
        <div className={styles.properties__caption}>
          <div className="courseInfo">
            <p>{internshipCategories}</p>
            <h3>
              <a href={internshipLink} target="_blank">
                {internshipTitle}
              </a>
            </h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Internship;
