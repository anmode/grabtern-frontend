import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "../components/Header";
import jwt_decode from "jwt-decode";
import logimg from "../public/assets/img/gallery/loginimg.jpg"

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
      <main className="login-body d-flex flex-row justify-content-between ">
        <form
          className="form-default mx-5"
          action="login-bg.mp4"
          onSubmit={handleSubmit}
        >
          <div className="login-form d-flex flex-column justify-content-start">
            <div style={{marginBottom:"20px"}}>
            <h2 className="text-left" >Login Here</h2>
            <p className="">Enter your credentials to acess your account</p>
            </div>
            <div id="signInDiv" style={{alignSelf:"center"}}></div>
            <h3 style={{color:"black",alignSelf:"center",margin:"20px"}}>Or</h3>
            <div className="form-input font-sans">
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
                className="border-secondary"
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
              <Link href="/register" className="registration font-sans  d-inline m-2" style={{textDecoration:"none"}}>
                 Register here
              </Link>
            </div>
          </div>
        </form>
        <img src="assets/img/gallery/20944201.jpg" alt="" height="800px" width="800px" />
      </main>
    </>
  );
}

export default Login;
