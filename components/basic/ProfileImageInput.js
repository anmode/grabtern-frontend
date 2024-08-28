import React, { useState } from "react";
import axios from "axios";
import ImageCropper from "./ImageCropper";
import { toast } from "react-toastify";

function ProfileImageInput({ image, setImage, className }) {
  const [showImageCropper, setShowImageCropper] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  // convert to base 64
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

  // handel change function for image input
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setShowImageCropper(true);
    const base64 = await convertBase64(file);
    setImageSrc(base64);
  };

  // handle change function for image cropper image
  const handleImageCropperChange = async (imageSrc) => {
    setShowImageCropper(false);
    if (!imageSrc) return;
    setImageSrc(imageSrc);
    const imageClouindaryUrl = await uploadToCloudinary(imageSrc);
    setImage(imageClouindaryUrl);
  };

  // function for uploading image to cloudinary
  const uploadToCloudinary = async (imageSrc) => {
    const res = await fetch(imageSrc);
    const blob = await res.blob();
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;
    try {
      toast.info("Wait,  we are uploading your profile image");
      const formData = new FormData();
      formData.append("file", blob);
      formData.append("upload_preset", "image_preset");
      const res = await axios.post(url, formData);
      toast.success("Profile image uploaded sucessfully");
      return res.data.secure_url;
    } catch (error) {
      toast.error("Failed to save profile pcicture");
    }
  };
  return (
    <>
      {/* image cropper */}
      {showImageCropper && (
        <ImageCropper
          imageSrc={imageSrc}
          changeImageSrc={handleImageCropperChange}
        />
      )}
      {/* main component */}
      <div className={className}>
        {/* image preview */}
        <img
          src={!image ? "/assets/img/icon/no-profile-picture.webp" : image}
          alt="Profile Picture"
          className="mentorPhoto"
        />
        {/* image input with label */}
        <div>
          <label
            htmlFor="mentorProfileOne"
            className="mentorFormButton theme-button-color !tw-font-medium"
          >
            {!image ? "Upload Image" : "Change Image"}
          </label>
          <input
            type="file"
            accept="image/*"
            id="mentorProfileOne"
            className="mentorFormInput"
            name="mentorProfileImage"
            hidden
            onChange={(e) => handleImageChange(e)}
            required
            aria-label="Upload your image"
            aria-required="true"
          />
        </div>
      </div>
    </>
  );
}

export default ProfileImageInput;
