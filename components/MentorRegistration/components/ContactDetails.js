import React from "react";
import Input from "./Input";

function ContactDetails({
  formData,
  handleChange,
  handleSocialChange,
  validator,
}) {
  const inputs = [
    {
      label: "intern",
      type: "text",
      name: "internAt",
      id: "internAt",
      className: "mentorFormInput",
      onChange: handleChange,
      placeholder: "e.g. MITACS",
      required: true,
      value: formData.internAt,
      validator: validator,
      validation: "required|alpha_num_dash_space",
    },
    {
      label: "current status",
      type: "text",
      name: "currentStatus",
      id: "currentStatus",
      className: "mentorFormInput",
      onChange: handleChange,
      placeholder: "e.g. Amazon SDE-I",
      required: true,
      value: formData.currentStatus,
      validator: validator,
      validation: "required|alpha_num_dash_space",
    },
    {
      label: "linkedIn Username",
      type: "text",
      name: "linkedin",
      id: "linkedin",
      className: "mentorFormInput",
      onChange: handleSocialChange,
      placeholder: "peter-parker-001",
      required: true,
      pattern: "https://www.linkedin.com/in/*",
      value: formData.social.linkedin,
      validator: validator,
      validation: [
        "required",
        "alpha_num_dash",
        "min:3",
        "max:100",
        {
          regex: "[a-z, A-Z]+[0-9,a-z,A-Z,-]*",
        },
      ],
    },
    {
      label: "twitter Username",
      type: "text",
      name: "twitter",
      id: "twitter",
      className: "mentorFormInput",
      onChange: handleSocialChange,
      placeholder: "e.g. peter_parker",
      required: true,
      pattern: "https://twitter.com/*",
      value: formData.social.twitter,
      validator: validator,
      validation: [
        "required",
        "min:1",
        "max:15",
        {
          regex: "[0-9,a-z,A-Z,_]*",
        },
      ],
    },
  ];
  return (
    <>
      <p className="mentorFormHeading">Tell us about your Experience</p>
      {inputs.map((input, index) => (
        <Input {...input} key={index} />
      ))}
    </>
  );
}

export default ContactDetails;
