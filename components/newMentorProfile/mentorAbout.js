import React from "react";
import {
  RiLinkedinFill,
  RiMailFill,
  RiTwitterFill,
  RiShareFill,
} from "react-icons/ri";
import { IconLink, ProfileCard, Section, Button } from "../UI";

function MentorAbout({ mentorDetail, onShare }) {
  return (
    <Section
      kicker="Know More About our Mentor"
      heading={`About ${mentorDetail?.name}`}
      subheading={mentorDetail?.description}
      direction="row-reverse"
    >
      <div className="tw-flex tw-justify-between">
        <div className="tw-flex">
          <IconLink
            href={`https://www.linkedin.com/in/${mentorDetail.social.linkedin}`}
            Icon={RiLinkedinFill}
            variant="secondary"
          />
          <IconLink
            href={`https://twitter.com/${mentorDetail.social.twitter}`}
            Icon={RiTwitterFill}
            variant="secondary"
          />
          <IconLink
            href={`mailto:${mentorDetail.email}`}
            Icon={RiMailFill}
            variant="secondary"
          />
        </div>
        <div>
          <Button onClick={onShare} LeftIcon={RiShareFill} />
        </div>
      </div>
      <ProfileCard
        image={mentorDetail?.image}
        heading={mentorDetail?.name}
        body={`${mentorDetail?.internAt} | ${mentorDetail?.currentStatus}`}
        size="xl"
        direction="col"
        align="center"
        rounded="lg"
        imageShadow={true}
      />
    </Section>
  );
}

export default MentorAbout;
