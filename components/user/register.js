import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function useRedirectIfAuthenticated() {
  const router = useRouter();

  useEffect(() => {
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
    <>
      <form
        className="form-default mx-5"
        action="login-bg.mp4"
        onSubmit={handleSubmit}
        style={{ marginTop: "10vh" }}
      >
        <div className="d-flex flex-column justify-content-start tw-w-full  md:tw-py-[5vh] md:tw-px-[3vw]  tw-py-[4vh] tw-px-[5vw] tw-shadow-2xl">
          <h2 className="text-left tw-text-black tw-text-5xl  tw-font-bold">
            Registration
          </h2>
          <p className=" tw-text-gray-500 tw-mb-5">
            The faster you fill up, the faster you get a internship
          </p>
          <div className="tw-flex tw-flex-col  tw-mb-10">
            <label
              for="name"
              className="tw-text-3xl tw-text-left tw-font-medium "
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
            >
              Password
            </label>
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={data.password}
              className="tw-px-2 tw-border-b-[1px] tw-border-b-black tw-py-3 tw-pr-16"
            />
            <button
              className="tw-absolute tw-inset-y-0 tw-right-0 tw-top-12  tw-flex tw-items-center tw-px-4 tw-text-gray-600"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="tw-h-8 tw-w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="tw-h-8 tw-w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="tw-flex tw-flex-col tw-mb-10 tw-relative">
            <label
              for="name"
              className="tw-text-3xl tw-text-left tw-font-medium tw-mr-10"
            >
              Confirm Password
            </label>
            <input
              type={isConPasswordVisible ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={data.confirmPassword}
              className="tw-px-2 tw-border-b-[1px] tw-border-b-black tw-py-3 tw-pr-16"
            />
            <button
              className="tw-absolute tw-inset-y-0 tw-right-0 tw-top-12  tw-flex tw-items-center tw-px-4 tw-text-gray-600"
              onClick={toggleConPasswordVisibility}
            >
              {isConPasswordVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="tw-h-8 tw-w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="tw-h-8 tw-w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </button>
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
    </>
  );
}

export default Register;
