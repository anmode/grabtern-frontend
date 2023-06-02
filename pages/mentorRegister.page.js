import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MentorForm from "../components/MentorFormRegistration";
import ScrollToTop from "../components/ScrollToTop";

const MentorRegister = () => {
  return (
    <>
      <Header navbarBackground={true} />
      <main className="mentor-register-page">
        <MentorForm />
      </main>
      <ScrollToTop/>
      <Footer />
    </>
  );
};

export default MentorRegister;
