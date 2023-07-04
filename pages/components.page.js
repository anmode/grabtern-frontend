import React from "react";
import Button from "../components/UI/Button/Button";
import ButtonLink from "../components/UI/Links/ButtonLink";
import IconLink from "../components/UI/Links/IconLink";
import TextLink from "../components/UI/Links/TextLink";
import { BiUser } from "react-icons/bi";
import SectionHeader from "../components/UI/Section/SectionHeader";

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
        <h2>Header</h2>
        <SectionHeader
          kicker="On-Demand Healthcare"
          heading="Forget about the hassle"
          subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tibi hoc incredibile, quod beatissimum."
        />
      </div>
    </div>
  );
}

export default components;
