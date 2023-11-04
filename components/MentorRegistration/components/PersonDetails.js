import React, { useState } from "react";
import Input from "./Input";
import axios from "axios";
import clsx from "clsx";
import { ToastContainer } from "react-toastify";
import ProfileImageInput from "../../basic/ProfileImageInput";
import { checkUserNameAvailability } from "../services/userAvailabilityService.js";

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
  const onNameBlur = (e) => {
    const name = e.target.value.trim().replaceAll(" ", "-");
    const randomNumber = window.crypto.getRandomValues(new Uint32Array(1))[0];
    const userName = `${name}-${randomNumber}`;
    setFormData({ ...formData, username: userName });

    // Use the imported function to check user name availability
    checkUserNameAvailability(userName).then((result) => {
      setIsUnique(result);
    });
  };

  // onChange function for user name input
  const handleUserNameChange = (e) => {
    handleChange(e);

    // Use the imported function to check user name availability
    checkUserNameAvailability(e.target.value).then((result) => {
      setIsUnique(result);
    });
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

  return (
    <>
      <ToastContainer />
      <p className="mentorFormHeading">Tell us about yourself</p>
      {/* google signin button start */}
      <div style={{ gridColumn: "1/3" }}>
        <div id="googleSignInButton"></div>
      </div>
      {/* google signin button ends */}

      {/* image section start */}
      <ProfileImageInput
        image={formData.image}
        setImage={handleUploadImageChange}
        className="mentorUploudPhoto tw-col-start-1 tw-col-span-2"
      />
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
        <label className="label tw-text-base-500" htmlFor="description">
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
          className="mentorFormInput tw-text-base-500"
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
