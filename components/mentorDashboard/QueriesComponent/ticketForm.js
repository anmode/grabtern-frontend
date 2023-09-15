import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import styles from "../../../styles/queries.module.css";

const TicketForm = ({ setIsTicketFormVisible, onSubmit }) => {
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
    <form
      className="tw-flex tw-justify-center tw-items-center tw-border-dashed"
      onSubmit={handleSubmit}
    >
      <div className="tw-flex tw-flex-col tw-gap-2 tw-justify-center tw-items-center tw-border-dashed tw-border-primary-100 tw-border-[2px] tw-p-4 tw-rounded-md max-[320px]:tw-w-[290px]">
        <div className="tw-flex tw-justify-end tw-items-center tw-w-full">
          <AiFillCloseCircle
            onClick={() => setIsTicketFormVisible(false)}
            className="tw-text-2xl tw-text-black tw-cursor-pointer"
          />
        </div>
        <label
          htmlFor="description"
          className="text-slate-800 tw-font-semibold"
        >
          Description:
        </label>
        <textarea
          id="description"
          className="tw-w-[300px]"
          value={description}
          onChange={handleDescriptionChange}
          required
        />
        <button
          className="tw-bg-primary-100 tw-p-2 tw-rounded-md tw-font-semibold tw-text-white hover:tw-bg-primary-200 tw-transition-all tw-ease-in-out tw-duration-150"
          type="submit"
        >
          Submit Ticket
        </button>
      </div>
    </form>
  );
};
export default TicketForm;
