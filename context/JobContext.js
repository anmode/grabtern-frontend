import React, { createContext, useState, useContext } from 'react';


// Create a context
const JobContext = createContext();

// Create a provider component
export const JobProvider = ({ children }) => {
  const JobsData = [
    {
      jobid: 1,
      country: 'INDIA',
      city: 'PUNE',
      title: 'Application Developer',
      role: 'Software Engineering - Project Role',
      description: 'Application Developer Project Role...',
      businessArea: 'Technology',
      experience: '5-10',
      posted: 'Posted within last 24 hours',
      skills: ['Java', 'Spring Boot', 'Microservices']
    },
    {
      jobid: 2,
      country: 'INDIA',
      city: 'BANGALORE',
      title: 'Full Stack Developer',
      role: 'Software Engineering - Project Role',
      description: 'Full Stack Development...',
      businessArea: 'Technology',
      experience: '3-5',
      posted: 'Posted within last week',
      skills: ['React.js', 'Node.js', 'MongoDB', 'Express.js']
    },
    {
      jobid: 3,
      country: 'USA',
      city: 'NEW YORK',
      title: 'Data Scientist',
      role: 'Data Analysis - Project Role',
      description: 'Data Science and Analysis...',
      businessArea: 'Research',
      experience: '2-4',
      posted: 'Posted within last month',
      skills: ['Python', 'R', 'Machine Learning', 'Data Visualization']
    },
    {
      jobid: 4,
      country: 'UK',
      city: 'LONDON',
      title: 'Product Manager',
      role: 'Product Management - Project Role',
      description: 'Product Development and Management...',
      businessArea: 'Management',
      experience: '4-6',
      posted: 'Posted within last 2 weeks',
      skills: ['Agile Methodologies', 'Project Management', 'Product Strategy']
    },
    {
      jobid: 5,
      country: 'CANADA',
      city: 'TORONTO',
      title: 'UX Designer',
      role: 'User Experience - Project Role',
      description: 'UX Design and Development...',
      businessArea: 'Design',
      experience: '1-3',
      posted: 'Posted within last 3 days',
      skills: ['Adobe XD', 'Figma', 'User Research', 'Prototyping']
    }
  ];

  const [jobDetails, setJobDetails] = useState(JobsData);
  const [particularJob, setParticularJob] = useState(null);

  return (
    <JobContext.Provider value={{ jobDetails, setJobDetails, particularJob, setParticularJob}}>
      {children}
    </JobContext.Provider>
  );
};

// Create a custom hook to consume the context
export const useJobContext = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error('useJobContext must be used within a JobProvider');
  }
  return context;
};
