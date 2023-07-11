import React from "react";
import {
  RiLinkedinFill,
  RiMailFill,
  RiTwitterFill,
  RiShareFill
} from "react-icons/ri";
import {IconLink, ProfileCard, Section} from "../UI"

function MentorAbout({ mentorDetail }) {
  return (
    <Section
      kicker = "Know More About our Mentor"
      heading = {`About ${mentorDetail?.name}`}
      subheading = {mentorDetail?.description}
      direction = "row-reverse"
    >
      <div className="tw-flex tw-justify-between">
        <div className="tw-flex">
          <IconLink href= {mentorDetail.social.linkedin} Icon={RiLinkedinFill} variant="secondary"/>
          <IconLink href= {mentorDetail.social.twitter} Icon={RiTwitterFill} variant="secondary"/>
          <IconLink href= {`mailto:${mentorDetail.email}`} Icon={RiMailFill} variant="secondary"/>
        </div>
        <div>
          <IconLink href="/" Icon={RiShareFill}/>
        </div>
      </div>
      <ProfileCard
          image="https://res.cloudinary.com/grabtern-cloud/image/upload/v1688361691/bk3cdmxgfohtsnslbt4q.png" 
          heading = {mentorDetail?.name}  
          body = {`${mentorDetail?.internAt} | ${mentorDetail?.currentStatus}`}  
          size = "xl"
          direction = "col"
          align = "center"
          rounded = "lg"
          imageShadow = {true}
      />
    </Section>
  );
}

export default MentorAbout;
