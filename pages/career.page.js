import React, { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import dynamic from "next/dynamic";
import { useJobContext } from "../context/JobContext";
const Header = dynamic(() => import("../components/layout/Header"));

const Career = () => {
  const { jobDetails } = useJobContext();

  return (
    <>
      <Header />

      <main className="tw-flex tw-items-center tw-justify-center tw-h-screen tw-bg-[#f1f5f9]">
        <div className="tw-text-center">
          {Array.isArray(jobDetails) && jobDetails.length > 0 ? (
            <>
              <h1 className="tw-text-black tw-mb-6 tw-mt-8 tw-text-4xl tw-font-medium tw-tracking-wide tw-font-sans">
                OPEN POSITIONS
              </h1>
              <div className="tw-flex tw-flex-wrap tw-gap-4 tw-justify-around">
                {jobDetails.map((job, index) => (
                  <JobCard key={index} job={job} />
                ))}
              </div>
            </>
          ) : (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                No Job Vacancies Available
              </h2>
              <p className="text-gray-600 mb-4">
                We currently do not have any job openings. Please check back
                later or follow our linkedln page for updates.
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Career;
