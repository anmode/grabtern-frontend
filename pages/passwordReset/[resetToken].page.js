import React from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../components/Header"));
import ResetPassword from '../components/ResetPassword';

const Footer = dynamic(() => import("../../components/Footer"));

function Index({resetToken }) {
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
