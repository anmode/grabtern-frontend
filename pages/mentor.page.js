import React from "react";
import Image from "next/image";
import Header from "../components/layout/Header";
import Section from "../components/mentorPage/components/Section";
import Company from "../components/mentorPage/components/Company";
import IconCard from "../components/mentorPage/components/IconCard";
import FAQList from "../components/mentorPage/components/FAQList";
import Testimonials from "../components/mentorPage/components/Testimonials";
import Footer from "../components/layout/Footer";
import Head from "next/head";
import faq from "./data/faq";
import testimonialsData from "./data/testiomialsData";
import Link from "next/link";
import SvgMaker from "../components/basic/SvgMaker";

import {
  MentorImg,
  BecomeMentor,
  mlh,
  GSoC,
  microsoft,
  hackerRank,
} from "../public/assets";

function Mentor() {
  return (
    <>
      <Head>
        <title>GrabTern | Find Your Mentors</title>
      </Head>
      <Header navbarBackground={true} />
      <main>
        {/* Header */}

        <section className="tw-flex max-[990px]:tw-flex-col max-[990px]:tw-justify-center tw-items-center tw-mt-36 max-[990px]:tw-mt-48 tw-justify-between tw-px-28 tw-gap-10 max-[637px]:tw-mt-28">
          <div className="max-[990px]:tw-flex-wrap max-[990px]:tw-items-center  max-[990px]:tw-text-center tw-flex tw-flex-col tw-items-start tw-gap-2 tw-relative tw-bottom-4">
            <h1 className="tw-font-bold tw-text-5xl max-[637px]:tw-text-3xl ">
              Build your Community and Monetize💰
            </h1>
            <p className="tw-text-lg tw-mt-5 tw-font-semibold max-[637px]:tw-text-sm">
              Create and share Learning Content of your niche. Start building
              your Community & be their Mentor today! Be able to monetize with
              in-house services and Earn as you Impact.
            </p>

            <button className="tw-bg-primary-100 tw-p-6 tw-transition-all tw-duration-200 max-[990px]:tw-max-w-full tw-ease-in-out tw-mt-6 hover:tw-bg-primary-200 tw-rounded-md max-[637px]:tw-w-[300px] tw-w-[200px]">
              <Link href="//mentor/register">
                <h3 className="tw-text-white tw-font-bold">Be a mentor</h3>
              </Link>
            </button>
          </div>
          <div className="max-[990px]:tw-items-center tw-justify-start tw-min-w-[489px] tw-flex max-[990px]:tw-min-w-[400px] tw-p-10 tw-rounded-lg">
            <Image src={MentorImg} alt="mentor" width={700} height={700} />
          </div>
        </section>

        {/* Company List */}

        <section className="tw-flex-col tw-justify-center tw-items-center tw-flex tw-px-16 tw-gap-10 tw-mt-32">
          <h1 className="tw-font-extrabold max-[637px]:tw-text-[30px] tw-text-[40px] tw-text-[#B39CD0] tw-text-center">
            Our Top Mentors Interned at
          </h1>
          <div className="tw-flex tw-flex-wrap tw-gap-32 max-[637px]:tw-max-gap-6 tw-justify-center tw-items-center">
            <Company imgSrc={GSoC} name="GSoC" />
            <Company imgSrc={microsoft} name="Microsoft" />
            <Company imgSrc={mlh} name="MLH" />
            <Company imgSrc={hackerRank} name="HackerRank" />
          </div>
        </section>

        <section className="tw-flex max-[990px]:tw-flex-col max-[990px]:tw-justify-center tw-items-center tw-mt-44 max-[990px]:tw-mt-24 tw-justify-between tw-px-28 tw-gap-10">
          <div className="max-[990px]:tw-items-center tw-justify-start tw-min-w-[489px] tw-flex max-[990px]:tw-min-w-[400px] tw-p-10 tw-rounded-lg">
            <Image src={BecomeMentor} alt="mentor" width={600} height={600} />
          </div>
          <div className="max-[990px]:tw-flex-wrap max-[990px]:tw-items-center  max-[990px]:tw-text-center tw-flex tw-flex-col tw-items-start tw-gap-2 tw-relative tw-bottom-4">
            <h1 className="tw-font-bold tw-text-5xl max-[637px]:tw-text-3xl">
              Become a <span className="tw-text-primary-100">Mentor</span> now
            </h1>
            <p className="tw-text-lg tw-font-semibold max-[637px]:tw-text-sm">
              Become a mentor and enjoy the benefits of personal growth,
              improved leadership and communication skills, a sense of
              fulfillment, expanded professional network, and the joy of making
              a positive impact on someone's life. Join us now and inspire the
              next generation!
            </p>
          </div>
        </section>

        {/* Icons Cards row */}

        <section className="tw-mt-36 tw-px-16 tw-flex tw-flex-col tw-justify-center tw-items-center">
          <h1 className="tw-font-extrabold tw-text-[40px] tw-text-[#B39CD0] max-[637px]:tw-text-[30px] tw-text-center">
            Empower Your Expertise, Earn Your Impact
          </h1>
          <div className="tw-flex max-[990px]:tw-w-full tw-gap-10 tw-mt-20 tw-flex-wrap">
            {/* card1 */}

            <div className="tw-flex-wrap tw-group tw-flex-1 tw-flex tw-justify-center tw-items-center tw-gap-6 tw-flex-col tw-p-12 tw-bg-gray-200 hover:tw-transform hover:tw-ease-in-out tw-duration-200  tw-rounded-md hover:tw-scale-110 tw-text-center">
              <SvgMaker svgPath="M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3c-1.1 0-2 .89-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2-2zm0 14H3V8h18v12zM9 10v8l7-4z" />
              <h2 className="tw-font-semibold tw-text-lg">LIVE Programs</h2>
              <p className="tw-text-md">
                MasterClasses, Bootcamps, and more informative sessions.
              </p>
            </div>

            {/* card2 */}
            <div className="tw-group tw-flex-wrap tw-flex-1 tw-flex tw-justify-center tw-items-center tw-gap-6 tw-flex-col tw-p-12 tw-bg-gray-200 hover:tw-transform hover:tw-ease-in-out tw-duration-200 tw-rounded-md hover:tw-scale-110 tw-text-center">
              <SvgMaker svgPath="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              <h2 className="tw-font-semibold tw-text-lg">
                Mentorship Session
              </h2>
              <p className="tw-text-md">
                Resume Reviews, Roadmaps, Interviews, and Doubt sessions.
              </p>
            </div>

            {/* card3 */}
            <div className="tw-group tw-flex-wrap tw-flex-1 tw-flex tw-justify-center tw-items-center tw-gap-6 tw-flex-col tw-p-12 tw-bg-gray-200 hover:tw-transform hover:tw-ease-in-out tw-duration-200 tw-rounded-md hover:tw-scale-110 tw-text-center">
              <SvgMaker svgPath="m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z" />

              <h2 className="tw-font-semibold tw-text-lg">
                Cohort and Courses
              </h2>
              <p className="tw-text-md">
                Launch your own cohort or hybrid courses, small or large
              </p>
            </div>

            {/* card4 */}
            <div className="tw-group tw-flex-wrap tw-flex-1 tw-flex tw-justify-center tw-items-center tw-gap-6 tw-flex-col tw-p-12 tw-bg-gray-200 hover:tw-transform hover:tw-ease-in-out tw-duration-200 tw-rounded-md hover:tw-scale-110 tw-text-center">
              <SvgMaker svgPath="M20 4H4c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H4V8h16v10zm-2-1h-6v-2h6v2zM7.5 17l-1.41-1.41L8.67 13l-2.59-2.59L7.5 9l4 4-4 4z" />
              <h2 className="tw-font-semibold tw-text-lg">
                Webinar and Workshop
              </h2>
              <p className="tw-text-md">
                Live sessions on topics you choose to educate about
              </p>
            </div>
          </div>
        </section>

        <section className="tw-mt-36 tw-px-16 tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-10">
          <h1 className="max-[637px]:tw-text-[30px] tw-font-extrabold tw-text-[40px] tw-text-[#B39CD0] tw-text-center">
            Testimonials{" "}
          </h1>
          <div className="tw-flex tw-justify-center tw-items-center ">
            <Testimonials data={testimonialsData} />
          </div>
        </section>

        {/* FAQ */}
        <section className="tw-mt-20 tw-p-16">
          <div className="tw-flex tw-flex-col">
            <div className="section-tittle text-center mb-30">
              <h2 className="tw-font-extrabold tw-text-[40px] tw-text-[#B39CD0] tw-text-center">
                Frequently Asked Questions
              </h2>
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
