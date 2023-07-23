import React, { useState } from "react";
import axios from "axios";
import { encryptData, decryptData } from "../../hook/encryptDecrypt";
function Profile({ mentorDetail }) {
  const initialFormData = {
    name: mentorDetail?.name || "", // Make sure to handle null/undefined case
    username: mentorDetail?.username || "",
    email: mentorDetail?.email || "",
    mobile: mentorDetail?.mobile || "",
    internAt: mentorDetail?.internAt || "",
    currentStatus: mentorDetail?.currentStatus || "",
    social: {
      linkedin: mentorDetail?.social?.linkedin || "",
      twitter: mentorDetail?.social?.twitter || "",
    },
    description: mentorDetail?.description || "",
    mentorImg: mentorDetail?.mentorImg || "",
    bookSession: mentorDetail?.bookSession || [],
  };

  const [formData, setFormData] = useState(initialFormData);
  // const [formData, setFormData] = useState(mentorDetail);
  const [msg, setMsg] = useState("");
  const [step, setStep] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
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
  const nextStep = () => {
    setError("");
    setStep((val) => val + 1);
  };
  const previousStep = () => {
    setError("");
    setStep((val) => val - 1);
  };
  const handleSocialChange = (e) => {
    setFormData({
      ...formData,
      social: { ...formData.social, [e.target.name]: e.target.value },
    });
  };

  const handleUploadImageChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setFormData({ ...formData, mentorImg: base64 });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const formDataCopy = formData;
      delete formDataCopy._id;
      delete formDataCopy.password;
      delete formDataCopy.confirmPassword;
      delete formDataCopy.verified;
      delete formDataCopy.token;
      delete formDataCopy.mentorToken;
      delete formDataCopy.setupPWId;
      delete formDataCopy.__v;
      setFormData(formDataCopy);
      // console.log(formData);
      const url = `${
        process.env.NEXT_PUBLIC_BACKEND_URL
      }/api/mentors/updateMentor/${
        JSON.parse(decryptData("mentorData")).mentorToken
      }`;
      const { data: res } = await axios.post(url, formData);
      alert(res);
      setModalOpen(false);
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
    console.log(formData);
  };
  return (
    <div className="mentorDetail">
      <p
        style={{
          marginLeft: "300px",
          fontSize: "25px",
          fontWeight: "600",
          color: "black",
          marginTop: "-100px",
        }}
      >
        Profile
      </p>
      {modalOpen === true ? (
        <div className="modalPopup" style={{ marginRight: "800px" }}>
          <div
            className="modalPopupAfterRegistrationDone"
            style={{
              alignItems: "flex-start",
              maxWidth: "800px",
              width: "100%",
              maxHeight: "76rem",
              overflow: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                marginBottom: "-100px",
              }}
            >
              {step === 1 ? (
                <>
                  <h2
                    style={{
                      marginBottom: "-100px",
                      lineHeight: "0",
                      marginTop: "90px",
                      fontWeight: "bolder",
                      fontSize: "25px",
                    }}
                  >
                    Edit your profile
                  </h2>
                  <i
                    // class="fas fa-times"
                    onClick={() => setModalOpen(false)}
                    style={{
                      fontSize: "24px",
                      color: "grey",
                      marginTop: "180px",
                      cursor:'pointer',
                    }}
                  ></i>
                 
                </>
              ) : (
                <></>
              )}
            </div>
            <form className="mentorFormEdit" onSubmit={handleSubmit}>
              {step === 1 ? (
                <>
                  <div
                    style={{ gridColumn: "1/3", marginLeft: "500" }}
                    className="mentorUploudPhotoEdit"
                  >
                    <img
                      style={{ marginTop: "100px" }}
                      src={formData.mentorImg}
                      className="mentorPhoto"
                    />
                    <div>
                      <input
                        style={{ marginTop: "155px" }}
                        type="file"
                        name="mentorProfile"
                        onChange={(e) => handleUploadImageChange(e)}
                      />
                    </div>
                  </div>
                  <div>
                    <label for="name">NAME</label>

                    <input
                      type="text"
                      name="name"
                      className="mentorFormInput"
                      onChange={(e) => handleChange(e)}
                      placeholder="e.g. Peter Parker"
                      value={formData.name}
                    />
                  </div>
                  <div>
                    <label for="username">USERNAME</label>

                    <input
                      type="text"
                      name="username"
                      className="mentorFormInput"
                      onChange={(e) => handleChange(e)}
                      placeholder="e.g. peter-parker12"
                      value={formData.username}
                    />
                  </div>
                  <div>
                    <label for="email">EMAIL</label>

                    <input
                      type="email"
                      name="email"
                      className="mentorFormInput"
                      onChange={(e) => handleChange(e)}
                      placeholder="e.g. peterparker4321#gmail.com"
                      readOnly
                      value={formData.email}
                    />
                  </div>
                  <div>
                    <label for="mobile">PHONE</label>

                    <input
                      type="number"
                      name="mobile"
                      className="mentorFormInput"
                      onChange={(e) => handleChange(e)}
                      placeholder="0123456789"
                      value={formData.mobile}
                    />
                  </div>

                  <div>
                    <label for="linkedin">LINKEDIN</label>

                    <input
                      type="text"
                      name="linkedin"
                      className="mentorFormInput"
                      onChange={(e) => handleSocialChange(e)}
                      placeholder="e.g. https://www.linkedin.com/peterparker"
                      value={formData.social.linkedin}
                    />
                  </div>
                  <div>
                    <label for="twitter">TWITTER</label>

                    <input
                      type="text"
                      name="twitter"
                      className="mentorFormInput"
                      onChange={(e) => handleSocialChange(e)}
                      placeholder="e.g. https://www.twitter.com/peterparker"
                      value={formData.social.twitter}
                      // value={formData.social.topmate}
                    />
                  </div>
                  <div>
                    <label for="description">DESCRIPTION</label>

                    <textarea
                      cols="10"
                      rows="7"
                      name="description"
                      style={{ border: "1px solid grey" }}
                      className="mentorFormInput"
                      onChange={(e) => handleChange(e)}
                      placeholder="I've done my Bacherlor's from IIT Delhi. I have been working as SDE-I for past 1 years at microsoft..."
                      value={formData.description}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        alignItems: "center",
                        flexDirection: "row",
                      }}
                    ></div>
                  </div>
                  {error && (
                    <div style={{ color: "red", gridColumn: "1/3" }}>
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
                    <div style={{ color: "green", gridColumn: "1/3" }}>
                      {msg}
                    </div>
                  )}
                  <button
                    style={{
                      color: "white",
                      width: "fit-content",
                      padding: "15px 25px",
                      backgroundColor: "black",
                      cursor: "pointer",
                    }}
                    type="submit"
                    className="mentorFormButotn"
                  >
                    Save changes
                  </button>
                </>
              ) : (
                <>{error && <div style={{ color: "red" }}>{error}</div>}</>
              )}
            </form>
          </div>
        </div>
      ) : null}
      <div className="dashboardEdit">
        <img
          style={{
            marginLeft: "280px",
            borderRadius: "80%",
            border: "1Fpx solid black",
            height: "130px",
            width: "130px",
            marginTop: "20px",
          }}
          src={mentorDetail?.mentorImg}
        />
        <i
          style={{ marginRight: "680px" }}
          class="fas fa-edit"
          onClick={() => setModalOpen(true)}
        ></i>
      </div>
      <br />
      <p
        style={{
          marginLeft: "280px",
          color: "black",
          border: "1px solid black",
          width: "35%",
          padding: "2px",
        }}
      >
        Name : {mentorDetail?.name}
      </p>
      <br />
      <p
        style={{
          marginLeft: "280px",
          color: "black",
          border: "1px solid black",
          width: "35%",
          padding: "2px",
        }}
      >
        UserName : {mentorDetail?.username}
      </p>
      <br />
      <p
        style={{
          marginLeft: "280px",
          color: "black",
          border: "1px solid black",
          width: "35%",
          padding: "2px",
        }}
      >
        Email : {mentorDetail?.email}
      </p>
      <br />
      <p
        style={{
          marginLeft: "280px",
          color: "black",
          border: "1px solid black",
          width: "35%",
          padding: "2px",
        }}
      >
        Phone : {mentorDetail?.mobile}
      </p>
      <br />
      <p
        style={{
          marginLeft: "280px",
          color: "black",
          border: "1px solid black",
          width: "35%",
          padding: "2px",
        }}
      >
        <br /> {mentorDetail?.description}
      </p>
      <br />
      <div style={{ marginLeft: "280px" }}>
        <ul
          className="contactLinks"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            width: "35%",
            marginTop: "25px",
            // margin: "20px 0",
            marginLeft: "50px",
          }}
        >
          <li
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight: "600",
              marginLeft: "300",
              color: "black",
            }}
          >
            <i class="fas fa-envelope"></i>
            {mentorDetail?.email}
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight: "600",
              marginLeft: "300",
              color: "black",
            }}
          >
            <i class="fab fa-linkedin"></i>
            <a target="_blank" href={mentorDetail?.social.linkedin}>
              {mentorDetail?.social.linkedin}
            </a>
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight: "600",
              marginLeft: "300",
              color: "black",
            }}
          >
            <i class="fab fa-twitter"></i>

            <a target="_blank" href={mentorDetail?.social.twitter}>
              {mentorDetail?.social.twitter}
            </a>
          </li>
        </ul>
      </div>

      <br />
      <br />
    </div>
  );
}

export default Profile;
