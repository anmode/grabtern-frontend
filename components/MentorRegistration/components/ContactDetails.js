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
      label: "linkedIn",
      type: "url",
      name: "linkedin",
      id: "linkedin",
      className: "mentorFormInput",
      onChange: handleSocialChange,
      placeholder: "e.g. https://www.linkedin.com/in/peterparker",
      required: true,
      pattern: "https://www.linkedin.com/in/*",
      value: formData.social.linkedin,
      validator: validator,
      validation: [
        "required",
        "url",
        {
          regex:
            "^https://(www.)?linkedin.com/((in/[^/]+/?)|(pub/[^/]+/((w|d)+/?){3}))$",
        },
      ],
    },
    {
      label: "twitter",
      type: "url",
      name: "twitter",
      id: "twitter",
      className: "mentorFormInput",
      onChange: handleSocialChange,
      placeholder: "e.g. https://twitter.com/peterparker",
      required: true,
      pattern: "https://twitter.com/*",
      value: formData.social.twitter,
      validator: validator,
      validation: [
        "required",
        "url",
        {
          regex:
            "^https://(www.)?twitter.com/(?![a-zA-Z0-9_]+/)([a-zA-Z0-9_]+)",
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
