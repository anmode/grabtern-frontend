import React, { useState } from "react";
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('../components/Header'))
const Footer = dynamic(() => import('../components/Footer'))
import { useRouter } from "next/router";
function mentorLogin() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
  };
  return (
    <>
      <Header navbarBackground={true} />
      <main>
        <div className="mentorFormRegisration">
          <div className="container">
            <form className="mentorForm" onSubmit={handleSubmit}>
            <h2 style={{gridColumn: "1/3"}}>Mentor Login</h2>
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
              <div style={{gridColumn: "1/3"}}>
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
              <button
                type="submit"
                className="mentorFormButotn"
                style={{ width: "fit-content", padding: "15px 25px" }}
              >
                Send
              </button>
              <p>
            Do not have mentor account? <a href="/mentorRegister">Sign Up</a>
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
