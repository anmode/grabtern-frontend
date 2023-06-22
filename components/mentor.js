import React from "react";

const MentorCard = ({ mentor }) => {
  return (
    <div className="mentor-card shadow-lg max-w-2xl transform transition duration-300 hover:scale-105 m-4">
      <img
        src={mentor.mentorImg}
        alt={mentor.name}
        className="h-80 rounded-full w-80"
      />
      <div className="mentor-card__info p-3">
        <h1 className="text-center font-semibold text-3xl">{mentor.name}</h1>
        <p className="mentor-card__intern text-center text-xl">
          <b>Intern at: </b>
          {mentor.internAt}
        </p>
        <div className="mentor-card__social flex justify-between">
          <a href={`${mentor.social.linkedin}`} target="_blank">
            <i class="fab fa-linkedin text-[#0077b5] text-4xl hover:text-blue-700"></i>
          </a>
          <a href={`${mentor.social.twitter}`} target="_blank">
            <i class="fab fa-twitter text-[#1DA1F2] text-4xl hover:text-blue-700"></i>
          </a>
        </div>
        <div className="flex justify-center">
          <a
            href={mentor.bookedSession}
            className="mentor-card__booked-session text-2xl"
          >
            Booked Sessions: {mentor.bookedSession}
          </a>
        </div>
        <div className="flex justify-center items-center my-2 transition-all duration-300">
          <button className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">
            Book Session
          </button>
        </div>
      </div>
    </div>
  );
};
export default MentorCard;
