import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/Header"));
const Footer = dynamic(() => import("../components/Footer"));
import { useRouter } from "next/router";
import axios from "axios";
import jwt_decode from "jwt-decode";
import styles from "../styles/MentorLogin.module.css";
import Link from "next/link";

function MentorLogin() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

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
      localStorage.setItem("mentorToken", res.loginToken);
      localStorage.setItem("mentor_name", res.fullName);
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
      localStorage.setItem("mentorToken", res.loginToken);
      localStorage.setItem("mentor_name", userObject.name);
      localStorage.setItem("mentor_picture", userObject.picture);
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
      <Header navbarBackground={true} />
      <main className={styles.loginBody}>
        <form
          className={styles.formDefault}
          action="login-bg.mp4"
          onSubmit={handleSubmit}
        >
          <div className={`${styles.loginForm} d-flex flex-column`}>
            <div className={styles.logoutLogin}>
              <a href="/index.html">
                <img
                  src="/assets/img/logo/suit.png"
                  alt=""
                  className={`${styles.logoImage} mb-3`}
                />
              </a>
            </div>
            <h2 className={styles.loginHeading}>Mentor Login</h2>
            <div className={styles.formInput}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div className={styles.formInput}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={formData.password}
              />
            </div>
            <div className={styles.formInput}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={formData.confirmPassword}
              />
            </div>
            <div className={styles.formInput}>
              <input
                type="submit"
                name="submit"
                value="Login"
                className={styles.loginButton}
              />
            </div>
            {error && <div className={styles.error}>{error}</div>}
            <Link
              href="/forgotpass"
              className={`${styles.forget} align-self-end`}
              style={{ margin: 0 }}
            >
              Forget Password?
            </Link>
            <div className={styles.linkDiv}>
              Don't have a mentor account?
              <Link
                href="/mentorRegister"
                className={`${styles.registration} d-inline m-2`}
              >
                Sign up
              </Link>
            </div>
            <h3 className={styles.orHeading}>Or</h3>
            <div
              id="googleSignInButton"
              className={styles.googleSignInButton}
            ></div>
          </div>
        </form>
      </main>
    </>
  );
}

export default MentorLogin;
