import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MentorForm from "../components/MentorFormRegistration";
import taskStyles from '../styles/mentors.module.css'

const MentorRegister = () => {
  return (
    <>
      <Header navbarBackground={true} />
      <main className={taskStyles.mentorRegistration}>
        <MentorForm />
      </main>
      <Footer />
    </>
  );
};

export default MentorRegister;
