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
      bodyHeight="fixed"
    >
      <div className="tw-px-2 tw-w-full tw-flex tw-justify-between tw-items-center">
        <div className="tw-flex tw-gap-2">
          <IconLink
            href={`https://www.linkedin.com/in/${mentor.social.linkedin}`}
            aria-label="Follow me on Linkedin"
            title="Linkedin (External Link)"
            rel="noopener noreferrer"
            Icon={RiLinkedinLine}
            variant="secondary"
          />
          <IconLink
            href={`https://twitter.com/${mentor.social.twitter}`}
            aria-label="Follow me on Twitter"
            title="Twitter (External Link)"
            rel="noopener noreferrer"
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
