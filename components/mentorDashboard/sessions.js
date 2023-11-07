import React, { useState, useEffect } from "react";
import axios from "axios";
import SessionCard from "../newMentorProfile/SessionCard";
import Spinner from "../basic/spinner";
import EditForm from "./ListedSessionComponent/EditForm";
import AddForm from "./ListedSessionComponent/AddForm";
import { Button, Section } from "../UI";

function Sessions({ setLoadingState, setErrorState }) {
  const [sessions, setSessions] = useState([]);
  const [editSessionID, setEditSessionID] = useState(null);
  const [addSession, setAddSession] = useState(false);

  // function to fetch all sessions
  const fetchData = async () => {
    try {
      setLoadingState({ status: true });
      setErrorState({ status: false });
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/getListedSessions`;
      const response = await axios.get(url, { withCredentials: true });

      setSessions(response.data);
      setLoadingState({ status: false });
    } catch (error) {
      setLoadingState({ status: false });
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setErrorState({ status: true, message: error.response.data.message });
      } else {
        setErrorState({ status: true });
      }
    }
  };

  // fetching all sessions on load
  useEffect(() => {
    fetchData();
  }, []);

  const deleteSession = async function (sessionID) {
    try {
      setLoadingState({ status: true });
      setErrorState({ status: false });
      console.log(sessionID);
      // Show a confirmation dialog
      const confirmed = window.confirm(
        "Are you sure you want to delete this session?",
      );
      console.log(confirmed);

      if (!confirmed) {
        // User canceled the deletion
        setLoadingState({ status: false });
        return;
      }

      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/deleteListedSession/${sessionID}`;
      const response = await axios.delete(url, { withCredentials: true });

      fetchData();
      setLoadingState({ status: false });
    } catch (error) {
      setLoadingState({ status: false });
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setErrorState({ status: true, message: error.response.data.message });
      } else {
        setErrorState({ status: true });
      }
    }
  };

  return (
    <>
      <main className="tw-p-12 tw-flex tw-flex-col max-[708px]:tw-justify-center max-[708px]:tw-items-center tw-mt-[2rem]">
        <div className="tw-flex tw-justify-between">
          <p className="tw-text-black tw-flex tw-justify-start tw-items-center tw-text-center tw-text-3xl tw-font-semibold">
            Sessions
          </p>
          {!addSession && (
            <Button
              text="Add Session"
              onClick={() => {
                setAddSession(true);
              }}
            />
          )}
        </div>
        <hr className="tw-h-px  tw-my-5 tw-bg-gray-300 tw-border-0" />
        <div>
          {addSession ? (
            <AddForm setSessions={setSessions} setAddSession={setAddSession} />
          ) : editSessionID ? (
            <EditForm
              sessionID={editSessionID}
              setSessionID={setEditSessionID}
              setSessions={setSessions}
            />
          ) : sessions.length > 0 ? (
            <div className="tw-flex tw-gap-6 tw-flex-wrap">
              {sessions.map((card, index) => (
                <SessionCard
                  key={index}
                  type={card.type}
                  name={card.name}
                  description={card.description}
                  duration={card.duration}
                  price={card.price}
                  text="Edit Session"
                  handleDeleteSession={() => {
                    deleteSession(card._id);
                  }}
                  handleBookSession={() => {
                    setEditSessionID(card._id);
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="tw-flex tw-justify-center tw-items-center tw-flex-wrap tw-pt-20 tw-pl-[200px] max-[990px]:tw-pl-[150px] max-[715px]:tw-pl-[100px] max-[512px]:tw-p-0 max-[512px]:tw-m-0">
              <div className="tw-w-[800px] flex tw-flex-wrap max-[990px]:tw-w-[500px] max-[715px]:tw-w-[400px]">
                <div className="tw-p-4 tw-bg-white  max-[512px]:tw-flex max-[512px]:tw-flex-col max-[512px]:tw-justify-start max-[512px]:tw-items-center tw-shadow-xl max-[512px]:tw-w-screen max-[512px]:tw-h-screen max-[512px]:tw-overflow-y-auto max-[512px]:tw-p-10">
                  <h2 className="tw-text-center tw-font-medium tw-text-3xl tw-mt-5 tw-text-[#845ec2] max-[512px]:tw-items-center tw-flex">
                    Add Session
                  </h2>
                  <p className="tw-my-5">
                    It seems like you don't have any session yet!
                  </p>
                  <Button
                    text="Add Session"
                    onClick={() => {
                      setAddSession(true);
                    }}
                  />
                </div>
              </div>
            </div>
          )}
          {/* {addSession && (
            <AddForm setSessions={setSessions} setAddSession={setAddSession} />
          )}
          {editSessionID && (
            <EditForm
              sessionID={editSessionID}
              setSessionID={setEditSessionID}
              setSessions={setSessions}
            />
          )} */}

          {/* {sessions.length > 0 ? (
            <div className="tw-grid tw-gap-6 md:tw-grid-cols-2 lg:tw-grid-cols-3">
              {sessions.map((card, index) => (
                <SessionCard
                  key={index}
                  type={card.type}
                  name={card.name}
                  description={card.description}
                  duration={card.duration}
                  price={card.price}
                  text="Edit Session"
                  handleBookSession={() => {
                    setEditSessionID(card._id);
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="tw-flex tw-justify-center tw-items-center tw-pt-20 tw-pl-[200px] max-[990px]:tw-pl-[150px] max-[715px]:tw-pl-[100px] tw-flex-wrap max-[512px]:tw-p-0 max-[512px]:tw-m-0">
              <div className="tw-w-[800px] flex tw-flex-wrap max-[990px]:tw-w-[500px] max-[715px]:tw-w-[400px]">
                <div className="tw-p-4 tw-bg-white  max-[512px]:tw-flex max-[512px]:tw-flex-col max-[512px]:tw-justify-start max-[512px]:tw-items-center tw-shadow-xl max-[512px]:tw-w-screen max-[512px]:tw-h-screen max-[512px]:tw-overflow-y-auto max-[512px]:tw-p-10">
                  <h2 className="tw-text-center tw-font-medium tw-text-3xl tw-mt-5 tw-text-[#845ec2] max-[512px]:tw-items-center tw-flex">
                    Add Session
                  </h2>
                  <p className="tw-my-5">
                    It seems like you don't have any session yet!
                  </p>
                  <Button
                    text="Add Session"
                    onClick={() => {
                      setAddSession(true);
                    }}
                  />
                </div>
              </div>
            </div>
          )} */}
        </div>
      </main>
    </>
  );
}

export default Sessions;
