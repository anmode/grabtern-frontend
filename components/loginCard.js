import React from "react";


function LoginCard(props) {

  
  return (
    <div className="card" onMouseLeave={props.hideCard}>
      <div className="content">
        <div className="buttons">
          <button
            className="user-button"
            onClick={() => window.location.href = "/login"}
          >
            Login as User
          </button>
          <button
            className="mentor-button"
            onClick={() => window.location.href = "/mentorLogin"}
          >
            Login as Mentor
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
