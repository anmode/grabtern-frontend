import React from "react";

const Edit = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
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
                    placeholder="Enter the title of your session"
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
                    name="text"
                    className="mentorFormInput"
                    style={{
                      width: "90%",
                      borderRadius: "5px",
                      border: "none",
                      border: "2px solid rgb(220, 220, 220)",
                      background: "white",
                      paddingLeft: "35px",
                    }}
                    placeholder="Enter the type (eg: Coffee chat)"
                  />
                  {/* <MdEmail className="tw-relative tw-text-slate-800 tw-bottom-10 tw-left-2 tw-text-xl" /> */}
                </div>
                <div>
                  <label for="time">TIME</label>

                  <input
                    type="number"
                    name="time"
                    className="mentorFormInput"
                    style={{
                      width: "90%",
                      borderRadius: "5px",
                      border: "none",
                      border: "2px solid rgb(220, 220, 220)",
                      paddingLeft: "35px",
                    }}
                    placeholder="Duration of your session in minutes"
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
                  placeholder="Description"
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
      </div>
    </>
  );
};

export default Edit;
