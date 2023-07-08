import React,{ useState } from 'react'

import axios from "axios";
//import { useRouter } from "next/router";


import Link from "next/link";
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedin, FaTwitter, FaShareAlt } from "react-icons/fa";
//import styles1 from "../../styles/mentorTestimonial.module.css";

function MentorAbout({mentorDetail}) {
  





  return (
    <div>
        <div className={`${styles1.about}  tw-flex tw-flex-col tw-relative   tw-items-start  tw-mt-[7rem] tw-gap-[60px] tw-flex-wrap`}>
            <div className={`${styles1.aboutSection} tw-relative tw-right-[107px] tw-flex tw-flex-row`}>
            <div className={`${styles1.mentorDiv1} mentorDiv1 tw-ml-32 tw-p-32 tw-relative tw-flex tw-flex-col tw-items-center tw-justify-center tw-border-r-2 tw-border-r-[black]`}>
            <img src={mentorDetail?.mentorImg} alt="not found" className="tw-rounded-full tw-w-48 tw-shadow-xl tw-shadow-black/10 tw-h-48 tw-justify-center tw-flex"/>
           <h1 className="tw-mt-10 tw-text-5xl tw-font-semibold">{mentorDetail?.name}</h1> 
           <h2 className="tw-mt-4">{mentorDetail?.internAt}|{mentorDetail?.currentStatus}</h2>
           </div>
           <div className={`${styles1.mentorDiv2} tw-flex tw-flex-col tw-relative tw-top-28 tw-mt-8`}>
            
           <h1 className={`${styles1.aboutHeading} tw-ml-8 tw-relative tw-top-10 tw-text-5xl`}>About</h1>
           <p className={`${styles1.description} tw-w-[523px] tw-ml-8 tw-relative tw-top-10`}>{mentorDetail?.description}</p>
           <div className="links tw-flex tw-flex-row tw-relative tw-top-36  tw-pl-14">
            <div className="tw-flex tw-flex-row tw-p-6">
             <span className="tw-mr-2">Email</span> 
           <Link
           
              className="tw-flex tw-items-center tw-justify-center tw-bg-[#eceeef] tw-text-[#818a91] tw-w-[30px] tw-h-[30px] tw-rounded-full tw-transition-all tw-duration-[0.2s] tw-ease-linear tw-mr-2 hover:tw-bg-[#ea4c89] hover:tw-text-white"
              // href={`mailto:${email}`} 
              href="/"
            >

              <MdAlternateEmail className="tw-text-[20px] " />
              
            </Link>
            </div>
            <div className="tw-flex tw-flex-row tw-p-6">
              <span className="tw-mr-2">linkedin</span>
            <Link
              className="tw-flex tw-items-center tw-justify-center tw-bg-[#eceeef] tw-text-[#818a91] tw-w-[30px] tw-h-[30px] tw-rounded-full tw-transition-all tw-duration-[0.2s] tw-ease-linear tw-mr-2 hover:tw-bg-[#007bb6] hover:tw-text-white"
              // href={`https://www.linkedin.com/in/${socialLinks.linkedin}`}
              href="/"
            >
              <FaLinkedin className="tw-text-[20px] " />
            </Link>
            </div>
            <div className="tw-flex tw-flex-row tw-p-6">
              <span className="tw-mr-2">Twitter</span>
            <Link
              className="tw-flex tw-items-center tw-justify-center tw-bg-[#eceeef] tw-text-[#818a91] tw-w-[30px] tw-h-[30px] tw-rounded-full tw-transition-all tw-duration-[0.2s] tw-ease-linear tw-mr-2 hover:tw-bg-[#00aced] hover:tw-text-white"
              // href={`https://www.twitter.com/${socialLinks.twitter}`}
              href="/"
            >
              <FaTwitter className="tw-text-[20px] " />
            </Link>
            </div>
           </div>
           </div>
           </div>
           
            </div>
    </div>
  )
}

export default MentorAbout;


