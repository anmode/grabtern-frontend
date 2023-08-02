import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "../../styles/sidebar.module.css";
import Sidebar from "../../components/mentorDashboard/sidebar";
import Profile from "../../components/mentorDashboard/profile";
import Sessions from "../../components/mentorDashboard/sessions";
import Calendar from "../../components/mentorDashboard/calendar";
import Home from "../../components/mentorDashboard/home";
import Header from "../../components/layout/Header";

function MentorDashboard() {
  const [component, setComponent] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const updatePath = (componentName) => {
    const newPath = `/dashboard/mentor/${componentName}`;
    window.history.pushState({}, "", newPath);
    setComponent(componentName);
  };
  
  const [mentor, setMentor] = useState({});

  return (
    <>
      <div className="tw-flex">
        {/* <Header navbarBackground={true} /> */}
        <Sidebar mentor={mentor} setComponent={updatePath} component={component} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <div className="">
          {component === "" && <Home setComponent={updatePath} setIsSidebarOpen={setIsSidebarOpen} mentor={mentor} setMentor={setMentor} />}
          {component === "profile" && <Profile />}
          {component === "calendar" && <Calendar />}
          {component === "sessions" && <Sessions />}
        </div>
      </div>
    </>
  );
}

export default MentorDashboard;
