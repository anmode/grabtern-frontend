import React, { useEffect, useState } from "react";
import Input from "./Input";
import ImageCropper from "../../../components/basic/ImageCropper";
import axios from "axios";
import clsx from "clsx";

function PersonDetails({
  formData,
  setFormData,
  handleChange,
  handleUploadImageChange,
  validator,
}) {
  // state for unique userName
  const initialIsUnique = { status: "", message: "" };
  const [isUnique, setIsUnique] = useState(initialIsUnique);

  // onchange function for username input
  const checkUserNameAvailability = async (userName) => {
    try {
      setIsUnique({
        status: "loading",
        message: "Checking for user name availabilty",
      });
      const value = userName.trim();

      // calling api for checking availabilty if value is not empty
      if (value) {
        await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentor?username=${value}`,
        );
        setIsUnique({ status: true, message: "user name is available" });
      } else {
        setIsUnique({ status: false, message: "Enter a valid value" });
      }
    } catch (error) {
      setIsUnique({ status: false, message: error.response.data.message });
    }
  };

  // onblur function for name input
  const onNameBlur = (e) => {
    const name = e.target.value.trim().replaceAll(" ", "-");
    const randomNumber = window.crypto.getRandomValues(new Uint32Array(1))[0];
    const userName = `${name}-${randomNumber}`;
    setFormData({ ...formData, username: userName });
    checkUserNameAvailability(userName);
  };

  // onChange function for user name input
  const handleUserNameChange = (e) => {
    handleChange(e);
    checkUserNameAvailability(e.target.value);
  };

  // inputs list
  const inputs = [
    {
      label: "name",
      type: "text",
      name: "name",
      id: "name",
      className: "mentorFormInput",
      handleChange: handleChange,
      placeholder: "e.g. Peter Parker",
      required: true,
      value: formData.name,
      validator: validator,
      validation: "required|alpha_space",
      onBlur: onNameBlur,
    },
    {
      label: "username",
      type: "text",
      name: "username",
      id: "username",
      className: "mentorFormInput",
      onChange: handleUserNameChange,
      placeholder: "e.g. peter-parker12",
      required: true,
      value: formData.username,
      validator: validator,
      validation: "required|alpha_num_dash",
    },
    {
      label: "email",
      type: "email",
      name: "email",
      id: "email",
      className: "mentorFormInput",
      onChange: handleChange,
      placeholder: "e.g. peterparker4321@gmail.com",
      required: true,
      value: formData.email,
      validator: validator,
      validation: "required|email",
    },
    {
      label: "phone",
      type: "number",
      name: "mobile",
      id: "mobile",
      className: "mentorFormInput",
      onChange: handleChange,
      placeholder: "0123456789",
      required: true,
      value: formData.mobile,
      validator: validator,
      validation: "required|phone",
    },
  ];

  // logic for image input
  const [showImageCropper, setShowImageCropper] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [fileName, setFileName] = useState("");

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

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setShowImageCropper(true);
    const base64 = await convertBase64(file);
    setFileName(file.name);
    setImageSrc(base64);
  };

  const handleImageCropperChange = async (imageSrc) => {
    setShowImageCropper(false);
    if (!imageSrc) return;
    setImageSrc(imageSrc);
    const imageClouindaryUrl = await uploadToCloudinary(imageSrc);
    handleUploadImageChange(fileName, imageClouindaryUrl);
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

  return (
    <>
      {showImageCropper && (
        <ImageCropper
          imageSrc={imageSrc}
          changeImageSrc={handleImageCropperChange}
        />
      )}
      <p className="mentorFormHeading">Tell us about yourself</p>
      {/* google signin button start */}
      <div style={{ gridColumn: "1/3" }}>
        <div id="googleSignInButton"></div>
      </div>
      {/* google signin button ends */}

      {/* image section start */}
      <div style={{ gridColumn: "1/3" }} className="mentorUploudPhoto">
        <img
          src={
            !formData.image
              ? "/assets/img/icon/no-profile-picture.webp"
              : formData.image
          }
          alt="Profile Picture"
          className="mentorPhoto"
        />
        <div>
          <label
            htmlFor="mentorProfile"
            className="mentorFormButton theme-button-color"
          >
            {formData.image !== null ? "Change Image" : "Upload Image"}
          </label>
          <input
            type="file"
            accept="image/*"
            id="mentorProfile"
            className="mentorFormInput"
            name="mentorProfileImage"
            onChange={(e) => handleImageChange(e)}
            hidden
            required
            aria-label="Upload your image"
            aria-required="true"
          />
        </div>
      </div>
      {/* image section ends */}

      {/* user name avialability info start*/}
      <p
        className={clsx(
          "tw-text-sm tw-text-right tw-capitalize",
          isUnique.status == true && ["tw-text-green-500"],
          isUnique.status == false && ["tw-text-red-500"],
        )}
      >
        {isUnique.message}
      </p>
      {/* user name avialability info end*/}

      {/* inputs start */}
      {inputs.map((input, index) => (
        <Input {...input} key={index} />
      ))}
      {/* inputs end */}

      {/* bio section start */}
      <div style={{ gridColumn: "1/3" }} className="div">
        <label className="label" htmlFor="description">
          DESCRIPTION
        </label>
        {validator.current.message(
          "description",
          formData.description,
          "required",
        )}
        <textarea
          cols="10"
          rows="7"
          name="description"
          id="description"
          className="mentorFormInput"
          onChange={(e) => handleChange(e)}
          placeholder="I've done my Bacherlor's from IIT Delhi. I have been working as SDE-I for past 1 years at microsoft..."
          required
          value={formData.description}
          aria-required="true"
        />
      </div>
      {/* bio section ends*/}
    </>
  );
}

export default PersonDetails;
