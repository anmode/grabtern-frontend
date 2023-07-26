import React from "react";
import Image from "next/image";
import Header from "../components/layout/Header";
import Section from "../components/mentorPage/components/Section";
import Company from "../components/mentorPage/components/Company";
import IconCard from "../components/mentorPage/components/IconCard";
import FAQList from "../components/mentorPage/components/FAQList";
import Footer from "../components/layout/Footer";
import Head from "next/head";
import faq from "./data/faq";
import Link from "next/link";
import LiveTvIcon from '@mui/icons-material/LiveTv';
import PeopleIcon from '@mui/icons-material/People';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TerminalIcon from '@mui/icons-material/Terminal';
import { MentorImg, BecomeMentor, mlh, GSoC, microsoft, hackerRank } from "../public/assets";

function Mentor() {
  return (
    <>
      <Head>
        <title>GrabTern | Find Your Mentors</title>
      </Head>
      <Header navbarBackground={true} />
      <main>
        {/* Header */}

        <section className="tw-flex max-[990px]:tw-flex-col max-[990px]:tw-justify-center tw-items-center tw-mt-36 max-[990px]:tw-mt-48 tw-justify-between tw-px-28 tw-gap-10">
          <div className="max-[990px]:tw-flex-wrap max-[990px]:tw-items-center  max-[990px]:tw-text-center tw-flex tw-flex-col tw-items-start tw-gap-2 tw-relative tw-bottom-4">
            <h1 className="tw-font-bold tw-text-5xl max-[637px]:tw-text-3xl">Build your Community and Monetize💰 your XP</h1>
            <p className="tw-text-lg tw-font-semibold max-[637px]:tw-text-md">Create and share Learning Content of your niche. Start building your Community & be their Mentor today! Be able to monetize with in-house services and Earn as you Impact.</p>

            <button className="tw-bg-primary-100 tw-p-6 tw-transition-all tw-duration-200 max-[990px]:tw-max-w-full tw-ease-in-out tw-mt-6 hover:tw-bg-primary-200 tw-rounded-md tw-w-[200px]">
              <Link href="/mentorRegister">
                <h3 className="tw-text-white tw-font-bold">Be a mentor</h3>
              </Link>
            </button>
          </div>
          <div className="max-[990px]:tw-items-center tw-justify-start tw-min-w-[489px] tw-flex max-[990px]:tw-min-w-[400px] tw-p-10 tw-rounded-lg">
            <Image
              src={MentorImg}
              alt="mentor"
              width={700}
              height={700}
            />
          </div>
        </section>


        {/* Company List */}

        <section className="tw-flex-col tw-justify-center tw-items-center tw-flex tw-px-16 tw-gap-10 tw-mt-32">
          <h1 className="tw-font-extrabold tw-text-[40px] tw-text-[#B39CD0] tw-text-center">Our Top Mentors Interned at</h1>
          <div className="tw-gap-32 tw-justify-evenly tw-items-baseline tw-grid tw-grid-cols-4 max-[990px]:tw-grid-rows-2 max-[990px]:tw-grid-cols-2">
            <Company imgSrc={GSoC} name="GSoC" />
            <Company imgSrc={microsoft} name="Microsoft" />
            <Company imgSrc={mlh} name="MLH" />
            <Company imgSrc={hackerRank} name="HackerRank" />
          </div>
        </section>

        <section className="tw-flex max-[990px]:tw-flex-col max-[990px]:tw-justify-center tw-items-center tw-mt-44 max-[990px]:tw-mt-24 tw-justify-between tw-px-28 tw-gap-10">
          <div className="max-[990px]:tw-items-center tw-justify-start tw-min-w-[489px] tw-flex max-[990px]:tw-min-w-[400px] tw-p-10 tw-rounded-lg">
            <Image
              src={BecomeMentor}
              alt="mentor"
              width={600}
              height={600}
            />
          </div>
          <div className="max-[990px]:tw-flex-wrap max-[990px]:tw-items-center  max-[990px]:tw-text-center tw-flex tw-flex-col tw-items-start tw-gap-2 tw-relative tw-bottom-4">
            <h1 className="tw-font-bold tw-text-5xl max-[637px]:tw-text-3xl">Become a <span className="tw-text-primary-100">Mentor</span> now</h1>
            <p className="tw-text-lg tw-font-semibold max-[637px]:tw-text-sm">
              Become a mentor and enjoy the benefits of personal growth, improved leadership and communication skills, a sense of fulfillment, expanded professional network, and the joy of making a positive impact on someone's life. Join us now and inspire the next generation!</p>
          </div>
        </section>

        {/* Icons Cards row */}

        <section className="tw-mt-36 tw-px-16 tw-flex tw-flex-col tw-justify-center tw-items-center">
          <h1 className="tw-font-extrabold tw-text-[40px] tw-text-[#B39CD0] tw-text-center">Empower Your Expertise, Earn Your Impact</h1>
          <div className="tw-flex max-[990px]:tw-w-full tw-gap-10 tw-mt-10 tw-flex-wrap">
            {/* card1 */}

            <div className="tw-flex-wrap tw-group tw-flex-1 tw-flex tw-justify-center tw-items-center tw-gap-6 tw-flex-col tw-p-12 tw-bg-gray-200 hover:tw-transform hover:tw-ease-in-out tw-duration-200  tw-rounded-md hover:tw-scale-110 tw-text-center">
              <LiveTvIcon fontSize="" className="group-hover:tw-text-[#00C9A7] group-hover:bg-primary-200 group-hover:tw-animate-bounce  tw-text-white tw-text-9xl tw-bg-primary-100 tw-p-8 tw-rounded-full" />
              <h2 className="tw-font-semibold tw-text-lg">LIVE Programs</h2>
              <p className="tw-text-md">MasterClasses, Bootcamps, and more informative sessions.</p>
            </div>

            {/* card2 */}
            <div className="tw-group tw-flex-wrap tw-flex-1 tw-flex tw-justify-center tw-items-center tw-gap-6 tw-flex-col tw-p-12 tw-bg-gray-200 hover:tw-transform hover:tw-ease-in-out tw-duration-200 tw-rounded-md hover:tw-scale-110 tw-text-center">
              <PeopleIcon fontSize="" className="group-hover:tw-text-[#00C9A7] group-hover:bg-primary-200 group-hover:tw-animate-bounce  tw-text-white tw-text-9xl tw-bg-primary-100 tw-p-8 tw-rounded-full" />
              <h2 className="tw-font-semibold tw-text-lg">Mentorship Session</h2>
              <p className="tw-text-md">Resume Reviews, Roadmaps, Interviews, and Doubt sessions.</p>
            </div>

            {/* card3 */}
            <div className="tw-group tw-flex-wrap tw-flex-1 tw-flex tw-justify-center tw-items-center tw-gap-6 tw-flex-col tw-p-12 tw-bg-gray-200 hover:tw-transform hover:tw-ease-in-out tw-duration-200 tw-rounded-md hover:tw-scale-110 tw-text-center">
              <AutoStoriesIcon fontSize="" className="group-hover:tw-text-[#00C9A7] group-hover:bg-primary-200 group-hover:tw-animate-bounce  tw-text-white tw-text-9xl tw-bg-primary-100 tw-p-8 tw-rounded-full" />
              <h2 className="tw-font-semibold tw-text-lg">Cohort and Courses</h2>
              <p className="tw-text-md">Launch your own cohort or hybrid courses, small or large</p>
            </div>

            {/* card4 */}
            <div className="tw-group tw-flex-wrap tw-flex-1 tw-flex tw-justify-center tw-items-center tw-gap-6 tw-flex-col tw-p-12 tw-bg-gray-200 hover:tw-transform hover:tw-ease-in-out tw-duration-200 tw-rounded-md hover:tw-scale-110 tw-text-center">
              <TerminalIcon fontSize="" className="group-hover:tw-text-[#00C9A7] group-hover:bg-primary-200 group-hover:tw-animate-bounce  tw-text-white tw-text-9xl tw-bg-primary-100 tw-p-8 tw-rounded-full" />
              <h2 className="tw-font-semibold tw-text-lg">Webinar and Workshop</h2>
              <p className="tw-text-md">Live sessions on topics you choose to educate about</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="tw-mt-20 tw-p-16">
          <div className="tw-flex tw-flex-col">
            <div className="section-tittle text-center mb-30">
              <h2 className="tw-font-extrabold tw-text-[40px] tw-text-[#B39CD0] tw-text-center">Frequently Asked Questions</h2>
            </div>
            <FAQList faq={faq} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Mentor;
