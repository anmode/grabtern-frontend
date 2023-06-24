import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

import { useRouter } from "next/router";
import Overlay from "../Overlay";
import { ToastContainer, toast } from "react-toastify";
import PersonDetails from "./PersonDetails";
import ContactDetails from "./ContactDetails";
import ScheduleDetails from "./ScheduleDetails";
import "react-toastify/dist/ReactToastify.css";

export default function MentorForm() {
  const router = useRouter();
  //const [modalPopup, setModalPopup] = useState(false);
  const [waitTime, setWaitTime] = useState(5);
  const [isChecked, setIsChecked] = useState(false);
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
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  let number = Math.random(0 * 100);

  const InitialFormState = {
    name: "",
    email: "",
    username: "",
    mobile: "",
    internAt: "",
    currentStatus: "",
    social: {
      linkedin: "",
      twitter: "",
    },
    // bookSession: [
    //   {
    //     sessionName: "1 on 1 Mentorship",
    //     sessionDescription:
    //       "Achieve your goals faster with customized road map",
    //     sessionType: "video-meeting",
    //     sessionMeetingDuration: "30",
    //     // peopleAttend: "",
    //     priceSession: "",
    //   },
    // ],
    price: "",
    schedules: [],
    description: "",
    mentorImg: {
      name: "",
      image: "",
    },
    // resume: '',
    password: `GrabternMentorPW!${number}!`,
    confirmPassword: `GrabternMentorPW!${number}!`,
    verified: false,
  };
  const [formData, setFormData] = useState(InitialFormState);

  const handleChange = (e) => {
    console.log(formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSocialChange = (e) => {
    setFormData({
      ...formData,
      social: { ...formData.social, [e.target.name]: e.target.value },
    });
  };

  function handleCallbackResponse(response) {
    var userObject = jwt_decode(response.credential);
    // console.log(userObject);
    setFormData({
      ...InitialFormState,
      name: userObject.name,
      email: userObject.email,
      mentorImg: {
        name: userObject.name,
        image: userObject.picture,
      },
    });
    console.log(formData);
  }

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

  // const handleFileChange = e => {
  //   setFormData({ ...formData, resume: e.target.files[0] });
  // };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleUploadImageChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setFormData({ ...formData, mentorImg: { name: file.name, image: base64 } });
  };

  // const handleSessionPriceChange = (e) => {
  //   let bookSessionCopy = formData.bookSession[0];
  //   bookSessionCopy.priceSession = e.target.value;
  //   setFormData({
  //     ...formData,
  //     bookSession: [bookSessionCopy],
  //   });
  //   console.log(formData);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    // if (formData.bookSession.length !== 2) {
    //   return setError(
    //     "The number of book sessions must be more than 2 or equal to 2!"
    //   );
    // }
    if (isChecked) {
      // Register mentor
      try {
        // console.log(formData);
        setIsLoading(true);
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorRegister`;
        console.log(error);
        const { data: res } = await axios.post(url, formData);
        setIsLoading(false);
        //setModalPopup(true);
        setaddToast(true);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          toast.error(error.response.data.message);
        }
      }
    } else {
      toast.error("Please agree to the terms before submitting");
    }
  };

  function hideitems(className) {
    document.querySelector(className).style.display = "none";
  }

  const changeSchedule = (newSchedule) => {
    setFormData({ ...formData, schedules: newSchedule });
  };

  const prevStep = (e) => {
    e.preventDefault();
    setFormStep(formStep - 1);
  };
  const nextStep = (e) => {
    e.preventDefault();
    setFormStep(formStep + 1);
  };
  return (
    <div className="mentorFormRegisration">
      <div className="overlay" onClick={() => hideitems(".overlay")}></div>
      {addtoast === true ? toast.success("Registered successfully") : null}
      <div className="tw-container tw-mx-auto tw-px-4">
        <form className="mentorForm" onSubmit={handleSubmit}>
          {/* steps tracker start */}
          <div className="tw-col-span-2 tw-flex tw-justify-between tw-items-center tw-mb-8">
            <div
              className={`trackerStep ${
                formStep == 1 ? "active" : formStep > 1 ? "done" : ""
              }`}
            >
              ✔
            </div>
            <div className="trackerLine"></div>
            <div
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
          </div>
          {/* steps tracker end */}
          {/* form sections start */}
          <>
            {{
              1: (
                <PersonDetails
                  formData={formData}
                  handleChange={handleChange}
                  handleUploadImageChange={handleUploadImageChange}
                  handleCallbackResponse={handleCallbackResponse}
                />
              ),
              2: (
                <ContactDetails
                  formData={formData}
                  handleChange={handleChange}
                  handleSocialChange={handleSocialChange}
                />
              ),
              3: (
                <ScheduleDetails
                  formData={formData}
                  handleChange={handleChange}
                  changeSchedule={changeSchedule}
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
            <div style={{ color: "red", gridColumn: "1/3" }}>{error}</div>
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
            <button
              type="submit"
              className="mentorFormButton theme-button-color"
              onClick={formStep == 3 ? handleSubmit : nextStep}
            >
              {formStep == 3 ? "Register" : "Next"}
            </button>

            {formStep != 1 && (
              <button
                type="button"
                className="mentorFormButton tw-bg-slate-400"
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
            <div>
              {isLoading && (
                <img
                  style={{ width: "50px", height: "50px" }}
                  src="/assets/img/gif/Spinner.gif"
                  alt="...jljk"
                />
              )}
            </div>
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
              href="/mentorRegisterSendCV"
            >
              Send your CV/Resume to us!
            </a>
          </p>
          {/* bottom links end */}
        </form>
      </div>
    </div>
  );
}
