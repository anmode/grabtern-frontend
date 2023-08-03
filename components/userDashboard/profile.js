import React, { useEffect, useState } from "react";
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
    image: mentorDetail?.mentorImg || "",
    bookSession: mentorDetail?.bookSession || [],
  };

  const [formData, setFormData] = useState(initialFormData);
  const [msg, setMsg] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState("");

  // normal input onChange function
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // function to fetch mentor profile
  const getMentorProfile = async () => {
    const mentorData = localStorage.getItem("mentorData");
    const mentorToken = decryptData(mentorData).mentorToken;
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/getprofile/${mentorToken}`;

    try {
      const response = await axios.get(url);
      const data = decryptData(response.data);
      setFormData(data);
      setError("");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  //fetching mentor profile onload
  useEffect(() => {
    getMentorProfile();
  }, []);

  // converting image to base64 function
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

  // onChange function for socials input
  const handleSocialChange = (e) => {
    setFormData({
      ...formData,
      social: { ...formData.social, [e.target.name]: e.target.value },
    });
  };

  // onChange function for image input
  const handleUploadImageChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setFormData({ ...formData, image: base64 });
  };

  // form submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const mentorData = localStorage.getItem("mentorData");
      const mentorToken = decryptData(mentorData).mentorToken;
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/updateprofile`;

      const encryptedData = encryptData({
        mentorLoginToken: mentorToken,
        ...formData,
      });

      const response = await axios.put(url, { token: encryptedData }); // Send the updated data to the backend
      setformData(decryptData(response.data));

      alert(response); // Display the response message from the backend

      setModalOpen(false);
      setMsg("Changes saved successfully."); // Set success message
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred while saving changes.");
      }
    }
  };
  return (
    <div className="mentorDetail">
      <div style={{ marginLeft: "250px" }}>
        <div
          className="modalPopupAfterRegistrationDone"
          style={{
            alignItems: "flex-start",
            maxWidth: "800px",
            width: "100%",
            marginTop: "-100px",
            maxHeight: "80rem",
          }}
        >
          <h2
            style={{
              marginBottom: "-100px",
              lineHeight: "0",
              fontWeight: "600",
              fontSize: "32px",
              textAlign: "center",
              marginLeft: "230px",
              alignItems: "center",
              marginTop: "5px",
              color: "#64748b",
              fontFamily: "sans-serif",
            }}
          >
            Edit your profile
          </h2>
          <form className="mentorFormEdit" onSubmit={handleSubmit}>
            <div
              style={{ gridColumn: "1/3", marginLeft: "500" }}
              className="mentorUploudPhotoEdit"
            >
              <img
                style={{
                  marginTop: "120px",
                  borderRadius: "50%",
                  objectFit: "contain",
                  width: "100px",
                  height: "100px",
                  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px ",
                }}
                src={formData.image}
                className="mentorPhoto"
              />
              <div>
                <input
                  style={{ marginTop: "150px", width: "110px" }}
                  type="file"
                  name="mentorProfile"
                  onChange={(e) => handleUploadImageChange(e)}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div>
                <label for="name">NAME</label>

                <input
                  type="text"
                  name="name"
                  style={{
                    width: "90%",
                    borderRadius: "5px",
                    border: "none",
                    border: "2px solid rgb(220, 220, 220)",
                  }}
                  className="mentorFormInput"
                  onChange={(e) => handleChange(e)}
                  placeholder={mentorDetail?.name}
                  value={formData.name}
                />
              </div>
              <div>
                <label for="username">USERNAME</label>

                <input
                  type="text"
                  name="username"
                  style={{
                    width: "90%",
                    borderRadius: "5px",
                    border: "none",
                    border: "2px solid rgb(220, 220, 220)",
                  }}
                  className="mentorFormInput"
                  onChange={(e) => handleChange(e)}
                  placeholder={mentorDetail?.username}
                  value={formData.username}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div>
                <label for="email">EMAIL</label>

                <input
                  type="email"
                  name="email"
                  className="mentorFormInput"
                  onChange={(e) => handleChange(e)}
                  style={{
                    width: "90%",
                    borderRadius: "5px",
                    border: "none",
                    border: "2px solid rgb(220, 220, 220)",
                  }}
                  // placeholder="e.g. peterparker4321#gmail.com"
                  placeholder={mentorDetail?.email}
                  // readOnly
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
                  style={{
                    width: "90%",
                    borderRadius: "5px",
                    border: "none",
                    border: "2px solid rgb(220, 220, 220)",
                  }}
                  // placeholder="0123456789"
                  placeholder={mentorDetail?.mobile}
                  value={formData.mobile}
                />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <label for="linkedin">LINKEDIN</label>

                <input
                  type="text"
                  name="linkedin"
                  className="mentorFormInput"
                  onChange={(e) => handleSocialChange(e)}
                  style={{
                    width: "90%",
                    borderRadius: "5px",
                    border: "none",
                    border: "2px solid rgb(220, 220, 220)",
                  }}
                  // placeholder="e.g. https://www.linkedin.com/peterparker"
                  placeholder={mentorDetail?.linkedin}
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
                  style={{
                    width: "90%",
                    borderRadius: "5px",
                    border: "none",
                    border: "2px solid rgb(220, 220, 220)",
                  }}
                  // placeholder="e.g. https://www.twitter.com/peterparker"
                  placeholder={mentorDetail?.twitter}
                  value={formData.social.twitter}
                />
              </div>
            </div>

            <div>
              <label for="description">DESCRIPTION</label>

              <textarea
                cols="10"
                rows="7"
                name="description"
                style={{
                  width: "95%",
                  borderRadius: "5px",
                  border: "2px solid rgb(220, 220, 220)",
                }}
                className="mentorFormInput"
                onChange={(e) => handleChange(e)}
                // placeholder="I've done my Bacherlor's from IIT Delhi. I have been working as SDE-I for past 1 years at microsoft..."
                placeholder={mentorDetail?.description}
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
            <button
              style={{
                color: "white",
                width: "fit-content",
                padding: "15px 25px",
                backgroundColor: "#845ec2",
                cursor: "pointer",
                marginTop: "-50px",
                marginLeft: "5px",
                boxShadow: "6px 4px 13px -2px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  backgroundColor: "#6b21a8",
                },
              }}
              type="submit"
              className="mentorFormButotn"
              onClick={handleSubmit} // Call the handleSubmit function when the button is clicked
            >
              Save changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
