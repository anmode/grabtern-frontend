import React from "react";

function LoginCard(props) {
  return (
    <div className="card" onMouseLeave={props.hideCard}>
      <div className="background" />
      <div className="content">
        <div className="buttons">
          <button
            className="user-button"
            onClick={() => console.log("User Login")}
          >
                  <a href="/login"> Login as User </a>
          </button>
          <button
            className="mentor-button"
            onClick={() => console.log("Mentor Login")}
          >
          <a href="/mentorLogin">Login as Mentor</a>  
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
