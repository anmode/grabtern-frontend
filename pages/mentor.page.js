import React from "react";
import Header from "../components/Header";
import Section from "../components/Section";
import Company from "../components/Company";
import Footer from "../components/Footer";

function Mentor() {
  return (
    <>
      <Header navbarBackground={true} />
      <main>
        <Section
          className="flex-column-reverse flex-lg-row pt-100 mb-50"
          headingText="Build your Community and Monetize💰 your XP"
          bodyText="Create and share Learning Content of your niche. Start building your Community & be their Mentor today! Be able to monetize with in-house services and Earn as you Impact. "
          bodyTextClass="font-weight-bold text-muted"
          actionButtonText="be a mentor"
          actionButtonlink="/"
          imageSrc="https://mentro.tech/static/mentorsLanding-9b4cec4f30e06613534f11ecccc9f7fc.svg"
        />

        <section className="testimonial-bg mb-50">
          <div className="container">
            <h2 className="h2 text-muted mb-30 text-center font-weight-bold">
              Our Top Mentors also work at
            </h2>
            <div className="row">
              <div className="col">
                <Company imgSrc="/assets/img/company/GSoC.png" name="GSoC" />
              </div>
              <div className="col">
                <Company imgSrc="/assets/img/company/GSoC.png" name="GSoC" />
              </div>
              <div className="col">
                <Company imgSrc="/assets/img/company/GSoC.png" name="GSoC" />
              </div>
              <div className="col">
                <Company imgSrc="/assets/img/company/GSoC.png" name="GSoC" />
              </div>
            </div>
          </div>
        </section>

        <Section
          className="flex-column-reverse flex-lg-row mb-100"
          headingText="Build your Community and Monetize💰 your XP"
          bodyText="Create and share Learning Content of your niche. Start building your Community & be their Mentor today! Be able to monetize with in-house services and Earn as you Impact. "
          bodyTextClass=""
          imageSrc="https://mentro.tech/static/mentorsLanding-9b4cec4f30e06613534f11ecccc9f7fc.svg"
        />

        <Section
          className="flex-column-reverse flex-lg-row-reverse mb-100"
          headingText="Build your Community and Monetize💰 your XP"
          bodyText="Create and share Learning Content of your niche. Start building your Community & be their Mentor today! Be able to monetize with in-house services and Earn as you Impact. "
          bodyTextClass=""
          imageSrc="https://mentro.tech/static/mentorsLanding-9b4cec4f30e06613534f11ecccc9f7fc.svg"
        />

        <Section
          className="flex-column-reverse flex-lg-row mb-50"
          headingText="Build your Community and Monetize💰 your XP"
          bodyText="Create and share Learning Content of your niche. Start building your Community & be their Mentor today! Be able to monetize with in-house services and Earn as you Impact. "
          bodyTextClass=""
          imageSrc="https://mentro.tech/static/mentorsLanding-9b4cec4f30e06613534f11ecccc9f7fc.svg"
        />

        <section className="mb-100">
          <div className="container">
            <h2></h2>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Mentor;
