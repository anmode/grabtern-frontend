import React, {useEffect} from "react";
import Input from "./Input";

function PersonDetails({ formData, handleChange, handleUploadImageChange, handleCallbackResponse }) {
  // inputs list
  const inputs = [
    {
      label: "name",
      type: "text",
      name: "name",
      className: "mentorFormInput",
      handleChange: handleChange,
      placeholder: "e.g. Peter Parker",
      required: true,
      value: formData.name,
    },
    {
      label: "username",
      type: "text",
      name: "username",
      className: "mentorFormInput",
      onChange: handleChange,
      placeholder: "e.g. peter-parker12",
      required: true,
      value: formData.username,
    },
    {
      label: "email",
      type: "text",
      name: "email",
      className: "mentorFormInput",
      onChange: handleChange,
      placeholder: "e.g. peterparker4321@gmail.com",
      required: true,
      value: formData.email,
    },
    {
      label: "phone",
      type: "number",
      name: "mobile",
      className: "mentorFormInput",
      onChange: handleChange,
      placeholder: "0123456789",
      required: true,
      value: formData.mobile,
    },
  ];

  //   google sign in button functions
  useEffect(() => {
    setInterval(() => {
      if (typeof window !== "undefined") {
        if (document.querySelector("#credential_picker_container") !== null) {
          document.querySelector(".overlay").classList.add("show");
        }
      }
    }, 1300);

    google.accounts.id.initialize({
      client_id:
        "1094459761-kbb3qbgafu8avkgfe9fk8f85fr5418a8.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById("googleSignInButton"),
      { theme: "outline", size: "large" }
    );
    google.accounts.id.prompt();
  }, []);

  return (
    <>
      {/* google signin button start */}
      <div style={{ gridColumn: "1/3" }}>
        <div id="googleSignInButton"></div>
      </div>
      {/* google signin button ends */}

      {/* image section start */}
      <div style={{ gridColumn: "1/3" }} className="mentorUploudPhoto">
        <img
          src={
            formData.mentorImg.image.length === 0
              ? "/assets/img/icon/no-profile-picture.webp"
              : formData.mentorImg.image
          }
          className="mentorPhoto"
        />
        <div>
          <label
            htmlFor="mentorProfile"
            className="text-center text-white theme-button-color px-5 py-2 rounded cursor-pointer"
          >
            {formData.mentorImg.image.length > 0
              ? "Change Image"
              : "Upload Image"}
          </label>
          <p className="px-2 ">{formData.mentorImg.name}</p>
          <input
            type="file"
            accept="image/*"
            id="mentorProfile"
            name="mentorProfile"
            className="mentorFormInput"
            onChange={(e) => handleUploadImageChange(e)}
            hidden
            required
          />
        </div>
      </div>
      {/* image section ends */}

      {/* inputs start */}
      {inputs.map((input, index) => (
        <Input {...input} key={index} />
      ))}
      {/* inputs end */}

      {/* bio section start */}
      <div style={{ gridColumn: "1/3" }}>
        <label className="label" htmlFor="description">
          DESCRIPTION
        </label>
        <textarea
          cols="10"
          rows="7"
          name="description"
          className="mentorFormInput"
          onChange={(e) => handleChange(e)}
          placeholder="I've done my Bacherlor's from IIT Delhi. I have been working as SDE-I for past 1 years at microsoft..."
          required
          value={formData.description}
        />
      </div>
      {/* bio section ends*/}
    </>
  );
}

export default PersonDetails;
