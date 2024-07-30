import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobDetails, setJobDetails] = useState([]);
  const [particularJob, setParticularJob] = useState(null);

  useEffect(() => {
    const fetchJobsData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/jobspost/fetchJobs`,
        );
        setJobDetails(response.data);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };
    fetchJobsData();
  }, []);
  return (
    <JobContext.Provider
      value={{ jobDetails, setJobDetails, particularJob, setParticularJob }}
    >
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error("useJobContext must be used within a JobProvider");
  }
  return context;
};
