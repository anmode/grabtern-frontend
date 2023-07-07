import React, { useEffect } from "react";
import Input from "./Input";

function PersonDetails({
  formData,
  handleChange,
  handleUploadImageChange,
  validator,
}) {
  // inputs list
  const inputs = [
    {
      label: "name",
      type: "text",
      name: "name",
      className: "mentorFormInput",
      handleChange: handleChange,
      placeholder: "e.g. Peter Parker",
      required: true,
      value: formData.name,
      validator: validator,
      validation: "required|alpha_space",
    },
    {
      label: "username",
      type: "text",
      name: "username",
      className: "mentorFormInput",
      onChange: handleChange,
      placeholder: "e.g. peter-parker12",
      required: true,
      value: formData.username,
      validator: validator,
      validation: "required|alpha_num",
    },
    {
      label: "email",
      type: "email",
      name: "email",
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
      className: "mentorFormInput",
      onChange: handleChange,
      placeholder: "0123456789",
      required: true,
      value: formData.mobile,
      validator: validator,
      validation: "required|phone",
    },
  ];

  return (
    <>
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
            formData.mentorImg.image.length === 0
              ? "/assets/img/icon/no-profile-picture.webp"
              : formData.mentorImg.image
          }
          className="mentorPhoto"
        />
        <div>
          <label
            htmlFor="mentorProfile"
            className="mentorFormButton theme-button-color"
          >
            {formData.mentorImg.image.length > 0
              ? "Change Image"
              : "Upload Image"}
          </label>
          {validator.current.message(
            "mentorProfileImage",
            formData.mentorImg.name,
            "required",
          )}
          <p className="px-2 ">{formData.mentorImg.name}</p>
          <input
            type="file"
            accept="image/*"
            id="mentorProfile"
            name="mentorProfileImage"
            className="mentorFormInput"
            onChange={(e) => handleUploadImageChange(e)}
            hidden
            required
          />
        </div>
      </div>
      {/* image section ends */}

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
          className="mentorFormInput"
          onChange={(e) => handleChange(e)}
          placeholder="I've done my Bacherlor's from IIT Delhi. I have been working as SDE-I for past 1 years at microsoft..."
          required
          value={formData.description}
        />
      </div>
      {/* bio section ends*/}
    </>
  );
}

export default PersonDetails;
