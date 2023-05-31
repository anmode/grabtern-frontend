import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MentorForm from "../components/MentorFormRegistration";

const MentorRegister = () => {
  return (
    <>
      <Header navbarBackground={true} />
      <main className="mentor-register-page">
        <MentorForm />
      </main>
      <Footer />
    </>
  );
};

export default MentorRegister;
