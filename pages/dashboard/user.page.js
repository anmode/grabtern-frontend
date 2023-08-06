import React, { useState, useEffect } from "react";
import Sidebar from "../../components/userDashboard/sidebar";
import Profile from "../../components/userDashboard/profile";
// import Queries from "../../components/userDashboard/queries";
import Header from "../../components/layout/Header";
import Bookings from "../../components/userDashboard/Bookings";
import Home from "../../components/userDashboard/home";

function userDashboard() {
  // getting page name on change in tab
  const [component, setComponent] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setuser] = useState({});

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    setComponent(params.get("tab") || "");
  }, [window.location.search]);
  return (
    <>
      <div className="tw-flex">
        {/* <Header navbarBackground={true} /> */}
        <Sidebar
          user={user}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <div className="">
          {component === "" && (
            <Home
              setIsSidebarOpen={setIsSidebarOpen}
              user={user}
              setuser={setuser}
            />
          )}
          {component === "profile" && <Profile />}
          {/* {component == "queries" && <Queries />} */}
          {component == "bookings" && <Bookings />}
        </div>
      </div>
    </>
  );
}

export default userDashboard;
