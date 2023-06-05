import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Login from "../components/user/login";
import Register from "../components/user/register";

function UserAuthPage() {
  const [logpagestate, setLogPageState] = useState(true);
  const router = useRouter();

  // Function to handle toggle between login/register page
  const handleLogPageToggle = () => {
    setLogPageState(!logpagestate);

    // Update URL hash based on current state
    if (logpagestate) {
      router.push("/userAuth/#register", undefined, { shallow: true });
    } else {
      router.push("/userAuth/#login", undefined, { shallow: true });
    }
  };

  useEffect(() => {
    handleHashChange();

    // Add event listener for URL hash change
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Function to check current URL hash and render corresponding component
  const handleHashChange = () => {
    const currentHash = window.location.hash.substring(1);

    if (currentHash === "login") {
      setLogPageState(true);
      //    console.log("I'm in login region bro");
    } else if (currentHash === "register") {
      setLogPageState(false);
      //    console.log("I'm in register region bro");
    } else {
      console.log("Invalid Hash:", currentHash);
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
          <img src="assets/img/gallery/20944201.webp" alt="" />
        </div>
      </main>
    </>
  );
}

export default UserAuthPage;
