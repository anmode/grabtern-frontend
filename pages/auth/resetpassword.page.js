import React, { useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import router from "next/router";
const Header = dynamic(() => import("../../components/layout/Header.js"));
import { encryptData, decryptData } from "../../hook/encryptDecrypt.js";
const Footer = dynamic(() => import("../../components/layout/Footer"));
import Head from "next/head.js";
import ButtonUI from "../../components/UI/Button/Button";
import Image from "next/image";
import ForgotLogo from "../../public/Grabtern2.png";
import Logo from "../../public/assets/img/favicon1.ico";
import { ToastContainer, toast } from "react-toastify";

const ResetPassword = () => {
  const { entityType, resetToken } = router.query;
  const [isLoading, setIsLoading] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async () => {
    setError("");
    setMessage("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setIsLoading(true);
      const data = {
        resetToken: resetToken,
        newPassword: newPassword,
        confirmPassword: confirmPassword,
      };
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/resetPassword?entityType=${entityType}`,
        {
          token: encryptData(data),
        },
      );
      setIsLoading(false);
      setMessage(response.data.message);
      router.push("/");
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("Internal server error");
      }
    }
  };

  return (
    <>
      <Head>
        <title>GrabTern | Reset Password</title>
      </Head>
      {/* <Header navbarBackground={true} /> */}
      <main className="tw-flex tw-justify-center tw-items-center">
        <form>
          <div className="tw-flex  tw-items-center tw-mb-10">
            <Image
              className="tw-px-3 tw-py-4"
              src={Logo}
              alt="icon"
              width={50}
              height={50}
            />
            <div className="tw-font-inter tw-font-bold tw-text-3xl ">
              GrabTern
            </div>
          </div>
          <div className="">
            <div className="tw-pb-12 tw-font-inter tw-font-semibold tw-text-5xl tw-leading-relaxed">
              Set your password
            </div>
            <div className="tw-pb-7 tw-font-inter tw-font-medium tw-text-base">
              Please enter a new password for your GrabTern account.
            </div>
            <div className="">
              <label
                htmlFor="password"
                className=" tw-font-inter tw-font-medium tw-text-base"
              >
                Password
              </label>
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="tw-rounded-md tw-border-2 tw-border-base-300 tw-px-3 tw-py-2 tw-pr-20"
              />
            </div>
            <div
              className="form-input tw-pt-10 tw-pb-12"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ButtonUI text="Set Password" className="tw-px-10 tw-py-2" />
            </div>
            {/* {isLoading && (
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  border: "none",
                }}
                src="/assets/img/gif/Spinner.gif"
                alt="loading..."
              />
            )} */}
          </div>
          <ToastContainer />
          <hr />
          <div className="tw-pt-5 tw-font-inter tw-font-bold tw-text-xl tw-text-[#4E9F3D]">
            <a href="#">Contact Us</a>
          </div>
        </form>
        <div className="logout-login">
          <div className="image-container">
            <Image src={ForgotLogo} width={600} height={600} />
          </div>
        </div>
      </main>

      <style jsx>{`
        /* CSS for hiding the image on small screens */
        @media (max-width: 1450px) {
          .image-container {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default ResetPassword;
