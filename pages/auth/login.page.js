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
import Button from "../../components/UI/Button/Button";
import EventLogin from "../../components/eventLogin/EventLogin";
const Header = dynamic(() => import("../../components/layout/Header"));
const Footer = dynamic(() => import("../../components/layout/Footer"));
import Visibillity from "../../public/assets/Visibillity.jsx";
import VisibillityOff from "../../public/assets/VisibillityOff.jsx";
import { useAuth } from "../../context/AuthContext";

function login() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [entityType, setEntityType] = useState("");

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      setIsLoading(true);
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login?entityType=${entityType}`;

      const { data: res } = await axios.post(url, formData);
      setIsLoading(false);
      const decryptedEntityData = decryptData(res);
      // console.log(userData);
      let entityData = {};

      if (entityType === "user") {
        localStorage.setItem("userData", JSON.stringify(res.userData));
        setIsUserLoggedIn(true);
      } else if (entityType === "mentor") {
        localStorage.setItem("mentorData", JSON.stringify(res.mentorData));
        setIsMentorLoggedIn(true);
      }
      // router.push("/");
    } catch (error) {
      setIsLoading(false);
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

  async function handleCallbackResponse(response, entityType) {
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    try {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/glogin?entityType=${entityType}`;
      const { data: res } = await axios.post(url, userObject, {
        withCredentials: true,
      });
      console.log(res);
      if (entityType === "user") {
        const userData = {
          user_name: userObject.name,
          user_picture: userObject.picture,
          user_email: userObject.email,
          user_id: res.id,
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        setIsUserLoggedIn(true);
      } else if (entityType === "mentor") {
        const mentorData = {
          mentor_username: res.username,
          mentor_name: userObject.name,
          mentor_picture: userObject.picture,
        };
        setTimeout(() => {
          toast.success(res.message);
        }, 6000);
        localStorage.setItem("mentorData", JSON.stringify(mentorData));
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
    if (isMentorLoggedIn || isUserLoggedIn) {
      const urlParams = new URLSearchParams(window.location.search);
      const redirectURL = urlParams.get("redirectURL");
      router.replace(redirectURL || "/");
    }

    const url = new URL(window.location.href);
    const entityTypeFromUrl = url.searchParams.get("entityType");
    if (entityTypeFromUrl) {
      setEntityType(entityTypeFromUrl);
    }

    // Initialize Google Sign-In with the correct entityType
    google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      callback: (response) =>
        handleCallbackResponse(response, entityTypeFromUrl),
    });

    google.accounts.id.renderButton(
      document.getElementById("googleSignInButton"),
      { theme: "outline", size: "large" },
    );

    google.accounts.id.prompt();

    if (isUserLoggedIn || isMentorLoggedIn) {
      const urlParams = new URLSearchParams(window.location.search);
      const redirectURL = urlParams.get("redirectURL");
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
              <img src="/faviconn.png"></img>
              <h2>
                {" "}
                {entityType.charAt(0).toUpperCase() +
                  entityType.slice(1)} Login{" "}
              </h2>
            </div>
            <div className={styles.forminput}>
              <label htmlFor="email">Email</label>
              <div className={styles.Input}>
                <input
                  type="email"
                  name="email"
                  required
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
                  required
                  onChange={handleChange}
                  value={formData.password}
                />
                <div className={styles.eye} onClick={togglePasswordVisibility}>
                  {isPasswordVisible ? <Visibillity /> : <VisibillityOff />}
                </div>
              </div>
            </div>


            
            <div>
            <ToastContainer />
            <div>
              {isLoading ? ( <div className="tw-relative tw-left-[160px]">
                <EventLogin/>
              </div>
            
              ):(
                <div className="tw-flex tw-justify-center  tw-h-11"
                >
               <Button className=" tw-w-[400px]" onClick={handleSubmit}
               text="Login"
               />
               </div>
              )}

            </div>
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
                href="/auth/register"
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
