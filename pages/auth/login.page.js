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
import Loader from "../../components/UI/Loader";

function login() {
  const router = useRouter();
  const {
    isMentorLoggedIn,
    setIsMentorLoggedIn,
    isUserLoggedIn,
    setIsUserLoggedIn,
  } = useAuth();

  const [error, setError] = useState("");
  const [entityType, setEntityType] = useState("user");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const handleCallbackResponse = async (response) => {
    try {
      const userObject = jwt_decode(response.credential);
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/glogin?entityType=${entityType}`;
      const { data: res } = await axios.post(url, userObject, {
        withCredentials: true,
      });

      toast.info("redirecting to home page");
      if (entityType === "user") {
        const userData = {
          user_name: userObject.name,
          user_image: res.user_image,
          user_email: userObject.email,
          user_id: res.user_id,
        };
        setIsUserLoggedIn(true);
        localStorage.setItem("userData", JSON.stringify(userData));
      } else if (entityType === "mentor") {
        const mentorData = {
          mentor_username: res.mentor_username,
          mentor_name: res.mentor_name,
          mentor_image: res.mentor_image,
        };
        setIsMentorLoggedIn(true);
        toast.success(res.message);
        localStorage.setItem("mentorData", JSON.stringify(mentorData));
      }
      router.push("/");
    } catch (error) {
      handleErrorResponse(error);
    }
  };

  const handleErrorResponse = (error) => {
    console.error("Error in callback of google sign in ", error);
    if (
      error.response &&
      error.response.status >= 400 &&
      error.response.status <= 500
    ) {
      toast.error(error.response.data.message);
    }
    setLoader(false);
  };

  useEffect(() => {
    // Function to update the URL with the new entityType
    const updateEntityTypeInUrl = (newEntityType) => {
      const queryParams = { ...router.query, entityType: newEntityType };
      router.push(
        { pathname: router.pathname, query: queryParams },
        undefined,
        {
          shallow: true,
        },
      );
    };

    updateEntityTypeInUrl(entityType);

    window?.google?.accounts?.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      callback: (response) => handleCallbackResponse(response),
    });
  }, [entityType]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectURL = urlParams.get("redirectURL");
    const entityTypeFromUrl = urlParams.get("entityType");

    if (isMentorLoggedIn || isUserLoggedIn) {
      router.replace(redirectURL || "/");
      return;
    }

    setEntityType(entityTypeFromUrl);

    const googleSignInButton = document.getElementById("googleSignInButton");
    if (googleSignInButton) {
      window?.google?.accounts?.id.renderButton(googleSignInButton, {
        theme: "outline",
        size: "large",
      });
      window?.google?.accounts?.id.prompt();
    }
  }, [isUserLoggedIn, isMentorLoggedIn, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      setLoader(true);
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login?entityType=${entityType}`;
      const { data: res } = await axios.post(url, formData, {
        withCredentials: true,
      });
      setLoader(false);

      if (entityType === "user") {
        setIsUserLoggedIn(true);
        localStorage.setItem("userData", JSON.stringify(res.userData));
      } else if (entityType === "mentor") {
        setIsMentorLoggedIn(true);
        localStorage.setItem("mentorData", JSON.stringify(res.mentorData));
      }
    } catch (error) {
      setLoader(false);
      handleErrorResponse(error);
    }
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
                {entityType?.charAt(0).toUpperCase() +
                  entityType?.slice(1)}{" "}
                Login{" "}
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
                {!loader ? (
                  <div className="tw-flex tw-justify-center  tw-h-11">
                    <Button
                      className=" tw-w-[400px]"
                      onClick={handleSubmit}
                      text="Login"
                    />
                  </div>
                ) : (
                  <Loader width="25px" />
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
                href={
                  entityType == "user" ? "/auth/register" : "/mentorRegister"
                }
                className={styles.registration}
                style={{ textDecoration: "none" }}
              >
                Register here
              </Link>
            </div>
            <div className={styles.google}>
              <h3 style={{ color: "var(--base-500)", alignSelf: "center" }}>
                Or
              </h3>
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
