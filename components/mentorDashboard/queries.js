import React, { useState } from "react";
import styles from "../../styles/queries.module.css";
import TicketForm from "./ticketForm";
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
      className='tw-pb-[5rem] tw-flex tw-justify-center tw-items-center tw-pt-20 tw-pl-[200px] max-[990px]:tw-pl-[150px] max-[715px]:tw-pl-[100px] tw-flex-wrap max-[512px]:tw-p-0 max-[512px]:tw-m-0'
    >
      <div
        className='tw-w-[800px] flex tw-flex-wrap max-[990px]:tw-w-[500px] max-[715px]:tw-w-[400px]'
      >
        <div className="tw-border tw-border-base-300 tw-rounded-md tw-p-4 tw-bg-white max-[512px]:tw-w-screen max-[512px]:tw-h-screen max-[512px]:tw-overflow-y-auto max-[512px]:tw-p-10">
          <div
            className={`${styles.heading} tw-p-3 tw-border-b tw-border-gray-300`}
          >
            <h1 className="tw-font-semibold ">Queries</h1>
          </div>

          <div className={`${styles.buttonGroup} tw-flex tw-ml-5`}>
            <p className="tw-flex tw-justify-center tw-items-center ">
              To ask query, raise a ticket
              <CiShoppingTag
                style={{
                  display: "inline",
                  marginLeft: "5px",
                  color: "#6e4fa0",
                }}
              />
              <button
                className={`${styles.ticket} hover:tw-bg-primary-200 tw-bg-primary-100 tw-p-1 text-white tw-justify-center tw-items-center tw-font-semibold tw-rounded-md`}
                onClick={handleRaiseTicketClick}
              >
                Raise Ticket
              </button>
            </p>
          </div>
          {isTicketFormVisible && (
            <TicketForm onSubmit={handleTicketFormSubmit} />
          )}

          <p className={`${styles.generateTicket} tw-ml-5`}>
            Generated Tickets
          </p>
          <div className={styles.buttonGroup}>
            <button
              onClick={() => setCurrentView("Pending")}
              className={`${styles.button} ${
                currentView === "Pending" ? styles.active : ""
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setCurrentView("answered")}
              className={`${styles.button} ${
                currentView === "answered" ? styles.active : ""
              } tw-ml-3`}
            >
              Answered
            </button>
          </div>

          {currentView === "Pending" && (
            <div className={styles.pendingQueries}>
              {/* <h2 className={styles.subheading}>Pending</h2> */}
              {pendingQueries.length === 0 ? (
                <p>No Pending Tickets</p>
              ) : (
                pendingQueries.map((query) => (
                  <div key={query.id} className={styles.query}>
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
                  <div key={query.id} className={styles.query}>
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
      </div>
    </section>
  );
};

export default Queries;
