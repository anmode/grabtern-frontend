import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "../../styles/sidebar.module.css";
import Sidebar from "../../components/mentorDashboard/sidebar";
import Profile from "../../components/mentorDashboard/profile";
import Sessions from "../../components/mentorDashboard/sessions";
import Calender from "../../components/mentorDashboard/calender";
function MentorDashboard() {
  return (
    <>
      <BrowserRouter>
        <div className={styles.page}>
          <Sidebar />
          <Routes>
            <Route path="/" />
             <Route path="/Profile" element={<Profile />} />
            <Route path="/Sessions" element={<Sessions />} />  
            <Route path="/Calender" element={<Calender />} /> 
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default MentorDashboard;