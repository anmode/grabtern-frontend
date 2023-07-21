import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/layout/Header"));
const Footer = dynamic(() => import("../components/layout/Footer"));
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";
import Dashboard from "../components/Dashboard";
import { encryptData, decryptData } from "../hook/encryptDecrypt";

function Index() {
  const [mentorDetail, setMentorDetail] = useState();
  const router = useRouter();
  const userData = decryptData(localStorage.getItem("userData"));
  const mentorData = decryptData(localStorage.getItem("mentorData"));
  useEffect(() => {
    const fetchMentorDetail = async (mentorToken) => {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorDashboard/${mentorToken}`;
      const { data: res } = await axios.get(url, { mentorPW: mentorToken });
      if (res.message == "Invalid link") {
        console.log("got invaid link in dashboard");
        localStorage.removeItem("mentorData");
        router.push("/");
      }
      setMentorDetail(res.mentorDetail);
    };
    if (mentorData?.mentorToken !== null) {
      fetchMentorDetail(mentorData?.mentorToken);
    }
  }, []);
  return (
    <>
      <Head>
        <title>GrabTern | Mentors Dashboard</title>
      </Head>
      <Header navbarBackground={true} />
      <main style={{ marginTop: "118px" }}>
        <div className="container">
          {!mentorDetail ? (
            <p style={{ margin: "100px 0" }}>
              We still fetching your profile data wait...
            </p>
          ) : (
            <Dashboard mentorDetail={mentorDetail} />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Index;
