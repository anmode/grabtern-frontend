import React from "react";

const MentorCard = ({ mentor }) => {
  return (
        <div className="card-container tw-flex justify-content-center flex-column align-center">
         <div className="upper-container tw-bg-[#7F00FF] tw-h-1/3 tw-w-full tw-rounded-t-2xl">
            <div className="tw-w-full tw-h-full d-flex justify-content-center position-relative tw-top-20">
               <img className='tw-w-48 tw-h-48 tw-rounded-full' src={mentor.mentorImg} alt={mentor.name}/>
            </div>
         </div>
         <div className="lower-container tw-h-2/3 tw-bg-white">
              <div>
                <h1 className="tw-font-semibold tw-text-3xl text-center tw-py-4">{mentor.name}</h1>
                <p className="tw-text-center tw-text-2xl tw-mb-4">
                  <b>Intern at: </b>
                  {mentor.internAt}
                </p>
              </div>
              <a href={mentor.bookedSession} className="tw-text-2xl tw-font-gray-400 text-center"><p>Booked Sessions: {mentor.bookedSession}</p></a>
                <div className="tw-flex tw-justify-evenly">
                  <a href={`${mentor.social.linkedin}`} target="_blank">
                    <i className="fab fa-linkedin tw-text-[#0077b5] tw-text-5xl hover:tw-text-blue-700"></i>
                  </a>
                  <a href={`${mentor.social.twitter}`} target="_blank">
                    <i className="fab fa-twitter tw-text-[#1DA1F2] tw-text-5xl hover:tw-text-blue-700"></i>
                  </a>
                </div>
              <div className="py-3">
                <button className="btn tw-bg-[#7F00FF] tw-text-white tw-font-bold tw-rounded">Book Session</button>
              </div>
        </div>
      </div>
  );
};
export default MentorCard;


