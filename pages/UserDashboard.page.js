import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sidebar from "./Sidebar.page";
import Profile from "./Profile.page";
import Sessions from "./Sessions.page";

function UserDashboard() {
  return (
    <>
      <BrowserRouter>
        <div className="page">
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
