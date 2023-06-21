import React from "react";

const MentorCard = ({ mentor }) => {
  return (
    <div className="mentor-card tw-shadow-lg tw-transform tw-transition tw-duration-300 hover:tw-scale-105 tw-m-4">
      <img
        src={mentor.mentorImg}
        alt={mentor.name}
        className="tw-h-60 tw-rounded-full tw-w-60"
      />
      <div className="mentor-card__info tw-p-3 tw-flex tw-flex-row">
        <h1 className="tw-font-semibold tw-text-3xl text-center">{mentor.name}</h1>
        <p className="tw-text-center tw-text-xl">
          <b>Intern at: </b>
          {mentor.internAt}
        </p>
        <div className="tw-flex tw-justify-center">
          <a
            href={mentor.bookedSession}
            className="tw-text-xl"
          >
            Booked Sessions: {mentor.bookedSession}
          </a>
        </div>
        <div className="tw-flex tw-justify-center tw-items-center tw-my-2 tw-transition-all tw-duration-300 tw-m-5">
          <div className="tw-flex tw-justify-evenly">
            <a href={`${mentor.social.linkedin}`} target="_blank">
              <i className="fab fa-linkedin tw-text-[#0077b5] tw-text-5xl hover:tw-text-blue-700"></i>
            </a>
            <a href={`${mentor.social.twitter}`} target="_blank">
              <i className="fab fa-twitter tw-text-[#1DA1F2] tw-text-5xl hover:tw-text-blue-700"></i>
            </a>
          </div>
          <button className="tw-bg-purple-600 hover:tw-bg-purple-800 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded">Book Session</button>
        </div>
      </div>
    </div>
  );
};
export default MentorCard;

