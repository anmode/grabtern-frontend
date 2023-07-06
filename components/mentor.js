//components/mentor.js
import React from "react";
import ProfileCard from "./UI/Card/ProfileCard"

const MentorCard = ({ mentor }) => {
  return (
    <ProfileCard
      image={mentor.mentorImage}
      heading={mentor.name}
      subheading={mentor.internAt}
      body={mentor.description}
      intent = "bg"
      size="lg"
      direction="col"
    />
    // <div className="card-container tw-flex flex-lg-column tw-justify-center align-center tw-rounded-2xl tw-gap-5">
    //   <div className="upper-container tw-bg-[#845ec2] tw-h-1/3 tw-w-full tw-rounded-t-2xl">
    //     <div className="tw-w-full tw-h-full d-flex justify-content-center position-relative tw-top-20">
    //       <img
    //         className="tw-w-48 tw-h-48 tw-rounded-full"
    //         src={mentor.mentorImg}
    //         alt={mentor.name}
    //       />
    //     </div>
    //   </div>
    //   <div className="lower-container tw-h-2/3 tw-bg-white tw-rounded-2xl">
    //     <h1 className="tw-font-bold tw-text-4xl text-center tw-py-12">
    //       {mentor.name}
    //     </h1>
    //     <div className="tw-flex tw-justify-center">
    //       <p className="tw-text-center tw-font-medium tw-text-3xl">
    //         Interned at: {mentor.internAt}
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};
export default MentorCard;
