// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { useJobContext } from '../context/JobContext';
// import { useRouter } from 'next/router';

// function JobApplicationForm() {
//   const router =useRouter();
//   const { jobDetails } = useJobContext();
//   const location = useLocation();
//   const jobID = location.pathname.split('/').pop();
//   const [captcha, setCaptcha] = useState('');
//   const [captchaError, setCaptchaError] = useState('');
//   const [details, setDetails] = useState('');

//   const [formData, setFormData] = useState({
//     resume: '',
//     firstName: '',
//     middleName: '',
//     lastName: '',
//     email: '',
//     mobilePhone: '',
//     experienceYears: '',
//     experienceMonths: '',
//     currentSalary: '',
//     expectedSalary: '',
//     availableToJoin: '',
//     currentLocation: '',
//     notes: '',
//     wfo: '',
//     linkedin: '',
//     portfolio: '',
//     github: '',
//     consent: false,
//   });

//   const generateCaptcha = () => {
//     const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let captcha = '';
//     for (let i = 0; i < 6; i++) {
//       captcha += chars.charAt(Math.floor(Math.random() * chars.length));
//     }
//     return captcha;
//   };

//   useEffect(() => {
//     setCaptcha(generateCaptcha());
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.captcha !== captcha) {
//       setCaptchaError('Incorrect captcha. Please try again.');
//       setCaptcha(generateCaptcha());
//     } else {
//       setCaptchaError('');
//       console.log('Form submitted:', formData);
//       // Handle form submission logic here
//     }
//   };

//   useEffect(() => {
//     if (Array.isArray(jobDetails)) {
//       const selectedJob = jobDetails.find(job => job.jobid === parseInt(jobID));
//       if (selectedJob) {
//         setDetails(selectedJob);
//       }
//     }
//   }, [jobID, jobDetails]);

//   return (
//     <div className="p-6 max-w-screen-md mx-auto bg-gray-100 rounded-lg shadow-lg">
//       <button onClick={() => router.push('/career')} className="text-orange-500 hover:underline">
//         <span>&larr;</span> Back to all job openings
//       </button>
//       <h1 className="text-orange-500 text-4xl font-bold mb-3">{details?.title}</h1>
//       <p className="text-base text-gray-700">Fulltime - {details?.city} - {details?.experience}</p>
//       <h2 className="text-xl text-gray-800 font-semibold mt-2">Apply for this job</h2>
//       <form className="mt-4" onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="resume" className="block text-orange-500 mb-1 cursor-pointer">Upload resume</label>
//           <input
//             type="text"
//             id="resume"
//             name="resume"
//             value={formData.resume}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
//             placeholder="Upload your resume"
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="firstName" className="block text-gray-700 mb-1">First Name *</label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="middleName" className="block text-gray-700 mb-1">Middle Name</label>
//           <input
//             type="text"
//             id="middleName"
//             name="middleName"
//             value={formData.middleName}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="lastName" className="block text-gray-700 mb-1">Last Name *</label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700 mb-1">Email *</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="mobilePhone" className="block text-gray-700 mb-1">Mobile Phone *</label>
//           <input
//             type="tel"
//             id="mobilePhone"
//             name="mobilePhone"
//             value={formData.mobilePhone}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
//             required
//             placeholder="9894795499"
//           />
//         </div>

//         <div className="mb-4 flex flex-wrap gap-4">
//           <div className="w-full sm:w-1/2">
//             <label className="block text-gray-700 mb-1">Experience</label>
//             <div className="flex gap-4">
//               <input
//                 type="number"
//                 id="experienceYears"
//                 name="experienceYears"
//                 value={formData.experienceYears}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
//                 placeholder="Years"
//               />
//               <input
//                 type="number"
//                 id="experienceMonths"
//                 name="experienceMonths"
//                 value={formData.experienceMonths}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
//                 placeholder="Months"
//               />
//             </div>
//           </div>

//           <div className="w-full sm:w-1/2">
//             <label htmlFor="currentSalary" className="block text-gray-700 mb-1">Current Salary(LPA)</label>
//             <input
//               type="text"
//               id="currentSalary"
//               name="currentSalary"
//               value={formData.currentSalary}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
//               placeholder="2"
//             />
//           </div>
//         </div>

//         <div className="mb-4 flex flex-wrap gap-4">
//           <div className="w-full sm:w-1/2">
//             <label htmlFor="expectedSalary" className="block text-gray-700 mb-1">Expected Salary(LPA)</label>
//             <input
//               type="text"
//               id="expectedSalary"
//               name="expectedSalary"
//               value={formData.expectedSalary}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
//               placeholder="3"
//             />
//           </div>

//           <div className="w-full sm:w-1/2">
//             <label htmlFor="availableToJoin" className="block text-gray-700 mb-1">Available To Join (in days)</label>
//             <input
//               type="number"
//               id="availableToJoin"
//               name="availableToJoin"
//               value={formData.availableToJoin}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
//               placeholder="7"
//             />
//           </div>
//         </div>

//         <div className="mb-4">
//           <label htmlFor="currentLocation" className="block text-gray-700 mb-1">Current Location</label>
//           <input
//             type="text"
//             id="currentLocation"
//             name="currentLocation"
//             value={formData.currentLocation}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
//             placeholder="Aligarh"
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="notes" className="block text-gray-700 mb-1">Notes</label>
//           <textarea
//             id="notes"
//             name="notes"
//             value={formData.notes}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
//             placeholder="Enter any additional notes"
//           ></textarea>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 mb-1">Ready to WFO *</label>
//           <div className="flex gap-4 items-center">
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="wfo"
//                 value="yes"
//                 checked={formData.wfo === 'yes'}
//                 onChange={handleChange}
//                 required
//                 className="form-radio text-orange-500"
//               /> <span className="ml-2">Yes</span>
//             </label>
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="wfo"
//                 value="no"
//                 checked={formData.wfo === 'no'}
//                 onChange={handleChange}
//                 required
//                 className="form-radio text-orange-500"
//               /> <span className="ml-2">No</span>
//             </label>
//           </div>
//         </div>

//         <div className="mb-4 flex items-center">
//           <label htmlFor="captcha" className="block text-gray-700 mb-1">Captcha: <span className="px-2 py-1 border border-gray-300 rounded-lg bg-white">{captcha}</span></label>
//           <div className="ml-auto flex gap-2 items-center">
//             <input
//               type="text"
//               id="captcha"
//               name="captcha"
//               value={formData.captcha}
//               onChange={handleChange}
//               className="w-40 px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
//             />
//             <button type="button" onClick={() => setCaptcha(generateCaptcha())} className="text-orange-500 hover:underline">↻ Regenerate Captcha</button>
//           </div>
//           {captchaError && <p className="text-red-500">{captchaError}</p>}
//         </div>

//         <div className="mb-4 flex items-start">
//           <input
//             type="checkbox"
//             id="consent"
//             name="consent"
//             checked={formData.consent}
//             onChange={handleChange}
//             required
//             className="form-checkbox text-orange-500"
//           />
//           <label htmlFor="consent" className="ml-2 text-gray-700">By applying you hereby accept the data processing terms under the Privacy Policy and give consent to processing of the data as part of this job application.</label>
//         </div>

//         <button type="submit" className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300">Apply Now</button>
//       </form>
//     </div>
//   );
// }

// export default JobApplicationForm;

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useJobContext } from "../context/JobContext";

function JobApplicationForm() {
  const router = useRouter();
  const { jobDetails } = useJobContext();
  const { jobID } = router.query; // Get jobID from the query parameters
  const [captcha, setCaptcha] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [details, setDetails] = useState("");

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
    wfo: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.captcha !== captcha) {
      setCaptchaError("Incorrect captcha. Please try again.");
      setCaptcha(generateCaptcha());
    } else {
      setCaptchaError("");
      console.log("Form submitted:", formData);
      // Handle form submission logic here
    }
  };

  useEffect(() => {
    if (Array.isArray(jobDetails)) {
      const selectedJob = jobDetails.find(
        (job) => job.jobid === parseInt(jobID),
      );
      if (selectedJob) {
        setDetails(selectedJob);
      }
    }
  }, [jobID, jobDetails]);

  return (
    <div className="p-6 max-w-screen-md mx-auto bg-gray-100 rounded-lg shadow-lg">
      <button
        onClick={() => router.push("/career")}
        className="text-orange-500 hover:underline"
      >
        <span>&larr;</span> Back to all job openings
      </button>
      <h1 className="text-orange-500 text-4xl font-bold mb-3">
        {details?.title}
      </h1>
      <p className="text-base text-gray-700">
        Fulltime - {details?.city} - {details?.experience}
      </p>
      <h2 className="text-xl text-gray-800 font-semibold mt-2">
        Apply for this job
      </h2>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="resume"
            className="block text-orange-500 mb-1 cursor-pointer"
          >
            Upload resume
          </label>
          <input
            type="text"
            id="resume"
            name="resume"
            value={formData.resume}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
            placeholder="Upload your resume"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 mb-1">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="middleName" className="block text-gray-700 mb-1">
            Middle Name
          </label>
          <input
            type="text"
            id="middleName"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 mb-1">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mobilePhone" className="block text-gray-700 mb-1">
            Mobile Phone *
          </label>
          <input
            type="tel"
            id="mobilePhone"
            name="mobilePhone"
            value={formData.mobilePhone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
            required
            placeholder="9894795499"
          />
        </div>

        <div className="mb-4 flex flex-wrap gap-4">
          <div className="w-full sm:w-1/2">
            <label className="block text-gray-700 mb-1">Experience</label>
            <div className="flex gap-4">
              <input
                type="number"
                id="experienceYears"
                name="experienceYears"
                value={formData.experienceYears}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
                placeholder="Years"
              />
              <input
                type="number"
                id="experienceMonths"
                name="experienceMonths"
                value={formData.experienceMonths}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
                placeholder="Months"
              />
            </div>
          </div>

          <div className="w-full sm:w-1/2">
            <label htmlFor="currentSalary" className="block text-gray-700 mb-1">
              Current Salary(LPA)
            </label>
            <input
              type="text"
              id="currentSalary"
              name="currentSalary"
              value={formData.currentSalary}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
              placeholder="2"
            />
          </div>
        </div>

        <div className="mb-4 flex flex-wrap gap-4">
          <div className="w-full sm:w-1/2">
            <label
              htmlFor="expectedSalary"
              className="block text-gray-700 mb-1"
            >
              Expected Salary(LPA)
            </label>
            <input
              type="text"
              id="expectedSalary"
              name="expectedSalary"
              value={formData.expectedSalary}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
              placeholder="3"
            />
          </div>

          <div className="w-full sm:w-1/2">
            <label
              htmlFor="availableToJoin"
              className="block text-gray-700 mb-1"
            >
              Available To Join (in days)
            </label>
            <input
              type="number"
              id="availableToJoin"
              name="availableToJoin"
              value={formData.availableToJoin}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
              placeholder="7"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="currentLocation" className="block text-gray-700 mb-1">
            Current Location
          </label>
          <input
            type="text"
            id="currentLocation"
            name="currentLocation"
            value={formData.currentLocation}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
            placeholder="Aligarh"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="notes" className="block text-gray-700 mb-1">
            Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
            placeholder="Enter any additional notes"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Ready to WFO *</label>
          <div className="flex gap-4 items-center">
            <label className="flex items-center">
              <input
                type="radio"
                name="wfo"
                value="yes"
                checked={formData.wfo === "yes"}
                onChange={handleChange}
                required
                className="form-radio text-orange-500"
              />{" "}
              <span className="ml-2">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="wfo"
                value="no"
                checked={formData.wfo === "no"}
                onChange={handleChange}
                required
                className="form-radio text-orange-500"
              />{" "}
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <label htmlFor="captcha" className="block text-gray-700 mb-1">
            Captcha:{" "}
            <span className="px-2 py-1 border border-gray-300 rounded-lg bg-white">
              {captcha}
            </span>
          </label>
          <div className="ml-auto flex gap-2 items-center">
            <input
              type="text"
              id="captcha"
              name="captcha"
              value={formData.captcha}
              onChange={handleChange}
              className="w-40 px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
            />
            <button
              type="button"
              onClick={() => setCaptcha(generateCaptcha())}
              className="text-orange-500 hover:underline"
            >
              ↻ Regenerate Captcha
            </button>
          </div>
          {captchaError && <p className="text-red-500">{captchaError}</p>}
        </div>

        <div className="mb-4 flex items-start">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
            className="form-checkbox text-orange-500"
          />
          <label htmlFor="consent" className="ml-2 text-gray-700">
            By applying you hereby accept the data processing terms under the
            Privacy Policy and give consent to processing of the data as part of
            this job application.
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
        >
          Apply Now
        </button>
      </form>
    </div>
  );
}

export default JobApplicationForm;
