import React, { useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import FormModal from "./FormModal";

const AddInternship = ({ handleShow }) => {
  const InternshipLabels = [
    "Web",
    "Blockchain",
    "Female Centric",
    "Part Time",
    "Major League Hacking",
    "Research",
  ];

  const options = InternshipLabels.map((label) => {
    return { value: label, label: label };
  });

  const [formData, setFormData] = useState({
    image: "",
    imageAlt: "",
    categories: "GrabTern",
    title: "",
    description: "",
    stipend: 0,
    price: 1,
    link: "",
    tags: [],
  });

  // for validation
  const validator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState();

  const inputs = [
    {
      label: "title",
      type: "text",
      name: "title",
      placeholder: "e.g. MITACS",
      // required: true,
      value: formData.title,
      validator: validator,
      validation: "required",
      column: "span 2",
    },
    {
      label: "stipend",
      type: "number",
      name: "stipend",
      placeholder: "e.g. 1250",
      // required: true,
      value: formData.stipend,
      validator: validator,
      validation: "numeric|min:0,num",
      column: "span 1",
    },
    {
      label: "description",
      type: "text",
      name: "description",
      placeholder:
        "e.g. Outreachy provides internships to people subject to systemic bias and impacted by underrepresentation in the technical industry where they are living.",
      element: "textarea",
      // required: true,
      value: formData.description,
      validator: validator,
      validation: "required",
      column: "span 3",
    },
    {
      label: "link",
      type: "text",
      name: "link",
      placeholder: "e.g. https://www.outreachy.org/",
      // required: true,
      value: formData.link,
      validator: validator,
      validation: "required|url",
      column: "span 3",
    },
  ];

  const handleCancel = () => {
    setFormData({
      image: "",
      imageAlt: "",
      categories: "GrabTern",
      title: "",
      description: "",
      rating: 0,
      payed: 0,
      price: 0,
      link: "",
      tags: [],
    });
    handleShow(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator.current.allValid()) {
      validator.current.hideMessages();
      handleShow(false);
      forceUpdate(1);
    } else {
      validator.current.showMessages();
      forceUpdate(2);
    }

    const newInternship = {
      internshipTitle: formData.title,
      internshipDescription: formData.description,
      internshipLink: formData.link,
      internshipStipend: formData.stipend,
      internshipTags: formData.tags,
      internshipImage: formData.image,
      internshipImageAlt: formData.imageAlt,
      internhsipCategories: formData.categories,
      internshipPrice: formData.price,
    };
  };

  return (
    <div>
      <FormModal
        setFormData={setFormData}
        formData={formData}
        inputs={inputs}
        tagsOptions={options}
        handleSubmit={handleSubmit}
        modalTitle={"Add Internship"}
        validator={validator}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default AddInternship;
