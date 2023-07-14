import React from "react";
import { IconCard, ProfileCard, Section } from "../UI";
import {
  PiUsersThreeDuotone,
  PiCertificateDuotone,
  PiHandshakeDuotone,
} from "react-icons/pi";
import clsx from "clsx";

function MentorSection() {
  return (
    <Section
      divClassName="!tw-flex-col md:!tw-flex-row-reverse"
      kicker="be a mentor at Grabtern"
      heading="Why to be Mentor at Grabtern?"
      direction="row-reverse"
    >
      {/*right section Benefits list  */}
      <div className="tw-grid tw-gap-4">
        <IconCard
          Icon={PiUsersThreeDuotone}
          heading="Professional networking"
          body="Mentors can expand their professional network by connecting with students and other mentors in the community."
        />
        <IconCard
          Icon={PiHandshakeDuotone}
          heading="Giving back"
          body="Mentors can feel a sense of fulfillment by giving back to the community and contributing to the development of future professionals."
        />
        <IconCard
          Icon={PiCertificateDuotone}
          heading="Continued learning"
          body="Mentors can continue to learn and grow by staying up-to-date on the latest industry trends and knowledge through mentoring students."
        />
      </div>
      <div className="tw-relative tw-w-full tw-max-w-sm tw-mx-auto tw-space-y-4">
        {/* background image */}
        <div
          class={clsx(
            "tw-absolute -tw-top-10 -tw-left-10",
            "tw-h-[480px] tw-w-[480px] tw-rotate-45",
            "mask mask-hexed",
            "tw-bg-primary-10 tw-opacity-30 tw-z-0",
          )}
        ></div>
        {/* mentor review cards */}
        <div className="tw-relative tw-z-10 tw-grid tw-gap-4">
          <ProfileCard
            className="tw-shadow-none tw-mr-8"
            image="https://media.cssninja.io/shuriken/avatars/2.svg"
            heading="Anmol Aggarwal"
            subheading="Google Summer of Code Mentor"
            body="Great Experience mentoring students on Grabtern"
            intent="bg"
            rounded="sm"
          />
          <ProfileCard
            className="tw-shadow-none tw-ml-8"
            image="https://media.cssninja.io/shuriken/avatars/2.svg"
            heading="Anmol Aggarwal"
            subheading="Google Summer of Code Mentor"
            body="Great Experience mentoring students on Grabtern"
            intent="bg"
            rounded="sm"
            direction="row-reverse"
          />
          <ProfileCard
            className="tw-shadow-none tw-mr-8"
            image="https://media.cssninja.io/shuriken/avatars/2.svg"
            heading="Anmol Aggarwal"
            subheading="Google Summer of Code Mentor"
            body="Great Experience mentoring students on Grabtern"
            intent="bg"
            rounded="sm"
          />
        </div>
      </div>
    </Section>
  );
}

export default MentorSection;
