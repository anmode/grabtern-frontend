import React, { useState } from "react";
import axios from "axios";
import { encryptData, decryptData } from "../../hook/encryptDecrypt";
import { divide } from "lodash";
function Profile({ mentorDetail }) {
  const initialFormData = {
    name: mentorDetail?.name || "", // Make sure to handle null/undefined case
    username: mentorDetail?.username || "",
    email: mentorDetail?.email || "",
    mobile: mentorDetail?.mobile || "",
    internAt: mentorDetail?.internAt || "",
    currentStatus: mentorDetail?.currentStatus || "",
    social: {
      linkedin: mentorDetail?.social?.linkedin || "",
      twitter: mentorDetail?.social?.twitter || "",
    },
    description: mentorDetail?.description || "",
    mentorImg: mentorDetail?.mentorImg || "",
    bookSession: mentorDetail?.bookSession || [],
  };

  const [formData, setFormData] = useState(initialFormData);
  // const [formData, setFormData] = useState(mentorDetail);
  const [msg, setMsg] = useState("");
  const [step, setStep] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const nextStep = () => {
    setError("");
    setStep((val) => val + 1);
  };
  const previousStep = () => {
    setError("");
    setStep((val) => val - 1);
  };
  const handleSocialChange = (e) => {
    setFormData({
      ...formData,
      social: { ...formData.social, [e.target.name]: e.target.value },
    });
  };

  const handleUploadImageChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setFormData({ ...formData, mentorImg: base64 });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const formDataCopy = { ...formData }; // Create a copy of the formData to work with
      delete formDataCopy._id;
      delete formDataCopy.password;
      delete formDataCopy.confirmPassword;
      delete formDataCopy.verified;
      delete formDataCopy.token;
      delete formDataCopy.mentorToken;
      delete formDataCopy.setupPWId;
      delete formDataCopy.__v;

      // Make the API call to update the mentor data
      const url = `${
        process.env.NEXT_PUBLIC_BACKEND_URL
      }/api/mentors/updateMentor/${
        JSON.parse(decryptData("mentorData")).mentorToken
      }`;

      const { data: res } = await axios.post(url, formDataCopy); // Send the updated data to the backend

      alert(res); // Display the response message from the backend

      setModalOpen(false);
      setMsg("Changes saved successfully."); // Set success message
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred while saving changes.");
      }
    }
  };
  return (
    <div className="tw-border-2 tw-h-full tw-flex tw-justify-center profileRegForm">
      <form className="md:tw-w-full md:tw-max-w-2xl md:tw-p-0" onSubmit={handleSubmit}>
      <h2 className="tw-text-center tw-font-medium tw-text-5xl tw-mt-5 tw-text-[#845ec2]">Edit your Profile</h2>
      {step === 1 ? (
      <><div class="tw-grid md:tw-grid-cols-2 md:tw-gap-6 md:tw-m-[1rem] md:tw-mb-6">
            <div class="tw-relative tw-z-0 tw-w-full tw-mb-6 tw-group">
              <label class="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2" for="grid-first-name">
                NAME
              </label>
              <input
                type="text"
                name="name"
                class="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border tw-border-[#845ec2] tw-rounded tw-py-3 tw-px-4 tw-mb-3 tw-leading-tight focus:tw-outline-none focus:tw-bg-white"
                onChange={(e) => handleChange(e)}
                placeholder={mentorDetail?.name}
                value={formData.name} />
            </div>
            <div class="tw-relative tw-z-0 tw-w-full tw-mb-6 tw-group">
              <label class="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2" for="grid-first-name">
                USERNAME
              </label>
              <input
                class="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border tw-border-[#845ec2] tw-rounded tw-py-3 tw-px-4 tw-mb-3 tw-leading-tight focus:tw-outline-none focus:tw-bg-white"
                type="text"
                name="username"
                onChange={(e) => handleChange(e)}
                placeholder={mentorDetail?.username}
                value={formData.username} />
            </div>
          </div>
          <div class="tw-grid md:tw-grid-cols-2 md:tw-gap-6 md:tw-m-[1rem]">
              <div class="tw-relative tw-z-0 tw-w-full tw-mb-6 tw-group">
                <label class="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2" for="grid-first-name">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={(e) => handleChange(e)}
                  className="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border tw-border-[#845ec2] tw-rounded tw-py-3 tw-px-4 tw-mb-3 tw-leading-tight focus:tw-outline-none focus:tw-bg-white"
                  placeholder={mentorDetail?.email}
                  value={formData.email} />
              </div>
              <div class="tw-relative tw-z-0 tw-w-full tw-mb-6 tw-group">
                <label class="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2" for="grid-first-name">
                  Phone
                </label>
                <input
                  type="number"
                  name="mobile"
                  onChange={(e) => handleChange(e)}
                  className="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border tw-border-[#845ec2] tw-rounded tw-py-3 tw-px-4 tw-mb-3 tw-leading-tight focus:tw-outline-none focus:tw-bg-white"
                  placeholder={mentorDetail?.mobile}
                  value={formData.mobile} />
              </div>
            </div><div className="tw-grid md:tw-grid-cols-2 md:tw-gap-6 md:tw-m-[1rem]">
              <div class="tw-relative tw-z-0 tw-w-full tw-mb-6 tw-group">
                <label class="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2" for="linkedin">LINKEDIN</label>

                <input
                  type="text"
                  name="linkedin"
                  className="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border tw-border-[#845ec2] tw-rounded tw-py-3 tw-px-4 tw-mb-3 tw-leading-tight focus:tw-outline-none focus:tw-bg-white"
                  onChange={(e) => handleSocialChange(e)}
                  placeholder={mentorDetail?.linkedin}
                  value={formData.social.linkedin} />
              </div>
              <div class="tw-relative tw-z-0 tw-w-full tw-mb-6 tw-group">
                <label class="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2" for="twitter">TWITTER</label>
                <input
                  type="text"
                  name="twitter"
                  className="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border tw-border-[#845ec2] tw-rounded tw-py-3 tw-px-4 tw-mb-3 tw-leading-tight focus:tw-outline-none focus:tw-bg-white"
                  onChange={(e) => handleSocialChange(e)}
                  placeholder={mentorDetail?.twitter}
                  value={formData.social.twitter} />
              </div>
            </div><div className="tw-grid md:tw-m-[1rem]">
              <label class="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2" for="description">DESCRIPTION</label>
              <textarea
                cols="10"
                rows="7"
                name="description"
                className="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border tw-border-[#845ec2] tw-rounded tw-py-3 tw-px-4 tw-mb-3 tw-leading-tight focus:tw-outline-none focus:tw-bg-white"
                onChange={(e) => handleChange(e)}
                placeholder={mentorDetail?.description}
                value={formData.description} />
            </div>
          </>
      ): (
        <>{error && <div style={{ color: "red" }}>{error}</div>}</>
      )}
      {msg && (
        <div style={{ color: "green", gridColumn: "1/3" }}>{msg}</div>
      )}
      <div className="tw-flex tw-justify-center">
      <button
        style={{
          color: "white",
          width: "fit-content",
          padding: "15px 25px",
          backgroundColor: "#845ec2",
          cursor: "pointer",
          boxShadow: "6px 4px 13px -2px rgba(0, 0, 0, 0.2)",
          transition: "background-color 0.3s", // Add a transition for smooth color change
          // Responsive styles
          fontSize: "14px", // Adjust font size for mobile view
          whiteSpace: "nowrap", // Prevent button text from wrapping
          overflow: "hidden", // Hide overflowing text
          textOverflow: "ellipsis", // Show ellipsis (...) for overflow
          maxWidth: "100%", // Ensure the button doesn't exceed container width
        }}
        type="submit"
        onClick={handleSubmit}
      >
        Save changes
      </button>
      </div>
    </form>
    </div>
  );
}

export default Profile;
