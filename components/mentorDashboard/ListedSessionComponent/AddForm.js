import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from "../../UI";
import Loader from "../../UI/Loader";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdSubtitles } from "react-icons/md";
import { BiRupee, BiSolidTimer } from "react-icons/bi";
import { GiTalk } from "react-icons/gi";

const AddSessionComponent = ({ setSessions, setAddSession }) => {
  const initialData = {
    type: "",
    name: "",
    description: "",
    duration: "",
    price: "",
  };
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState(initialData);

  // on submit funxtion for add form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any of the form fields are empty
    if (
      !data.type ||
      !data.name ||
      !data.description ||
      !data.duration ||
      !data.price
    ) {
      toast.error("Please fill in all the required fields.");
      return;
    }

    try {
      setLoader(true);
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/addListedSession`;
      const response = await axios.post(url, data, { withCredentials: true });
      if (!response.data.sessions) {
        // Handle null session here
        toast.error("Session creation failed. Please check your input.");
      } else {
        setSessions(response.data.sessions);
        setAddSession(false);
        toast.success("New Session added successfully.");
      }
      setLoader(false);
    } catch (error) {
      setLoader(false);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred while saving changes.");
      }
    }
  };

  // onchange function for inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {}, [loader]);

  return (
    <>
      <div className="tw-flex tw-justify-center tw-items-center tw-pb-[5rem] tw-flex-wrap max-[512px]:tw-p-0 max-[512px]:tw-m-0">
        <div className="tw-w-[800px] flex tw-flex-wrap max-[990px]:tw-w-[500px] max-[715px]:tw-w-[400px]">
          <div className="tw-p-4 tw-bg-white tw-shadow-xl max-[512px]:tw-w-screen max-[512px]:tw-h-screen max-[512px]:tw-overflow-y-auto max-[512px]:tw-p-10">
            <button title="cancel" onClick={() => setAddSession(false)}>
              <AiFillCloseCircle className="tw-text-[30px] tw-text-slate-700" />
            </button>
            <h2 className="tw-pb-[2rem] tw-text-gray-600 tw-font-semibold tw-text-4xl tw-text-center tw-font-sans ">
              Add New Session
            </h2>
            <form
              className="mentorFormEdit max-[512px]:tw-justify-center max-[512px]:tw-items-center max-[512px]:tw-flex max-[512px]:tw-flex-col"
              onSubmit={handleSubmit}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <div>
                  <label for="name">TITLE</label>
                  <input
                    type="text"
                    name="name"
                    style={{
                      width: "90%",
                      borderRadius: "5px",
                      border: "none",
                      border: "2px solid rgb(220, 220, 220)",
                      paddingLeft: "35px",
                    }}
                    className="mentorFormInput"
                    value={data.name}
                    placeholder="Enter Title (e.g., Resume Review)"
                    onChange={handleInputChange}
                  />
                  <MdSubtitles className="tw-relative tw-bottom-10 tw-left-2 tw-text-2xl" />
                </div>
                <div>
                  <label htmlFor="price">PRICE</label>
                  <input
                    type="number"
                    name="price"
                    className="mentorFormInput"
                    style={{
                      width: "90%",
                      borderRadius: "5px",
                      border: "none",
                      border: "2px solid rgb(220, 220, 220)",
                      paddingLeft: "35px",
                    }}
                    value={data.price}
                    placeholder="Price in rupee (eg: 30)"
                    onChange={handleInputChange}
                  />
                  <BiRupee className="tw-relative tw-bottom-10 tw-left-2 tw-text-2xl" />
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
                  <label htmlFor="type">TYPE</label>
                  <select
                    name="type"
                    className="mentorFormInput"
                    style={{
                      width: "90%",
                      borderRadius: "5px",
                      border: "2px solid rgb(220, 220, 220)",
                      paddingLeft: "35px",
                    }}
                    value={data.type}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Type</option>
                    <option value="voice">Voice Call</option>
                    <option value="video">Video Call</option>
                    <option value="text">Text Query</option>
                    <option value="other">Other</option>
                  </select>
                  <GiTalk className="tw-relative tw-bottom-10 tw-left-2 tw-text-2xl" />
                </div>
                <div>
                  <label for="time">TIME</label>

                  <input
                    type="number"
                    name="duration"
                    className="mentorFormInput"
                    style={{
                      width: "90%",
                      borderRadius: "5px",
                      border: "none",
                      border: "2px solid rgb(220, 220, 220)",
                      paddingLeft: "35px",
                    }}
                    value={data.duration}
                    placeholder="Enter Time in min ( eg: 50 )"
                    onChange={handleInputChange}
                  />
                  <BiSolidTimer className="tw-relative tw-bottom-10 tw-left-2 tw-text-2xl" />
                  {/* <BiSolidPhone className="tw-relative tw-text-slate-800 tw-bottom-10 tw-left-2 tw-text-2xl" /> */}
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
                  value={data.description}
                  placeholder={data.description}
                  onChange={handleInputChange}
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
              <hr
                style={{
                  margin: "10px 0",
                  borderColor: "grey",
                  gridColumn: "1/3",
                }}
              />

              {!loader ? (
                <Button
                  text="Add Session"
                  type="submit"
                  onClick={handleSubmit}
                />
              ) : (
                <Loader />
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSessionComponent;
