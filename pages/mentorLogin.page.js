import axios from "axios";
import jwt_decode from "jwt-decode";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../styles/form.module.css";
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
  
  const [showForm1, setShowForm1] = useState(true); // Show Form1 initially

  const handleUserLoginClick = () => {
    setShowForm1(true);
  };

  const handleMentorLoginClick = () => {
    setShowForm1(false);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (formData.password !== formData.confirmPassword) {
      return toast.error("Password does not match!");
    }
    console.log(formData);
    try {
      if(!setShowForm1){
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
      }
      else{
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/gloginauth`;
        const res = await axios.post(url, userObject);
        console.log(res);
        const userData = {
          user_name: userObject.name,
          user_picture: userObject.picture,
          user_email: userObject.email,
          user_id: res.data.id,
        };

        localStorage.setItem("userData", encryptData(userData));

        const redirectUrl = sessionStorage.getItem("redirectUrl") || "/";
        router.push(redirectUrl);
      }
  
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

      <div className="login-form d-flex flex-column bg-white tw-mb-10">
        <div className={styles.btnnContainer}>
          <button
            className={`${styles.btnn} ${showForm1 ? styles.btnnActive : ""} ${
              styles.user
            }`}
            onClick={handleUserLoginClick}
          >
            User Login
          </button>
          <button
            className={`${styles.btnn} ${showForm1 ? "" : styles.btnnActive} ${
              styles.mentor
            }`}
            onClick={handleMentorLoginClick}
          >
            Mentor Login
          </button>
        </div>
        <div>
          {showForm1 ? (
            <form className="form-default" onSubmit={handleSubmit}>
              <div className={styles.headingg}>
                <img src="/Grabtern2.png"></img>
                <h2>User Login </h2>
              </div>
              <div className="form-input">
                <label htmlFor="email">Email</label>
                <div className={styles.Input}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>
              </div>
              <div className="form-input">
                <label htmlFor="password">Password</label>
                <div className={styles.Input}>
                  {" "}
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={formData.password}
                  />
                </div>
                <div
                  className="tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-px-4 tw-text-gray-600 tw-top-16"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? <VisibillityOff /> : <Visibillity />}
                </div>
              </div>

              <div className="md:tw-w-auto tw-h-10 tw-text-white tw-bg-[#845ec2] tw-border-0 tw-py-2 tw-px-6 focus:tw-outline-none hover:tw-bg-[#6b21a8] tw-rounded-lg tw-font-semibold">
                <input
                  type="submit"
                  name="submit"
                  value="Login"
                  className={styles.loginInput}
                />
              </div>

              <ToastContainer />
              {error && <div style={{ color: "red" }}>{error}</div>}
              <Link
                href="/forgotpass"
                className="forget align-self-start"
                style={{ marginTop: 10, marginBottom: 10 }}
              >
                Forgot Password?
              </Link>
              <div className="link-div">
                Don't have an account?
                <Link
                  href="/userRegister"
                  className="registration d-inline m-2"
                  style={{ textDecoration: "none" }}
                >
                  Register here
                </Link>
              </div>
              <div className={styles.google}>
                <h3 style={{ color: "black", alignSelf: "center" }}>Or</h3>
              </div>
              <div
                id="googleSignInButton"
                style={{ alignSelf: "center" }}
                className={styles.google2}
              ></div>
            </form>
          ) : (
            <form className="form-default" onSubmit={handleSubmit}>
              <div className={styles.headingg}>
                <img src="/Grabtern2.png"></img>
                <h2>Mentor Login </h2>
              </div>
              <div className="form-input">
                <label htmlFor="email">Email</label>
                <div className={styles.Input}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>
              </div>
              <div className="form-input">
                <label htmlFor="password">Password</label>
                <div className={styles.Input}>
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={formData.password}
                  />
                </div>
                <div
                  className="tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-px-4 tw-text-gray-600 tw-top-16"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? <VisibillityOff /> : <Visibillity />}
                </div>
              </div>
              <div className="mb-14 md:tw-w-auto tw-h-10 tw-text-white tw-bg-[#845ec2] tw-border-0 tw-py-2 tw-px-6 focus:tw-outline-none hover:tw-bg-[#6b21a8] tw-rounded-lg tw-font-semibold">
                <input
                  type="submit"
                  name="submit"
                  value="Login"
                  className={styles.loginInput}
                />
              </div>

              <ToastContainer />
              {error && <div style={{ color: "red" }}>{error}</div>}
              <Link
                href="/forgotpass"
                className="forget align-self-start"
                style={{ marginTop: 10, marginBottom: 10 }}
              >
                Forgot Password?
              </Link>
              <div className="link-div">
                Don't have an account?
                <Link
                  href="/mentorRegister"
                  className="registration d-inline m-2"
                  style={{ textDecoration: "none" }}
                >
                  Register here
                </Link>
              </div>
              <div className={styles.google}>
                <h3
                  style={{ color: "black", alignSelf: "center", margin: "5px" }}
                >
                  Or
                </h3>
              </div>
              <div
                id="googleSignInButton"
                style={{ alignSelf: "center" }}
                className={styles.google2}
              ></div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default mentorLogin;
