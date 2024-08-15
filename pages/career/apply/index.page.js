import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useJobContext } from "../../../context/JobContext";
import Button from "../../../components/UI/Button/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import AsyncSelect from "react-select/async";
import Loader from "../../../components/UI/Loader";

function JobApplicationForm() {
  const router = useRouter();
  const { jobDetails, particularJob, setParticularJob } = useJobContext();
  const { jobID } = router.query;
  const [captcha, setCaptcha] = useState("");
  const [loader, setLoader] = useState(false);
  const [captchaError, setCaptchaError] = useState("");

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      border: state.isFocused ? "1px solid #d1d5db" : "1px solid #d1d5db",
      borderRadius: "0.375rem",
      backgroundColor: "#f3f4f6",
      color: "#374151",
      fontFamily: "sans-serif",
      boxShadow: state.isFocused ? "0 0 0 1px #d1d5db" : "none",
      outline: "none",
      "&:hover": {
        border: state.isFocused ? "1px solid #d1d5db" : "1px solid #d1d5db",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#374151",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#9ca3af",
      fontFamily: "sans-serif",
    }),
    menu: (provided) => ({
      ...provided,
      width: "100%",
      backgroundColor: "#f3f4f6",
    }),
    option: (provided, state) => ({
      ...provided,
      color: "#374151",
      fontFamily: "sans-serif",
      backgroundColor: state.isFocused ? "#e5e7eb" : "#f3f4f6",
    }),
  };

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
    dateSubmitted: "",
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
    setLoader(true);

    if (String(formData.captcha) !== String(captcha)) {
      setCaptchaError("Incorrect captcha. Please try again.");
      setCaptcha(generateCaptcha());
      setLoader(false);

      return;
    }

    setCaptchaError("");
    const currentDate = new Date().toISOString();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/jobApplication/submit`,
        {
          ...formData,
          dateSubmitted: currentDate,
          jobID: particularJob?.jobid,
          jobTitle: particularJob?.title,
        },
      );

      if (response.status === 200) {
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
          dateSubmitted: "",
        });
        router.push("/career/thank-you");
      } else {
        setLoader(false);
        const errorMessage = response.data.message || "Unknown error occurred";
        toast.error(`Error submitting form: ${errorMessage}`);
      }
    } catch (error) {
      setLoader(false);
      console.error("Submission error:", error);
      toast.error("Network error, please try again later.");
    }
  };

  const fetchLocation = async (inputValue) => {
    const options = {
      method: "GET",
      url: `https://api.geoapify.com/v1/geocode/autocomplete?text=${inputValue}&apiKey=${process.env.NEXT_PUBLIC_LOCATION_APIKEY}`,
    };

    try {
      const response = await axios.request(options);
      return response.data.features.map((feature) => {
        const { city, postcode, state, country } = feature.properties;
        const parts = [city, postcode, state, country].filter(Boolean);
        const label = parts.join(" , ");
        return {
          value: feature.properties,
          label,
        };
      });
    } catch (error) {
      console.error("Error fetching location suggestions:", error);
      return [];
    }
  };

  useEffect(() => {
    if (jobDetails.length > 0 && jobID) {
      const selectedJob = jobDetails.find(
        (job) => job.jobid === parseInt(jobID),
      );
      if (selectedJob) {
        setParticularJob(selectedJob);
      }
    }
  }, [jobID, jobDetails]);

  return (
    <div classname="tw-font-sans tw-bg-[#f1f5f9]">
      <div className="tw-font-sans tw-bg-[#845ec2] tw-text-white tw-p-6 tw-text-center">
        <h1 className="tw-font-sans tw-text-3xl tw-text-white tw-font-bold">
          {particularJob?.title}
        </h1>
        <div className="tw-font-sans tw-flex tw-text-white tw-justify-center tw-gap-4 tw-mt-2 tw-text-lg">
          <span>FULL-TIME</span>
          <span>{particularJob?.city}</span>
          <span>
            {particularJob?.experience}
            {particularJob?.experience === "1" ? " year" : " years"}
          </span>
        </div>
      </div>
      <div className="tw-font-sans tw-p-6 tw-max-w-screen-md tw-mx-auto tw-bg-gray-100 tw-rounded-lg tw-shadow-lg">
        <button
          onClick={() => router.push("/career")}
          className="tw-font-sans tw-text-[#845ec2] tw-hover:underline"
        >
          <span>&larr;</span> Back to all job openings
        </button>
        <h2 className="tw-font-sans tw-text-xl tw-text-gray-800 tw-font-semibold tw-mt-2">
          Apply for this job
        </h2>
        <form className="tw-font-sans tw-mt-4" onSubmit={handleSubmit}>
          <div className="tw-font-sans tw-mb-4">
            <label
              htmlFor="resume"
              className="tw-font-sans  tw-block tw-text-[#845ec2]-500 tw-mb-1 tw-cursor-pointer"
            >
              Upload resume *
            </label>
            <input
              type="text"
              id="resume"
              name="resume"
              value={formData.resume}
              onChange={handleChange}
              className="tw-font-sans tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-100 tw-text-gray-800"
              placeholder="Upload your resume"
              style={{
                color: "#1f2937",
                "::placeholder": { color: "#374151" },
              }}
              required
            />
          </div>

          <div className="tw-font-sans tw-mb-4">
            <label
              htmlFor="firstName"
              className="tw-font-sans tw-block tw-text-gray-700 tw-mb-1"
            >
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="tw-font-sans tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-100 tw-text-gray-800"
              required
            />
          </div>

          <div className="tw-mb-4">
            <label
              htmlFor="middleName"
              className="tw-font-sans tw-block tw-text-gray-700 tw-mb-1"
            >
              Middle Name
            </label>
            <input
              type="text"
              id="middleName"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              className="tw-font-sans tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-100 tw-text-gray-800"
            />
          </div>

          <div className="tw-mb-4">
            <label
              htmlFor="lastName"
              className="tw-font-sans tw-block tw-text-gray-700 tw-mb-1"
            >
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="tw-font-sans tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-100 tw-text-gray-800"
              required
            />
          </div>

          <div className="tw-mb-4">
            <label
              htmlFor="email"
              className="tw-font-sans tw-block tw-text-gray-700 tw-mb-1"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="tw-font-sans tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-100 tw-text-gray-800"
              required
            />
          </div>

          <div className="tw-mb-4">
            <label
              htmlFor="mobilePhone"
              className="tw-font-sans tw-block tw-text-gray-700 tw-mb-1"
            >
              Mobile Phone *
            </label>
            <input
              type="tel"
              id="mobilePhone"
              name="mobilePhone"
              value={formData.mobilePhone}
              onChange={handleChange}
              onKeyDown={(event) => {
                if (
                  !/[0-9]/.test(event.key) &&
                  event.key !== "Backspace" &&
                  event.key !== "Delete" &&
                  event.key !== "ArrowLeft" &&
                  event.key !== "ArrowRight"
                ) {
                  event.preventDefault();
                }
              }}
              className="tw-font-sans tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-100 tw-text-gray-800"
              required
              placeholder="9894795499"
              style={{
                color: "#1f2937",
                "::placeholder": { color: "#374151" },
              }}
            />
          </div>

          <div className="tw-mb-4 tw-flex tw-flex-wrap gap-4">
            <div className="tw-w-full tw-sm:w-1/2">
              <label className="tw-font-sans tw-block tw-text-gray-700 tw-mb-1">
                Experience
              </label>
              <div className="tw-font-sans tw-flex tw-gap-4">
                <input
                  type="number"
                  id="experienceYears"
                  name="experienceYears"
                  value={formData.experienceYears}
                  onChange={handleChange}
                  className="tw-font-sans tw-w-full tw-px-3 py-2 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-100 tw-text-gray-800"
                  placeholder="Years"
                  style={{
                    color: "#1f2937",
                    "::placeholder": { color: "#374151" },
                  }}
                />
                <input
                  type="number"
                  id="experienceMonths"
                  name="experienceMonths"
                  value={formData.experienceMonths}
                  onChange={handleChange}
                  className="tw-font-sans tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-100 tw-text-gray-800"
                  placeholder="Months"
                  style={{
                    color: "#1f2937",
                    "::placeholder": { color: "#374151" },
                  }}
                />
              </div>
            </div>

            <div className="tw-font-sans tw-w-full tw-sm:w-1/2">
              <label
                htmlFor="currentSalary"
                className="tw-font-sans tw-block tw-text-gray-700 tw-mb-1"
              >
                Current Salary(LPA)
              </label>
              <input
                type="text"
                id="currentSalary"
                name="currentSalary"
                value={formData.currentSalary}
                onChange={handleChange}
                className="tw-font-sans tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-100 tw-text-gray-800"
                placeholder="2"
                style={{
                  color: "#1f2937",
                  "::placeholder": { color: "#374151" },
                }}
              />
            </div>
          </div>

          <div className="tw-font-sans tw-mb-4 tw-flex tw-flex-wrap tw-gap-4">
            <div className="tw-font-sans tw-w-full tw-sm:w-1/2">
              <label
                htmlFor="expectedSalary"
                className="tw-font-sans tw-block tw-text-gray-700 tw-mb-1"
              >
                Expected Salary(LPA)
              </label>
              <input
                type="text"
                id="expectedSalary"
                name="expectedSalary"
                value={formData.expectedSalary}
                onChange={handleChange}
                className="tw-font-sans tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-100 tw-text-gray-800"
                placeholder="3"
                style={{
                  color: "#1f2937",
                  "::placeholder": { color: "#374151" },
                }}
              />
            </div>

            <div className="tw-font-sans tw-w-full tw-sm:w-1/2">
              <label
                htmlFor="availableToJoin"
                className="tw-font-sans tw-block tw-text-gray-700 tw-mb-1"
              >
                Available To Join (in days)
              </label>
              <input
                type="number"
                id="availableToJoin"
                name="availableToJoin"
                value={formData.availableToJoin}
                onChange={handleChange}
                className="tw-font-sans tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-100 tw-text-gray-800"
                placeholder="7"
                style={{
                  color: "#1f2937",
                  "::placeholder": { color: "#374151" },
                }}
              />
            </div>
          </div>

          <div className="tw-font-sans tw-mb-4">
            <label
              htmlFor="currentLocation"
              className="tw-font-sans tw-block tw-text-gray-700 tw-mb-1"
            >
              Current Location
            </label>
            <AsyncSelect
              id="currentLocation"
              name="currentLocation"
              loadOptions={fetchLocation}
              onChange={(selectedOption) =>
                setFormData({
                  ...formData,
                  currentLocation: selectedOption ? selectedOption.label : "",
                })
              }
              placeholder="Select your location"
              styles={customStyles}
            />
          </div>

          <div className="tw-font-sans tw-mb-4">
            <label
              htmlFor="notes"
              className="tw-font-sans tw-block tw-text-gray-700 tw-mb-1"
            >
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="tw-font-sans tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-100 tw-text-gray-800"
              placeholder="Enter any additional notes"
              style={{
                color: "#1f2937",
                "::placeholder": { color: "#374151" },
              }}
            ></textarea>
          </div>

          <div className="tw-font-sans tw-mb-4">
            <label className="tw-font-sans tw-block tw-text-gray-700 tw-mb-1">
              Ready for assessment*
            </label>
            <div className="tw-font-sans tw-flex tw-gap-4 tw-items-center">
              <label className="tw-font-sans tw-flex tw-items-center">
                <input
                  type="radio"
                  name="rfa"
                  value="yes"
                  checked={formData.rfa === "yes"}
                  onChange={handleChange}
                  required
                  className="tw-font-sans tw-form-radio tw-text-[#845ec2]-500 focus:tw-ring-2 focus:tw-ring-[#845ec2]-500 focus:tw-ring-opacity-50"
                />
                <span className="tw-font-sans tw-ml-2">Yes</span>
              </label>
              <label className="tw-font-sans tw-flex tw-items-center">
                <input
                  type="radio"
                  name="rfa"
                  value="no"
                  checked={formData.rfa === "no"}
                  onChange={handleChange}
                  required
                  className="tw-font-sans tw-form-radio tw-text-[#845ec2]-500 focus:tw-ring-2 focus:tw-ring-[#845ec2]-500 focus:tw-ring-opacity-50"
                />
                <span className="tw-font-sans tw-ml-2">No</span>
              </label>
            </div>
          </div>

          <div className="tw-font-sans tw-mb-4 tw-flex tw-items-center">
            <label
              htmlFor="captcha"
              className="tw-font-sans tw-block tw-text-gray-700 tw-mb-1"
            >
              Captcha:{" "}
              <span className="tw-font-sans tw-px-2 tw-py-1 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-white">
                {captcha}
              </span>
            </label>
            <div className="tw-font-sans tw-ml-auto tw-flex tw-gap-2 tw-items-center">
              <input
                type="text"
                id="captcha"
                name="captcha"
                value={formData.captcha}
                onChange={handleChange}
                className="tw-font-sans tw-w-40 tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-100 tw-text-gray-800"
              />
              <button
                type="button"
                onClick={() => setCaptcha(generateCaptcha())}
                className="tw-font-sans tw-text-[#845ec2]-500 tw-hover:underline"
              >
                ↻ Regenerate Captcha
              </button>
            </div>
            {captchaError && (
              <p className="tw-font-sans tw-text-red-500">{captchaError}</p>
            )}
          </div>

          <div className="tw-font-sans tw-mb-4 tw-flex tw-items-start">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className="tw-font-sans tw-form-checkbox tw-text-[#845ec2]-500"
            />
            <label
              htmlFor="consent"
              className="tw-font-sans tw-ml-2 tw-text-gray-700"
            >
              By applying you hereby accept the data processing terms under the
              Privacy Policy and give consent to processing of the data as part
              of this job application.
            </label>
          </div>
          {loader ? (
            <Loader width="20px" />
          ) : (
            <Button
              text="Apply Now"
              variant="Primary"
              type="submit"
              className="tw-font-sans tw-w-full tw-bg-[#845ec2]-500 tw-text-white tw-py-2 tw-px-4 tw-rounded-lg tw-hover:bg-[#845ec2]-600 tw-transition tw-duration-300"
            />
          )}
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default JobApplicationForm;
