import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/Header"));
const Footer = dynamic(() => import("../components/Footer"));
import axios from "axios";
import { useRouter } from "next/router";
import Dashboard from "../components/Dashboard";

function Index() {
  const [mentorDetail, setMentorDetail] = useState();
  const router = useRouter();
  useEffect(() => {
    const fetchMentorDetail = async (mentorToken) => {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorDashboard/${mentorToken}`;
      const { data: res } = await axios.get(url, {mentorPW: mentorToken});
      console.log
      if (res.message == "Invalid link") {
        localStorage.removeItem("mentorToken");
        localStorage.removeItem("mentor_name");
        router.push("/");
      }
      setMentorDetail(res.mentorDetail);
    };
    if (localStorage.getItem("mentorToken") !== null) {
      fetchMentorDetail(localStorage.getItem("mentorToken"));
    }
  });
  return (
    <>
      <Header navbarBackground={true} />
      <main style={{marginTop: "118px"}}>
        <div className="container">{!mentorDetail ? (<p style={{margin: "100px 0"}}>We still fetching your profile data wait...</p>) : (
          <Dashboard mentorDetail={mentorDetail} />
        )}</div>
      </main>
      <Footer />
    </>
  );
}

export default Index;
