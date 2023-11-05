import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { RiFacebookFill, RiTwitterFill, RiLinkedinFill } from "react-icons/ri";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button, Section, Input, IconLink } from "../UI";
import clsx from "clsx";
import { FaCheckCircle } from "react-icons/fa";
import Loader from "../UI/Loader";

const ComingSoon = () => {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const [email, setEmail] = useState("");
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return toast.error("Please enter your email");
    }
    setLoader(true);
    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/newsletter/subscribe`, {
        email,
      })
      .then((response) => {
        setSubscriptionSuccess(true);
      })
      .catch((error) => {
        console.log(error.response);
        setTimeout(() => {
          toast.error(error.response.data.error);
        }, 2000);
        window.location.reload();
      })
      .finally(() => {
        setLoader(false);
      });
  };

  return (
    <main>
      <div
        className={clsx(
          "tw-flex tw-justify-center tw-items-center tw-flex-col",
          "tw-h-screen tw-w-full",
          "tw-p-8",
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
          {subscriptionSuccess ? (
            <div className="tw-flex tw-items-center tw-justify-center tw-gap-4 tw-h-full tw-animate-fade-in">
              <FaCheckCircle className="tw-text-primary-100 tw-text-2xl tw-text-center" />
              <p className="tw-text-xl tw-text-gray-500">
                Thank you for subscribing!
              </p>
            </div>
          ) : (
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {!loader ? (
                <Button
                  text="Subscribe"
                  type="submit"
                  onClick={handleSubmit}
                  className="tw-w-full tw-mt-4 sm:tw-mt-0 sm:tw-w-fit"
                  loading={loader}
                />
              ) : (
                <Loader width="20px" />
              )}
            </form>
          )}

          {/* socials */}
          <div className={clsx("tw-flex tw-justify-center tw-gap-2 tw-mt-10")}>
            <IconLink Icon={RiTwitterFill} href="#" variant="Secondary" />
            <IconLink Icon={RiLinkedinFill} href="#" variant="Secondary" />
            <IconLink Icon={RiFacebookFill} href="#" variant="Secondary" />
          </div>
        </Section>
      </div>
      <ToastContainer />
    </main>
  );
};

export default ComingSoon;
