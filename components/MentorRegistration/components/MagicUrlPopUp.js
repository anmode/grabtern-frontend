import { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import Input from "./Input";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import styles from "../../../styles/Overlay.module.css";

const MagicUrlPopUp = ({ isOpen, setIsOpen }) => {
  const router = useRouter();
  // for form state
  const initialState = {
    email: "",
    mobile: "",
    linkedin: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  // for validator
  const validator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState();

  // onChange for inputs
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handleSubmit
  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorRegisterWithMagicUrl`;
      const res = await axios.post(url, formData);
      setIsLoading(false);
      toast.success(res.data.message);
      setFormData(initialState);
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        toast.error(error.response.data.message);
      }
    }
  };

  // submit function
  const onSubmit = (e) => {
    e.preventDefault();
    if (validator.current.allValid()) {
      validator.current.hideMessages();
      handleSubmit();
      forceUpdate(1);
    } else {
      validator.current.showMessages();
      forceUpdate(2);
    }
  };

  // inputs
  const inputs = [
    {
      label: "email",
      type: "email",
      name: "email",
      id: "email",
      className: "mentorFormInput",
      onChange: onChange,
      placeholder: "e.g. peterparker4321@gmail.com",
      required: true,
      value: formData.email,
      validator: validator,
      validation: "required|email",
    },
    {
      label: "mobile",
      type: "number",
      name: "mobile",
      id: "mobile",
      className: "mentorFormInput",
      onChange: onChange,
      placeholder: "0123456789",
      required: true,
      value: formData.mobile,
      validator: validator,
      validation: "required|phone",
    },
    {
      label: "linkedIn Username",
      type: "text",
      name: "linkedin",
      id: "linkedin",
      className: "mentorFormInput",
      onChange: onChange,
      placeholder: "peter-parker-001",
      required: true,
      pattern: "https://www.linkedin.com/in/*",
      value: formData.linkedin,
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
  ];

  return (
    <div className="mentorFormRegisration">
      {/* <div className={styles.overlay} onClick={() => {setIsOpen(false)}} /> */}
      <form className="mentorForm" onSubmit={onSubmit} disabled={isLoading}>
        <p className="mentorFormHeading">Register with Magic Url</p>
        {inputs.map((input) => (
          <Input {...input} key={input.name} />
        ))}
        <div className="tw-flex tw-items-center tw-justify-between tw-col-span-2">
          <button
            type="submit"
            className="mentorFormButton theme-button-color disabled:tw-cursor-wait disabled:!tw-bg-primary-10"
            onClick={onSubmit}
            disabled={isLoading}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default MagicUrlPopUp;
