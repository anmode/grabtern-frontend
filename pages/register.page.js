import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Visibillity from "../public/assets/Visibillity.jsx";
import VisibillityOff from "../public/assets/VisibillityOff.jsx";
import Header from "../components/layout/Header";

function useRedirectIfAuthenticated() {
  const router = useRouter();

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
  const [error, setError] = useState("");
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
    setError("");
    setVerificationSent(false);

    if (data.password !== data.confirmPassword) {
      return setError("Passwords do not match!");
    }

    try {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/userRegister`;
      await axios.post(url, data);
      setVerificationSent(true);
      setTimeout(() => {
        router.push("/");
      }, 5000); // Redirect after 5 seconds
    } catch (error) {
      if (error.response && error.response.status >= 400) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };
  return (
    <div 
    style={{
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
    }}
    >
     <Header navbarBackground={true} />
      <form
        className="form-default mx-5"
        action="login-bg.mp4"
        onSubmit={handleSubmit}
        style={{ marginTop: "10vh" }}
      >
        <div className="d-flex flex-column justify-content-start tw-w-full  md:tw-py-[5vh] md:tw-px-[3vw]  tw-py-[4vh] tw-px-[5vw] tw-shadow-2xl">
        <div style={{ marginBottom: "20px" }}>
          <h2 className="text-left tw-text-black tw-text-4xl  tw-font-bold">
          Hey, hello 👋
          </h2>
          <p className=" tw-text-gray-800 tw-mb-6 tw-mt-3">
          The faster you fill up, the faster you get a internship
          </p>
          </div>
          <div
            id="signInDiv"
            style={{ alignSelf: "center" }}
            className="tw-mb-2 top: -10px;"
          > </div>
          <h3 style={{ color: "black", alignSelf: "center", margin: "20px" }}>
            Or
          </h3>

          <div className="tw-flex tw-flex-col  tw-mb-10"  >
            <label
              for="name"
              className="tw-text-lg tw-text-left tw-font-small "
              style={{ fontSize: '1.3em' }}
            >
              Full name
            </label>
            <input
              type="text"
              placeholder="Full name"
              name="fullName"
              onChange={handleChange}
              value={data.fullName}
              className="tw-px-2 tw-border-b-[1px] tw-border-b-black tw-py-3 "
            />
          </div>
          <div className="tw-flex tw-flex-col  tw-mb-10">
            <label
              for="name"
              className="tw-text-3xl tw-text-left tw-font-medium tw-mr-10"
              style={{ fontSize: '1.3em' }}
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              value={data.email}
              className="tw-px-2 tw-border-b-[1px] tw-border-b-black tw-py-3 "
            />
          </div>

          <div className="tw-flex tw-flex-col tw-mb-10 tw-relative">
            <label
              for="name"
              className="tw-text-3xl tw-text-left tw-font-medium tw-mr-10"
              style={{ fontSize: '1.3em' }}
            >
              Password
            </label>
            <input
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={data.password}
              className="tw-px-2 tw-border-b-[1px] tw-border-b-black tw-py-3 tw-pr-16"
            />
            <div
              className="tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-px-4 tw-text-gray-600 tw-top-16"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? <VisibillityOff /> : <Visibillity />}
            </div>
          </div>

          <div className="tw-flex tw-flex-col tw-mb-10 tw-relative">
            <label
              for="name"
              className="tw-text-3xl tw-text-left tw-font-medium tw-mr-10"
              style={{ fontSize: '1.3em' }}
            >
              Confirm Password
            </label>
            <input
              type={isConPasswordVisible ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={data.confirmPassword}
              className="tw-px-2 tw-border-b-[1px] tw-border-b-black tw-py-3 tw-pr-16"
            />
            <div
              className="tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-px-4 tw-text-gray-600 tw-top-16"
              onClick={toggleConPasswordVisibility}
            >
              {isConPasswordVisible ? <VisibillityOff /> : <Visibillity />}
            </div>
          </div>
          {verificationSent && (
            <p style={{ color: "green" }}>
              An email has been sent to {data.email}. Please check your inbox to
              verify your account.
            </p>
          )}
          {error && <div style={{ color: "red" }}>{error}</div>}
          <div>
            <input
              type="submit"
              name="submit"
              value="Registration"
              style={{
                background:
                  "linear-gradient( to top, rgb(83, 116, 255) 0%, rgb(127, 102, 255) 40%, rgb(187, 85, 255) 95%, rgb(192, 84, 255) 100% )",
              }}
              className="tw-px-10 tw-font-semibold tw-py-[6px] tw-text-white tw-rounded-3xl tw-cursor-pointer tw-w-full"
            />
          </div>
          <div className="link-div tw-font-medium tw-mt-10">
            Already have an account?
            <button
              className="tw-ml-0 md:tw-ml-2 hover:tw-text-gray-400 tw-text-blue-700"
              style={{ textDecoration: "none" }}
              onClick={() => handleLogPageToggle()}
            >
              Login{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;



