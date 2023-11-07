import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../../basic/spinner";
import { toast } from "react-toastify";
import { Button } from "../../UI";
import Loader from "../../UI/Loader";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdSubtitles } from "react-icons/md";
import { BiRupee, BiSolidTimer } from "react-icons/bi";
import { GiTalk } from "react-icons/gi";

const EditSessionComponent = ({ sessionID, setSessionID, setSessions }) => {
  const [data, setData] = useState(null);
  const mentorData = JSON.parse(localStorage.getItem("mentorData"));
  const username = mentorData?.mentor_username;
  const [loader, setLoader] = useState(false);
  // fetching session on load
  useEffect(() => {
    // Fetch session data only if data hasn't been fetched yet
    if (!data) {
      const fetchSessionData = async () => {
        try {
          const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/getListedSession/${username}/${sessionID}`;
          const response = await axios.get(url, { withCredentials: true });
          setData(response.data);
        } catch (error) {
          console.error("Error fetching session data:", error);
        }
      };

      fetchSessionData();
    }
  }, [sessionID, username, data]);

  // on submit funxtion for edit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/updateListedSession`;
      const response = await axios.put(url, data, { withCredentials: true });
      setSessions(response.data.updatedSessions);
      setSessionID(null);
      setLoader(false);
      toast.success("Changes saved successfully.");
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

  return (
    <>
      {data ? (
        <div className="tw-flex tw-justify-center tw-items-center tw-pb-[5rem] tw-flex-wrap max-[512px]:tw-p-0 max-[512px]:tw-m-0">
          <div className="tw-w-[800px] flex tw-flex-wrap max-[990px]:tw-w-[500px] max-[715px]:tw-w-[400px]">
            <div className="tw-p-4 tw-bg-white tw-shadow-xl max-[512px]:tw-w-screen max-[512px]:tw-h-screen max-[512px]:tw-overflow-y-auto max-[512px]:tw-p-10">
              <button title="cancel" onClick={() => setSessionID(null)}>
                <AiFillCloseCircle className="tw-text-[30px] tw-text-slate-700" />
              </button>
              <h2 className="tw-pb-[2rem] tw-text-gray-600 tw-font-semibold tw-text-4xl tw-text-center tw-font-sans ">
                Edit your session details
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
                      placeholder={data.name}
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
                      placeholder={data.price}
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
                    <label for="type">TYPE</label>

                    <input
                      type="text"
                      name="type"
                      className="mentorFormInput"
                      style={{
                        width: "90%",
                        borderRadius: "5px",
                        border: "none",
                        border: "2px solid rgb(220, 220, 220)",
                        background: "white",
                        paddingLeft: "35px",
                      }}
                      value={data.type}
                      placeholder={data.type}
                      onChange={handleInputChange}
                    />
                    <GiTalk className="tw-relative tw-bottom-10 tw-left-2 tw-text-2xl" />
                    {/* <MdEmail className="tw-relative tw-text-slate-800 tw-bottom-10 tw-left-2 tw-text-xl" /> */}
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
                      placeholder={data.duration}
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
                    text="Save Changes"
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
      ) : (
        <div className="tw-mt-[5rem]">
          <Spinner />
        </div>
      )}
    </>
  );
};

export default EditSessionComponent;
