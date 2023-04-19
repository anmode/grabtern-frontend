import React, { Fragment } from 'react';
import dynamic from "next/dynamic";
import { Container, Row, Col } from 'react-dom';
const Header = dynamic(() => import("../components/Header"));
const Footer = dynamic(() => import("../components/Footer"));
import HeroSection from "../components/ourmentors";



const Home = () => {
  return (
    <>
      <Fragment>
        <Header navbarBackground={true} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <main>
          <div className='section'>
            <div className='container'>
              <div className='row'>
                <div className=" hero_content col-lg-6 col-md-6 ">

                  <h1 className='mb-4'> Learn Anytime and Anywhere <br /> from Grabtern</h1>
                  <p className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                </div>
                <div className="col-lg-6 col-md-6">
                  <img src="/assets/img/vector_images/hero-img2.jpg" alt='' className='vector1' />

                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className='section'>
            <div className='our1'>
              <h1>Our mentors work at</h1>
            </div>
            <div className=' vector3 row'>
              <div className=" col-lg-2 col-md-3">
                <h2 className='vector2'><i class="fa-brands fa-facebook"></i>Facebook</h2>
              </div>
              <div className="col-lg-2 col-md-3">
                <h2 className='vector2'><i class="fa-brands fa-facebook"></i>Microsoft</h2>
              </div>
              <div className="col-lg-2 col-md-3">
                <h2 className='vector2'><i class="fa-brands fa-facebook"></i>Google</h2>
              </div>
              <div className="col-lg-2 col-md-3">
                <h2 className='vector2'><i class="fa-brands fa-facebook"></i>Apple</h2>
              </div>
              <div className="col-lg-2 col-md-3">
                <h2 className='vector2'><i class="fa-brands fa-facebook"></i>Accenture</h2>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className='section'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 col-md-6'>
                <div className='about_img'>
                  <img src="/assets/img/vector_images/about-us1.jpg" alt='' className='vector4' />
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='about_content'>
                  <h1>About Us</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
              </div>
            </div>
          </div>
          </div>
          <br />
          <br />
          <br />

          <div className='section'>
            <div className='container'>
               <div className='row'>
                  <div className='col-lg-6 col-md-6'>
                  <h1 className=' heading1 mb-4'>Be a part of us</h1>
                  <p className=' para1 mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </div>
                  <div className="col-lg-6 col-md-6">
                  <img src="/assets/img/vector_images/part.jpg" alt='' className='vector5' />
                  </div>
               </div>
            </div>
          </div>
          <br />
          <br />
          <br/>
          <div className='section'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6 col-md-6'>
                  <div className='about_img2'>
                       <img src="/assets/img/vector_images/perks.jpg" alt='' className='vector6' />
                  </div>
                </div>
                   <div className='col-lg-6 col-md-6'>
                    <div className='about_content'>
                      <h1>Perks of being a part of <br/>Grabtern Community</h1>
                      <p className=' para2 mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                   </div>
              </div>
            </div>
          </div>
        </main>
      </Fragment>
      <Footer />
    </>
  );
};

export default Home;