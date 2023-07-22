import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Visibillity from "../../public/assets/Visibillity";
import VisibillityOff from "../../public/assets/VisibillityOff";
import Header from "../../components/layout/Header";
import styles from "../../styles/userRegistration.module.css";
import jwt_decode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { decryptData, encryptData } from "../../hook/encryptDecrypt";
import { useAuth } from "../../context/AuthContext";

function useRedirectIfAuthenticated() {
  const router = useRouter();
  const {
    isMentorLoggedIn,
    setIsMentorLoggedIn,
    isUserLoggedIn,
    setIsUserLoggedIn,
  } = useAuth();

  useEffect(() => {
    const handleCallBackResponse = async (response) => {
      const userObject = jwt_decode(response.credential);
      const userData = {
        user_name: userObject.name,
        user_picture: userObject.picture,
        user_email: userObject.email,
      };

      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/gsignup`;
      try {
        const res = await axios.post(url, {
          registerToken: encryptData(userData),
        });
        console.log(res);
        localStorage.setItem("userData", encryptData(userData));
        setIsUserLoggedIn(true);
        const redirectUrl = new URLSearchParams(window.location.search).get(
          "redirectUrl",
        );
        router.push(redirectUrl || "/");
      } catch (error) {
        if (error.response && error.response.status >= 400) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Failed to sign up. Please try again later.");
        }
        if (error.response && error.response.status === 202) {
          toast.warning(
            "Registration successful, but there was an issue sending the verification email. Please contact support.",
          );
        }
      }
    };

    const initGoogleSignUp = () => {
      try {
        google.accounts.id.initialize({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
          callback: handleCallBackResponse,
          context: "signup",
        });
        google.accounts.id.renderButton(document.getElementById("signUpDiv"), {
          theme: "outline",
          size: "large",
          text: "signup_with",
          shape: "pill",
        });
        google.accounts.id.prompt();
      } catch (error) {
        console.error("Google sign-up initialization failed:", error);
      }
    };

    initGoogleSignUp();
    const userDataString = localStorage.getItem("userData");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      if (userData.name !== null || userData.token !== null) {
        router.push("/");
      }
    }
  }, [router]);
}

function Register({ handleLogPageToggle }) {
  useRedirectIfAuthenticated();

  const router = useRouter();
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [verificationSent, setVerificationSent] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConPasswordVisible, setConIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const toggleConPasswordVisibility = () => {
    setConIsPasswordVisible((prevState) => !prevState);
  };

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setVerificationSent(false);

    if (data.password !== data.confirmPassword) {
      return toast.error("Passwords do not match!");
    }

    try {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/userRegister`;
      await axios.post(url, data);
      setVerificationSent(true);
      toast.success(
        "Registration successful! An email has been sent to your email address. Please check your inbox to verify your account.",
      );
      setTimeout(() => {
        router.push("/");
      }, 5000);
    } catch (error) {
      if (error.response && error.response.status >= 400) {
        toast.error(error.response.data.message);
      } else {
        toast.error(
          "An error occurred during registration. Please try again later.",
        );
      }
      if (error.response && error.response.status === 202) {
        toast.warning(
          "Registration successful, but there was an issue sending the verification email. Please contact support.",
        );
      }
    }
  };

  return (
    <>
      <Header navbarBackground={true} />
      <div className={styles.Registerform}>
        <form className="form-default" onSubmit={handleSubmit}>
          <div className={styles.heading}>
            <img src="/Grabtern2.png" class="small-image"></img>
            <h2>Hey, hello 👋</h2>
          </div>
          {/* <p >
          The faster you fill up, the faster you get a internship
          </p> */}
          <div className={styles.forminput}>
            <label htmlFor="name">Full name</label>
            <div className={styles.Input}>
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                onChange={handleChange}
                value={data.fullName}
              />
            </div>
          </div>

          <div className={styles.forminput}>
            <label htmlFor="email">Email</label>
            <div className={styles.Input}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={data.email}
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
                value={data.password}
                className="tw-px-2 tw-border-b-[1px] tw-border-b-black tw-py-3 tw-pr-16"
              />
              <div
                className="tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-px-4 tw-text-gray-600 tw-top-10"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? <Visibillity /> : <VisibillityOff />}
              </div>
            </div>
          </div>

          <div className={styles.forminput}>
            <label htmlFor="password">Confirm Password</label>
            <div className={styles.Input}>
              {" "}
              <input
                type={isPasswordVisible ? "text" : "password"}
                name="confirmPassword"
                placeholder="Password"
                onChange={handleChange}
                value={data.confirmPassword}
                className="tw-px-2 tw-border-b-[1px] tw-border-b-black tw-py-3 tw-pr-16"
              />
              <div
                className="tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-px-4 tw-text-gray-600 tw-top-10"
                onClick={toggleConPasswordVisibility}
              >
                {isConPasswordVisible ? <Visibillity /> : <VisibillityOff />}
              </div>
            </div>
          </div>
          <ToastContainer />
          {verificationSent &&
            toast.success(
              "An email has been sent to {data.email}. Please check your inbox toverify your account.",
            )}

          <div className="md:tw-w-auto tw-h-10 tw-text-white tw-bg-[#845ec2] tw-border-0 tw-py-2 tw-px-6 focus:tw-outline-none hover:tw-bg-[#6b21a8] tw-rounded-lg tw-font-semibold flex items-center justify-center">
            <input
              type="submit"
              name="submit"
              value="Registration"
              style={{ textAlign: "center", width: "100%" }}
            />
          </div>

          <div className={styles.linkdiv}>
            Already have an account?
            <button
              className="tw-ml-0 md:tw-ml-2 tw-mt-[1px] hover:tw-text-gray-400 tw-text-blue-700"
              style={{ textDecoration: "none" }}
              onClick={() => handleLogPageToggle()}
            >
              Login{" "}
            </button>
          </div>
          <div className={styles.google}>
            <h3 style={{ color: "black", alignSelf: "center" }}>Or</h3>
          </div>
          <div
            id="signUpDiv"
            style={{ alignSelf: "center" }}
            className={styles.googlelogin}
          ></div>
        </form>
      </div>
    </>
  );
}

export default Register;
