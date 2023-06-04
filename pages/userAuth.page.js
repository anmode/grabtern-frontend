import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "../components/Header";
import jwt_decode from "jwt-decode";
import Login from "../components/user/login";
import Register from "../components/user/UserRegister";
import { useContext } from "react";
import LogContext from "../context/LogContext";

function UserAuthPage() {
  //   const [logpagestate, setLogPageState] = useState(true);
  const { logpagestate, setlogpagestate } = useContext(LogContext);

  const handleLogPageToggle = () => {
    setLogPageState(!logpagestate);
  };

  return (
    <>
      <Header navbarBackground={true} />
      <main className="login-body d-flex flex-row justify-content-between">
        {logpagestate ? (
          <Login handleLogPageToggle={handleLogPageToggle} />
        ) : (
          <Register handleLogPageToggle={handleLogPageToggle} />
        )}
        <div className="hidden md:tw-flex">
          <img
            src="assets/img/gallery/20944201.jpg"
            alt=""
            height="800px"
            width="800px"
          />
        </div>
      </main>
    </>
  );
}

export default UserAuthPage;
