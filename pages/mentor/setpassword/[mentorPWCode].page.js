import React from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../../components/layout/Header"));
const MentorFormSetupPW = dynamic(() =>
  import("../../../components/MentorFormSetupPW"),
);
const Footer = dynamic(() => import("../../../components/layout/Footer"));
import axios from "axios";

function Index({ mentorPWCode }) {
  return (
    <>
      <Header navbarBackground={true} />
      <main>
        <MentorFormSetupPW mentorPWCode={mentorPWCode} />
      </main>
      <Footer />
    </>
  );
}

export default Index;

export const getServerSideProps = async (context) => {
  const { mentorPWCode } = context.params;
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/verify/checkPW/${mentorPWCode}`;
  try {
    const { data: res } = await axios.get(url);
    if (res.message == "Invalid link") {
      return {
        redirect: {
          permanent: false,
          destination: "/",
        },
        props: {
          checkPW: "BAD",
          mentorPWCode: null,
        },
      };
    }
  } catch (error) {
    console.error("Server side props error ", error);
  }
  return {
    props: {
      checkPW: "OK",
      mentorPWCode: mentorPWCode,
    },
  };
};
