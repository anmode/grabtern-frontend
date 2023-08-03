import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "../../styles/sidebar.module.css";
import Sidebar from "../../components/userDashboard/sidebar";
import Profile from "../../components/userDashboard/profile";
import Header from "../../components/layout/Header";
import Bookings from "../../components/userDashboard/Bookings";

function UserDashboard() {
  // getting page name on change in tab
  const [component, setComponent] = useState("sessions");
  // useEffect(() => {
  //   const search = window.location.search;
  //   const params = new URLSearchParams(search);
  //   setComponent(params.get("tab") || "");
  // }, [window.location.search]);
  const updatePath = (componentName) => {
    const newPath = `/dashboard/user/${componentName}`;
    window.history.pushState({}, "", newPath);
    setComponent(componentName);
  };
  return (
    <>
      <div className="">
        {/* <Header navbarBackground={true} /> */}
        <Sidebar setComponent={updatePath} component={component} />
        <div>
          {/* {component == "" && <Header />} */}
          {component == "profile" && <Profile />}
          {component == "bookings" && <Bookings />}
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
