import React from "react";
import Header from "../components/Header";
import Section from "../components/mentorPage/Section";
import Company from "../components/mentorPage/Company";
import IconCard from "../components/mentorPage/IconCard";
import FAQList from "../components/mentorPage/FAQList";
import Footer from "../components/Footer";

import faq from "./data/faq";

function Mentor() {
  return (
    <>
      <Header navbarBackground={true} />
      <main>
        {/* Header */}
        <Section
          className="flex-column-reverse flex-lg-row pt-100 mb-50 mt-50"
          headingText="Build your Community and Monetize💰 your XP"
          bodyText="Create and share Learning Content of your niche. Start building your Community & be their Mentor today! Be able to monetize with in-house services and Earn as you Impact. "
          bodyTextClass="font-weight-bold text-muted"
          actionButtonText="be a mentor"
          actionButtonlink="/mentorRegister"
          imageSrc="https://mentro.tech/static/mentorsLanding-9b4cec4f30e06613534f11ecccc9f7fc.svg"
        />

        {/* company list */}
        <section className="testimonial-bg mb-50">
          <div className="container py-0">
            <p className="h1 text-muted mb-30 text-center font-weight-bold pt-50">
              Our Top Mentors Interned at
            </p>
            <div className="row pb-50">
              <div className="col">
                <Company imgSrc="/assets/img/company/GSoC.svg" name="GSoC" />
              </div>
              <div className="col">
                <Company
                  imgSrc="/assets/img/company/microsoft.svg"
                  name="Microsoft"
                />
              </div>
              <div className="col">
                <Company imgSrc="/assets/img/company/mlh.svg" name="MLH" />
              </div>
              <div className="col">
                <Company
                  imgSrc="/assets/img/company/hackerRank.svg"
                  name="Hacker Rank"
                />
              </div>
            </div>
          </div>
        </section>

        {/* sections */}
        <Section
          className="flex-column-reverse flex-lg-row mb-50 mb-lg-100"
          headingText="Build your Community and Monetize💰 your XP"
          bodyText="Create and share Learning Content of your niche. Start building your Community & be their Mentor today! Be able to monetize with in-house services and Earn as you Impact. "
          imageSrc="https://mentro.tech/static/mentorsLanding-9b4cec4f30e06613534f11ecccc9f7fc.svg"
        />

        <Section
          className="flex-column-reverse flex-lg-row-reverse mb-50 mb-lg-100"
          headingText="Build your Community and Monetize💰 your XP"
          bodyText="Create and share Learning Content of your niche. Start building your Community & be their Mentor today! Be able to monetize with in-house services and Earn as you Impact. "
          imageSrc="https://mentro.tech/static/mentorsLanding-9b4cec4f30e06613534f11ecccc9f7fc.svg"
        />

        <Section
          className="flex-column-reverse flex-lg-row mb-50 mb-lg-100"
          headingText="Build your Community and Monetize💰 your XP"
          bodyText="Create and share Learning Content of your niche. Start building your Community & be their Mentor today! Be able to monetize with in-house services and Earn as you Impact. "
          imageSrc="https://mentro.tech/static/mentorsLanding-9b4cec4f30e06613534f11ecccc9f7fc.svg"
        />

        {/* Icons Cards row */}
        <section className="mb-100">
          <div className="container py-0">
            <div className="section-tittle text-center mb-30">
              <h2>Empower Your Expertise, Earn Your Impact</h2>
            </div>
            <div className="row">
              <div className="col col-12 col-sm-6 col-lg-3">
                <IconCard
                  iconClass="fas fa-globe"
                  heading="LIVE Programs"
                  text="MasterClasses, Bootcamps, and more informative sessions."
                />
              </div>
              <div className="col col-12 col-sm-6 col-lg-3">
                <IconCard
                  iconClass="fas fa-user-tie"
                  heading="Mentorship Session"
                  text="Resume Reviews, Roadmaps, Interviews, and Doubt sessions."
                />
              </div>
              <div className="col col-12 col-sm-6 col-lg-3">
                <IconCard
                  iconClass="fas fa-microphone"
                  heading="Cohort and Courses"
                  text="Launch your own cohort or hybrid courses, small or large"
                />
              </div>
              <div className="col col-12 col-sm-6 col-lg-3">
                <IconCard
                  iconClass="fas fa-laptop-code"
                  heading="Webinar and Workshop"
                  text="Live sessions on topics you choose to educate about"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-100">
          <div className="container py-0">
            <div className="section-tittle text-center mb-30">
              <h2>Frequently Asked Questions</h2>
            </div>
            <FAQList faq={faq} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Mentor;
