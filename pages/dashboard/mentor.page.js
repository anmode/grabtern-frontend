import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "../../styles/sidebar.module.css";
import Sidebar from "../../components/mentorDashboard/sidebar";
import Profile from "../../components/mentorDashboard/profile";
import Sessions from "../../components/mentorDashboard/sessions";
import Calendar from "../../components/mentorDashboard/calendar";
import Header from "../../components/layout/Header";

function MentorDashboard() {
  const [component, setComponent] = useState("sessions");
  const updatePath = (componentName) => {
    const newPath = `/dashboard/mentor/${componentName}`;
    window.history.pushState({}, "", newPath);
    setComponent(componentName);
  };
  return (
    <>
      <div className="">
        {/* <Header navbarBackground={true} /> */}
        <Sidebar setComponent={updatePath} />
        <div>
          {component == "profile" && <Profile />}
          {component == "calendar" && <Calendar />}
          {component == "sessions" && <Sessions />}
        </div>
      </div>
    </>
  );
}

export default MentorDashboard;
