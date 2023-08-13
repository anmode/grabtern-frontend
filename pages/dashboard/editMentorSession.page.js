import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Spinner from "../../components/basic/spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Edit = () => {
  const router = useRouter();
  const mentorData = JSON.parse(localStorage.getItem("mentorData"));
  const username = mentorData?.user_name;
  const { id, redirectURL } = router.query;

  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch the session data based on id and username
    const fetchSessionData = async () => {
      try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/getListedSession/${username}/${id}`;
        const response = await axios.get(url, {
          withCredentials: true,
        });
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching session data:", error);
        // Handle error
      }
    };

    if (id && username) {
      fetchSessionData();
    }
  }, [id, username]);

  // form submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/updateListedSession`;
      // console.log(data);

      const response = await axios.put(
        url,
        { ...data },
        { withCredentials: true },
      ); // Send the updated data to the backend
      setData(response.data);

      toast.success("Changes saved successfully.");
      router.push(redirectURL);
    } catch (error) {
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      {data.name ? (
        <div className="tw-flex tw-justify-center tw-items-center tw-pt-20 tw-pb-[5rem] tw-flex-wrap max-[512px]:tw-p-0 max-[512px]:tw-m-0">
          <div className="tw-w-[800px] flex tw-flex-wrap max-[990px]:tw-w-[500px] max-[715px]:tw-w-[400px]">
            <div className="tw-p-4 tw-bg-white tw-shadow-xl max-[512px]:tw-w-screen max-[512px]:tw-h-screen max-[512px]:tw-overflow-y-auto max-[512px]:tw-p-10">
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

                <button
                  type="submit"
                  className="tw-mb-[2rem] tw-text-white tw-border tw-rounded-md tw-px-4 tw-py-2 tw-text-center tw-font-semibold tw-text-base tw-bg-blue-400 hover:tw-bg-blue-500 hover:tw-border-black hover:tw-border-2"
                  onClick={handleSubmit} // Call the handleSubmit function when the button is clicked
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
          <ToastContainer />
        </div>
      ) : (
        <div className="tw-mt-[5rem]">
          <Spinner />
        </div>
      )}
    </>
  );
};

export default Edit;
