import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import SimpleReactValidator from "simple-react-validator";

import { useRouter } from "next/router";
import Overlay from "../basic/Overlay";
import { ToastContainer, toast } from "react-toastify";
import PersonDetails from "./components/PersonDetails";
import ContactDetails from "./components/ContactDetails";
import ScheduleDetails from "./components/ScheduleDetails";
import SessionDetails from "./components/SessionDetails";
import "react-toastify/dist/ReactToastify.css";
import MagicUrlPopUp from "./components/MagicUrlPopUp";
import Loader from "../UI/Loader";

export default function MentorForm() {
  const router = useRouter();
  const [margicUrlPopup, setMagicUrlPopup] = useState(false);
  const [waitTime, setWaitTime] = useState(5);
  // const [isChecked, setIsChecked] = useState(false);
  const [addtoast, setaddToast] = useState(false);
  const [bookSession, setBookSession] = useState({
    sessionName: "1 on 1 Mentorship",
    sessionDescription: "Achieve your goals faster with customized road map",
    sessionType: "video-meeting",
    sessionMeetingDuration: "30",
    // peopleAttend: "",
    priceSession: "",
  });
  const [formStep, setFormStep] = useState(1);
  const [loader, setLoader] = useState(false);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const InitialFormState = {
    username: "",
    name: "",
    email: "",
    mobile: "",
    internAt: "",
    currentStatus: "",
    description: "",
    image: "",
    social: {
      linkedin: "",
      twitter: "",
    },
    schedules: [
      {
        day: "monday",
        endsAt: "11:30",
        startsAt: "10:22",
        timezone: "(GMT+05:30) Asia/Kolkata",
      },
    ],
    sessions: [
      {
        description: "Achieve your goals faster with customized roadmap",
        duration: "45",
        name: "1 on 1 Mentorship",
        price: "100",
        type: "Video Meeting",
      },
    ],
    verified: false,
  };
  const [formData, setFormData] = useState(InitialFormState);

  const handleChange = (e) => {
    // console.log(formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSocialChange = (e) => {
    setFormData({
      ...formData,
      social: { ...formData.social, [e.target.name]: e.target.value },
    });
  };

  // callback function for google sign in
  const callbackFunction = (userObject) => {
    setFormData({
      ...InitialFormState,
      name: userObject.name,
      email: userObject.email,
      image: userObject.picture,
    });
  };

  useEffect(() => {
    if (addtoast === true && waitTime !== 0) {
      setTimeout(() => {
        setWaitTime((value) => (value -= 1));
      }, 1000);
    }
    if (waitTime === 0) {
      router.push("/");
    }
  });

  const handleUploadImageChange = (imgUrl) => {
    setFormData({ ...formData, image: imgUrl });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      setLoader(true);
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorRegister`;
      console.log(error);
      const { data: res } = await axios.post(url, formData);
      setLoader(false);
      toast.success("Registered successfully");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      setLoader(false);
      console.log(error);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        toast.error(error.response.data.message);
      }
    }
  };

  const changeArray = (name, newValue) => {
    setFormData({ ...formData, [name]: newValue });
  };
  // for validator
  const validator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState();

  // submit function
  const onSubmit = (e) => {
    e.preventDefault();
    if (validator.current.allValid()) {
      validator.current.hideMessages();
      handleSubmit(e);
      forceUpdate(1);
    } else {
      validator.current.showMessages();
      forceUpdate(2);
    }
  };

  // for next and previous buttons
  const prevStep = (e) => {
    e.preventDefault();
    setFormStep(formStep - 1);
  };

  const nextStep = (e) => {
    e.preventDefault();
    if (validator.current.allValid()) {
      validator.current.hideMessages();
      setFormStep(formStep + 1);
      forceUpdate(1);
    } else {
      validator.current.showMessages();
      forceUpdate(2);
    }
  };
  return (
    <>
      <MagicUrlPopUp
        isOpen={margicUrlPopup}
        setIsOpen={setMagicUrlPopup}
        initialData={{
          username: formData.username,
          email: formData.email,
          mobile: formData.mobile,
          linkedin: formData.social.linkedin,
          image: formData.image,
          name: formData.name,
        }}
      />
      <div className="mentorFormRegisration">
        <Overlay
          callbackFunction={callbackFunction}
          onDisappear={() => setMagicUrlPopup(true)}
        />
        <div className="tw-container tw-mx-auto tw-px-4">
          <form
            className="mentorForm"
            onSubmit={onSubmit}
            aria-label="Mentor registration form"
          >
            {/* steps tracker start */}
            <div className="tw-col-span-2 tw-flex tw-justify-between tw-items-center tw-mb-8">
              <div
                aria-label="Person Details"
                className={`trackerStep ${
                  formStep == 1 ? "active" : formStep > 1 ? "done" : ""
                }`}
              >
                ✔
              </div>
              <div className="trackerLine"></div>
              <div
                aria-label="Contact Details"
                className={`trackerStep ${
                  formStep == 2 ? "active" : formStep > 2 ? "done" : ""
                }`}
              >
                ✔
              </div>
              <div className="trackerLine"></div>
              <div
                className={`trackerStep ${
                  formStep == 3 ? "active" : formStep > 3 ? "done" : ""
                }`}
              >
                ✔
              </div>
              <div className="trackerLine"></div>
              <div
                className={`trackerStep ${
                  formStep == 4 ? "active" : formStep > 3 ? "done" : ""
                }`}
              >
                ✔
              </div>
            </div>
            {/* steps tracker end */}
            {/* form sections start */}
            <>
              {{
                1: (
                  <PersonDetails
                    formData={formData}
                    setFormData={setFormData}
                    handleChange={handleChange}
                    handleUploadImageChange={handleUploadImageChange}
                    validator={validator}
                  />
                ),
                2: (
                  <ContactDetails
                    formData={formData}
                    handleChange={handleChange}
                    handleSocialChange={handleSocialChange}
                    validator={validator}
                  />
                ),
                3: (
                  <ScheduleDetails
                    formData={formData}
                    changeArray={changeArray}
                    validator={validator}
                  />
                ),
                4: (
                  <SessionDetails
                    formData={formData}
                    changeArray={changeArray}
                    validator={validator}
                  />
                ),
              }[formStep] || (
                <PersonDetails
                  formData={formData}
                  handleChange={handleChange}
                  handleUploadImageChange={handleUploadImageChange}
                  handleCallbackResponse={handleCallbackResponse}
                />
              )}
            </>
            {/* form sections end */}

            {error && (
              <div style={{ color: "red", gridColumn: "1/3" }} role="alert">
                {error}
              </div>
            )}
            <hr
              style={{
                margin: "10px 0",
                borderColor: "grey",
                gridColumn: "1/3",
              }}
            />
            {msg && (
              <div style={{ color: "green", gridColumn: "1/3" }}>{msg}</div>
            )}
            {/* prev next and submit buttons start */}
            <div className="tw-flex tw-items-center tw-justify-between flex tw-flex-row-reverse tw-col-span-2">
              {!loader ? (
                <button
                  type="submit"
                  aria-label="Register"
                  className="mentorFormButton theme-button-color"
                  onClick={formStep == 4 ? onSubmit : nextStep}
                >
                  {formStep == 4 ? "Register" : "Next"}
                </button>
              ) : (
                <Loader width="25px" />
              )}

              {formStep != 1 && (
                <button
                  type="button"
                  aria-label="Back"
                  className="mentorFormButton tw-bg-base-400"
                  onClick={prevStep}
                >
                  Back
                </button>
              )}
            </div>
            {/* prev next and submit buttons end */}

            {/* toast and loading container start */}
            <div>
              <ToastContainer />
            </div>
            {/* toast and loading container end */}

            {/* bottom link start */}
            <p>
              Already have mentor account?{" "}
              <a
                className="tw-underline tw-decoration-[1.5px] hover:tw-opacity-80"
                href="/mentorLogin"
              >
                Login
              </a>
            </p>
            <p>
              Facing difficulties?{" "}
              <a
                className="tw-underline tw-decoration-[1.5px] hover:tw-opacity-80"
                href="//mentor/registerSendCV"
              >
                Send your CV/Resume to us!
              </a>
            </p>
            {/* bottom links end */}
          </form>
        </div>
      </div>
    </>
  );
}
