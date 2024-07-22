import React, { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import dynamic from "next/dynamic";
import { useJobContext } from "../context/JobContext";
const Header = dynamic(() => import("../components/layout/Header"));

const Career = () => {
  const { jobDetails } = useJobContext();

  // useEffect(() => {
  //   setJobDetails(JobsData);
  // }, []);
  return (
    <>
      <Header />
      <main>
        <div className="tw-p-4 tw-mt-20">
          <h1 className="tw-text-black tw-text-center tw-mb-6 tw-text-4xl tw-font-bold tw-tracking-wide">
            OPEN POSITIONS
          </h1>
          <div className="tw-flex tw-flex-wrap tw-gap-4 tw-justify-around">
            {Array.isArray(jobDetails) &&
              jobDetails.map((job, index) => <JobCard key={index} job={job} />)}
          </div>
        </div>
      </main>
    </>
  );
};

export default Career;
