import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "../../styles/sidebar.module.css";
import Sidebar from "../../components/userDashboard/sidebar";
import Profile from "../../components/userDashboard/profile";
// import Sessions from "../../components/userDashboard/sessions";
import Calendar from "../../components/userDashboard/calendar";
// import Queries from "../../components/userDashboard/queries";
import Header from "../../components/layout/Header";
import Bookings from "../../components/userDashboard/Bookings";

function MentorDashboard() {
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
          {component == "profile" && <Profile />}
          {component == "calendar" && <Calendar />}
          {/* {component == "sessions" && <Sessions />}
          {component == "queries" && <Queries />} */}
          {component == "bookings" && <Bookings />}
        </div>
      </div>
    </>
  );
}

export default MentorDashboard;
