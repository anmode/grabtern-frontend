import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "../../styles/sidebar.module.css";
import Sidebar from "./sidebar.page";
import Profile from "./profile.page";
import Sessions from "./sessions.page";

function UserDashboard() {
  return (
    <>
      <BrowserRouter>
        <div className={styles.page}>
          <Sidebar />
          <Routes>
            <Route path="/" />
             <Route path="/Profile" element={<Profile />} />
            <Route path="/Sessions" element={<Sessions />} />  
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default UserDashboard;
