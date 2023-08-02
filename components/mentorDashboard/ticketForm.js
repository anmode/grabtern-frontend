import React, { useState } from "react";

import styles from "../../styles/queries.module.css";

const TicketForm = ({ onSubmit }) => {
  // const [ticketId, setTicketId] = useState("");
  const [description, setDescription] = useState("");
  // const [status, setStatus] = useState(true); //True for pending, False for completed

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const ticket = {
    // id: Math.floor(Math.random() * 1000),

    // description: description,

    // status: 'Pending'
    // };
    onSubmit(description);
    // setTicketId("");
    setDescription("");
    // setStatus(true);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.description}>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          required
        />
        <div className={styles.buttonGroup}>
          <button className={styles.submitTicketButton} type="submit">
            Submit Ticket
          </button>
        </div>
      </div>
    </form>
  );
};
export default TicketForm;
