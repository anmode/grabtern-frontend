import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import ProfileImageInput from "../basic/ProfileImageInput";
import Loader from "../UI/Loader";

function Profile({ setLoadingState, setErrorState, user, setUser }) {
  const initialFormData = {
    name: user?.fullName || "",
    email: user?.email || "",
    image: user?.image || "",
    discord: user?.social?.discord || "",
    linkedin: user?.social?.linkedin || "",
    github: user?.social?.github || "",
    instagram: user?.social?.instagram || "",
  };

  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  // function to fetch user profile
  const getMentorProfile = async () => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/profile/fetch`;

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

  //fetching user profile onload
  useEffect(() => {
    getMentorProfile();
  }, []);

  // onChnage function for inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // save to local storage function
  const saveToLocalStorage = (userData) => {
    const { _id, fullName, email, image } = userData;
    const userObj = {
      user_id: _id,
      user_email: email,
      user_name: fullName,
      user_image: image,
    };
    localStorage.setItem("userData", JSON.stringify(userObj));
  };

  // form submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      toast.error("Please fill all the fields");
      return;
    }
    try {
      setLoader(true);

      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/profile/update`;
      const response = await axios.put(
        url,
        { ...formData },
        { withCredentials: true },
      );
      setFormData(response.data);
      setUser(response.data);
      saveToLocalStorage(response.data);
      toast.success("Changes Saved Successfully");
      setLoader(false);
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
      <ToastContainer />
      <div className="md:tw-pb-[5rem] tw-flex tw-justify-center tw-items-center md:tw-pt-20 tw-w-full">
        <div className="tw-w-full flex tw-flex-wrap">
          <div className="tw-border tw-border-base-300 tw-rounded-md tw-p-4 tw-bg-base-100">
            <h2 className="tw-m-2.5 tw-text-3xl tw-text-base-500 md:tw-text-4xl text-center tw-font-sans ">
              Edit Your Profile
            </h2>
            <form
              className="mentorFormEdit max-[512px]:tw-justify-center max-[512px]:tw-items-center max-[512px]:tw-flex max-[512px]:tw-flex-col"
              onSubmit={handleSubmit}
            >
              <ProfileImageInput
                image={formData.image}
                setImage={(newImage) =>
                  setFormData({ ...formData, image: newImage })
                }
              />
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
                    name="fullName"
                    style={{
                      width: "90%",
                      borderRadius: "5px",
                      border: "none",
                      border: "2px solid var(--base-300)",
                      paddingLeft: "35px",
                    }}
                    className="mentorFormInput"
                    placeholder={user?.fullName}
                    value={formData.fullName}
                    onChange={(e) => handleChange(e)}
                  />
                  <FaUserAlt className="tw-text-lg tw-relative tw-text-base-500 tw-bottom-9 tw-left-2 md:tw-text-xl" />
                </div>
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
                      border: "2px solid var(--base-300)",
                      background: "white",
                      paddingLeft: "35px",
                      backgroundColor: "#f1f1f1",
                    }}
                    placeholder={user?.email}
                    readOnly
                    value={formData.email}
                  />
                  <MdEmail className="tw-text-lg tw-relative tw-text-base-500 tw-bottom-9 tw-left-2 md:tw-text-xl" />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
                className="tw-flex-wrap md:tw-flex-nowrap"
              >
                <div>
                  <label for="linkedin">LINKEDIN</label>
                  <input
                    type="text"
                    name="linkedin"
                    style={{
                      width: "90%",
                      borderRadius: "5px",
                      border: "none",
                      border: "2px solid var(--base-300)",
                      paddingLeft: "35px",
                    }}
                    className="mentorFormInput"
                    placeholder={user?.social?.linkedin}
                    value={formData.linkedin}
                    onChange={(e) => handleChange(e)}
                  />
                  <FaLinkedinIn className="tw-text-lg tw-relative tw-text-base-500 tw-bottom-9 tw-left-2 md:tw-text-xl" />
                </div>
                <div>
                  <label for="github">GITHUB</label>
                  <input
                    type="text"
                    name="github"
                    style={{
                      width: "90%",
                      borderRadius: "5px",
                      border: "none",
                      border: "2px solid var(--base-300)",
                      paddingLeft: "35px",
                    }}
                    className="mentorFormInput"
                    placeholder={user?.social?.github}
                    value={formData.github}
                    onChange={(e) => handleChange(e)}
                  />
                  <FaGithub className="tw-text-lg tw-relative tw-text-base-500 tw-bottom-9 tw-left-2 md:tw-text-xl" />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
                className="tw-flex-wrap md:tw-flex-nowrap"
              >
                <div>
                  <label for="discord">DISCORD</label>
                  <input
                    type="text"
                    name="discord"
                    style={{
                      width: "90%",
                      borderRadius: "5px",
                      border: "none",
                      border: "2px solid var(--base-300)",
                      paddingLeft: "35px",
                    }}
                    className="mentorFormInput"
                    placeholder={user?.social?.discord}
                    value={formData.discord}
                    onChange={(e) => handleChange(e)}
                  />
                  <FaDiscord className="tw-text-lg tw-relative tw-text-base-500 tw-bottom-9 tw-left-2 md:tw-text-xl" />
                </div>
                <div>
                  <label for="instagram">INSTAGRAM</label>
                  <input
                    type="text"
                    name="instagram"
                    style={{
                      width: "90%",
                      borderRadius: "5px",
                      border: "none",
                      border: "2px solid var(--base-300)",
                      paddingLeft: "35px",
                    }}
                    className="mentorFormInput"
                    placeholder={user?.social?.instagram}
                    value={formData.instagram}
                    onChange={(e) => handleChange(e)}
                  />
                  <FaInstagram className="tw-text-lg tw-relative tw-text-base-500 tw-bottom-9 tw-left-2 md:tw-text-xl" />
                </div>
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
                  onClick={handleSubmit}
                >
                  Save changes
                </button>
              ) : (
                <Loader />
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
