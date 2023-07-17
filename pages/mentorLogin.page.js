import axios from "axios";
import jwt_decode from "jwt-decode";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Header = dynamic(() => import("../components/layout/Header"));
const Footer = dynamic(() => import("../components/layout/Footer"));

import Visibillity from "../public/assets/Visibillity.jsx";
import VisibillityOff from "../public/assets/VisibillityOff.jsx";

import { useAuth } from "../context/AuthContext";
import { encryptData, decryptData } from "../hook/encryptDecrypt.js";

function mentorLogin() {
  const router = useRouter();
  const [error, setError] = useState("");

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const {
    isMentorLoggedIn,
    setIsMentorLoggedIn,
    isUserLoggedIn,
    setIsUserLoggedIn,
  } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (formData.password !== formData.confirmPassword) {
      return toast.error("Password does not match!");
    }
    console.log(formData);
    try {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/auth`;
      const { data: res } = await axios.post(url, formData);
      // localStorage.setItem("mentorToken", res.mentorToken);
      // localStorage.setItem("mentor_name", res.fullName);
      const mentorData = {
        mentor_name: res.fullName,
        mentorToken: res.mentorToken,
      };
      z;
      localStorage.setItem("mentorData", encryptData(mentorData));
      setIsMentorLoggedIn(true);
      router.push("/");
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        toast.error(error.response.data.message);
      }
    }
  };

  async function handleCallbackResponse(response) {
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    try {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/gloginauth`;
      const { data: res } = await axios.post(url, userObject);
      // localStorage.setItem("mentorToken", res.mentorToken);
      // localStorage.setItem("mentor_name", userObject.name);
      // localStorage.setItem("mentor_picture", userObject.picture);
      const mentorData = {
        mentorToken: res.mentorToken,
        mentor_picture: userObject.picture,
        mentor_name: userObject.name,
      };
      localStorage.setItem("mentorData", encryptData(mentorData));
      setIsMentorLoggedIn(true);
      router.push("/");
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        toast.error(error.response.data.message);
      }
    }
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "1094459761-kbb3qbgafu8avkgfe9fk8f85fr5418a8.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById("googleSignInButton"),
      { theme: "outline", size: "large" },
    );
    google.accounts.id.prompt();
  }, []);

  return (
    <>
      <Head>
        <title>GrabTern | Mentors Login Here</title>
      </Head>
      <Header navbarBackground={true} />
      <main className="login-body">
        <form
          className="form-default"
          onSubmit={handleSubmit}
          aria-label="Mentor login form"
        >
          <div className="login-form d-flex flex-column">
            <div className="logout-login">
              <a href="/index.html" aria-label="Go to home page">
                <img src="/assets/img/logo/loder.webp" alt="logo" />
              </a>
            </div>
            <h2>Mentor Login</h2>
            <div className="form-input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
                required
                aria-required="true"
              />
            </div>
            <div className="form-input">
              <label htmlFor="password">Password</label>
              <input
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                onChange={handleChange}
                value={formData.password}
                required
                aria-required="true"
              />
              <div
                className="tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-px-4 tw-text-gray-600 tw-top-16"
                onClick={togglePasswordVisibility}
                aria-label={
                  isPasswordVisible ? "Hide Password" : "Show Password"
                }
              >
                {isPasswordVisible ? <VisibillityOff /> : <Visibillity />}
              </div>
            </div>
            <div className="form-input">
              <input
                type="submit"
                name="submit"
                value="Login"
                style={{
                  background:
                    "linear-gradient( to top, rgb(83, 116, 255) 0%, rgb(127, 102, 255) 40%, rgb(187, 85, 255) 95%, rgb(192, 84, 255) 100% )",
                }}
              />
            </div>
            <ToastContainer />
            {error && (
              <div style={{ color: "red" }} role="alert">
                {error}
              </div>
            )}
            <Link
              href="/forgotpass"
              className="forget align-self-start"
              style={{ margin: 0 }}
            >
              Forgot Password?
            </Link>
            <div className="link-div m-3">
              Don't have an account?
              <Link
                href="/mentorRegister"
                className="registration d-inline m-2"
                style={{ textDecoration: "none" }}
              >
                Register here
              </Link>
            </div>
            <h3 style={{ color: "black", alignSelf: "center", margin: "5px" }}>
              Or
            </h3>
            <div id="googleSignInButton" style={{ alignSelf: "center" }}></div>
          </div>
        </form>
      </main>
    </>
  );
}

export default mentorLogin;
