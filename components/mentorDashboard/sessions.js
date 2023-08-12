import React, { useState, useEffect } from "react";
import axios from "axios";
import SessionCard from "../newMentorProfile/SessionCard";
import Spinner from "../basic/spinner";

function Sessions() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/getListedSession`;
      const response = await axios.get(url, { withCredentials: true });
      console.log(response.data);
      return response.data; // Assuming the API returns the data directly
    } catch (err) {
      console.error("Error in fetching details ", err);
    }
  };

  useEffect(() => {
    fetchData()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <main className="max-[512px]:tw-pl-6 tw-pb-14 tw-pl-28 tw-flex tw-flex-col max-[708px]:tw-justify-center max-[708px]:tw-items-center tw-mt-[2rem]">
        <p className="tw-text-black tw-flex tw-justify-start tw-items-center tw-text-center tw-text-3xl tw-font-semibold">
          Sessions
        </p>
        <hr className="tw-h-px  tw-my-5 tw-bg-gray-300 tw-border-0" />
        <div className="tw-grid tw-gap-6 md:tw-grid-cols-2 lg:tw-grid-cols-3">
          {data.length > 0 ? (
            data.map((card, index) => (
              <SessionCard
                key={index}
                type={card.type}
                name={card.name}
                description={card.description}
                duration={card.duration}
                price={card.price}
                text="Edit Session"
                path={`/dashboard/editMentorSession?username=${card.username}&sessionId=${card._id}`} // Assuming username is available in card
              />
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
