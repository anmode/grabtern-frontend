import React, { useState } from "react";
import styles from "../../styles/queries.module.css";
import TicketForm from "./QueriesComponent/ticketForm";
import { CiShoppingTag } from "react-icons/ci";
import axios from "axios";

const Queries = () => {
  const [pendingQueries, setPendingQueries] = useState([]);
  const [answeredQueries, setAnsweredQueries] = useState([]);
  //   const [currentAnswer, setCurrentAnswer] = useState("");
  // const [answers, setAnswers] = useState({});
  const [currentView, setCurrentView] = useState("Pending");
  const [isTicketFormVisible, setIsTicketFormVisible] = useState(false);

  const generateRandomId = () => {
    return "#" + Math.floor(Math.random() * 900 + 100);
  };

  const handleSubmitAnswer = (queryIndex) => {
    const answer = answers[queryIndex];
    if (answer && answer.trim() !== "") {
      const answeredQuery = pendingQueries.find(
        (query) => query.id == queryIndex,
      );
      answeredQuery.answer = answer;
      setAnsweredQueries([...answeredQueries, answeredQuery]);
      setPendingQueries(
        pendingQueries.filter((query) => query.id !== queryIndex),
      );
      const updatedAnswers = { ...answers };
      delete updatedAnswers[queryIndex];
      setAnswers(updatedAnswers);
    }
  };

  const handleRaiseTicketClick = () => {
    setIsTicketFormVisible(true);
  };
  const handleTicketFormSubmit = (description) => {
    const newTicket = {
      id: generateRandomId(),
      description: description,
      status: "Pending",
    };

    setPendingQueries([...pendingQueries, newTicket]);
    setIsTicketFormVisible(false);
  };

  //API implementation
  // const handleTicketFormSubmit = async(description)=>{
  //   try{
  //     const response = await axios.post(
  //       `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentorDashboard/queries`,
  //       {
  //         description: description,
  //         status: "Pending",
  //       }
  //     );
  //     const newTicket= {
  //           id: generateRandomId(),
  //           description: description,
  //           status: "pending",
  //     };
  //     setPendingQueries([...pendingQueries, newTicket]);
  //     setIsTicketFormVisible(false);
  //   } catch (error){
  //     console.log("Error in creating ticket", error);

  //   }
  // }

  return (
    <section
      className={`${styles.box} tw-flex tw-flex-col max-[708px]:tw-justify-center max-[708px]:tw-items-center tw-mt-[2rem]`}
    >
      {/* header */}
      <div className="tw-flex tw-flex-col tw-gap-3 tw-justify-start tw-items-start max-[512px]:tw-justify-center max-[512px]:tw-items-center">
        <p className="tw-text-black tw-flex tw-items-center tw-text-center tw-text-3xl tw-font-semibold">
          Queries
        </p>
        <p className="tw-flex tw-justify-center tw-items-center tw-text-xl">
          To ask query, raise a ticket
          <CiShoppingTag
            style={{
              display: "inline",
              marginLeft: "5px",
              color: "#6e4fa0",
            }}
          />
        </p>
      </div>

      <hr className="tw-h-px tw-my-5 tw-bg-gray-300 tw-border-0" />
      {/* generated tickets */}

      <div className="tw-flex tw-flex-col tw-justify-start tw-items-start tw-gap-10 max-[512px]:tw-justify-center max-[512px]:tw-items-center">
        <div className="tw-flex tw-justify-between tw-gap-10 tw-items-center max-[512px]:tw-justify-center max-[512px]:tw-items-center">
          <button
            onClick={() => setCurrentView("Pending")}
            className="tw-bg-primary-100 tw-p-1 text-white tw-justify-center tw-items-center tw-font-semibold tw-rounded-md tw-px-5 tw-py-3 hover:tw-bg-primary-200 tw-duration-200 tw-ease-in-out tw-transition-all"
          >
            Pending
          </button>
          <button
            onClick={() => setCurrentView("answered")}
            className={`tw-bg-primary-100 tw-p-1 text-white tw-justify-center tw-items-center tw-font-semibold tw-rounded-md tw-px-5 tw-py-3 hover:tw-bg-primary-200 tw-duration-200 tw-ease-in-out tw-transition-all`}
          >
            Answered
          </button>
          <button
            className={`tw-bg-primary-100 tw-p-1 text-white tw-justify-center tw-items-center tw-font-semibold tw-rounded-md tw-px-5 tw-py-3 hover:tw-bg-primary-200 tw-duration-200 tw-ease-in-out tw-transition-all`}
            onClick={handleRaiseTicketClick}
          >
            Raise Ticket
          </button>
        </div>
        <button
          className={`min-[513px]:tw-hidden tw-bg-primary-100 tw-p-1 text-white tw-justify-center tw-items-center tw-font-semibold tw-rounded-md`}
          onClick={handleRaiseTicketClick}
        >
          Raise Ticket
        </button>
        <p
          className={`tw-justify-start tw-text-xl tw-items-start tw-font-semibold min-[513px]:tw-pt-5`}
        >
          Generated Tickets
        </p>

        {isTicketFormVisible && (
          <TicketForm
            setIsTicketFormVisible={setIsTicketFormVisible}
            onSubmit={handleTicketFormSubmit}
          />
        )}

        {currentView === "Pending" && (
          <div className="tw-flex tw-flex-wrap min-[513px]:tw-pt-2 tw-justify-start max-[512px]:tw-justify-center max-[512px]:tw-items-center ">
            {/* <h2 className={styles.subheading}>Pending</h2> */}
            {pendingQueries.length === 0 ? (
              <p>No Pending Tickets</p>
            ) : (
              pendingQueries.map((query) => (
                <div key={query.id} className="tw-flex tw-p-4">
                  <div className="tw-bg-white tw-flex tw-flex-col tw-gap-3 tw-rounded-sm tw-p-10">
                    <p>
                      <strong>ID:</strong> {query.id}
                    </p>
                    <p>
                      <strong>Description: </strong>
                      {query.description}
                    </p>
                    <p>
                      <strong>Status:</strong> {query.status}
                    </p>
                    <button className="tw-font-semibold tw-text-white tw-bg-primary-100 tw-p-2 tw-rounded-md hover:tw-bg-primary-200 tw-duration-200 tw-ease-in-out tw-transition-all">
                      {/* Button to mark a query answered and send it to the answered queries section (yet to be implemented) */}
                      Mark as answered
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {currentView === "answered" && (
          <div>
            {/* <h2 className={styles.subheading}>Answered Queries</h2> */}
            {answeredQueries.length === 0 ? (
              <p>No answered tickets yet.</p>
            ) : (
              answeredQueries.map((query, index) => (
                <div key={query.id} className="tw-bg-white">
                  <p>
                    <strong>ID:</strong> {query.id}
                  </p>
                  <p>
                    <strong>Description:</strong> {query.description}
                  </p>
                  <p>
                    <strong>Status:</strong> {query.status}
                  </p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
      <div className="tw-pb-14"></div>
    </section>
  );
};

export default Queries;
