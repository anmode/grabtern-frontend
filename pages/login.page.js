import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "../components/Header";
import jwt_decode from "jwt-decode";

function Login() {
  const [userDetail, setUserDetail] = useState({});
  const router = useRouter();

  if (
    localStorage.getItem("user_name") !== null ||
    localStorage.getItem("token") !== null
  ) {
    localStorage.getItem("redirectUrl")
      ? router.push(localStorage.getItem("redirectUrl"))
      : router.push("/");
  }

  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleCallBackResponse = (response) => {
    const userObject = jwt_decode(response.credential);
    localStorage.setItem("user_name", userObject.name);
    localStorage.setItem("user_picture", userObject.picture);
    localStorage.setItem("user_email", userObject.email);
    setUserDetail(userObject);
  };

  useEffect(() => {
    // global google
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

  const handleSubmit = async (e) => {
    setError("");
    e.preventDefault();
    try {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/auth`;
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      localStorage.setItem("user_name", res.fullName);

      router.push(localStorage.getItem("redirectUrl"));
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
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
