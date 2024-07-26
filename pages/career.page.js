import React, { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import dynamic from "next/dynamic";
import { useJobContext } from "../context/JobContext";
import { Section } from "../components/UI";
const Header = dynamic(() => import("../components/layout/Header"));

const Career = () => {
  const { jobDetails } = useJobContext();

  return (
    <>
      <Header classname="tw-mb-10" />
      <Section
        kicker="Join Our Team"
        heading="Open Positions"
        subheading="Discover a Place Where Your Passion and Skills Drive Success"
        align="center"
        className="tw-mt-10 tw-pt-12 tw-pb-0 tw-mb-0"
      />
      <main className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-4 tw-bg-[#f1f5f9]">
        <div className=" tw-font-sans tw-w-full tw-max-w-6xl tw-mx-auto tw-text-center">
          {Array.isArray(jobDetails) && jobDetails.length > 0 ? (
            <div className="tw-font-sans tw-flex tw-flex-wrap tw-justify-center tw-gap-4">
              {jobDetails.map((job, index) => (
                <JobCard
                  key={index}
                  job={job}
                  className="tw-w-full tw-font-sans sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/3"
                />
              ))}
            </div>
          ) : (
            <div className="tw-p-4 tw-bg-white tw-rounded-lg tw-shadow-md">
              <h2 className="tw-font-sans text-2xl font-semibold text-gray-800 mb-2">
                No Job Vacancies Available
              </h2>
              <p className="tw-font-sans text-gray-600 mb-4">
                We currently do not have any job openings. Please check back
                later or follow our LinkedIn page for updates.
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Career;
