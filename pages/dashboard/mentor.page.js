import React, { useState, useEffect } from "react";
import Sidebar from "../../components/mentorDashboard/sidebar";
import Profile from "../../components/mentorDashboard/profile";
import Sessions from "../../components/mentorDashboard/sessions";
import Calendar from "../../components/mentorDashboard/calendar";

function MentorDashboard() {
  // getting page name on change in tab
  const [component, setComponent] = useState("");
  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    setComponent(params.get("tab") || "");
  }, [window.location.search]);
  return (
    <>
      <div className="">
        {/* <Header navbarBackground={true} /> */}
        <Sidebar />
        <div>
          {component == "profile" && <Profile />}
          {component == "calendar" && <Calendar />}
          {component == "" && <Sessions />}
        </div>
      </div>
    </>
  );
}

export default MentorDashboard;
