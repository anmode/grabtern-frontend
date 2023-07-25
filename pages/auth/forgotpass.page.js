import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/layout/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ButtonUI from "../../components/UI/Button/Button";

function ForgotPassword() {
  const router = useRouter();
  const { entity } = router.query; // 'entity' will contain the entity type ('user' or 'mentor')
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const url = new URL(window.location.href);
      const entityTypeFromUrl = url.searchParams.get("entityType");
      const backendUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/forgotPassword?entityType=${entityTypeFromUrl}`;
      const { data } = await axios.post(backendUrl, { email: email });
      setIsLoading(false);
      toast.success(
        "Please check your email for instructions to reset your password.",
      );
      setTimeout(() => {
        router.push("/");
      }, 5000);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        toast.error(error.response.data.message);
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <Head>
        <title>GrabTern | Frogot Password</title>
      </Head>
      <Header navbarBackground={true} />

      <main className="forgot-password-body">
        <form className="login-form">
          <div className="forgot-password-form">
            <div className="logout-login">
              <a href="index.html">
                <img src="/Grabtern2.png"></img>
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
            <div
              className="form-input pt-30"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ButtonUI text="Reset Password" onClick={handleSubmit} />
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
          </div>
          <ToastContainer />
        </form>
      </main>
    </>
  );
}

export default ForgotPassword;
