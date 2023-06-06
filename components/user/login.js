import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";
import { useContext } from "react";
import LogContext from "../../context/LogContext";

function Login({ handleLogPageToggle }) {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();
  const { logpagestate, setlogpagestate } = useContext(LogContext);

  useEffect(() => {
    if (
      localStorage.getItem("user_name") !== null ||
      localStorage.getItem("token") !== null
    ) {
      localStorage.getItem("redirectUrl")
        ? router.push(localStorage.getItem("redirectUrl"))
        : router.push("/");
    }

    // Initialize Google sign-in button
    const handleCallBackResponse = async (response) => {
      const userObject = jwt_decode(response.credential);
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/gloginauth`;
      console.log(userObject);
      try {
        const res = await axios.post(url, userObject);
        localStorage.setItem("user_name", userObject.name);
        localStorage.setItem("user_picture", userObject.picture);
        localStorage.setItem("user_email", userObject.email);
        router.push(localStorage.getItem("redirectUrl") || "/");
      } catch (error) {
        setError("New user? Register first.");
        console.log(error);
      }
    };

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
  }, [logpagestate]);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      // setData({ ...data, type: "manual" });
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/auth`;
      const res = await axios.post(url, data);
      if (!res.verified) {
        setError(
          "Email not verified, verification link has been sent to your email"
        );
      }
      localStorage.setItem("token", res.data);
      localStorage.setItem("user_name", res.data.fullName);
      localStorage.setItem("user_email", res.data.email);
      router.push(localStorage.getItem("redirectUrl") || "/");
    } catch (error) {
      if (error.response && error.response.status === 405) {
        setError(
          "Email not verified, verification link has been sent to your email"
        );
      } else if (error.response && error.response.status === 401) {
        setError("Invalid email or password.");
      } else {
        setError("login failed. please contact us.");
      }
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
        <div className="d-flex flex-column justify-content-start tw-w-full  md:tw-py-[5vh] md:tw-px-[3vw]  tw-py-[4vh] tw-px-[5vw] tw-shadow-2xl">
          <div style={{ marginBottom: "20px" }}>
            <h2 className="text-left tw-text-black tw-text-5xl  tw-font-bold">
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
          <div className=" tw-flex tw-flex-col  tw-mb-10">
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
          <div className="tw-flex tw-flex-col  tw-mb-10">
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
                  "linear-gradient( to top, rgb(83, 116, 255) 0%, rgb(127, 102, 255) 40%, rgb(187, 85, 255) 95%, rgb(192, 84, 255) 100% )",
              }}
              className="tw-px-10 tw-py-[6px] tw-font-semibold tw-text-white tw-rounded-3xl tw-cursor-pointer tw-w-full"
            />
          </div>
          {error && <div style={{ color: "red" }}>{error}</div>}
          {localStorage.getItem("new_user") && (
            <div style={{ color: "green" }}>Please register first.</div>
          )}
          <Link
            href="/forgotpass"
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
