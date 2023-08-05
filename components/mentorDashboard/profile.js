import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { encryptData, decryptData } from "../../hook/encryptDecrypt";
import { FaUserAlt } from "react-icons/fa";
import { BiSolidPhone, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { mentorImg } from "../../public/assets";

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
      setFormData(decryptData(response.data));

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
    <div className="tw-flex tw-justify-center tw-items-center tw-pt-20 tw-pl-[200px] max-[990px]:tw-pl-[150px] max-[715px]:tw-pl-[100px] tw-flex-wrap max-[512px]:tw-p-0 max-[512px]:tw-m-0">
      <div className="tw-w-[800px] flex tw-flex-wrap max-[990px]:tw-w-[500px] max-[715px]:tw-w-[400px]">
        <div className="tw-p-4 tw-bg-white tw-shadow-xl max-[512px]:tw-w-screen max-[512px]:tw-h-screen max-[512px]:tw-overflow-y-auto max-[512px]:tw-p-10">
          <h2 className="tw-text-gray-600 tw-text-4xl text-center tw-font-sans ">
            Edit Your Profile
          </h2>
          <form
            className="mentorFormEdit max-[512px]:tw-justify-center max-[512px]:tw-items-center max-[512px]:tw-flex max-[512px]:tw-flex-col"
            onSubmit={handleSubmit}
          >
            <div className="tw-mt-10 tw-items-center tw-flex tw-justify-center">
              <Image
                className="tw-w-[100px] tw-h-[100px] tw-rounded-full tw-object-cover tw-shadow-lg"
                src={formData.image ? formData.image : mentorImg}
                alt="mentor"
                width={100}
                height={100}
              />
              <input
                type="file"
                name="mentorProfile"
                onChange={(e) => handleUploadImageChange(e)}
              />
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
                  class="tw-appearance-none tw-block tw-w-full tw-border-solid tw-border-2 tw-border-[#dcdcdc] tw-rounded tw-py-3 tw-px-[35px]" 
                  className="mentorFormInput"
                  onChange={(e) => handleChange(e)}
                  placeholder={mentorDetail?.name}
                  value={formData.name}
                />
                <FaUserAlt className="tw-relative tw-text-slate-800 tw-bottom-10 tw-left-2 tw-text-xl" />
              </div>
              <div>
                <label for="username">USERNAME</label>
                <input
                  type="text"
                  name="username"
                  class="tw-appearance-none tw-block tw-w-full tw-border-solid tw-border-2 tw-border-[#dcdcdc] tw-rounded tw-py-3 tw-px-[35px]" 
                  className="mentorFormInput"
                  onChange={(e) => handleChange(e)}
                  placeholder={mentorDetail?.username}
                  value={formData.username}
                />
                <FaUserAlt className="tw-relative tw-text-slate-800 tw-bottom-10 tw-left-2 tw-text-xl" />
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
                  style={{
                    width: "90%",
                    borderRadius: "5px",
                    border: "none",
                    border: "2px solid rgb(220, 220, 220)",
                    background: "white",
                    paddingLeft: "35px",
                  }}
                  className="mentorFormInput"
                  onChange={(e) => handleChange(e)}
                  placeholder={mentorDetail?.email}
                  value={formData.email}
                />
                <MdEmail className="tw-relative tw-text-slate-800 tw-bottom-10 tw-left-2 tw-text-xl" />
              </div>
              <div>
                <label for="mobile">PHONE</label>

                <input
                  type="number"
                  name="mobile"
                  className="mentorFormInput"
                  onChange={(e) => handleChange(e)}
                  class="tw-appearance-none tw-block tw-w-full tw-border-solid tw-border-2 tw-border-[#dcdcdc] tw-rounded tw-py-2 tw-px-[35px]" 
                  placeholder={mentorDetail?.mobile}
                  value={formData.mobile}
                />
                <BiSolidPhone className="tw-relative tw-text-slate-800 tw-bottom-10 tw-left-2 tw-text-2xl" />
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
                  class="tw-appearance-none tw-block tw-w-full tw-border-solid tw-border-2 tw-border-[#dcdcdc] tw-rounded tw-py-3 tw-px-[35px]" 
                  // placeholder="e.g. https://www.linkedin.com/peterparker"
                  placeholder={mentorDetail?.linkedin}
                  value={formData.social.linkedin}
                />
                <BiLogoLinkedin className="tw-relative tw-text-slate-800 tw-bottom-10 tw-left-2 tw-text-xl" />
              </div>
              <div>
                <label for="twitter">TWITTER</label>

                <input
                  type="text"
                  name="twitter"
                  className="mentorFormInput"
                  onChange={(e) => handleSocialChange(e)}
                  class="tw-appearance-none tw-block tw-w-full tw-border-solid tw-border-2 tw-border-[#dcdcdc] tw-rounded tw-py-3 tw-px-[35px]" 
                  // placeholder="e.g. https://www.twitter.com/peterparker"
                  placeholder={mentorDetail?.twitter}
                  value={formData.social.twitter}
                />
                <BiLogoTwitter className="tw-relative tw-text-slate-800 tw-bottom-10 tw-left-2 tw-text-xl" />
              </div>
            </div>

            <div>
              <label for="description">DESCRIPTION</label>

              <textarea
                cols="10"
                rows="7"
                name="description"
                class="tw-appearance-none tw-block tw-w-full tw-border-solid tw-border-2 tw-border-[#dcdcdc] tw-rounded tw-py-3 tw-px-4" 
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
              className="max-[512px]:tw-mb-20"
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