import React, { useState, useEffect } from "react";
import axios from "axios";
import SessionCard from "../newMentorProfile/SessionCard";
import Spinner from "../basic/spinner";
import Form from "./ListedSessionComponent/Form";

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

  return (
    <>
      <main className="max-[512px]:tw-pl-6 tw-pb-14 tw-pl-28 tw-flex tw-flex-col max-[708px]:tw-justify-center max-[708px]:tw-items-center tw-mt-[2rem]">
        <p className="tw-text-black tw-flex tw-justify-start tw-items-center tw-text-center tw-text-3xl tw-font-semibold">
          Sessions
        </p>
        <hr className="tw-h-px  tw-my-5 tw-bg-gray-300 tw-border-0" />
        <div className="tw-grid tw-gap-6 md:tw-grid-cols-2 lg:tw-grid-cols-3">
          {sessions.length > 0 ? (
            sessions.map((card, index) => (
              <div key={index}>
                {editSessionID === card._id ? (
                  <Form sessionID={editSessionID} setSessionID={setEditSessionID} sessions={sessions} setSessions={setSessions}/>
                ) : (
                  <SessionCard
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
                )}
              </div>
            ))
          ) : (
            <div>
              <Spinner />
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default Sessions;
