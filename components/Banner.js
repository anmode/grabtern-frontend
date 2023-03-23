import React, { useState} from "react";
import GoogleSignInButton from './googleSign';

function Banner({ isMentorLoggedIn }) {
  const [modal, setModal] = useState(false);
  const [modalStep, setModalStep] = useState("1");


  function handleSignInSuccess(response) {

  }

  function handleSignInFailure(error) {
   
  }

  return (
    <section className="slider-area ">
      {modal === true ? (
        <div className="modalPopup">
          <div
            className="modalPopupAfterRegistrationDone"
            style={{ gap: "10px" }}
          >
            {modalStep === "1" ? (
              <>
                <div className="iconHeader">
                  <button onClick={() => setModal(false)} className="cross">
                    <img src="/close-icon.svg" />
                  </button>
                </div>
                <h2 style={{ maxWidth: "300px", lineHeight: "32px" }}>
                  Choose which option for you to register as mentor
                </h2>
                <a
                  href="/mentorRegister"
                  className="btn hero-btn animate__animated animate__fadeInLeft"
                  data-animation="fadeInLeft"
                  data-delay="1s"
                  tabIndex="0"
                  style={{ animationDelay: "1s", marginBottom: "10px" }}
                >
                  Fill Form
                </a>
                <GoogleSignInButton
                    onSignInSuccess={handleSignInSuccess}
                    onSignInFailure={handleSignInFailure}
                />
              </>
            ) : (
              <>
                <div className="iconHeader">
                  <button onClick={() => setModalStep("1")}>
                    <img src="/left-arrow.svg" />
                  </button>
                  <button onClick={() => setModal(false)} className="cross">
                    <img src="/close-icon.svg" />
                  </button>
                </div>
                <h2 style={{ maxWidth: "300px", lineHeight: "32px" }}>
                  Please fill below input if you want to signup with linkedin
                </h2>
                <form
                  className="mentorForm"
                  style={{
                    display: "block",
                    width: "100%",
                    border: "none",
                    padding: "0",
                  }}
                >
                  <div style={{ alignItems: "flex-start" }}>
                    <label htmlFor="internAt">INTERN AT</label>
                    <input
                      type="text"
                      name="internAt"
                      placeholder="GSOC"
                      className="mentorFormInput"
                      required
                    />
                  </div>
                  <div
                    style={{ margin: "10px 0 20px", alignItems: "flex-start" }}
                  >
                    <label htmlFor="sessionPrice">
                      30min 1-1 SESSION PRICE
                    </label>
                    <input
                      type="number"
                      name="sessionPrice"
                      placeholder="e.g. ₹100"
                      className="mentorFormInput"
                      required
                    />
                  </div>
                  <button
                    style={{
                      width: "fit-content",
                      padding: "10px 20px",
                      fontSize: "15px",
                    }}
                    type="submit"
                    className="mentorFormButotn"
                  >
                    Sign up with linkedin
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      ) : null}
      <div className="slider-active slick-initialized slick-slider">
        <div className="slick-list draggable">
          <div className="slick-track" style={{ opacity: 1, width: "1423px" }}>
            <div
              className="single-slider slider-height d-flex align-items-center slick-slide slick-current slick-active"
              data-slick-index="0"
              aria-hidden="false"
              tabIndex="0"
              style={{
                width: "1423px",
                position: "relative",
                left: "0px",
                top: "0px",
                zIndex: 999,
                opacity: 1,
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-7 col-md-12">
                    <div className="hero__caption">
                      <h1
                        data-animation="fadeInLeft"
                        data-delay="0.2s"
                        className="animate__animated animate__fadeInLeft"
                        style={{ animationDelay: "0.8s" }}
                      >
                        Grab your Intern with GrabTern
                      </h1>
                      <p
                        data-animation="fadeInLeft"
                        data-delay="0.4s"
                        className="animate__animated animate__fadeInLeft"
                        style={{ animationDelay: "1s" }}
                      >
                        Book a meeting with a past intern to receive one-on-one
                        mentoring and enhance your chances of landing your ideal
                        intern.
                      </p>
                      <a
                        href="/mentors"
                        className="btn hero-btn animate__animated animate__fadeInLeft"
                        data-animation="fadeInLeft"
                        data-delay="1s"
                        tabIndex="0"
                        style={{ animationDelay: "1s" }}
                      >
                        Find Mentor
                      </a>{" "}
                      &nbsp; &nbsp; &nbsp; &nbsp;
                      <a
                        href="#"
                        className="btn hero-btn animate__animated animate__fadeInLeft"
                        data-animation="fadeInLeft"
                        data-delay="1s"
                        tabIndex="0"
                        onClick={() => setModal(true)}
                        style={{ animationDelay: "1s" }}
                      >
                        Be a Mentor
                      </a>
                      {isMentorLoggedIn === true ? (
                        <>
                          <br />
                          <br />
                          <a
                            href="/dashboard"
                            className="btn hero-btn animate__animated animate__fadeInLeft"
                            data-animation="fadeInLeft"
                            data-delay="1s"
                            tabIndex="0"
                            style={{ animationDelay: "1s" }}
                          >
                            Dashboard
                          </a>
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
