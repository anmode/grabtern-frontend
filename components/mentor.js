import React from "react";
import "./MentorCard.css";

const MentorCard = ({ mentor }) => {
  return (
    <div className="mentor-card">
      <img
        src={mentor.photo}
        alt={mentor.name}
        className="mentor-card__photo"
      />
      <div className="mentor-card__info">
        <h2 className="mentor-card__name">{mentor.name}</h2>
        <p className="mentor-card__intern">Intern at: {mentor.internAt}</p>
        <p className="mentor-card__status">
          Current Status: {mentor.currentStatus}
        </p>
        <p className="mentor-card__description">{mentor.description}</p>
        <div className="mentor-card__social">
          <a href={mentor.linkedin} className="mentor-card__linkedin">
            LinkedIn
          </a>
          <a href={mentor.rating} className="mentor-card__rating">
            Rating: {mentor.rating}
          </a>
          <a
            href={mentor.bookedSession}
            className="mentor-card__booked-session"
          >
            Booked Sessions: {mentor.bookedSession}
          </a>
        </div>
        <button className="mentor-card__book-session">Book Session</button>
      </div>
    </div>
  );
};

export default MentorCard;
