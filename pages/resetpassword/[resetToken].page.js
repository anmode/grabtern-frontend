import React from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../components/Header"));
import ResetPassword from "../../components/resetpassword";

const Footer = dynamic(() => import("../../components/Footer"));

function Index({ resetToken }) {
  return (
    <>
      <Header navbarBackground={true} />
      <main>
        <ResetPassword resetToken={resetToken} />
      </main>
      <Footer />
    </>
  );
}

export default Index;
export const getServerSideProps = async (context) => {
  const { resetToken } = context.params;
  // const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/verify/checkPW/${mentorPWCode}`;
  // const { data: res } = await axios.get(url);
  // if (res.message == "Invalid link") {
  //   return {
  //     redirect: {
  //       permanent: false,
  //       destination: "/",
  //     },
  //     props: {
  //       checkPW: "BAD",
  //       mentorPWCode: null,
  //     },
  //   };
  // }
  return {
    props: {
      resetToken: resetToken,
    },
  };
};
