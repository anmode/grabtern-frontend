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
  const [isTicketFormVisible, setIsTicketFormVisible] = useState(false)


  const generateRandomId = () =>{
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
    const newTicket= {
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
    

    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Queries</h1> 
      </div>
      
      <div className={styles.buttonGroup}>
        <p>To ask query, raise a ticket 
        <CiShoppingTag style={{display:"inline", marginLeft:"5px", color:"#6e4fa0"}}/>
        <button className={styles.raiseButton} onClick={handleRaiseTicketClick}>Raise Ticket</button>
        </p>
        
        </div>
      {isTicketFormVisible && <TicketForm onSubmit={handleTicketFormSubmit} />}
      
      <p className={styles.generateTicket}>Generated Tickets</p>
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
          }`}
        >
          Answered
        </button>
      </div>

      {currentView === "Pending" && (
        <div className={styles.pendingQueries}>
          {/* <h2 className={styles.subheading}>Pending</h2> */}
          {pendingQueries.length === 0 ? (<p>No Pending Tickets</p>) : (pendingQueries.map((query) => (
            <div key={query.id} className={styles.query}>
              <p><strong>ID:</strong> {query.id}</p>
              <p>
                  <strong>Description: </strong>{query.description}
              </p>
              <p><strong>Status:</strong> {query.status}</p>
            
            </div>
      )))}
        </div>
      )}

      {currentView === "answered" && (
        <div>
          {/* <h2 className={styles.subheading}>Answered Queries</h2> */}
          {answeredQueries.length === 0 ? (<p>No answered tickets yet.</p>) : (answeredQueries.map((query, index) => (
            <div key={query.id} className={styles.query}>
            <p><strong>ID:</strong> {query.id}</p>
              <p>
                  <strong>Description:</strong> {query.description}
              </p>
              <p><strong>Status:</strong> {query.status}</p>
            </div>
      )))}
        </div>
      )}
    </div>
  );
};

export default Queries;
