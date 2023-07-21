import axios from "axios";
import jwt_decode from "jwt-decode";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../styles/form.module.css";
const Header = dynamic(() => import("../../components/layout/Header"));
const Footer = dynamic(() => import("../../components/layout/Footer"));

import Visibillity from "../../public/assets/Visibillity.jsx";
import VisibillityOff from "../../public/assets/VisibillityOff.jsx";

import { useAuth } from "../../context/AuthContext";
import { encryptData, decryptData } from "../../hook/encryptDecrypt.js";

function login() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [entityType, setEntityType] = useState("user");

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
    try {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login?entityType=${entityType}`;
      const { data: res } = await axios.post(url, formData);
      let entityData = {};
      if (entityType === "user") {
        entityData = {
          token: res.data,
          user_name: res.data.fullName,
          user_email: res.data.email,
          user_id: res.data.id,
        };
        localStorage.setItem("userData", encryptData(entityData));
        setIsUserLoggedIn(true);
      } else if (entityType === "mentor") {
        entityData = {
          mentor_name: res.fullName,
          mentorToken: res.mentorToken,
        };
        localStorage.setItem("mentorData", encryptData(entityData));
        setIsMentorLoggedIn(true);
      }

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
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/glogin?entityType=${entityType}`;
      const { data: res } = await axios.post(url, userObject);
      let entityData = {};
      if (entityType === "user") {
        entityData = {
          user_name: userObject.name,
          user_picture: userObject.picture,
          user_email: userObject.email,
          user_id: res.data.id,
        };
        localStorage.setItem("userData", encryptData(entityData));
        setIsUserLoggedIn(true);
      } else if (entityType === "mentor") {
        entityData = {
          mentor_name: userObject.name,
          mentorToken: res.mentorToken,
          mentor_picture: userObject.picture,
        };
        localStorage.setItem("mentorData", encryptData(entityData));
        setIsMentorLoggedIn(true);
      }
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
    // Use the useRouter hook to get the 'entityType' query parameter from the URL
    // Use window.location.href to get the URL and extract the query parameters
    const url = new URL(window.location.href);
    const entityTypeFromUrl = url.searchParams.get("entityType");
    console.log(entityTypeFromUrl);
    // Set the entity type from the URL if it exists
    if (entityTypeFromUrl) {
      setEntityType(entityTypeFromUrl);
    }
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

    // Check if the user or mentor is logged in
    if (isUserLoggedIn || isMentorLoggedIn) {
      // Extract redirectURL from query parameters
      const urlParams = new URLSearchParams(window.location.search);
      const redirectURL = urlParams.get("redirectURL");

      // Redirect to redirectURL if it exists
      if (redirectURL) {
        router.push(redirectURL);
      } else {
        router.push("/");
      }
    }
  }, [isUserLoggedIn, isMentorLoggedIn]);

  // Function to update the URL with the new entityType
  const updateEntityTypeInUrl = (newEntityType) => {
    const queryParams = router.query;
    queryParams.entityType = newEntityType;
    router.push({ pathname: router.pathname, query: queryParams }, undefined, {
      shallow: true,
    });
  };

  return (
    <>
      <Head>
        <title>GrabTern | Mentors Login Here</title>
      </Head>

      <Header navbarBackground={true} />
      <div className={styles.loginform}>
        <div className={styles.btnnContainer}>
          <button
            className={`${styles.btnn} ${
              entityType === "user" ? styles.btnnActive : ""
            } ${styles.user}`}
            onClick={() => {
              setEntityType("user");
              updateEntityTypeInUrl("user");
            }}
          >
            User Login
          </button>
          <button
            className={`${styles.btnn} ${
              entityType === "mentor" ? styles.btnnActive : ""
            } ${styles.mentor}`}
            onClick={() => {
              setEntityType("mentor");
              updateEntityTypeInUrl("mentor");
            }}
          >
            Mentor Login
          </button>
        </div>
        <div>
          <form className="form-default" onSubmit={handleSubmit}>
            <div className={styles.headingg}>
              <img src="/Grabtern2.png"></img>
              <h2> {entityType} Login </h2>
            </div>
            <div className={styles.forminput}>
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
            <div className={styles.forminput}>
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
                <div className={styles.eye} onClick={togglePasswordVisibility}>
                  {isPasswordVisible ? <VisibillityOff /> : <Visibillity />}
                </div>
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
              href={`/auth/forgotpass?entityType=${entityType}`}
              className={styles.forget}
              style={{ marginTop: 10, marginBottom: 10 }}
            >
              Forgot Password?
            </Link>
            <div className={styles.linkdiv}>
              Don't have an account?
              <Link
                href="/userRegister"
                className={styles.registration}
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
        </div>
      </div>
    </>
  );
}

export default login;
