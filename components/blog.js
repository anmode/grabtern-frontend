import React from "react";
import { ProfileCard, IconLink, ButtonLink } from "./UI";
import { RiLinkedinLine, RiTwitterLine } from "react-icons/ri";

const blogCard = ({ blog, link }) => {
  return (
    <ProfileCard
      image={blog.image}
      heading={blog.name}
      subheading={blog.createdAt}
      body={blog.description}
      intent="bg"
      size="lg"
      direction="col"
      rounded="lg"
      align="center"
    >
      <div className="tw-px-2 tw-w-full tw-flex tw-justify-between tw-items-center">
        <ButtonLink text="See blog detail" href={link} size="sm" />
      </div>
    </ProfileCard>
  );
};
export default blogCard;
