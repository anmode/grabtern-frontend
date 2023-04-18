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
            Login as User
          </button>
          <button
            className="mentor-button"
            onClick={() => console.log("Mentor Login")}
          >
            Login as Mentor
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
