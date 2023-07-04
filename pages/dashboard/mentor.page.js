import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "../../styles/sidebar.module.css";
import Sidebar from "../../components/mentorDashboard/sidebar";
import Profile from "../../components/mentorDashboard/profile";
import Sessions from "../../components/mentorDashboard/sessions";
import Calendar from "../../components/mentorDashboard/calendar";

function MentorDashboard() {
  return (
    <>
      <BrowserRouter>
        <div className={styles.page}>
          <Sidebar />
          <Routes>
            <Route path="/mentor" element={<></>} />
            <Route path="/mentor/profile" element={<Profile />} />
            <Route path="/mentor/sessions" element={<Sessions />} />
            <Route path="/mentor/calendar" element={<Calendar />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default MentorDashboard;
