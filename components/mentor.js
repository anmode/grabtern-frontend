import React from "react";
import taskStyles from '../styles/mentors.module.css'

const MentorCard = ({ mentor }) => {
  return (
    <div className={taskStyles.mentorCard}>
      <img
        src={mentor.mentorImg}
        alt={mentor.name}
        className={taskStyles.mentorCard__photo}
      />
      <div className={taskStyles.mentorCard__info}>
        <h2 className={taskStyles.mentorCard__name}>{mentor.name}</h2>
        <p className={taskStyles.mentorCard__intern}>
          <b>Intern at:</b> {mentor.internAt}
        </p>
        <p className={taskStyles.mentorCard__name}>
          <b>Current Status:</b> {mentor.currentStatus}
        </p>
        {/* <p className="mentor-card__description">{mentor.description}</p> */}
        <div className={taskStyles.mentorCard__status}>
          <a href={`${mentor.social.linkedin}`} target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href={`${mentor.social.twitter}`} target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href={mentor.bookedSession}
            className={taskStyles.mentorCard__bookedSession}
          >
            Booked Sessions: {mentor.bookedSession}
          </a>
        </div>
        <button className={taskStyles.mentorCard__bookSession}>Book Session</button>
      </div>
    </div>
  );
};

export default MentorCard;
