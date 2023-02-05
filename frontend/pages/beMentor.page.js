import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import MentorForm from '../components/MentorFormRegistration';

function BeMentor() {
  return (
    <>
      <Header navbarBackground={true} />
      <main>
        <MentorForm />
      </main>
      <Footer />
    </>

  )
}

export default BeMentor