import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../styles/loginPage.module.css";
import Button from "../../components/UI/Button/Button";
import dynamic from "next/dynamic";
import Loader from "../../components/UI/Loader";
import axios from "axios";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import errorCodes from "../../config/errorCodes";
import GoogleBtn from "../../components/UI/GoogleBtn/GoogleBtn";

const Header = dynamic(() => import("../../components/layout/Header"));

function Login() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [entityType, setEntityType] = useState("user");
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [toastDisplayed, setToastDisplayed] = useState(false);
  const { isMentorLoggedIn, isUserLoggedIn } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const updateEntityTypeInUrl = (newEntityType) => {
      const queryParams = new URLSearchParams(window.location.search);
      queryParams.set("entityType", newEntityType);
      const queryString = queryParams.toString();
      window.history.replaceState(
        null,
        "",
        `${router.pathname}?${queryString}`,
      );
    };

    updateEntityTypeInUrl(entityType);
  }, [entityType]);

  useEffect(() => {
    const { redirectURL, entityType: entityTypeFromUrl, error } = router.query;

    if ((isMentorLoggedIn || isUserLoggedIn) && !toastDisplayed) {
      router.replace(redirectURL || "/");
      return;
    }

    setEntityType(entityTypeFromUrl || "user");

    if (error && !toastDisplayed) {
      const errorMessage = errorCodes[error] || "An unknown error occurred.";
      setError(errorMessage);
      toast.error(errorMessage);
      setToastDisplayed(true);
    }
  }, [isUserLoggedIn, isMentorLoggedIn, router, toastDisplayed]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!formData.email || !formData.password) {
      setError("Please fill all the fields");
      setTimeout(() => {
        setError("");
      }, 5000);
      return;
    }
    try {
      setLoader(true);
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login?entityType=${entityType}`;
      const response = await axios.post(url, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      setLoader(false);
      if (response.data.redirectURL) {
        window.location.href = response.data.redirectURL;
      }
    } catch (error) {
      setLoader(false);
      // const errorMessage =
      //   errorCodes[error.response.data.error] ||
      //   "Login failed. Please try again.";
      const errorMessage =
        errorCodes[error.response.data.error] ||
        "Login failed. Please try again.";
      if (error.response.data.error === "user_not_found") {
        router.push("/auth/register");
      } else if (error.response.data.error === "mentor_not_found") {
        router.push("/mentor/register");
      }
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  const handleGoogleSignIn = () => {
    const { redirectURL } = router.query || {};
    let url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/gsignin?entityType=${entityType}`;

    if (redirectURL) {
      url += `&redirectURL=${encodeURIComponent(redirectURL)}`;
    }

    window.location.href = url;
  };

  return (
    <>
      <Header navbarBackground={true} />
      <div className={styles.loginform}>
        <div className={styles.btnnContainer}>
          <button
            className={`${styles.btnn} ${
              entityType === "user" ? styles.btnnActive : ""
            } ${styles.user}`}
            onClick={() => setEntityType("user")}
          >
            User Login
          </button>
          <button
            className={`${styles.btnn} ${
              entityType === "mentor" ? styles.btnnActive : ""
            } ${styles.mentor}`}
            onClick={() => setEntityType("mentor")}
          >
            Mentor Login
          </button>
        </div>

        <div>
          <form className="form-default" onSubmit={handleSubmit}>
            <div className={styles.headingg}>
              <img src="/faviconn.png" alt="Logo" />
              <h2>
                {entityType?.charAt(0).toUpperCase() + entityType?.slice(1)}{" "}
                Login
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
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={handleChange}
                  value={formData.password}
                />
              </div>
            </div>
            <div>
              <ToastContainer />
              <div>
                {!loader ? (
                  <div className="tw-flex tw-justify-center tw-h-11">
                    <Button
                      className="tw-w-[400px] tw-font-semibold"
                      onClick={handleSubmit}
                      text="Login"
                    />
                  </div>
                ) : (
                  <Loader width="25px" />
                )}
              </div>
            </div>
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
                  entityType === "user" ? "/auth/register" : "//mentor/register"
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
            <div className={styles.google}>
              <GoogleBtn
                onClick={handleGoogleSignIn}
                text="Sign in with Google"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
