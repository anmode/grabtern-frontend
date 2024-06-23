import React, { useState } from "react";
import axios from "axios";
import { encryptData, decryptData } from "../hook/encryptDecrypt";
import Loader from "../components/UI/Loader";

function Dashboard({ mentorDetail }) {
  const [formData, setFormData] = useState(mentorDetail);
  const [msg, setMsg] = useState("");
  const [step, setStep] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const [bookSession, setBookSession] = useState({
    sessionName: "",
    sessionDescription: "",
    sessionType: "video-meeting",
    sessionMeetingDuration: "",
    // peopleAttend: "",
    priceSession: "",
  });
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

  const removeSession = (sessionIndex) => {
    let allBookSession = formData?.bookSession;
    allBookSession.splice(sessionIndex, 1);
    setFormData({ ...formData, bookSession: allBookSession });
  };

  const addBookSession = () => {
    console.log(bookSession);
    setError("");
    if (bookSession?.sessionType === "") {
      setBookSession({ ...bookSession, sessionType: "video-meeting" });
    }
    if (
      bookSession?.sessionName === "" ||
      bookSession?.sessionDescription === "" ||
      bookSession?.sessionType === "" ||
      bookSession?.sessionMeetingDuration === "" ||
      bookSession?.priceSession === ""
    ) {
      return setError("Please fill all input!");
    }
    let allBookSession = formData.bookSession;
    allBookSession.push(bookSession);
    setFormData({ ...formData, bookSession: allBookSession });
    console.log(formData, bookSession);
    setBookSession({
      sessionName: "",
      sessionType: "",
      sessionMeetingDuration: "",
      peopleAttend: "",
      priceSession: "",
    });
    setStep((val) => val - 1);
  };

  const removeSessionId = () => {
    let allSession = formData?.bookSession;
    allSession.forEach((session) => {
      delete session._id;
    });
    console.log(allSession);
    setFormData({ ...formData, bookSession: allSession });
  };

  const handleUploadImageChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setFormData({ ...formData, mentorImg: base64 });
  };

  const handleBookSessionChange = (e) => {
    console.log(e.target.value);
    setBookSession({ ...bookSession, [e.target.name]: e.target.value });
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
      removeSessionId();
      // console.log(formData);
      setLoader(true);
      const url = `${
        process.env.NEXT_PUBLIC_BACKEND_URL
      }/api/mentors/updateMentor/${
        JSON.parse(decryptData("mentorData")).mentorToken
      }`;
      const { data: res } = await axios.post(url, formData);
      alert(res);
      setModalOpen(false);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.error(error);
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
      {modalOpen === true ? (
        <div className="modalPopup">
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
              }}
            >
              {step === 1 ? (
                <>
                  <h2 style={{ marginBottom: "0", lineHeight: "0" }}>
                    Edit your profile
                  </h2>
                  <i
                    class="fas fa-times"
                    onClick={() => setModalOpen(false)}
                    style={{
                      fontSize: "24px",
                      color: "grey",
                      cursor: "pointer",
                    }}
                  ></i>
                </>
              ) : (
                <>
                  <h2 style={{ marginBottom: "0", lineHeight: "0" }}>
                    Add book session
                  </h2>
                  <i
                    class="fas fa-chevron-left"
                    onClick={() => previousStep()}
                    style={{
                      fontSize: "24px",
                      color: "grey",
                      cursor: "pointer",
                    }}
                  ></i>
                </>
              )}
            </div>
            <form className="mentorFormEdit" onSubmit={handleSubmit}>
              {step === 1 ? (
                <>
                  <div
                    style={{ gridColumn: "1/3" }}
                    className="mentorUploudPhotoEdit"
                  >
                    <img src={formData.mentorImg} className="mentorPhoto" />
                    <div>
                      <input
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
                    <label for="internAt">INTERN</label>

                    <input
                      type="text"
                      name="internAt"
                      className="mentorFormInput"
                      onChange={(e) => handleChange(e)}
                      placeholder="e.g. MITACS"
                      value={formData.internAt}
                    />
                  </div>
                  <div>
                    <label for="currentStatus">CURRENT STATUS</label>

                    <input
                      type="text"
                      name="currentStatus"
                      className="mentorFormInput"
                      onChange={(e) => handleChange(e)}
                      placeholder="e.g. Amazon SDE-I"
                      value={formData.currentStatus}
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
                    >
                      <label for="bookSessions">BOOK SESSIONS</label>
                      <div
                        style={{
                          backgroundColor: "black",
                          color: "white",
                          padding: "5px 10px",
                          cursor: "pointer",
                          width: "fit-content",
                        }}
                        onClick={() => nextStep()}
                      >
                        Add new
                      </div>
                    </div>
                    <ul className="bookSessions">
                      {formData.bookSession.length !== 0 ? (
                        formData.bookSession.map((session, indexSession) => (
                          <li
                            style={{
                              width: "270px",
                              height: "340px",
                              textAlign: "start",
                              position: "relative",
                              padding: "10px 20px",
                            }}
                          >
                            <div className="bookSessionHeader bookSessionColumn">
                              <div className="bookSessionHeaderIcons">
                                <i
                                  class={
                                    session.sessionType === "video-meeting"
                                      ? "fas fa-video"
                                      : session.sessionType === "call-meeting"
                                        ? "fas fa-phone"
                                        : ""
                                  }
                                  style={{ fontSize: "25px" }}
                                ></i>
                                <i
                                  class="fas fa-trash-alt"
                                  onClick={() => removeSession(indexSession)}
                                  style={{ fontSize: "25px" }}
                                ></i>
                              </div>
                              <div style={{ marginTop: "10px" }}>
                                <h2>{session.sessionName}</h2>
                                <p style={{ textAlign: "start" }}>
                                  {session.sessionDescription}
                                </p>
                              </div>
                            </div>
                            <div
                              className="bookSessionIcons bookSessionIconsEdit"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "20px",
                                position: "absolute",
                                bottom: "90px",
                              }}
                            >
                              <div>
                                <i className="far fa-clock"></i>
                                {session.sessionMeetingDuration} min
                              </div>
                              <div>
                                <i className="fas fa-rupee-sign"></i>
                                {session.priceSession}
                              </div>
                            </div>
                            <button
                              style={{
                                cursor: "pointer",
                                position: "absolute",
                                bottom: "25px",
                              }}
                            >
                              Book Session
                            </button>
                          </li>
                        ))
                      ) : formData.bookSession.length === 0 ? (
                        <p>You not have book sessions yet</p>
                      ) : null}
                    </ul>
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
                  {!loader ? (
                    <button
                      style={{
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
                  ) : (
                    <Loader width="25px" />
                  )}
                </>
              ) : (
                <>
                  <div>
                    <label for="sessionName">Session Name</label>
                    <input
                      type="text"
                      name="sessionName"
                      className="mentorFormInput"
                      onChange={(e) => handleBookSessionChange(e)}
                      placeholder="e.g. Mock Interview"
                      value={bookSession.sessionName}
                    />
                  </div>
                  <div>
                    <label for="sessionDescription">Session Description</label>
                    <input
                      type="text"
                      maxLength={50}
                      name="sessionDescription"
                      className="mentorFormInput"
                      onChange={(e) => handleBookSessionChange(e)}
                      placeholder="e.g. Achieve your goals faster with customized road map"
                      value={bookSession.sessionDescription}
                    />
                  </div>
                  <div>
                    <label for="sessionType">Session Type</label>
                    <select
                      className="mentorFormInput"
                      onChange={(e) =>
                        setBookSession({
                          ...bookSession,
                          sessionType: e.target.value,
                        })
                      }
                    >
                      <option value="video-meeting" selected="selected">
                        Video Meeting
                      </option>
                      <option value="call-meeting">Call meeting</option>
                    </select>
                  </div>
                  <div>
                    <label for="sessionMeetingDuration">
                      Session Meeting Duration (Minutes)
                    </label>
                    <input
                      style={{ backgroundColor: "none" }}
                      type="number"
                      name="sessionMeetingDuration"
                      className="mentorFormInput"
                      onChange={(e) => handleBookSessionChange(e)}
                      placeholder="e.g. 30"
                      value={bookSession.sessionMeetingDuration}
                    />
                  </div>
                  <div>
                    <label for="priceSession">Price Session (INR Rupee)</label>
                    <input
                      type="number"
                      name="priceSession"
                      className="mentorFormInput"
                      onChange={(e) => handleBookSessionChange(e)}
                      placeholder="e.g. 500"
                      value={bookSession.priceSession}
                    />
                  </div>
                  {error && <div style={{ color: "red" }}>{error}</div>}
                  <div
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      padding: "5px 10px",
                      cursor: "pointer",
                      width: "fit-content",
                    }}
                    onClick={() => addBookSession()}
                  >
                    Add book session
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      ) : null}
      <div className="dashboardEdit">
        <img src={mentorDetail.mentorImg} />
        <i class="fas fa-edit" onClick={() => setModalOpen(true)}></i>
      </div>
      <br />
      <h1>{mentorDetail.name}</h1>
      <h2>Intern at: {mentorDetail.internAt}</h2>
      <h3>{mentorDetail.currentStatus}</h3>
      <ul
        className="contactLinks"
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          margin: "20px 0",
        }}
      >
        <li
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontWeight: "600",
          }}
        >
          <i class="fas fa-envelope"></i>
          {mentorDetail.email}
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontWeight: "600",
          }}
        >
          <i class="fab fa-linkedin"></i>
          <a target="_blank" href={mentorDetail.social.linkedin}>
            {mentorDetail.social.linkedin}
          </a>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontWeight: "600",
          }}
        >
          <i class="fab fa-twitter"></i>

          <a target="_blank" href={mentorDetail.social.twitter}>
            {mentorDetail.social.twitter}
          </a>
        </li>
      </ul>
      <br />
      <h2 style={{ fontSize: "24px" }}>About</h2>
      <p>{mentorDetail.description}</p>
      <br />
      <h2 style={{ fontSize: "24px" }}>Book Sessions</h2>
      <ul className="bookSessions">
        {mentorDetail?.bookSession?.length !== 0 ? (
          mentorDetail?.bookSession?.map((session) => (
            <li>
              <div
                className="bookSessionHeader"
                style={{ alignItems: "center" }}
              >
                <i
                  class={
                    session.sessionType === "video-meeting"
                      ? "fas fa-video"
                      : session.sessionType === "call-meeting"
                        ? "fas fa-phone"
                        : ""
                  }
                  style={{ fontSize: "25px" }}
                ></i>
                <div>
                  <h2>{session.sessionName}</h2>
                  <p>{session.sessionDescription}</p>
                </div>
              </div>
              <div
                className="bookSessionIcons"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "20px",
                }}
              >
                <div>
                  <i className="far fa-clock"></i>
                  {session.sessionMeetingDuration} min
                </div>
                <div>
                  <i className="fas fa-rupee-sign"></i>
                  {session.priceSession}
                </div>
              </div>
              <button style={{ cursor: "pointer" }}>Book Session</button>
            </li>
          ))
        ) : mentorDetail?.bookSession?.length === 0 ? (
          <p>You not have book sessions yet</p>
        ) : null}
      </ul>
      <br />
    </div>
  );
}

export default Dashboard;
