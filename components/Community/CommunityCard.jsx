import React from "react";
import { ProfileCard } from "../UI";

const CommunityCard = ({ image, name, description}) => {
  return (
    <ProfileCard
      image={image}
      heading={name}
      subheading={description?.contributions}
      intent="bg"
      size="lg"
      direction="col"
      rounded="lg"
      align="center"
    >
    </ProfileCard>
  );
};
export default CommunityCard;
