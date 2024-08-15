import { useState, useRef, useEffect } from "react";
import SimpleReactValidator from "simple-react-validator";
import Input from "./Input";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import clsx from "clsx";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { checkUserNameAvailability } from "../services/userAvailabilityService.js";
import debounce from "lodash.debounce";
import ProfileImageInput from "../../basic/ProfileImageInput";

const MagicUrlPopUp = ({ isOpen, setIsOpen, initialData }) => {
  const router = useRouter();
  // state for unique userName
  const initialIsUnique = { status: "", message: "" };
  const [isUnique, setIsUnique] = useState(initialIsUnique);

  // Initialize formData state with initialData
  const [formData, setFormData] = useState({
    username: initialData?.username || "",
    email: initialData?.email || "",
    mobile: initialData?.mobile || "",
    linkedin: initialData?.linkedin || "",
    image: initialData?.image || "",
    name: initialData?.name || "",
  });
  const [loader, setLoader] = useState(false);

  // for validator
  const validator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState();

  // Toggle magic URL popup
  const toggleMagicUrlPopup = () => {
    setIsOpen(!isOpen);
  };

  const debouncedUsernameCheck = debounce(async (username) => {
    const result = await checkUserNameAvailability(username);
    setIsUnique(result);
  }, 500); // Adjust the debounce delay (in milliseconds) as needed

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (name === "username") {
      debouncedUsernameCheck(value);
    }
  };

  const handleUploadImageChange = (imgUrl) => {
    setFormData((prevData) => ({ ...prevData, image: imgUrl }));
  };

  useEffect(() => {
    console.log("Initial Data Updated:", initialData);
    // Update formData if initialData changes
    setFormData((prevData) => ({
      ...prevData,
      username: initialData?.username || prevData.username,
      email: initialData?.email || prevData.email,
      mobile: initialData?.mobile || prevData.mobile,
      linkedin: initialData?.linkedin || prevData.linkedin,
      image: initialData?.image || prevData.image,
      name: initialData?.name || prevData.name,
    }));
  }, [initialData]);

  // Handle submit
  const handleSubmit = async () => {
    try {
      setLoader(true);
      console.log(formData);
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorRegisterWithMagicUrl`;
      const res = await axios.post(url, formData);
      setLoader(false);
      toast.success(res.data.message);
      setFormData({
        username: "",
        email: "",
        mobile: "",
        linkedin: "",
        image: "",
        name: "",
      });
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      setLoader(false);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        toast.error(error.response.data.message);
      }
    }
  };

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

  const inputs = [
    {
      label: "username",
      type: "text",
      name: "username",
      id: "username",
      onChange: onChange,
      divClassName: "tw-col-start-1 tw-col-span-2",
      placeholder: "e.g. anmode",
      required: true,
      value: formData.username,
      validator: validator,
      validation: "required|alpha_num_dash",
    },
    {
      label: "mobile",
      type: "number",
      name: "mobile",
      id: "mobile",
      onChange: onChange,
      placeholder: "0123456789",
      divClassName: "tw-col-start-1 tw-col-span-2",
      required: true,
      value: formData.mobile,
      validator: validator,
      validation: "required|phone",
    },
    {
      label: "email",
      type: "email",
      name: "email",
      id: "email",
      onChange: onChange,
      divClassName: "tw-col-start-1 tw-col-span-2",
      placeholder: "e.g. peterparker4321@gmail.com",
      required: true,
      value: formData.email,
      validator: validator,
      validation: "required|email",
    },
    {
      label: "linkedIn Username",
      type: "text",
      name: "linkedin",
      id: "linkedin",
      onChange: onChange,
      placeholder: "peter-parker-001",
      divClassName: "tw-col-start-1 tw-col-span-2",
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
    <div
      className={clsx(
        "tw-z-[2] tw-fixed -tw-bottom-0 tw-right-5",
        "tw-max-w-[450px] tw-border tw-border-base-300 tw-text-base-500",
        "tw-shadow-xl tw-bg-base-100 tw-rounded-xl",
      )}
    >
      {/* Header */}
      <div
        className={clsx(
          "tw-flex tw-justify-between tw-items-center ",
          "tw-px-10 tw-py-5 tw-border-bottom tw-border-base-300",
          "tw-border-b-2",
        )}
      >
        <p className="tw-text-lg tw-font-medium tw-text-base-500">
          Register Using Magic Url
        </p>
        <div onClick={toggleMagicUrlPopup} className="tw-cursor-pointer">
          {isOpen ? (
            <MdKeyboardArrowDown className="tw-text-2xl" />
          ) : (
            <MdKeyboardArrowUp className="tw-text-2xl" />
          )}
        </div>
      </div>

      {/* Google Sign-In button */}
      <div style={{ gridColumn: "1/3" }}>
        <div id="googleSignInButton2"></div>
      </div>

      {/* User Name Availability Info */}
      <p
        className={clsx(
          "tw-text-sm tw-text-right tw-capitalize",
          isUnique.status === true && ["tw-text-green-500"],
          isUnique.status === false && ["tw-text-red-500"],
        )}
      >
        {isUnique.message}
      </p>

      {/* Form */}
      <div className={clsx("tw-overflow-hidden", !isOpen && "tw-h-0")}>
        <form
          className={clsx(
            "mentorForm",
            "!tw-grid-cols-1 !tw-rounded-none !tw-shadow-none",
            "!tw-px-10 !tw-py-5",
          )}
          onSubmit={onSubmit}
          disabled={loader}
        >
          {/* Profile Image Input */}
          <ProfileImageInput
            image={formData.image}
            setImage={handleUploadImageChange}
            className="mentorUploudPhoto tw-col-start-1 tw-col-span-2"
          />

          {/* Inputs */}
          {inputs.map((input) => (
            <Input {...input} key={input.name} />
          ))}
          {/* Register Button */}
          <button
            type="submit"
            className={clsx(
              "mentorFormButton theme-button-color",
              "disabled:tw-cursor-wait disabled:!tw-bg-primary-10",
              "tw-col-start-1 tw-col-span-2 tw-mt-2",
            )}
            onClick={onSubmit}
            disabled={loader}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default MagicUrlPopUp;
