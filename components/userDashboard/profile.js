import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

function Profile({ setLoadingState, setErrorState, user }) {
  const initialFormData = {
    name: user?.fullName || "",
    email: user?.email || "",
    image: user?.image || "",
  };

  const [formData, setFormData] = useState(initialFormData);

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

  const handleUploadImageChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);

    try {
      const imageCloudinaryUrl = await uploadToCloudinary(base64);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/profile/update`;

      const response = await axios.put(
        url,
        { ...formData },
        { withCredentials: true },
      );
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
      <ToastContainer />
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
                  src={formData.image ? formData.image : ""}
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
                    placeholder={user?.fullName}
                    value={formData.name}
                    onChange={(e) => handleChange(e)}
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
                      backgroundColor: "#f1f1f1",
                    }}
                    placeholder={user?.email}
                    readOnly
                    value={formData.email}
                  />
                  <MdEmail className="tw-relative tw-text-slate-800 tw-bottom-10 tw-left-2 tw-text-xl" />
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
