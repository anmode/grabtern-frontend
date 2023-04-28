import React from "react";
import styles from "../styles/mentor.module.css";
const MentorCard = ({ mentor }) => {
  return (
    <div className={styles["mentor-card"]}>
      <img
        src={mentor.mentorImg}
        alt={mentor.name}
        className={styles["mentor-card__photo"]}
      />
      <div className={styles["mentor-card__info"]}>
        <h2 className={styles["mentor-card__name"]}>{mentor.name}</h2>
        <p className={styles["mentor-card__intern"]}>
          <b>Intern at:</b> {mentor.internAt}
        </p>
        <p className={styles["mentor-card__status"]}>
          <b>Current Status:</b> {mentor.currentStatus}
        </p>
        {/* <p className="mentor-card__description">{mentor.description}</p> */}
        <div className={styles["mentor-card__social"]}>
          <a href={`${mentor.social.linkedin}`} target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href={`${mentor.social.twitter}`} target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href={mentor.bookedSession}
            className={styles["mentor-card__booked-session"]}
          >
            Booked Sessions: {mentor.bookedSession}
          </a>
        </div>
        <button className={styles["mentor-card__book-session"]}>
          Book Session
        </button>
      </div>
    </div>
  );
};

export default MentorCard;
