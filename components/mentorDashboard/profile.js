import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileImageInput from "../basic/ProfileImageInput";
import { FaUserAlt } from "react-icons/fa";
import {
  BiSolidPhone,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiSolidBriefcaseAlt2,
} from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";
import Loader from "../UI/Loader";

function Profile({ mentorDetail, setMentor, setLoadingState, setErrorState }) {
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
    image: mentorDetail?.mentorImg || "",
    bookSession: mentorDetail?.bookSession || [],
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loader, setLoader] = useState(false);

  // normal input onChange function
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // function to fetch mentor profile
  const getMentorProfile = async () => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/getprofile/`;

    try {
      setLoadingState({ status: true });
      setErrorState({ status: false });
      const response = await axios.get(url, { withCredentials: true });
      const data = response.data;
      setFormData(data);
      setLoadingState({ status: false });
    } catch (error) {
      setLoadingState({ status: false });
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setErrorState({ status: true, message: error.response.data.message });
      } else {
        setErrorState({ status: true });
      }
    }
  };

  //fetching mentor profile onload
  useEffect(() => {
    getMentorProfile();
  }, []);

  // onChange function for socials input
  const handleSocialChange = (e) => {
    setFormData({
      ...formData,
      social: { ...formData.social, [e.target.name]: e.target.value },
    });
  };

  // save to local storage function
  const saveToLocalStorage = (mentorData) => {
    const { username, name, image } = mentorData;
    const mentorObj = {
      mentor_name: name,
      mentor_username: username,
      mentor_image: image,
    };
    localStorage.setItem("mentorData", JSON.stringify(mentorObj));
  };

  // form submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.username ||
      !formData.email ||
      !formData.mobile ||
      !formData.internAt ||
      !formData.currentStatus ||
      !formData.description
    ) {
      toast.error("Please fill all the fields");
      return;
    }
    setLoader(true);
    try {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/updateprofile`;

      const response = await axios.put(
        url,
        { ...formData },
        { withCredentials: true },
      ); // Send the updated data to the backend
      setFormData(response.data);
      setMentor(response.data);
      saveToLocalStorage(response.data);
      setLoader(false);
      toast.success("Changes Saved Successfully");
    } catch (error) {
      setLoader(false);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred while saving changes.");
      }
    }
  };
  return (
    <>
      <div className="tw-flex tw-w-full tw-justify-center tw-items-center tw-flex-wrap max-[512px]:tw-p-0 max-[512px]:tw-m-0">
        <div className="tw-w-full flex tw-flex-wrap">
          <div className="tw-border tw-border-base-300 tw-rounded-md tw-p-8 tw-bg-white max-[512px]:tw-w-screen max-[512px]:tw-h-screen max-[512px]:tw-overflow-y-auto max-[512px]:tw-p-10 ">
            <h2 className="tw-text-gray-600 tw-text-4xl text-center tw-font-sans ">
              Edit Your Profile
            </h2>
            <form
              className="mentorFormEdit max-[512px]:tw-justify-center max-[512px]:tw-items-center max-[512px]:tw-flex max-[512px]:tw-flex-col"
              onSubmit={handleSubmit}
            >
              <ProfileImageInput
                image={formData.image}
                setImage={(newImage) => {
                  setFormData({ ...formData, image: newImage });
                }}
                className="tw-mt-10 tw-items-center tw-flex tw-justify-center"
              />
              {/* name and user name */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
                className="tw-flex-wrap md:tw-flex-nowrap"
              >
                <div>
                  <label for="name">NAME</label>
                  <input
                    type="text"
                    name="name"
                    style={{
                      width: "90%",
                      borderRadius: "5px",
                      border: "none",
                      border: "2px solid rgb(220, 220, 220)",
                      paddingLeft: "35px",
                    }}
                    className="mentorFormInput"
                    onChange={(e) => handleChange(e)}
                    placeholder={mentorDetail?.name}
                    value={formData.name}
                  />
                  <FaUserAlt className="tw-relative tw-text-slate-800 tw-bottom-10 tw-left-2 tw-text-xl" />
                </div>
                <div>
                  <label for="username">USERNAME</label>
                  <input
                    type="text"
                    name="username"
                    style={{
                      width: "90%",
                      borderRadius: "5px",
                      border: "none",
                      border: "2px solid rgb(220, 220, 220)",
                      paddingLeft: "35px",
                      backgroundColor: "#f1f1f1",
                    }}
                    className="mentorFormInput"
                    onChange={(e) => handleChange(e)}
                    placeholder={mentorDetail?.username}
                    value={formData.username}
                    readOnly
                    title="This field is not editable"
                  />
                  <FaUserAlt className="tw-relative tw-text-slate-800 tw-bottom-10 tw-left-2 tw-text-xl" />
                </div>
              </div>
              {/* email and phone */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
                className="tw-flex-wrap md:tw-flex-nowrap"
              >
                <div>
                  <label for="email">EMAIL</label>

                  <input
                    type="email"
                    name="email"
                    className="mentorFormInput"
                    onChange={(e) => handleChange(e)}
                    style={{
                      width: "90%",
                      borderRadius: "5px",
                      border: "none",
                      border: "2px solid rgb(220, 220, 220)",
                      background: "white",
                      paddingLeft: "35px",
                      backgroundColor: "#f1f1f1",
                    }}
                    // placeholder="e.g. peterparker4321#gmail.com"
                    placeholder={mentorDetail?.email}
                    // readOnly
                    value={formData.email}
                    readOnly
                    title="This field is not editable"
                  />
                  <MdEmail className="tw-relative tw-text-slate-800 tw-bottom-10 tw-left-2 tw-text-xl" />
                </div>
                <div>
                  <label for="mobile">PHONE</label>

                  <input
                    type="number"
                    name="mobile"
                    className="mentorFormInput"
                    onChange={(e) => handleChange(e)}
                    style={{
                      width: "90%",
                      borderRadius: "5px",
                      border: "none",
                      border: "2px solid rgb(220, 220, 220)",
                      paddingLeft: "35px",
                    }}
                    // placeholder="0123456789"
                    placeholder={mentorDetail?.mobile}
                    value={formData.mobile}
                  />
                  <BiSolidPhone className="tw-relative tw-text-slate-800 tw-bottom-10 tw-left-2 tw-text-2xl" />
                </div>
              </div>
              {/* intern at and current status */}
              <div
                style={{ display: "flex", flexDirection: "row" }}
                className="tw-flex-wrap md:tw-flex-nowrap"
              >
                <div>
                  <label for="internAt">Intern At</label>

                  <input
                    type="text"
                    name="internAt"
                    className="mentorFormInput"
                    onChange={(e) => handleChange(e)}
                    style={{
                      width: "90%",
                      borderRadius: "5px",
                      border: "none",
                      border: "2px solid rgb(220, 220, 220)",
                      paddingLeft: "35px",
                    }}
                    // placeholder="e.g. https://www.linkedin.com/peterparker"
                    placeholder={mentorDetail?.internAt}
                    value={formData.internAt}
                  />
                  <BiSolidBriefcaseAlt2 className="tw-relative tw-text-slate-800 tw-bottom-10 tw-left-2 tw-text-xl" />
                </div>
                <div>
                  <label for="currentStatus">Current Status</label>

                  <input
                    type="text"
                    name="currentStatus"
                    className="mentorFormInput"
                    onChange={(e) => handleChange(e)}
                    style={{
                      width: "90%",
                      borderRadius: "5px",
                      border: "none",
                      border: "2px solid rgb(220, 220, 220)",
                      paddingLeft: "35px",
                    }}
                    placeholder={mentorDetail?.currentStatus}
                    value={formData.currentStatus}
                  />
                  <BiSolidBriefcaseAlt2 className="tw-relative tw-text-slate-800 tw-bottom-10 tw-left-2 tw-text-xl" />
                </div>
              </div>
              {/* linked in and twitter */}
              <div
                style={{ display: "flex", flexDirection: "row" }}
                className="tw-flex-wrap md:tw-flex-nowrap"
              >
                <div>
                  <label for="linkedin">LINKEDIN</label>

                  <input
                    type="text"
                    name="linkedin"
                    className="mentorFormInput"
                    onChange={(e) => handleSocialChange(e)}
                    style={{
                      width: "90%",
                      borderRadius: "5px",
                      border: "none",
                      border: "2px solid rgb(220, 220, 220)",
                      paddingLeft: "35px",
                    }}
                    // placeholder="e.g. https://www.linkedin.com/peterparker"
                    placeholder={mentorDetail?.linkedin}
                    value={formData.social.linkedin}
                  />
                  <BiLogoLinkedin className="tw-relative tw-text-slate-800 tw-bottom-10 tw-left-2 tw-text-xl" />
                </div>
                <div>
                  <label for="twitter">TWITTER</label>

                  <input
                    type="text"
                    name="twitter"
                    className="mentorFormInput"
                    onChange={(e) => handleSocialChange(e)}
                    style={{
                      width: "90%",
                      borderRadius: "5px",
                      border: "none",
                      border: "2px solid rgb(220, 220, 220)",
                      paddingLeft: "35px",
                    }}
                    placeholder={mentorDetail?.twitter}
                    value={formData.social.twitter}
                  />
                  <BiLogoTwitter className="tw-relative tw-text-slate-800 tw-bottom-10 tw-left-2 tw-text-xl" />
                </div>
              </div>

              <div>
                <label for="description">DESCRIPTION</label>

                <textarea
                  cols="10"
                  rows="7"
                  name="description"
                  style={{
                    width: "95%",
                    borderRadius: "5px",
                    border: "2px solid rgb(220, 220, 220)",
                  }}
                  className="mentorFormInput"
                  onChange={(e) => handleChange(e)}
                  // placeholder="I've done my Bacherlor's from IIT Delhi. I have been working as SDE-I for past 1 years at microsoft..."
                  placeholder={mentorDetail?.description}
                  value={formData.description}
                />
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                ></div>
              </div>
              <hr
                style={{
                  margin: "10px 0",
                  borderColor: "grey",
                  gridColumn: "1/3",
                }}
              />
              {!loader ? (
                <button
                  style={{
                    width: "fit-content",
                    padding: "15px 25px",
                    cursor: "pointer",
                    marginTop: "-50px",
                    marginLeft: "5px",
                  }}
                  type="submit"
                  className="tw-text-white max-[512px]:tw-mb-20 tw-p-2 tw-text-center tw-relative tw-rounded-md tw-font-semibold tw-transition-all tw-duration-150 tw-cursor-pointer tw-ease-in-out tw-w-full tw-bg-primary-100 hover:tw-bg-primary-200"
                  onClick={handleSubmit} // Call the handleSubmit function when the button is clicked
                >
                  Save changes
                </button>
              ) : (
                <Loader width="30px" />
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
