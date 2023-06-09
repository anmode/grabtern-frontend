import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/Header"));
const Footer = dynamic(() => import("../components/Footer"));
import { useRouter } from "next/router";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Head from "next/head";


function mentorLogin() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (formData.password !== formData.confirmPassword) {
      return setError("Password not match!");
    }
    console.log(formData);
    try {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/auth`;
      const { data: res } = await axios.post(url, formData);
      localStorage.setItem("mentorToken", res.loginToken);
      localStorage.setItem("mentor_name", res.fullName);
      router.push("/");
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  async function handleCallbackResponse(response) {
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    try {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/gloginauth`;
      const { data: res } = await axios.post(url, userObject);
      localStorage.setItem("mentorToken", res.loginToken);
      localStorage.setItem("mentor_name", userObject.name);
      localStorage.setItem("mentor_picture", userObject.picture);
      router.push("/");
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "1094459761-kbb3qbgafu8avkgfe9fk8f85fr5418a8.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById("googleSignInButton"),
      { theme: "outline", size: "large" }
    );
    google.accounts.id.prompt();
  }, []);

  return (
    <>
      <Head>
        <title>GrabTern | Mentors Login Here</title>
      </Head>
      <Header navbarBackground={true} />
      <main>
        <div className="mentorFormRegisration">
          <div className="container">
            <form className="mentorForm" onSubmit={handleSubmit}>
              <h2 style={{ gridColumn: "1/3" }}>Mentor Login</h2>
              <div>
                <label for="email">EMAIL</label>

                <input
                  type="email"
                  name="email"
                  className="mentorFormInput"
                  onChange={(e) => handleChange(e)}
                  placeholder="e.g. peterparker@gmail.com"
                  required
                  value={formData.email}
                />
              </div>
              <div>
                <label for="password">Password</label>

                <input
                  type="password"
                  name="password"
                  className="mentorFormInput"
                  onChange={(e) => handleChange(e)}
                  value={formData.password}
                  placeholder="e.g. 12!HelloWorld"
                />
              </div>
              <div style={{ gridColumn: "1/3" }}>
                <label for="confirmPassword">Confirm Password</label>

                <input
                  type="password"
                  name="confirmPassword"
                  className="mentorFormInput"
                  onChange={(e) => handleChange(e)}
                  value={formData.confirmPassword}
                  placeholder="e.g. 12!HelloWorld"
                />
              </div>
              {error && (
                <div style={{ color: "red", gridColumn: "1/3" }}>{error}</div>
              )}
              <button
                type="submit"
                className="mentorFormButotn"
                style={{ width: "fit-content", padding: "15px 25px" }}
              >
                Login
              </button>
              <div style={{ gridColumn: "1/3" }}>
                <div id="googleSignInButton"></div>
              </div>
              <p>
                Do not have mentor account?{" "}
                <a href="/mentorRegister">Sign Up</a>
              </p>
              <p>
                <a href="#">Forgot password?</a>
              </p>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default mentorLogin;
