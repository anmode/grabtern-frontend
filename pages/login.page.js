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
      <Header navbarBackground={true} />
      <main className="login-body">
        <form
          className="form-default"
          action="login-bg.mp4"
          onSubmit={handleSubmit}
        >
          <div className="login-form d-flex flex-column">
            <div className="logout-login">
              <a href="index.html">
                <img src="assets/img/logo/loder.png" alt="" />
              </a>
            </div>
            <h2>login Here</h2>
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
            <div className="form-input">
              <input type="submit" name="submit" value="login" style={{
                background: "linear-gradient( to top, rgb(83, 116, 255) 0%, rgb(127, 102, 255) 40%, rgb(187, 85, 255) 95%, rgb(192, 84, 255) 100% )"
                  }}/>
            </div>
            {error && <div style={{ color: "red" }}>{error}</div>}
            {localStorage.getItem("new_user") && (
              <div style={{ color: "green" }}>Please register first.</div>
            )}
              <Link href="/forgotpass" className="forget align-self-end" style={{margin:0}} >
                Forget Password?
              </Link>
            <div className="link-div m-3">
              Don't have an account? 
              <Link href="/register" className="registration d-inline m-2" style={{textDecoration:"none"}}>
                 Register here
              </Link>
            </div>
            <h3 style={{color:"black",alignSelf:"center",margin:"5px"}}>Or</h3>
            <div id="signInDiv" style={{alignSelf:"center"}}></div>
          </div>
        </form>
      </main>
    </>
  );
}

export default Login;
