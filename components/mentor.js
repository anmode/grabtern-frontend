//components/mentor.js
import React from "react";
import ProfileCard from "./UI/Card/ProfileCard";

const MentorCard = ({ mentor }) => {
  return (
    <ProfileCard
      image={mentor.image}
      heading={mentor.name}
      subheading={mentor.internAt}
      body={mentor.description}
      intent="bg"
      size="lg"
      direction="col"
      rounded="lg"
      align="center"
    />
  );
};
export default MentorCard;
