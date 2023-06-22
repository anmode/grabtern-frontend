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
      className: "mentorFormInput",
      onChange: handleChange,
      placeholder: "e.g. MITACS",
      required: true,
      value: formData.internAt,
      validator: validator,
      validation: 'required|alpha_space'
    },
    {
      label: "current status",
      type: "text",
      name: "currentStatus",
      className: "mentorFormInput",
      onChange: handleChange,
      placeholder: "e.g. Amazon SDE-I",
      required: true,
      value: formData.currentStatus,
      validator: validator,
      validation: 'required|alpha_num_dash_space'
    },
    {
      label: "linkedIn",
      type: "url",
      name: "linkedin",
      className: "mentorFormInput",
      onChange: handleSocialChange,
      placeholder: "e.g. https://www.linkedin.com/peterparker",
      required: true,
      pattern: "https://linkedin.com/in/*",
      value: formData.social.linkedin,
      validator: validator,
      validation: ['required', {'regex': 'https://linkedin.com/in/*'}]
    },
    {
      label: "twitter",
      type: "url",
      name: "twitter",
      className: "mentorFormInput",
      onChange: handleSocialChange,
      placeholder: "e.g. https://www.twitter.com/peterparker",
      required: true,
      pattern: "https://twitter.com/*",
      value: formData.social.twitter,
      validator: validator,
      validation: 'required|url'
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
