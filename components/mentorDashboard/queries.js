import React, { useState, useEffect } from "react";
import styles from "../../styles/queries.module.css";
import TicketForm from "./QueriesComponent/ticketForm";
import { CiShoppingTag } from "react-icons/ci";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Loader from "../UI/Loader";

const Queries = ({ setLoadingState, setErrorState }) => {
  const [loader, setLoader] = useState(false);
  const [ticketFormLoading, setTicketFormLoading] = useState(false);
  const [pendingQueries, setPendingQueries] = useState([]);
  const [answeredQueries, setAnsweredQueries] = useState([]);
  //   const [currentAnswer, setCurrentAnswer] = useState("");
  // const [answers, setAnswers] = useState({});
  const [currentView, setCurrentView] = useState("Pending");
  const [isTicketFormVisible, setIsTicketFormVisible] = useState(false);

  const generateRandomId = () => {
    return "#" + Math.floor(Math.random() * 900 + 100);
  };

  const handleRaiseTicketClick = () => {
    setIsTicketFormVisible(true);
  };

  const fetchQueries = async () => {
    try {
      setLoadingState({ status: true });
      setErrorState({ status: false });
      // Fetch queries from the server based on isAnswered flag
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/query/fetch`;
      const response = await axios.get(url, { withCredentials: true });
      if (response.status === 200) {
        const data = response.data;
        // Assuming you have already fetched the data and stored it in 'data'
        const { pendingQueries, answeredQueries } = data.reduce(
          (acc, query) => {
            if (query.status === "Pending") {
              acc.pendingQueries.push(query);
            } else if (query.status === "Answered") {
              acc.answeredQueries.push(query);
            }
            return acc;
          },
          { pendingQueries: [], answeredQueries: [] },
        );
        setLoadingState({ status: false });
        // 'pendingQueries' and 'answeredQueries' now contain the separated queries
        // console.log('Pending Queries:', pendingQueries);
        // console.log('Answered Queries:', answeredQueries);

        // Update your state with the separated queries
        setPendingQueries(pendingQueries);
        setAnsweredQueries(answeredQueries);
      } else {
        console.log("Error fetching queries");
      }
    } catch (error) {
      setLoadingState({ status: false });
      console.error("Error fetching queries:", error);
    }
  };

  const handleTicketFormSubmit = async (description) => {
    try {
      toast.info("Creating ticket...");
      setTicketFormLoading(true);
      // console.log(description);
      const ticketId = generateRandomId();
      // Create a new ticket with the generated ticket ID
      setLoader(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/query/create`,
        {
          description: description,
          status: "Pending",
          ticketId: ticketId,
        },
        { withCredentials: true },
      );
      if (response.status === 201) {
        const newTicket = {
          id: ticketId,
          description: description,
          status: "Pending",
        };
        setPendingQueries([...pendingQueries, newTicket]);
        setIsTicketFormVisible(false);
        toast.success("Ticket created successfully!");
      } else {
        toast.error("Error creating ticket");
        console.log("Error creating ticket");
      }
      setTicketFormLoading(false);
      setLoader(false);
    } catch (error) {
      setTicketFormLoading(false);
      setLoader(false);
      toast.error("Error creating ticket");
      console.error("Error creating ticket:", error);
    }
  };

  // Update a ticket
  const handleUpdateQuery = async (queryId) => {
    try {
      console.log(queryId);
      setLoader(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/query/update`,
        { id: queryId },
      );

      if (response.status === 200) {
        // Handle success
        toast.success("Ticket has been answered!");
        console.log("Ticket has been answered!");
        window.location.reload();
        // Refresh the list of queries or update the state as needed
      } else {
        console.log("Error updating query");
        toast.error("Error updating query");
        // Handle error
      }
      setLoader(false);
    } catch (error) {
      setLoader(false);
      toast.error("Error updating query");
      console.error("Error updating query:", error);
      // Handle error
    }
  };

  useEffect(() => {
    // Fetch queries when the component mounts
    fetchQueries();
  }, []);

  return (
    <section className="tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center md:tw-justify-start md:tw-items-start tw-p-6">
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

      <div className="tw-flex tw-flex-col tw-justify-start tw-items-start tw-gap-10 md:tw-justify-center md:tw-items-center">
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
        <p
          className={`tw-justify-start tw-text-xl tw-items-start tw-font-semibold min-[513px]:tw-pt-5`}
        >
          Generated Tickets
        </p>

        {isTicketFormVisible && (
          <TicketForm
            setIsTicketFormVisible={setIsTicketFormVisible}
            onSubmit={handleTicketFormSubmit}
            loading={ticketFormLoading}
          />
        )}

        {currentView === "Pending" && (
          <div className="tw-flex tw-flex-wrap tw-justify-center tw-items-center md:tw-justify-start md:tw-items-start">
            {/* <h2 className={styles.subheading}>Pending</h2> */}
            {pendingQueries?.length === 0 ? (
              <p>No Pending Tickets</p>
            ) : (
              pendingQueries?.map((query) => (
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
                    {!loader ? (
                      <button
                        className="tw-font-semibold tw-text-white tw-bg-primary-100 tw-p-2 tw-rounded-md hover:tw-bg-primary-200 tw-duration-200 tw-ease-in-out tw-transition-all"
                        onClick={() => handleUpdateQuery(query.id)}
                      >
                        {/* Button to mark a query answered and send it to the answered queries section (yet to be implemented) */}
                        Mark as answered
                      </button>
                    ) : (
                      <Loader />
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {currentView === "answered" && (
          <div>
            {/* <h2 className={styles.subheading}>Answered Queries</h2> */}
            {answeredQueries?.length === 0 ? (
              <p>No answered tickets yet.</p>
            ) : (
              answeredQueries?.map((query, index) => (
                <div key={query.id} className="tw-bg-white p-4">
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
