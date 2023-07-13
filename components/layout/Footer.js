import { Button, IconLink, Input } from "../UI";
import Image from "next/image";
import React from "react";
import {
  RiFacebookFill,
  RiLinkedinFill,
  RiInstagramFill,
  RiGithubFill,
  RiTwitterFill,
} from "react-icons/ri";
import FooterColumn from "./FooterColumn";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="tw-font-sans tw-bg-base-100 tw-px-5">
      <div className="tw-w-full tw-max-w-7xl tw-py-16 tw-mx-auto">
        <div className="tw-grid tw-gap-10 tw-items-center md:tw-grid-cols-4 tw-grid-cols-1 tw-text-center ">
          {/* logo and text */}
          <div className="tw-footer-logo tw-text-center">
            <div className="tw-flex tw-justify-center">
              <a href="#">
                <Image
                  src="/Grabtern2.png"
                  width={140}
                  height={90}
                  alt="Grabtern"
                  className="tw-sm:mx-60 tw-md:mx-0 tw-bg-clip-content"
                />
              </a>
            </div>
            <div className="tw-md:py-4">
              <p className="tw-text-base-400 tw-mb-7">
                The internship started as soon as you enroll in any internship
                course
              </p>
            </div>
          </div>

          <FooterColumn
            heading="Services to Student"
            links={[
              { href: "#", text: "One to One Mentorship" },
              { href: "#", text: "Networking" },
              { href: "#", text: "Live Sessions" },
              { href: "#", text: "Resources" },
            ]}
          />

          <FooterColumn
            heading="Services to Mentors"
            links={[
              { href: "#", text: "Community Base" },
              { href: "#", text: "Self Satisfaction" },
              { href: "#", text: "Build Leadership skills" },
              { href: "#", text: "Get Paid" },
            ]}
          />

          <FooterColumn
            heading="Grabtern"
            links={[
              { href: "/refundandcancellation", text: "Refund Policy" },
              { href: "/termsandcondition", text: "Terms and Condition" },
              { href: "/privacy", text: "Privacy Policy" },
              { href: "/contact", text: "Contact Us" },
            ]}
          />
        </div>
      </div>
      <hr />
      {/* subscribe and socials */}
      <div className="tw-w-full tw-max-w-7xl tw-mx-auto tw-px-4">
        <div className="tw-py-8 tw-flex tw-items-center tw-flex-col md:tw-flex-row md:tw-justify-between">
          {/* subscribe form */}
          <div className="tw-flex tw-mb-4 md:tw-mb-0">
            <form className="md:tw-flex md:tw-items-center">
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                className="tw-w-full tw-mb-4 md:tw-mb-0 md:tw-mr-2 "
              />
              <Button
                text="Subscribe"
                type="submit"
                onClick={() => {}}
                className="tw-w-full md:tw-w-max"
              />
            </form>
          </div>
          {/* social links */}
          <div className="tw-flex tw-gap-1">
            <IconLink href="#" Icon={RiFacebookFill} variant="secondary" />
            <IconLink href="#" Icon={RiTwitterFill} variant="secondary" />
            <IconLink href="#" Icon={RiInstagramFill} variant="secondary" />
            <IconLink href="#" Icon={RiLinkedinFill} variant="secondary" />
            <IconLink href="#" Icon={RiGithubFill} variant="secondary" />
          </div>
        </div>
      </div>
      {/* copyright section */}
      <div className="tw-bg-base-200 tw-px-5 tw-py-4">
        <div className="tw-w-full tw-max-w-7xl tw-mx-auto">
          <p className="tw-text-base-400 tw-text-sm tw-text-center tw-font-sans">
            Copyright &copy; {currentYear} All rights reserved | Grabtern.com
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
