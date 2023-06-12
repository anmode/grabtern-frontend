import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MentorForm from "../components/MentorFormRegistration";
import Head from "next/head";


const MentorRegister = () => {
  return (
    <>
      <Head>
        <title>GrabTern | Mentors Register Here</title>
      </Head>
      <Header navbarBackground={true} />
      <main className="mentor-register-page">
        <MentorForm />
      </main>
      <Footer />
    </>
  );
};

export default MentorRegister;
