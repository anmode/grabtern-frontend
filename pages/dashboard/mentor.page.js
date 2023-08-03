import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "../../styles/sidebar.module.css";
import Sidebar from "../../components/mentorDashboard/sidebar";
import Profile from "../../components/mentorDashboard/profile";
import Sessions from "../../components/mentorDashboard/sessions";
import Calendar from "../../components/mentorDashboard/calendar";
import Queries from "../../components/mentorDashboard/queries";
import Home from "../../components/mentorDashboard/home";
import Header from "../../components/layout/Header";
import Bookings from "../../components/mentorDashboard/Bookings";

function MentorDashboard() {
  // getting page name on change in tab
  const [component, setComponent] = useState("sessions");
  // useEffect(() => {
  //   const search = window.location.search;
  //   const params = new URLSearchParams(search);
  //   setComponent(params.get("tab") || "");
  // }, [window.location.search]);
  const updatePath = (componentName) => {
    const newPath = `/dashboard/mentor/${componentName}`;
    window.history.pushState({}, "", newPath);
    setComponent(componentName);
  };
  return (
    <>
      <div className="tw-flex">
        {/* <Header navbarBackground={true} /> */}
        <Sidebar setComponent={updatePath} component={component} />
        <div>
          {component == "profile" && <Profile />}
          {component == "calendar" && <Calendar />}
          {component == "sessions" && <Sessions />}
          {component == "queries" && <Queries />}
          {component == "bookings" && <Bookings />}
        </div>
      </div>
    </>
  );
}

export default MentorDashboard;
