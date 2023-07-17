import axios from "axios";
import jwt_decode from "jwt-decode";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../context/AuthContext";
import { encryptData, decryptData } from "../../hook/encryptDecrypt";

import Visibillity from "../../public/assets/Visibillity.jsx";
import VisibillityOff from "../../public/assets/VisibillityOff";

function Login({ handleLogPageToggle }) {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [login, setLogin] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const router = useRouter();
  const {
    isMentorLoggedIn,
    setIsMentorLoggedIn,
    isUserLoggedIn,
    setIsUserLoggedIn,
  } = useAuth();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  useEffect(() => {
    const handleCallBackResponse = async (response) => {
      const userObject = jwt_decode(response.credential);
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/gloginauth`;
      try {
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
      } catch (error) {
        setError("New user? Register first.");
        console.log(error);
      }
    };

    const initGoogleSignIn = () => {
      try {
        google.accounts.id.initialize({
          client_id:
            "1094459761-kbb3qbgafu8avkgfe9fk8f85fr5418a8.apps.googleusercontent.com",
          callback: handleCallBackResponse,
        });
        google.accounts.id.renderButton(document.getElementById("signInDiv"), {
          theme: "outline",
          size: "large",
        });
        google.accounts.id.prompt();
      } catch (error) {
        console.error("Google sign-in initialization failed:", error);
      }
    };

    initGoogleSignIn();

    const userData = decryptData(localStorage.getItem("userData"));
    if (userData && userData.redirectUrl) {
      const redirectUrl = userData.redirectUrl;
      router.push(redirectUrl);
    }
  }, []);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/auth`;
      const res = await axios.post(url, data);
      const userData = {
        token: res.data,
        user_name: res.data.fullName,
        user_email: res.data.email,
        user_id: res.data.id,
        redirectUrl: localStorage.getItem("redirectUrl"),
      };

      localStorage.setItem("userData", encryptData(userData));

      setIsUserLoggedIn(true);
      router.push(localStorage.getItem("redirectUrl") || "/");
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 405) {
        console.log("error ", error.response);
        toast.error(
          "Email not verified, verification link has been sent to your email",
        );
      } else if (error.response && error.response.status === 401) {
        toast.error("Invalid email or password.");
      } else if (
        localStorage.getItem("user_name") !== null &&
        localStorage.getItem("user_email") !== null
      ) {
        setLogin(true);
      } else {
        console.log("error ", error);
        toast.error("login failed. please contact us.");
      }
    }
  };
  const addToast = () => {
    if (login === true) {
      toast.success("login successful");
    }
  };

  return (
    <>
      <form
        className="form-default mx-5"
        action="login-bg.mp4"
        onSubmit={handleSubmit}
        style={{ marginTop: "10vh" }}
        aria-label="User login form"
      >
        <div className="d-flex flex-column justify-content-start tw-w-full md:tw-py-[5vh] md:tw-px-[3vw] tw-py-[4vh] tw-px-[5vw] tw-shadow-2xl">
          <div style={{ marginBottom: "20px" }}>
            <h2 className="text-left tw-text-black tw-text-5xl tw-font-bold">
              Login Here
            </h2>
            <p className=" tw-text-gray-500 tw-mb-5">
              Enter your credentials to access your account
            </p>
          </div>
          <div
            id="signInDiv"
            style={{ alignSelf: "center" }}
            className="tw-mb-5"
          ></div>
          <h3 style={{ color: "black", alignSelf: "center", margin: "20px" }}>
            Or
          </h3>

          <div className="tw-flex tw-flex-col tw-mb-10">
            <label
              htmlFor="email"
              className="tw-text-3xl tw-text-left tw-font-medium tw-mr-10"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
              value={data.email}
              className="tw-px-2 tw-border-b-[1px] tw-border-b-black tw-py-3 "
              required
              aria-required="true"
            />
          </div>

          <div className="tw-flex tw-flex-col tw-mb-10 tw-relative">
            <label
              htmlFor="password"
              className="tw-text-3xl tw-text-left tw-font-medium tw-mr-10"
            >
              Password
            </label>
            <input
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              value={data.password}
              className="tw-px-2 tw-border-b-[1px] tw-border-b-black tw-py-3 tw-pr-16"
              required
              aria-required="true"
            />

            <div
              className="tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-px-4 tw-text-gray-600 tw-top-16"
              onClick={togglePasswordVisibility}
              aria-label={isPasswordVisible ? "Hide Password" : "Show Password"}
            >
              {isPasswordVisible ? <VisibillityOff /> : <Visibillity />}
            </div>
          </div>

          <div>
            <button
              type="submit"
              name="submit"
              value="Login"
              style={{
                background:
                  "linear-gradient( to top, rgb(83, 116, 255) 0%, rgb(127, 102, 255) 40%, rgb(187, 85, 255) 95%, rgb(192, 84, 255)100% )",
              }}
              className="tw-px-10 tw-py-[6px] tw-font-semibold tw-text-white tw-rounded-3xl tw-cursor-pointer tw-w-full"
              onClick={addToast}
            >
              Login
            </button>
          </div>

          {error && (
            <div style={{ color: "red" }} role="alert">
              {error}
            </div>
          )}
          {localStorage.getItem("new_user") && (
            <div style={{ color: "green" }}>Please register first.</div>
          )}

          <Link
            href="/forgotpass?entity=user"
            className="tw-font-medium tw-mt-8 tw-text-right hover:tw-text-gray-400 tw-text-blue-700"
          >
            Forget Password?
          </Link>
          <div className="link-div tw-font-medium tw-mt-10">
            Don't have an account?
            <button
              className="tw-ml-0 md:tw-ml-2 hover:tw-text-gray-400 tw-text-blue-700"
              style={{ textDecoration: "none" }}
              onClick={() => handleLogPageToggle()}
            >
              Register here
            </button>
          </div>
        </div>
        <ToastContainer />
      </form>
    </>
  );
}

export default Login;
