import React from 'react';
import { useRouter } from 'next/router';
import { useJobContext } from '../context/JobContext';

const JobCard = ({ job }) => {
  const { setParticularJob } = useJobContext();
  const router = useRouter();

  const handleApply = () => {
    setParticularJob(job);
    router.push(`/career/applyjob/${job.jobid}`);
    // window.location.reload(); // This will refresh the new page
  };

  return (
    <div className="tw-job-card tw-border-2 tw-border-purple-700 tw-p-4 tw-rounded-lg tw-min-h-[360px] tw-w-[340px] tw-m-4 tw-shadow-lg tw-relative">
      <div className="tw-flex tw-justify-between tw-items-center tw-mb-2">
        <p className="tw-text-sm tw-font-bold tw-text-black">{job.country} | {job.city}</p>
        <div>
          <button onClick={handleApply} className="tw-bg-purple-700 tw-text-white tw-border-none tw-py-2 tw-px-4 tw-rounded-md tw-flex tw-items-center">
            Apply <span className="tw-ml-2">&rarr;</span>
          </button>
        </div>
      </div>
      <h2 className="tw-text-xl tw-font-bold tw-text-blue-700 tw-mb-2 tw-mt-4">{job.title}</h2>
      <p className="tw-text-base tw-font-normal tw-text-black tw-mb-1"><span className="tw-font-medium">Business Area: </span><span className="tw-font-bold">{job.businessArea}</span></p>
      <p className="tw-text-base tw-font-normal tw-text-black tw-mb-1"><span className="tw-font-medium">Years of Experience: </span><span className="tw-font-bold">{job.experience}</span></p>
      <p className="tw-text-base tw-font-normal tw-text-black tw-mb-1"><span className="tw-font-medium">Skills: </span><span className="tw-font-bold">{job.skills.join(', ')}</span></p>
      <p className="tw-text-sm tw-font-normal tw-text-gray-500 tw-absolute tw-bottom-6">{job.posted}</p>
    </div>
  );
};

export default JobCard;
