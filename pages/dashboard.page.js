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
  const mentorData = {
    username: "muhammad5558",
    name: "Muhammad",
    email: "sayyidmuhammad5352@gmail.com",
    mobile: 123465798,
    internAt: "test",
    currentStatus: "test",
    description: "test",
    image:
      "https://res.cloudinary.com/grabtern-demo/image/upload/v1690267757/blob_usommc.jpg",
    social: {
      linkedin: "https://linkedin.com/in/muhammad-jufry",
      twitter: "https://twitter.com/test",
    },
  };
  useEffect(() => {
    // const fetchMentorDetail = async (mentorToken) => {
    //   const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorDashboard/${mentorToken}`;
    //   const { data: res } = await axios.get(url, { mentorPW: mentorToken });
    //   if (res.message == "Invalid link") {
    //     console.log("got invaid link in dashboard");
    //     localStorage.removeItem("mentorData");
    //     router.push("/");
    //   }
    //   setMentorDetail(res.mentorDetail);
    // };
    // if (mentorData?.mentorToken !== null) {
    //   fetchMentorDetail(mentorData?.mentorToken);
    // }
  }, []);
  return (
    <>
      <Head>
        <title>GrabTern | Mentors Dashboard</title>
      </Head>
      <Header navbarBackground={true} />
      <main style={{ marginTop: "118px" }}>
        <div className="container">
          {!mentorData ? (
            <p style={{ margin: "100px 0" }}>
              We still fetching your profile data wait...
            </p>
          ) : (
            <Dashboard mentorDetail={mentorData} />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Index;
