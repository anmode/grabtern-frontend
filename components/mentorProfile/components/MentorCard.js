import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedin, FaTwitter, FaShareAlt } from "react-icons/fa";

export default function MentorCard({
  mentorImage,
  name,
  internAt,
  currentStatus,
  email,
  socialLinks,
  about,
  handleSharePage,
}) {
  return (
    <>
      {/* Mentor card */}
      <div className="tw-bg-grey-100 tw-flex tw-flex-col tw-items-center tw-justify-center tw-max-w-[390px] tw-gap-5 tw-rounded-[10px] tw-shadow-xl tw-shadow-black/10 tw-rounded-[36px] tw-shadow-[8px 0 8px 8px rgba(255, 255, 255, 0.8)]">
        {/* Mentor Pic with Name and Status - upper half*/}
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center ">
          {/* Mentor Pic */}
          <Image
            src={mentorImage}
            alt="mentor"
            width="120"
            height="120"
            className=" tw-mt-10 tw-w-[100px] tw-h-[100px] tw-shadow-[0_8px_8px_rgba(0,0,0,0.2)] tw-object-center tw-object-cover  tw-rounded-[50%]  tw-bottom-0; "
          />
          {/* Mentor Name and Mentor InternAt/Status */}
          <div className="tw-mt-5 tw-flex tw-text-gray-950 tw-flex-col tw-item-center tw-relative tw-mx-[10px]  tw-mb-6 tw-gap-3">
            {/* Mentor Name */}
            <h1 className="tw-text-[22px] tw-text-[#4338CA]  tw-font-bold tw-text-center ">
              {name}
            </h1>
            {/* Mentor Current Status and Intern Position */}
            <h3 className="tw-text-[11px] tw-text-[#4338CA] tw-font-semibold tw-text-center tw-uppercase ">
              {/* internAt and CurrentStatus is sliced when it exceeds 40 Characters */}
              {internAt.length > 40 ? `${internAt.slice(0, 40)}...` : internAt}{" "}
              |{" "}
              {currentStatus.length > 40
                ? `${currentStatus.slice(0, 40)}...`
                : currentStatus}
            </h3>
          </div>

          {/* <div
              className="tw-z-10 tw-absolute tw-w-full tw-h-full tw-top-0 tw-right-0 tw-rouned-t-[36px]"
               style attribute is used to add one-off custom gradient
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 67.25%, rgba(0, 0, 0, 1) 100%)",
              }}
            ></div> */}
        </div>

        {/* </div> */}
        {/* Lower half of the card */}
        <div className=" tw-pt-[10px] tw-pb-[30px] tw-px-[30px] tw-items-stretch tw-w-full">
          {/* About Section */}
          <div className="tw-flex tw-flex-col">
            {/* About Section Heading */}
            {/* <h1 className="tw-text-[36px] tw-font-normal tw-text-[#4338CA] tw-mb-[12px]"> */}
            <h1 className="tw-font-bold tw-text-[20px] tw-mb-8;">About</h1>
            <p className="tw-leading-[1.6] tw-text-[#636b6f] tw-text-[13px] tw-font-normal tw-m-0 tw-text-justify">
              {about}
            </p>
          </div>
          {/* Mentor Social Links, Share Icon and About section */}
          {/* <div className="tw-bg-blue-500 tw-flex tw-flex-col tw-mb-[22px]"> */}
          {/* Mentor Social Links and Share Icon */}{" "}
          {/* Mentor Social Links Container */}
          <div className=" tw-flex tw-flex-row tw-text-[#4338CA] tw-gap-4  tw-items-center  tw-justify-center tw-m-[5px] tw-px-5 tw-py-0">
            <Link
              className="tw-flex tw-items-center tw-justify-center tw-bg-[#eceeef] tw-text-[#818a91] tw-w-[30px] tw-h-[30px] tw-rounded-full tw-transition-all tw-duration-[0.2s] tw-ease-linear tw-mr-2 hover:tw-bg-[#ea4c89] hover:tw-text-white"
              aria-label="Mail me on"
              title="Mail (External Link)"
              rel="noopener noreferrer"
              href={`mailto:${email}`}
            >
              <MdAlternateEmail className="tw-text-[20px] " />
            </Link>
            <Link
              className="tw-flex tw-items-center tw-justify-center tw-bg-[#eceeef] tw-text-[#818a91] tw-w-[30px] tw-h-[30px] tw-rounded-full tw-transition-all tw-duration-[0.2s] tw-ease-linear tw-mr-2 hover:tw-bg-[#007bb6] hover:tw-text-white"
              aria-label="Follow me on Linkedin"
              title="Linkedin (External Link)"
              rel="noopener noreferrer"
              href={`https://www.linkedin.com/in/${socialLinks.linkedin}`}
            >
              <FaLinkedin className="tw-text-[20px] " />
            </Link>
            <Link
              className="tw-flex tw-items-center tw-justify-center tw-bg-[#eceeef] tw-text-[#818a91] tw-w-[30px] tw-h-[30px] tw-rounded-full tw-transition-all tw-duration-[0.2s] tw-ease-linear tw-mr-2 hover:tw-bg-[#00aced] hover:tw-text-white"
              aria-label="Follow me on Twitter"
              title="Twitter (External Link)"
              rel="noopener noreferrer"
              href={`https://www.twitter.com/${socialLinks.twitter}`}
            >
              <FaTwitter className="tw-text-[20px] " />
            </Link>
            {/* Mentor Share Icon Container */}
            <div
              onClick={handleSharePage}
              aria-label="Share this Mentor's Profile"
              className="tw-flex tw-items-center tw-justify-center tw-bg-[#eceeef] tw-text-[#818a91] tw-w-[30px] tw-h-[30px] tw-rounded-full tw-transition-all tw-duration-[0.2s] tw-ease-linear tw-mr-2 hover:tw-bg-[#4338CA] hover:tw-text-white"
            >
              <FaShareAlt className="tw-text-[20px]  " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
