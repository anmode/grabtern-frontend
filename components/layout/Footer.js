import { Button, IconLink, Input } from "../UI";
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import {
  RiFacebookFill,
  RiLinkedinFill,
  RiInstagramFill,
  RiGithubFill,
  RiTwitterFill,
} from "react-icons/ri";
import FooterColumn from "./FooterColumn";
import { FaCheckCircle } from "react-icons/fa";
import Loader from "../UI/Loader";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);
  const [loader, setLoader] = useState(false);
  const [width, setWidth] = useState("25px");
  const currentYear = new Date().getFullYear();
  const [showalert, setshowalert] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Checking for a valid Email Address
    if (email.length === 0) {
      setshowalert("Field is required");
      return;
    }
    //email validation
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      setshowalert("Please enter a valid email address");
      return;
    }

    setshowalert("");
    setLoader(true);
    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/newsletter/subscribe`, {
        email,
      })
      .then((response) => {
        const data = response.status();
        console.log(data);
        setLoader(false);
        setSubscriptionSuccess(true);
      })
      .catch((error) => {
        setLoader(false);
        console.error(error);
      });
  };

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
                  className="tw-sm:mx-60 dark:tw-invert tw-md:mx-0 tw-bg-clip-content"
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
      <hr className="tw-border-base-300" />
      {/* subscribe and socials */}
      <div className="tw-w-full tw-max-w-7xl tw-mx-auto tw-px-4">
        <div className="tw-py-8 tw-flex tw-items-center tw-flex-col md:tw-flex-row md:tw-justify-between">
          {/* subscribe form */}
          <div className="tw-flex tw-mb-4 md:tw-mb-0">
            {subscriptionSuccess ? (
              <div className="tw-flex tw-items-center tw-justify-center tw-gap-4 tw-h-full tw-animate-fade-in">
                <FaCheckCircle className="tw-text-primary-100 tw-text-2xl tw-text-center" />
                <p className="tw-text-xl tw-text-gray-500">
                  Thank you for subscribing!
                </p>
              </div>
            ) : (
              <form className="md:tw-flex " onClick={handleSubmit}>
                <label htmlFor="email" className="tw-sr-only">
                  Please provide your email address to subscribe to our
                  newsletter
                </label>
                <div className="tw-mb-3   md:tw-mb-0 md:tw-mr-2">
                  <Input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    className="tw-w-full md:tw-mb-0 md:tw-mr-2 "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {showalert.length > 0 ? (
                    <h3 className="tw-text-red-400 tw-text-[2vh] tw-font-semibold tw-mt-[1vh] tw-ml-[1vh]">
                      {showalert}
                    </h3>
                  ) : (
                    ""
                  )}
                </div>
                {!loader ? (
                  <Button
                    text="Subscribe"
                    type="submit"
                    onClick={handleSubmit}
                    className="tw-w-full md:tw-w-max tw-h-fit"
                  />
                ) : (
                  <Loader width="25px" />
                )}
              </form>
            )}
          </div>
          {/* social links */}
          <div className="tw-flex tw-gap-1">
            <IconLink
              href="#"
              aria-label="Follow us on Facebook"
              title="Facebook (External Link)"
              rel="noopener noreferrer"
              Icon={RiFacebookFill}
              variant="secondary"
            />
            <IconLink
              href="#"
              aria-label="Follow us on Twitter"
              title="Twitter (External Link)"
              rel="noopener noreferrer"
              Icon={RiTwitterFill}
              variant="secondary"
            />
            <IconLink
              href="#"
              aria-label="Follow us on Instagram"
              title="Instagram (External Link)"
              rel="noopener noreferrer"
              Icon={RiInstagramFill}
              variant="secondary"
            />
            <IconLink
              href="#"
              aria-label="Follow us on Linkedin"
              title="Linkedin (External Link)"
              rel="noopener noreferrer"
              Icon={RiLinkedinFill}
              variant="secondary"
            />
            <IconLink
              href="https://github.com/anmode/grabtern-frontend"
              aria-label="Follow us on Github"
              title="Github (External Link)"
              rel="noopener noreferrer"
              Icon={RiGithubFill}
              variant="secondary"
            />
          </div>
        </div>
      </div>
      {/* copyright section */}
      <div className="tw-bg-base-200 tw-px-5 tw-py-4">
        <div className="tw-w-full tw-max-w-7xl tw-mx-auto">
          <p className="tw-text-base-400 tw-text-sm tw-text-center tw-font-sans">
            Copyright &copy; {currentYear} All rights reserved | grabtern.in
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
