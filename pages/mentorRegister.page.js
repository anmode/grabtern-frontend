import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MentorForm from "../components/MentorFormRegistration";

const MentorRegister = () => {
  return (
    <>
      <Header navbarBackground={true} />
      <main className="mentor-register-page">
        <div className="left-mentorRegister">
          <MentorForm />
        </div>
        <div className="right-mentorRegister">
          <img style={{width:"100%"}}
            src="/assets/img/vector_images/vector-registration.png"
            alt="img not showing"
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MentorRegister;
