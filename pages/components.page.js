import React from "react";
import Button from "../components/UI/Button/Button";
import ButtonLink from "../components/UI/Links/ButtonLink";
import IconLink from "../components/UI/Links/IconLink";
import TextLink from "../components/UI/Links/TextLink";
import SectionHeader from "../components/UI/Section/SectionHeader";
import IconCard from "../components/UI/Card/IconCard";
import { BiUser } from "react-icons/bi";
import { PiAlarmDuotone } from "react-icons/pi";
import { FaQuoteLeft } from "react-icons/fa";
import ImageCard from "../components/UI/Card/ImageCard";
import ProfileCard from "../components/UI/Card/ProfileCard";
import Section from "../components/UI/Section/Section";

function components() {
  return (
    <div className="tw-py-10 tw-px-10 tw-bg-base-200">
      {/* buttons */}
      <h2>Buttons</h2>
      Primary: <Button text="click here" onClick={() => {}} />
      Secondary:{" "}
      <Button text="click here" onClick={() => {}} variant="secondary" />
      {/* links */}
      <h2>Links</h2>
      {/* button style */}
      <div className="tw-my-10">
        <h2 className="tw-my-10">Button style link</h2>
        Primary: <ButtonLink text="Get Started" href="/" />
        Secondary:{" "}
        <ButtonLink text="Get Started" href="/" variant="secondary" />
        Outline: <ButtonLink text="Get Started" href="/" variant="outline" />
      </div>
      {/* icon style */}
      <div className="tw-my-10">
        <h2 className="tw-my-10">Icon style link</h2>
        Primary: <IconLink Icon={BiUser} href="/" />
        Secondary: <IconLink Icon={BiUser} href="/" variant="secondary" />
        Outline: <IconLink Icon={BiUser} href="/" variant="outline" />
      </div>
      {/* text */}
      <div className="tw-my-10">
        <h2>Text style link</h2>
        <div>
          Without arrow: <TextLink text="Read More" href="/" />
        </div>
        <div>
          WithArrow: <TextLink text="Read More" href="/" arrow="true" />
        </div>
      </div>
      {/* SEction */}
      <div className="tw-my-10">
        <h2>Section Components</h2>
        header
        <div className="tw-my-10">
          <SectionHeader
            kicker="On-Demand Healthcare"
            heading="Forget about the hassle"
            subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tibi hoc incredibile, quod beatissimum."
          />
        </div>
      </div>
      {/* cards */}
      <div className="tw-my-10">
        <h2>Cards</h2>
        Default:
        <div className="tw-max-w-[450px] tw-my-20">
          <IconCard
            Icon={PiAlarmDuotone}
            heading="Save time & effort"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tibi hoc incredibile, quod beatissimum."
          />
        </div>
        Card with bg and large font
        <div className="tw-max-w-[450px] tw-my-20">
          <IconCard
            intent="bg"
            size="lg"
            Icon={FaQuoteLeft}
            heading="Save time & effort"
            body="
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ergo id
          est convenienter naturae vivere, a natura discedere. Duo Reges:
          constructio interrete.
        "
          />
        </div>
        {/* image card */}
        Default
        <div className="tw-max-w-[450px] tw-my-20">
          <ImageCard
            image="/assets/img/gallery/step.webp"
            heading="Flipkart G.R.I.D (Graduate Research Internship Development)"
            subheading="Grabtern"
            body="It's a global program focused on bringing more student developers into open source software development. Google Summer of Code is a global program that offers student developers stipends to write code for various open source software projects."
            link="https://summerofcode.withgoogle.com/"
          />
        </div>
        <div className="tw-max-w-[450px] tw-my-20">
          <ImageCard
            image="https://doctor-ruby.vercel.app/img/illustrations/doctors/doctor-12.svg"
            imageType="popUp"
            heading="Flipkart G.R.I.D (Graduate Research Internship Development)"
            subheading="Grabtern"
            body="It's a global program focused on bringing more student developers into open source software development. Google Summer of Code is a global program that offers student developers stipends to write code for various open source software projects."
            link="https://summerofcode.withgoogle.com/"
          />
          {/* profile card */}
          <div className="tw-max-w-[450px] tw-my-20">
            small:
            <ProfileCard
              image="https://res.cloudinary.com/grabtern-cloud/image/upload/v1688361690/og87pyq4vyptl1dlmffs.png"
              heading="Maya Rosselini "
              subheading="Google Summer of Code 2022"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              intent="bg"
              size="sm"
              rounded="lg"
              orient="row"
            />
          </div>
          <div className="tw-max-w-[450px] tw-my-20">
            Default:
            <ProfileCard
              image="https://res.cloudinary.com/grabtern-cloud/image/upload/v1688361690/og87pyq4vyptl1dlmffs.png"
              heading="Maya Rosselini "
              subheading="Google Summer of Code 2022"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              intent="bg"
              align="center"
              direction="col"
            />
          </div>
          <div className="tw-max-w-[450px] tw-my-20">
            large:
            <ProfileCard
              image="https://res.cloudinary.com/grabtern-cloud/image/upload/v1688361690/og87pyq4vyptl1dlmffs.png"
              heading="Maya Rosselini "
              subheading="Google Summer of Code 2022"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              intent="bg"
              size="lg"
              rounded="lg"
              orient="row"
            />
          </div>
        </div>
      </div>
      {/* row section */}
      row section:
      <Section
        kicker="On-Demand Healthcare"
        heading="Forget about the hassle"
        subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tibi hoc incredibile, quod beatissimum."
        direction="row"
      >
        <p>
          One to One Interaction and doubt solving. Students can access
          mentorship on their own schedule and pace. Students can connect with
          industry leaders and gain insight and advice from experienced mentors
        </p>
        <ProfileCard
          image="https://res.cloudinary.com/grabtern-cloud/image/upload/v1688361690/og87pyq4vyptl1dlmffs.png"
          heading="Maya Rosselini "
          subheading="Google Summer of Code 2022"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          intent="bg"
          align="center"
          direction="col"
        />
      </Section>
      {/* column section */}
      column section:
      <Section
        kicker="On-Demand Healthcare"
        heading="Forget about the hassle"
        subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tibi hoc incredibile, quod beatissimum."
      >
        <ProfileCard
          image="https://res.cloudinary.com/grabtern-cloud/image/upload/v1688361690/og87pyq4vyptl1dlmffs.png"
          heading="Maya Rosselini "
          subheading="Google Summer of Code 2022"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          intent="bg"
          align="center"
          direction="col"
        />
      </Section>
    </div>
  );
}

export default components;
