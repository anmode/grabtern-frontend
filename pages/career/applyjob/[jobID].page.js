import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useJobContext } from "../../../context/JobContext";
import Button from "../../../components/UI/Button/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function JobApplicationForm() {
  const router = useRouter();
  const { jobDetails, particularJob, setParticularJob } = useJobContext();
  const { jobID } = router.query;
  const [captcha, setCaptcha] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  const [formData, setFormData] = useState({
    resume: "",
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    mobilePhone: "",
    experienceYears: "",
    experienceMonths: "",
    currentSalary: "",
    expectedSalary: "",
    availableToJoin: "",
    currentLocation: "",
    notes: "",
    rfa: "",
    linkedin: "",
    portfolio: "",
    github: "",
    consent: false,
  });

  const generateCaptcha = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
  };

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.captcha !== captcha) {
      setCaptchaError("Incorrect captcha. Please try again.");
      setCaptcha(generateCaptcha());
    } else {
      setCaptchaError("");
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/jobApplication/submit`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...formData,
              jobID: particularJob?.jobid,
              jobTitle: particularJob?.title,
            }),
          },
        );

        const data = await response.json();
        if (response.ok) {
          toast.success("Form submitted successfully!");
          setFormData({
            resume: "",
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            mobilePhone: "",
            experienceYears: "",
            experienceMonths: "",
            currentSalary: "",
            expectedSalary: "",
            availableToJoin: "",
            currentLocation: "",
            notes: "",
            rfa: "",
            linkedin: "",
            portfolio: "",
            github: "",
            consent: false,
          });
        } else {
          toast.error(`Error submitting form: ${data.message}`);
        }
      } catch (error) {
        toast.error("Network error, please try again later.");
      }
    }
  };

  useEffect(() => {
    if (Array.isArray(jobDetails) && jobID) {
      const selectedJob = jobDetails.find(
        (job) => job.jobid === parseInt(jobID),
      );
      if (selectedJob) {
        setParticularJob(selectedJob);
      }
    }
  }, [jobID, jobDetails]);

  return (
    <div classname="tw-bg-[#f1f5f9]">
      <div className="tw-bg-[#845ec2] tw-text-white tw-p-6 tw-text-center">
        <h1 className="tw-text-3xl tw-text-white tw-font-bold">
          {particularJob?.title}
        </h1>
        <div className="tw-flex tw-text-black tw-justify-center tw-gap-4 tw-mt-2 tw-text-lg">
          <span>FULL-TIME</span>
          <span>{particularJob?.city}</span>
          <span>
            {particularJob?.experience}
            {particularJob?.experience === "1" ? " year" : " years"}
          </span>
        </div>
      </div>
      <div className="tw-p-6 tw-max-w-screen-md tw-mx-auto tw-bg-gray-100 tw-rounded-lg tw-shadow-lg">
        <button
          onClick={() => router.push("/career")}
          className="tw-text-[#845ec2] tw-hover:underline"
        >
          <span>&larr;</span> Back to all job openings
        </button>
        <h2 className="tw-text-xl tw-text-gray-800 tw-font-semibold tw-mt-2">
          Apply for this job
        </h2>
        <form className="tw-mt-4" onSubmit={handleSubmit}>
          <div className="tw-mb-4">
            <label
              htmlFor="resume"
              className="tw-block tw-text-[#845ec2]-500 tw-mb-1 tw-cursor-pointer"
            >
              Upload resume
            </label>
            <input
              type="text"
              id="resume"
              name="resume"
              value={formData.resume}
              onChange={handleChange}
              className="tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-100 tw-text-gray-800"
              placeholder="Upload your resume"
            />
          </div>

          <div className="tw-mb-4">
            <label
              htmlFor="firstName"
              className="tw-block tw-text-gray-700 tw-mb-1"
            >
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-100 tw-text-gray-800"
              required
            />
          </div>

          <div className="tw-mb-4">
            <label
              htmlFor="middleName"
              className="tw-block tw-text-gray-700 tw-mb-1"
            >
              Middle Name
            </label>
            <input
              type="text"
              id="middleName"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              className="tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-100 tw-text-gray-800"
            />
          </div>

          <div className="tw-mb-4">
            <label
              htmlFor="lastName"
              className="tw-block tw-text-gray-700 tw-mb-1"
            >
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-100 tw-text-gray-800"
              required
            />
          </div>

          <div className="tw-mb-4">
            <label
              htmlFor="email"
              className="tw-block tw-text-gray-700 tw-mb-1"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-100 tw-text-gray-800"
              required
            />
          </div>

          <div className="tw-mb-4">
            <label
              htmlFor="mobilePhone"
              className="tw-block tw-text-gray-700 tw-mb-1"
            >
              Mobile Phone *
            </label>
            <input
              type="tel"
              id="mobilePhone"
              name="mobilePhone"
              value={formData.mobilePhone}
              onChange={handleChange}
              className="tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-100 tw-text-gray-800"
              required
              placeholder="9894795499"
            />
          </div>

          <div className="tw-mb-4 tw-flex tw-flex-wrap gap-4">
            <div className="tw-w-full tw-sm:w-1/2">
              <label className="tw-block tw-text-gray-700 tw-mb-1">
                Experience
              </label>
              <div className="tw-flex tw-gap-4">
                <input
                  type="number"
                  id="experienceYears"
                  name="experienceYears"
                  value={formData.experienceYears}
                  onChange={handleChange}
                  className="tw-w-full tw-px-3 py-2 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-100 tw-text-gray-800"
                  placeholder="Years"
                />
                <input
                  type="number"
                  id="experienceMonths"
                  name="experienceMonths"
                  value={formData.experienceMonths}
                  onChange={handleChange}
                  className="tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-100 tw-text-gray-800"
                  placeholder="Months"
                />
              </div>
            </div>

            <div className="tw-w-full tw-sm:w-1/2">
              <label
                htmlFor="currentSalary"
                className="tw-block tw-text-gray-700 tw-mb-1"
              >
                Current Salary(LPA)
              </label>
              <input
                type="text"
                id="currentSalary"
                name="currentSalary"
                value={formData.currentSalary}
                onChange={handleChange}
                className="tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-100 tw-text-gray-800"
                placeholder="2"
              />
            </div>
          </div>

          <div className="tw-mb-4 tw-flex tw-flex-wrap tw-gap-4">
            <div className="tw-w-full tw-sm:w-1/2">
              <label
                htmlFor="expectedSalary"
                className="tw-block tw-text-gray-700 tw-mb-1"
              >
                Expected Salary(LPA)
              </label>
              <input
                type="text"
                id="expectedSalary"
                name="expectedSalary"
                value={formData.expectedSalary}
                onChange={handleChange}
                className="tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-100 tw-text-gray-800"
                placeholder="3"
              />
            </div>

            <div className="tw-w-full tw-sm:w-1/2">
              <label
                htmlFor="availableToJoin"
                className="tw-block tw-text-gray-700 tw-mb-1"
              >
                Available To Join (in days)
              </label>
              <input
                type="number"
                id="availableToJoin"
                name="availableToJoin"
                value={formData.availableToJoin}
                onChange={handleChange}
                className="tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-100 tw-text-gray-800"
                placeholder="7"
              />
            </div>
          </div>

          <div className="tw-mb-4">
            <label
              htmlFor="currentLocation"
              className="tw-block tw-text-gray-700 tw-mb-1"
            >
              Current Location
            </label>
            <input
              type="text"
              id="currentLocation"
              name="currentLocation"
              value={formData.currentLocation}
              onChange={handleChange}
              className="tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-100 tw-text-gray-800"
              placeholder="Aligarh"
            />
          </div>

          <div className="tw-mb-4">
            <label
              htmlFor="notes"
              className="tw-block tw-text-gray-700 tw-mb-1"
            >
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-100 tw-text-gray-800"
              placeholder="Enter any additional notes"
            ></textarea>
          </div>

          <div className="tw-mb-4">
            <label className="tw-block tw-text-gray-700 tw-mb-1">
              Ready for assessment*
            </label>
            <div className="tw-flex tw-gap-4 tw-items-center">
              <label className="tw-flex tw-items-center">
                <input
                  type="radio"
                  name="rfa"
                  value="yes"
                  checked={formData.rfa === "yes"}
                  onChange={handleChange}
                  required
                  className="tw-form-radio tw-text-[#845ec2]-500 focus:tw-ring-2 focus:tw-ring-[#845ec2]-500 focus:tw-ring-opacity-50"
                />
                <span className="tw-ml-2">Yes</span>
              </label>
              <label className="tw-flex tw-items-center">
                <input
                  type="radio"
                  name="rfa"
                  value="no"
                  checked={formData.rfa === "no"}
                  onChange={handleChange}
                  required
                  className="tw-form-radio tw-text-[#845ec2]-500 focus:tw-ring-2 focus:tw-ring-[#845ec2]-500 focus:tw-ring-opacity-50"
                />
                <span className="tw-ml-2">No</span>
              </label>
            </div>
          </div>

          <div className="tw-mb-4 tw-flex tw-items-center">
            <label
              htmlFor="captcha"
              className="tw-block tw-text-gray-700 tw-mb-1"
            >
              Captcha:{" "}
              <span className="tw-px-2 tw-py-1 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-white">
                {captcha}
              </span>
            </label>
            <div className="tw-ml-auto tw-flex tw-gap-2 tw-items-center">
              <input
                type="text"
                id="captcha"
                name="captcha"
                value={formData.captcha}
                onChange={handleChange}
                className="tw-w-40 tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-100 tw-text-gray-800"
              />
              <button
                type="button"
                onClick={() => setCaptcha(generateCaptcha())}
                className="tw-text-[#845ec2]-500 tw-hover:underline"
              >
                ↻ Regenerate Captcha
              </button>
            </div>
            {captchaError && <p className="tw-text-red-500">{captchaError}</p>}
          </div>

          <div className="tw-mb-4 tw-flex tw-items-start">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className="tw-form-checkbox tw-text-[#845ec2]-500"
            />
            <label htmlFor="consent" className="tw-ml-2 tw-text-gray-700">
              By applying you hereby accept the data processing terms under the
              Privacy Policy and give consent to processing of the data as part
              of this job application.
            </label>
          </div>

          <Button
            text="Apply Now"
            variant="Primary"
            type="submit"
            className="tw-w-full tw-bg-[#845ec2]-500 tw-text-white tw-py-2 tw-px-4 tw-rounded-lg tw-hover:bg-[#845ec2]-600 tw-transition tw-duration-300"
          />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default JobApplicationForm;
