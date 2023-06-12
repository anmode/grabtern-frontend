import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/Header"));
const Footer = dynamic(() => import("../components/Footer"));
import { useRouter } from "next/router";
import axios from "axios";
import jwt_decode from "jwt-decode";
import styles from "../styles/MentorLogin.module.css";
import Link from "next/link";
import Head from "next/head";

import { useAuth } from "../context/AuthContext";
function mentorLogin() {
  const router = useRouter();
  const [error, setError] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (formData.password !== formData.confirmPassword) {
      return setError("Password does not match!");
    }
    console.log(formData);
    try {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/auth`;
      const { data: res } = await axios.post(url, formData);
      // localStorage.setItem("mentorToken", res.loginToken);
      // localStorage.setItem("mentor_name", res.fullName);
      const mentorData = {
        mentor_name: res.fullName,
        mentorToken: res.loginToken,
      };
      localStorage.setItem("mentorData", JSON.stringify(mentorData));
      setIsMentorLoggedIn(true);
      router.push("/");
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  async function handleCallbackResponse(response) {
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    try {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/gloginauth`;
      const { data: res } = await axios.post(url, userObject);
      // localStorage.setItem("mentorToken", res.loginToken);
      // localStorage.setItem("mentor_name", userObject.name);
      // localStorage.setItem("mentor_picture", userObject.picture);
      const mentorData = {
        mentorToken: res.loginToken,
        mentor_picture: userObject.picture,
        mentor_name: userObject.name,
      };
      localStorage.setItem("mentorData", JSON.stringify(mentorData));
      setIsMentorLoggedIn(true);
      router.push("/");
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
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
      { theme: "outline", size: "large" }
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
        <form className="form-default" onSubmit={handleSubmit}>
          <div className="login-form d-flex flex-column">
            <div className="logout-login">
              <a href="/index.html">
                <img src="/assets/img/logo/loder.webp" alt="" />
              </a>
            </div>
            <h2>Mentor Login</h2>
            <div className="form-input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div className="form-input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={formData.password}
              />
            </div>
            <div className="form-input">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={formData.confirmPassword}
              />
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
            {error && <div style={{ color: "red" }}>{error}</div>}
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
