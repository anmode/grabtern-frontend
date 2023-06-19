import React from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../../components/Header"));
import ResetPassword from "../../../components/resetpassword";

const Footer = dynamic(() => import("../../../components/Footer"));

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
  return {
    props: {
      resetToken: resetToken,
    },
  };
};
