import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Visibillity from "../public/assets/Visibillity.jsx";
import VisibillityOff from "../public/assets/VisibillityOff.jsx";
import Header from "../components/layout/Header";
import styles from "../styles/userRegistration.module.css"
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
    <>
     <Header navbarBackground={true} />
     <div className="login-form d-flex flex-column bg-white tw-mb-10">
     <form className="form-default" onSubmit={handleSubmit}>
        <div className={styles.heading}>
        <img src="/Grabtern2.png"></img>
          <h2 >
          Hey, hello 👋
          </h2>
          </div>
          {/* <p >
          The faster you fill up, the faster you get a internship
          </p> */}
          <div className="form-input">
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

          <div className="form-input">
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

          <div className="form-input">
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

          <div className="form-input">
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

          {verificationSent && (
            <p style={{ color: "green" }}>
              An email has been sent to {data.email}. Please check your inbox to
              verify your account.
            </p>
          )}
          {error && <div style={{ color: "red" }}>{error}</div>}

          <div className="mb-14 md:tw-w-auto tw-h-10 tw-text-white tw-bg-[#845ec2] tw-border-0 tw-py-2 tw-px-6 focus:tw-outline-none hover:tw-bg-[#6b21a8] tw-rounded-lg tw-font-semibold">
                <input
                  type="submit"
                  name="submit"
                  value="Registration"
                  className={styles.RegisterInput}
                />
              </div>

          <div className="link-div">
             Already have an account?
             <button
             className="tw-ml-0 md:tw-ml-2 tw-mt-[20px] hover:tw-text-gray-400 tw-text-blue-700"
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
                id="signInDiv"
                style={{ alignSelf: "center" }}
                className={styles.googlelogin}
              >
            </div>
      </form>
      </div>
    </>
  );
}

export default Register;



