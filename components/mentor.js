import React from "react";

const MentorCard = ({ mentor }) => {
  return (
        <div className="card-container tw-flex justify-content-center flex-column align-center tw-rounded-2xl">
         <div className="upper-container tw-bg-[#6c23a8] tw-h-1/3 tw-w-full tw-rounded-t-2xl">
            <div className="tw-w-full tw-h-full d-flex justify-content-center position-relative tw-top-20">
               <img className='tw-w-48 tw-h-48 tw-rounded-full' src={mentor.mentorImg} alt={mentor.name}/>
            </div>
         </div>
            <div className="lower-container tw-h-2/3 tw-bg-white">
              <h1 className="tw-font-bold tw-text-4xl tw-text-black text-center tw-py-14">{mentor.name}</h1>
              <div className="tw-flex tw-justify-center">
                <p className="tw-text-center tw-font-semibold tw-text-3xl pb-5 tw-text-neutral-600">
                  <b>Intern at: </b>
                    {mentor.internAt}
                </p>
              </div>
          </div>
      </div>
  );
};
export default MentorCard;


