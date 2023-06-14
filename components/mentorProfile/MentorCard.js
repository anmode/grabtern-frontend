import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdAlternateEmail } from 'react-icons/md'
import { FaLinkedin, FaTwitter, FaShareAlt } from 'react-icons/fa'

export default function MentorCard({ mentorImage, name, internAt, currentStatus, email, socialLinks, about, handleSharePage }) {
  return (
    <>
      {/* Mentor card */}
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-max-w-[448px] tw-gap-5 tw-rounded-b-[36px] tw-shadow-xl tw-shadow-black/10 tw-rounded-[36px]">
        {/* Mentor Pic with Name and Status - upper half*/}
        <div className="tw-flex tw-flex-col tw-items-middle tw-justify-center tw-relative">
          {/* Mentor Pic Container with Overlay*/}
          <div className="relative">
            {/* Mentor Pic */}
            <Image 
              src={mentorImage} 
              alt="mentor" 
              width="448" 
              height="448" 
              className="tw-z-0 tw-rounded-t-[36px]"
            />
            {/* Mentor Pic Overlay */}
            <div 
              className="tw-z-10 tw-absolute tw-w-full tw-h-full tw-top-0 tw-right-0 tw-rouned-t-[36px]"
              // style attribute is used to add one-off custom gradient
              style={{
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 67.25%, rgba(0, 0, 0, 1) 100%)"
              }}
            ></div>
          </div>
          {/* Mentor Name and Mentor InternAt/Status */}
          <div className="tw-z-20 tw-flex tw-flex-col tw-item-center tw-absolute tw-bottom-0 tw-mx-[30px] tw-mb-6 tw-gap-3">
            {/* Mentor Name */}
            <h1 className="tw-text-[36px] tw-text-white">
              {name}
            </h1>
            {/* Mentor Current Status and Intern Position */}
            <h3 className="tw-text-[16px] tw-font-semibold tw-text-white/80">
              {/* internAt and CurrentStatus is sliced when it exceeds 40 Characters */}
              {internAt.length > 40 ? `${internAt.slice(0, 40)}...` : internAt} | {currentStatus.length > 40 ? `${currentStatus.slice(0, 40)}...` : currentStatus}
            </h3>
          </div>
        </div>
        {/* Lower half of the card */}
        <div className="tw-pt-[20px] tw-pb-[30px] tw-px-[30px] tw-items-stretch tw-w-full">
          {/* Mentor Social Links, Share Icon and About section */}
          <div className="tw-flex tw-flex-col tw-mb-[22px]">
            {/* Mentor Social Links and Share Icon */}
            <div className="tw-flex tw-flex-row tw-justify-between">
              {/* Mentor Social Links Container */}
              <div className="tw-flex tw-flex-row tw-text-[#4338CA] tw-gap-4">
                <Link href={`mailto:${email}`}>
                  <MdAlternateEmail className="tw-text-[28px] hover:tw-text-[#4338CA]/75 tw-transition-opacity active:tw-scale-75"/>
                </Link>
                <Link href={`https://www.linkedin.com/in/${socialLinks.linkedin}`}>
                  <FaLinkedin className="tw-text-[28px] hover:tw-text-[#4338CA]/75 tw-transition-opacity active:tw-scale-75"/>
                </Link>
                <Link href={`https://www.twitter.com/${socialLinks.twitter}`}>
                  <FaTwitter className="tw-text-[28px] hover:tw-text-[#4338CA]/75 tw-transition-opacity active:tw-scale-75"/>
                </Link>
              </div>
              {/* Mentor Share Icon Container */}
              <div 
                onClick={handleSharePage}
                className="tw-flex tw-flex-row"
              >
                <FaShareAlt className="tw-text-[28px] tw-text-[#4338CA] tw-cursor-pointer hover:tw-text-[#4338CA]/75 tw-transitional-all active:tw-scale-75"/>
              </div>
            </div>
          </div>
          {/* About Section */}
          <div className="tw-flex tw-flex-col">
            {/* About Section Heading */}
            <h1 className="tw-text-[36px] tw-font-normal tw-text-[#4338CA] tw-mb-[12px]">About</h1>
            <p className="tw-text-justify">{about}</p>
          </div>
        </div>
      </div>
    </>
  )
}
