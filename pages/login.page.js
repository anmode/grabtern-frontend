import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "../components/Header";
import jwt_decode from "jwt-decode";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

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
        const res = await axios.post(url, { email: userObject.email });
        console.log(res);
        localStorage.setItem("user_name", userObject.name);
        localStorage.setItem("user_picture", userObject.picture);
        localStorage.setItem("user_email", userObject.email);
        router.push(localStorage.getItem("redirectUrl") || "/");
      } catch (error) {
        setError("New user? Register first.");
      }
    };

    if (typeof google !== "undefined") {
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
    }
  }, []);

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
      localStorage.setItem("token", res.data);
      localStorage.setItem("user_name", res.data.fullName);
      localStorage.setItem("user_email", res.data.email);
      router.push(localStorage.getItem("redirectUrl") || "/");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Invalid email or password.");
      } else {
        setError("login failed. please contact us.");
      }
    }
  };
  return (
    <>
      <Header navbarBackground={true} />
      <main className="login-body">
        <form
          className="form-default"
          action="login-bg.mp4"
          onSubmit={handleSubmit}
        >
          <div className="login-form">
            <div className="logout-login">
              <a href="index.html">
                <img src="assets/img/logo/loder.png" alt="" />
              </a>
            </div>
            <h2>Login Here</h2>
            <div className="form-input">
              <label for="name">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={data.email}
              />
            </div>
            <div className="form-input">
              <label for="name">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={data.password}
              />
            </div>
            <div className="form-input pt-30">
              <input type="submit" name="submit" value="login" />
            </div>
            {error && <div style={{ color: "red" }}>{error}</div>}
            {localStorage.getItem("new_user") && (
  <div style={{ color: "green" }}>Please register first.</div>
)}
            <Link href="#" className="forget">
              Forget Password
            </Link>
            <Link href="/register" className="registration">
              Registration
            </Link>
            <h3>Or</h3>
            <div id="signInDiv"></div>
          </div>
        </form>
      </main>
    </>
  );
}

export default Login;
