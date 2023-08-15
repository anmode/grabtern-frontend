import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { FaUserAlt } from "react-icons/fa";
import { BiSolidPhone, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { mentorImg } from "../../public/assets";
import { ToastContainer, toast } from "react-toastify";

function Profile({ mentorDetail, setLoadingState, setErrorState}) {
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

  // normal input onChange function
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // function to fetch mentor profile
  const getMentorProfile = async () => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/getprofile/`;

    try {
      setLoadingState({status: true})
      setErrorState({status: false})
      const response = await axios.get(url, { withCredentials: true });
      const data = response.data;
      setFormData(data);
      setLoadingState({status: false})
    } catch (error) {
      setLoadingState({status: false})
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setErrorState({status: true, message:error.response.data.message});
      } else {
        setErrorState({status: true});
      }
    }
  };

  //fetching mentor profile onload
  useEffect(() => {
    getMentorProfile();
  }, []);

  // converting image to base64 function
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

  // onChange function for socials input
  const handleSocialChange = (e) => {
    setFormData({
      ...formData,
      social: { ...formData.social, [e.target.name]: e.target.value },
    });
  };

  const handleUploadImageChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);

    try {
      const imageCloudinaryUrl = await uploadToCloudinary(base64);
      console.log(imageCloudinaryUrl);
      setFormData({ ...formData, image: imageCloudinaryUrl });
    } catch (error) {
      console.log("Error uploading image to Cloudinary:", error);
    }
  };

  const uploadToCloudinary = async (imageSrc) => {
    const res = await fetch(imageSrc);
    const blob = await res.blob();
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;
    try {
      const formData = new FormData();
      formData.append("file", blob);
      formData.append("upload_preset", "image_preset");
      const res = await axios.post(url, formData);
      return res.data.secure_url;
    } catch (error) {
      console.log("Couldn't upload image to Cloudinary", error);
    }
  };

  // form submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/updateprofile`;

      const response = await axios.put(
        url,
        { ...formData },
        { withCredentials: true },
      ); // Send the updated data to the backend
      setFormData(response.data);

      toast.success("Changes Saved Successfully");
    } catch (error) {
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
    <ToastContainer/>
    <div className="tw-pb-[5rem] tw-flex tw-justify-center tw-items-center tw-pt-20 tw-pl-[200px] max-[990px]:tw-pl-[150px] max-[715px]:tw-pl-[100px] tw-flex-wrap max-[512px]:tw-p-0 max-[512px]:tw-m-0">
      <div className="tw-w-[800px] flex tw-flex-wrap max-[990px]:tw-w-[500px] max-[715px]:tw-w-[400px]">
        <div className="tw-border tw-border-base-300 tw-rounded-md tw-p-4 tw-bg-white max-[512px]:tw-w-screen max-[512px]:tw-h-screen max-[512px]:tw-overflow-y-auto max-[512px]:tw-p-10">
          <h2 className="tw-text-gray-600 tw-text-4xl text-center tw-font-sans ">
            Edit Your Profile
          </h2>
          <form
            className="mentorFormEdit max-[512px]:tw-justify-center max-[512px]:tw-items-center max-[512px]:tw-flex max-[512px]:tw-flex-col"
            onSubmit={handleSubmit}
          >
            <div className="tw-mt-10 tw-items-center tw-flex tw-justify-center">
              <Image
                className="tw-w-[100px] tw-h-[100px] tw-rounded-full tw-object-cover"
                src={formData.image ? formData.image : mentorImg}
                alt="mentor"
                width={100}
                height={100}
              />
              <input
                type="file"
                name="mentorProfile"
                onChange={(e) => handleUploadImageChange(e)}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
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
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
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
                  }}
                  // placeholder="e.g. peterparker4321#gmail.com"
                  placeholder={mentorDetail?.email}
                  // readOnly
                  value={formData.email}
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
            <div style={{ display: "flex", flexDirection: "row" }}>
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
          </form>
        </div>
      </div>
    </div>
  </>
  );
}

export default Profile;
