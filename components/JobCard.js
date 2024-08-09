import React, { useState } from "react";
import { useRouter } from "next/router";
import { useJobContext } from "../context/JobContext";
import Loader from "./UI/Loader";

const JobCard = ({ job }) => {
  const { setParticularJob } = useJobContext();
  const [loader, setLoader] = useState(false);
  const router = useRouter();

  const handleApply = () => {
    setLoader(true);
    setParticularJob(job);
    router.push(`/career/apply?jobID=${job.jobid}`);
  };

  return (
    <div className="tw-font-sans tw-border-2 tw-p-4 tw-rounded-xl tw-min-h-[360px] tw-w-[340px] tw-m-4 tw-shadow-lg tw-relative">
      <div className="tw-font-sans tw-flex tw-justify-between tw-items-center tw-mb-2">
        <p className="tw-font-sans tw-text-sm tw-font-bold tw-text-black">
          {job.country} | {job.city}
        </p>
        <div>
          {loader ? (
            <Loader width="20px" />
          ) : (
            <button
              onClick={handleApply}
              className="tw-bg-[#845ec2] tw-font-sans tw-text-white tw-border-none tw-py-2 tw-px-4 tw-rounded-md tw-flex tw-items-center tw-relative tw-disabled:tw-opacity-50"
              disabled={loader}
            >
              Apply{" "}
              <span className="tw-bg-[#845ec2] tw-ml-2 tw-font-sans">
                &rarr;
              </span>
            </button>
          )}
        </div>
      </div>
      <h2 className="tw-font-sans tw-text-xl tw-font-bold tw-text-[#845ec2] tw-mb-2 tw-mt-4">
        {job.title}
      </h2>
      <p className="tw-font-sans tw-text-base tw-font-normal tw-text-black tw-mb-1 tw-text-left">
        <span className="tw-font-sans tw-font-medium">Business Area: </span>
        <span className="tw-font-sans tw-font-bold">{job.businessArea}</span>
      </p>
      <p className="tw-font-sans tw-text-base tw-font-normal tw-text-black tw-mb-1 tw-text-left">
        <span className="tw-font-sans tw-font-medium">
          Years of Experience:{" "}
        </span>
        <span className="tw-font-sans tw-font-bold">{job.experience}</span>
      </p>
      <p className="tw-font-sans tw-text-base tw-font-normal tw-text-black tw-mb-1 tw-text-left">
        <span className="tw-font-sans tw-font-medium">Skills: </span>
        <span className="tw-font-sans tw-font-bold">
          {job.skills.join(", ")}
        </span>
      </p>
      <p className="tw-font-sans tw-text-sm tw-font-normal tw-text-gray-500 tw-absolute tw-bottom-6">
        {job.posted}
      </p>
    </div>
  );
};

export default JobCard;
