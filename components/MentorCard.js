import React from "react";

function MentorCard(props) {
  return (
    <div className="mentorCard">
      <img src={props.mentor.mentorImg} alt="exampleMentorPhoto" />
      <h2 className="mentorName">{props.mentor.name}</h2>
      <div className="contactLinks" style={{ marginBottom: "10px" }}>
        <a href={`/mentors/${props.mentor.username}`} target="_blank">
          <i class="fas fa-envelope"></i>
        </a>
        <a href={`${props.mentor.social.linkedin}`} target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href={`${props.mentor.social.twitter}`} target="_blank">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
      <h3>Intern at: {props.mentor.internAt}</h3>
      <h3>{props.mentor.currentStatus}</h3>
      <p>
        {props.mentor.description?.length > 120
          ? `${props.mentor.description.substring(0, 120)}…`
          : props.mentor.description}
      </p>
      {/* <h3>Price for each intern: {props.mentor.sessionPrice}</h3> */}
    </div>
  );
}

export default MentorCard;
