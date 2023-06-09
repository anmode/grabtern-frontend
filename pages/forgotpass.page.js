import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import { useRouter } from "next/router";

function ForgotPassword() {
  const router = useRouter();
  const {user} = router.query; 
  const [userType, setUserType] = useState(user);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmitUser = async (e) => {
    console.log("reset password clicked")
    e.preventDefault();
    setError("");
    try {
      setIsLoading(true);
      console.log("1");
      await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/test`);
      console.log("test_request worked")
      const url = user=="user" ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/forgotPassword?userType="users"` : `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/forgotPassword?userType="mentors"`;
      const { data } = await axios.post(url, { email });
      console.log("2");
      setSuccess(true);
      setIsLoading(false);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        setIsLoading(false);
      }
    }
  };

  return (
    <>
          <Header navbarBackground={true} />


        <main className="forgot-password-body">
          <form className="login-form" onSubmit={handleSubmitUser}>
            <div className="forgot-password-form">
              <div className="logout-login">
                <a href="index.html">
                  <img src="assets/img/logo/loder.png" alt="" />
                </a>
              </div>
              <h2>Forgot Password</h2>
              <div className="form-input">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={email}
                />
              </div>
              <div className="form-input pt-30">
                <input type="submit" name="submit" value="Reset Password" />
              </div>
              {isLoading && (
                <img
                  style={{
                    width: "50px",
                    height: "50px",
                    border: "none",
                  }}
                  src="/assets/img/gif/Spinner.gif"
                  alt="loading..."
                />
              )}
              {error && <div style={{ color: "red" }}>{error}</div>}
              {success && (
                <div style={{ color: "green" }}>
                  Please check your email for instructions to reset your password.
                </div>
              )}
            </div>
          </form>
        </main>

      

    </>
  );
}

export default ForgotPassword;
