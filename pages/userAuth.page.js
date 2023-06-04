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
    setlogpagestate(!logpagestate);
  };

  const router = useRouter();

  useEffect(() => {
    handleHashChange();
  }, [logpagestate]);

  const handleHashChange = () => {
    const currentHash = router.asPath.split("#")[1];

    if (currentHash === "login") {
      setlogpagestate(true);
      return <Login />;
      // Add your logic here
    } else if (currentHash === "register") {
      setlogpagestate(false);
      // Add your logic here
      return <Register />;
    } else {
      // Invalid hash, handle accordingly (e.g., show an error message)
      // Add your logic here
    }
  };

  return (
    <>
      <Header navbarBackground={true} />
      <main className="login-body d-flex flex-row justify-content-between">
        {logpagestate ? (
          <Login handleLogPageToggle={handleLogPageToggle} />
        ) : (
          <Register handleLogPageToggle={handleLogPageToggle}></Register>
        )}
        <div className="tw-hidden md:tw-flex tw-h-[100vh]">
          <img src="assets/img/gallery/20944201.jpg" alt="" />
        </div>
      </main>
    </>
  );
}

export default UserAuthPage;
