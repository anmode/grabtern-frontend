import React, { useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/layout/Header"));
import { Section } from "../components/UI";

const Payment = () => {
  useEffect(() => {
    // Dynamically load Razorpay script
    const script = document.createElement("script");
    script.src = "https://cdn.razorpay.com/static/embed_btn/bundle.js";
    script.defer = true;
    script.id = "razorpay-embed-btn-js";
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Header />
      <Section
        kicker="Grabtern internship"
        heading="Welcome to our fall Internship 2024 ( Oct - Dec )"
        align="center"
        className="tw-mt-10 tw-pb-0"
      ></Section>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500">
        <Head>
          <title>Internship Payment</title>
          <meta name="description" content="Pay for the Grabtern internship" />
        </Head>
        <main className="p-8 bg-white shadow-lg rounded-lg max-w-md w-full mx-4 sm:mx-6 lg:mx-8">
          <p className="text-gray-700 mb-6 text-center">
            This internship offers a valuable opportunity for those without
            prior work experience to gain practical knowledge and skills. You
            will work on the live product grabtern.in, mirroring the environment
            of a product-based company. This includes full development-based
            architecture, working with AWS EC2 instances, and managing a DevOps
            pipeline. The fee for this 3-month journey is charged to cover
            operational expenditures.
          </p>
          <div className="flex justify-center">
            <div
              className="razorpay-embed-btn"
              data-url="https://pages.razorpay.com/pl_Oh8Qud9C1FyRVh/view"
              data-text="Pay Now"
              data-color="#528FF0"
              data-size="large"
            >
              {/* Razorpay script will be loaded dynamically */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Payment;
