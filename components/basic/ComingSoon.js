import React from "react";
import { useRouter } from "next/router";
import { RiFacebookFill, RiTwitterFill, RiLinkedinFill } from "react-icons/ri";
import { MdKeyboardArrowLeft } from "react-icons/md";

import { Button, Section, Input, IconLink } from "../UI";
import clsx from "clsx";

const ComingSoon = () => {
  const router = useRouter();
  return (
    <main>
      <div
        className={clsx(
          "tw-flex tw-justify-center tw-items-center tw-flex-col",
          "tw-h-screen sm:tw-w-screen ",
          "tw-pl-12 tw-pr-8",
        )}
      >
        {/* back button */}
        <Button
          onClick={() => router.back()}
          variant="secondary"
          LeftIcon={MdKeyboardArrowLeft}
          text="back"
          className="tw-flex tw-items-center"
        />

        {/* header and form section */}
        <Section
          kicker="coming soon"
          heading={`Hey! \n We are Cooking it Up...`}
          subheading="We are just few days from our big launch. Subscribe to be notified!"
          align="center"
        >
          {/* subscription form */}
          <form
            className={clsx(
              "sm:tw-flex sm:tw-gap-4",
              "tw-bg-base-300 tw-rounded-lg tw-shadow",
              "tw-p-10 tw-max-w-[600px] tw-mx-auto",
            )}
          >
            <Input
              name="email"
              placeholder="Your Email"
              value=""
              handleChange={() => {}}
            />
            <Button
              text="Subscribe"
              type="submit"
              className="tw-w-full tw-mt-4 sm:tw-mt-0 sm:tw-w-fit"
            />
          </form>

          {/* socials */}
          <div className={clsx("tw-flex tw-justify-center tw-gap-2 tw-mt-10")}>
            <IconLink Icon={RiTwitterFill} href="#" variant="Secondary" />
            <IconLink Icon={RiLinkedinFill} href="#" variant="Secondary" />
            <IconLink Icon={RiFacebookFill} href="#" variant="Secondary" />
          </div>
        </Section>
      </div>
    </main>
  );
};

export default ComingSoon;
