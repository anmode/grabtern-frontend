import React from "react";

function PersonDetails({formData, handleChange}) {
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

      {/* name and username section start */}
      <div>
        <label className="label" htmlFor="name">
          NAME
        </label>

        <input
          type="text"
          name="name"
          className="mentorFormInput"
          onChange={(e) => handleChange(e)}
          placeholder="e.g. Peter Parker"
          required
          value={formData.name}
        />
      </div>
      <div>
        <label className="label" htmlFor="username">
          USERNAME
        </label>

        <input
          type="text"
          name="username"
          className="mentorFormInput"
          onChange={(e) => handleChange(e)}
          placeholder="e.g. peter-parker12"
          required
          value={formData.username}
        />
      </div>
      {/* name and user name section end */}

      {/* email and phone section start */}
      <div>
        <label className="label" htmlFor="email">
          EMAIL
        </label>

        <input
          type="text"
          name="email"
          className="mentorFormInput"
          onChange={(e) => handleChange(e)}
          placeholder="e.g. peterparker4321#gmail.com"
          required
          value={formData.email}
        />
      </div>
      <div>
        <label className="label" htmlFor="mobile">
          PHONE
        </label>

        <input
          type="number"
          name="mobile"
          className="mentorFormInput"
          onChange={(e) => handleChange(e)}
          placeholder="0123456789"
          required
          value={formData.mobile}
        />
      </div>
      {/* email and phone ends */}
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
