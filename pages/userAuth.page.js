import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Login from "../components/user/login";
import Register from "../components/user/register";
import Head from "next/head";

function UserAuthPage() {
  const router = useRouter();
  const [logPageState, setLogPageState] = useState("");

  // Function to handle toggle between login/register page
  const handleLogPageToggle = () => {
    const newPageState = logPageState === "login" ? "register" : "login";
    setLogPageState(newPageState);
    updateURLHash(newPageState);
  };

  // Function to update the URL hash based on the current component state
  const updateURLHash = (newHash) => {
    window.location.hash = newHash;
  };

  useEffect(() => {
    const currentHash = window.location.hash.substring(1);
    if (currentHash === "login" || currentHash === "register") {
      setLogPageState(currentHash);
    } else {
      // Redirect user or display an error message
      router.replace("/404");
    }
  }, []);

  return (
    <>
      <Head>
        <title>GrabTern | Users Login Here</title>
      </Head>
      <Header navbarBackground={true} />
      <main className="login-body d-flex flex-row justify-content-between">
        {logPageState === "login" ? (
          <Login handleLogPageToggle={handleLogPageToggle} />
        ) : (
          <Register handleLogPageToggle={handleLogPageToggle}></Register>
        )}
        {/* Use dynamic imports for images */}
        <div className="tw-hidden md:tw-flex tw-h-[100vh]">
          <img src="/assets/img/gallery/20944201.webp" alt="" />
        </div>
      </main>
    </>
  );
}

export default UserAuthPage;
