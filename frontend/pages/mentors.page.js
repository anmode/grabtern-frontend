import React from 'react'
import Header from '../components/Header'
import SimpleBanner from '../components/SimpleBanner'
import coursesData from './data/allCoursesData.js';
import Course from '../components/Course';
import servicesData from './data/ServicesData';
import Service from '../components/Service';
import Footer from '../components/Footer';



function Internships() {
  return (
    <>
      <Header />
      <SimpleBanner bannerTittle="Our Mentors" siteName="Services" />
      <main>
        <div className="courses-area section-padding40 fix">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8">
                <div className="section-tittle text-center mb-55">
                  <h2>Our featured Internships</h2>
                </div>
              </div>
            </div>
            <div className="courses-actives" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
              {coursesData.map((course, index) => (
                <Course key={index} courseImage={course.courseImage} courseImageAlt={course.courseImageAlt} courseCategories={course.courseCategories} courseTitle={course.courseTitle} courseDescription={course.courseDescription} courseRating={course.courseRating} coursePayed={course.coursePayed} coursePrice={course.coursePrice} />
              ))}
            </div>
          </div>
        </div>
        <div className="topic-area section-padding40">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8">
                <div className="section-tittle text-center mb-55">
                  <h2>Explore Top Hackathons</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="/assets/img/hackathons/tata Imagination.png" alt="tata Imagination" />
                    <div className="topic-content-box">
                      <div className="topic-content">
                        <h3><a href="#">Tata Imagination</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="/assets/img/hackathons/Apple Swift Challenge.png" alt="Apple Swift Challenge" />
                    <div className="topic-content-box">
                      <div className="topic-content">
                        <h3><a href="#">Apple Swift <br /> Challenge</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="/assets/img/hackathons/Hackoctoberfest.png" alt="Hackoctoberfest" />
                    <div className="topic-content-box">
                      <div className="topic-content">
                        <h3><a href="#">Hackoctoberfest</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="/assets/img/hackathons/Microsoft Image Cup.png" alt="Microsoft Image Cup" />
                    <div className="topic-content-box">
                      <div className="topic-content">
                        <h3><a href="#">Microsoft Image Cup</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="/assets/img/hackathons/SIH.png" alt="SIH" />
                    <div className="topic-content-box">
                      <div className="topic-content">
                        <h3><a href="#">SIH</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div className="section-tittle text-center mt-20">
                  <a href="courses.html" className="border-btn">View More Hackathons</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="services-area" style={{ padding: "11rem 0" }}>
          <div className="container">
            <div className="row justify-content-sm-center">
              {servicesData.map((service, index) => (
                <Service key={index} imageSrc={service.imageSrc} imageAlt={service.imageAlt} serviceHeading={service.serviceHeading} serviceDescription={service.serviceDescription} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>

  )
}

export default Internships