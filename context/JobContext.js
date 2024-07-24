import React, { createContext, useState, useContext, useEffect } from "react";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobDetails, setJobDetails] = useState([]);
  const [particularJob, setParticularJob] = useState(null);

  useEffect(() => {
    const fetchJobsData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/jobspost/jobsVacancy`,
      );
      const data = await response.json();
      setJobDetails(data);
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
