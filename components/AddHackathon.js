import React, { useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import FormModal from "./FormModal";

const AddHackathon = ({ handleShow }) => {
  const HackathonLabels = [
    "Web",
    "Upcoming",
    "Beginner Friendly",
    "Programming",
    "Blockchain",
  ];

  const options = HackathonLabels.map((label) => {
    return { value: label, label: label };
  });

  const [formData, setFormData] = useState({
    image: "",
    imageAlt: "",
    title: "",
    description: "",
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
      placeholder: "e.g. ETHBarcelona",
      // required: true,
      value: formData.title,
      validator: validator,
      validation: "required",
      column: "span 3",
    },
    {
      label: "description",
      type: "text",
      name: "description",
      placeholder:
        "e.g. ETHBarcelona is an experience for web3 builders, leaders, thinkers, artists and creators in general that celebrate the values of decentralization, public goods and social impact.",
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
      placeholder: "e.g. https://ethbarcelona.devfolio.co/",
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
      title: "",
      description: "",
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
    const newHackathon = {
      hackathonTitle: formData.title,
      hackathonDescription: formData.description,
      hackathonLink: formData.link,
      hackathonTags: formData.tags,
      hackathonImage: formData.image,
      hackathonImageAlt: formData.imageAlt,
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
        modalTitle={"Add Hackathon"}
        validator={validator}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default AddHackathon;
