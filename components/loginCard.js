import React from "react";
import {useRouter} from 'next/router';

function LoginCard(props) {
  const router=useRouter();
  
  const handleLogin = () => {
    router.push('/login');
  };
  const handleMentorLogin=()=>{
    router.push('/mentorLogin');
  }
    
  
  return (
    <div className="card" onMouseLeave={props.hideCard}>
      <div className="background" />
      <div className="content">
        <div className="buttons">
          <button
            className="user-button"
           onClick={handleLogin}
          >
                 Login as User 
          </button>
          <button
            className="mentor-button"
            onClick={handleMentorLogin}
          >
          Login as Mentor  
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
