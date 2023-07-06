import React from "react";

function Banner({ isMentorLoggedIn }) {
  return (
    <>
      <div className="hero-container">
        <div className="text-container">
          {/* heading */}
          <h1>Grab your Intern with GrabTern</h1>
          {/* description */}
          <p
            data-animation="fadeInLeft"
            data-delay="0.4s"
            className="animate__animated animate__fadeInLeft"
            style={{ animationDelay: "1s" }}
          >
            Book a meeting with a past intern to receive one-on-one mentoring
            and enhance your chances of landing your ideal intern.
          </p>
          {/* Button  */}
          <div className="buttons">
            <a href="/mentors">
              <button
                className="hero-section-btn-active animate__animated animate__fadeInLeft"
                data-animation="fadeInLeft"
                data-delay="1s"
                tabIndex="0"
                style={{ animationDelay: "1s" }}
              >
                Find Mentor
              </button>
            </a>{" "}
            &nbsp; &nbsp; &nbsp; &nbsp;
            {isMentorLoggedIn === true ? (
              <>
                <a href="/dashboard">
                  <button
                    className="hero-section-btn animate__animated animate__fadeInLeft"
                    data-animation="fadeInLeft"
                    data-delay="1s"
                    tabIndex="0"
                    style={{ animationDelay: "1s" }}
                  >
                    Dashboard
                  </button>
                </a>
              </>
            ) : (
              <a href="/mentorRegister">
                <button
                  className="hero-section-btn animate__animated animate__fadeInLeft"
                  data-animation="fadeInLeft"
                  data-delay="1s"
                  tabIndex="0"
                  style={{ animationDelay: "1s" }}
                >
                  Be a Mentor
                </button>
              </a>
            )}
          </div>
        </div>

        <div className="image-container">
          <div className="vector-img"></div>
          <div className="decorations">
            <div className="image-container1">
              <div className="text">
                <h4>Mentors</h4>
                <h3>4 New</h3>
              </div>
              <div className="mentor-img">
                <img
                  src="https://media.cssninja.io/shuriken/avatars/4.svg"
                  alt="Avatar"
                />
                <img
                  src="https://media.cssninja.io/shuriken/avatars/2.svg"
                  alt="Avatar"
                />
                <img
                  src="https://media.cssninja.io/shuriken/avatars/3.svg"
                  alt="Avatar"
                />
                <img
                  src="https://media.cssninja.io/shuriken/avatars/6.svg"
                  alt="Avatar"
                />
              </div>
            </div>
            <div className="graph circle">📈</div>
            <div className="rocket circle ">🚀</div>
            <div className="bulb circle">💡</div>
            <div className="graduate-hat circle">🎓</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
