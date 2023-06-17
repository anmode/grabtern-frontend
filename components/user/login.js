import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";
import { useAuth } from "../../context/AuthContext";
import { redirect } from "next/dist/server/api-utils";

import { useContext } from "react";
import LogContext from "../../context/LogContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login({ handleLogPageToggle }) {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [login, setLogin] = useState(false);
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
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/gloginauth`;
      try {
        const res = await axios.post(url, userObject);
        const userData = {
          user_name: userObject.name,
          user_picture: userObject.picture,
          user_email: userObject.email,
        };
        localStorage.setItem("userData", JSON.stringify(userData));
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

    const userData = JSON.parse(localStorage.getItem("userData"));
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
      if (!res.verified) {
        toast.error(
          "Email not verified, verification link has been sent to your email"
        );
      }
      const userData = {
        token: res.data,
        user_name: res.data.fullName,
        user_email: res.data.email,
        redirectUrl: localStorage.getItem("redirectUrl"),
      };
      localStorage.setItem("userData", JSON.stringify(userData));
      setIsUserLoggedIn(true);
      router.push(localStorage.getItem("redirectUrl") || "/");
    } catch (error) {
      if (error.response && error.response.status === 405) {
        toast.error(
          "Email not verified, verification link has been sent to your email"
        );
      } else if (error.response && error.response.status === 401) {
        toast.error("Invalid email or password.");
      } else if (
        localStorage.getItem("user_name") !== null &&
        localStorage.getItem("user_email") !== null
      ) {
        setLogin(true);
      } else {
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
      >
        <div className="d-flex flex-column justify-content-start tw-w-full md:tw-py-[5vh] md:tw-px-[3vw] tw-py-[4vh] tw-px-[5vw] tw-shadow-2xl">
          <div style={{ marginBottom: "20px" }}>
            <h2 className="text-left tw-text-black tw-text-5xl tw-font-bold">
              Login Here
            </h2>
            <p className=" tw-text-gray-500 tw-mb-5">
              Enter your credentials to acess your account
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
          <div className=" tw-flex tw-flex-col tw-mb-10">
            <label
              for="name"
              className="tw-text-3xl tw-text-left tw-font-medium tw-mr-10"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={data.email}
              className=" tw-px-2 tw-border-b-[1px] tw-border-b-black tw-py-3 "
            />
          </div>
          <div className="tw-flex tw-flex-col tw-mb-10">
            <label for="name" className="tw-text-3xl tw-font-medium ">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={data.password}
              className="tw-px-2 tw-border-b-[1px] tw-border-b-black tw-py-3 "
            />
          </div>
          <div>
            <input
              type="submit"
              name="submit"
              value="Login"
              style={{
                background:
                  "linear-gradient( to top, rgb(83, 116, 255) 0%, rgb(127, 102, 255) 40%, rgb(187, 85, 255) 95%, rgb(192, 84, 255)100% )",
              }}
              className="tw-px-10 tw-py-[6px] tw-font-semibold tw-text-white tw-rounded-3xl tw-cursor-pointer tw-w-full"
              onClick={addToast}
            />
          </div>

          <ToastContainer />
          {error && <div style={{ color: "red" }}>{error}</div>}
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
      </form>
    </>
  );
}

export default Login;
