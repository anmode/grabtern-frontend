import React, { useState } from "react";
import styles from "../../styles/queries.module.css";

const Queries = () => {
  const [pendingQueries, setPendingQueries] = useState([
    { id:1, text: "Query 1 - Pending" },
    { id:2, text: "Query 2 - Pending" },
    { id:3, text: "Query 3 - Pending" },
  ]);
  const [answeredQueries, setAnsweredQueries] = useState([]);
//   const [currentAnswer, setCurrentAnswer] = useState("");
  const [answers, setAnswers] = useState({})
  const [currentView, setCurrentView] = useState("pending");

  const handleSubmitAnswer = (queryIndex) => {
    const answer = answers[queryIndex];
    if (answer && answer.trim() !== "") {
      const answeredQuery = pendingQueries.find((query) => query.id == queryIndex);
      answeredQuery.answer = answer;
      setAnsweredQueries([...answeredQueries, answeredQuery]);
      setPendingQueries(pendingQueries.filter((query) => query.id !== queryIndex));
      const updatedAnswers = { ...answers };
      delete updatedAnswers[queryIndex];
      setAnswers(updatedAnswers);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Queries</h1>
      <div className={styles.buttonGroup}>
        <button
          onClick={() => setCurrentView("pending")}
          className={`${styles.button} ${currentView === "pending" ? styles.active : ""}`}
        >
          Pending
        </button>
        <button
          onClick={() => setCurrentView("answered")}
          className={`${styles.button} ${currentView === "answered" ? styles.active : ""}`}
        >
          Answered
        </button>
      </div>

      {currentView === "pending" && (
        <div className={styles.pendingQueries}>
          <h2 className={styles.heading}>Pending Queries</h2>
          {pendingQueries.map((query, index) => (
            <div key={index} className={styles.query}>
              <p>{query.text}</p>
              <input
                type="text"
                value={answers[query.id] || ""}
                placeholder="Enter answer"
                onChange={(e) => setAnswers({ ...answers, [query.id]: e.target.value })}
                className={styles.answerInput}
              />
              <button onClick={() => handleSubmitAnswer(query.id)} className={styles.submitButton}>
                submit
              </button>
            </div>
          ))}
        </div>
      )}

      {currentView === "answered" && (
        <div>
          <h2 className={styles.heading}>Answered Queries</h2>
          {answeredQueries.map((query, index) => (
            <div key={query.id} className={styles.query}>
              <p>{query.text}</p>
              <p>Answer: {query.answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Queries;