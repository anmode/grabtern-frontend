//components/mentor.js
import React from "react";
import { ProfileCard, IconLink, ButtonLink } from "./UI";
import { RiLinkedinLine, RiTwitterLine } from "react-icons/ri";

const MentorCard = ({ mentor, link }) => {
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
    >
      <div className="tw-px-2 tw-w-full tw-flex tw-justify-between tw-items-center">
        <div className="tw-flex tw-gap-2">
          <IconLink
            href={mentor.social.linkedin}
            Icon={RiLinkedinLine}
            variant="secondary"
          />
          <IconLink
            href={mentor.social.twitter}
            Icon={RiTwitterLine}
            variant="secondary"
          />
        </div>
        <div>
          <ButtonLink text="Book Session" href={link} size="sm" />
        </div>
      </div>
    </ProfileCard>
  );
};
export default MentorCard;
