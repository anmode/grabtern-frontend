import React, { useState } from 'react';
import axios from 'axios'
export default function MentorForm() {
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    internAt: '',
    currentStatus: '',
    social: {
      linkedin: '',
      twitter: '',
    },
    description: '',
    sessionPrice: '',
    // resume: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSocialChange = e => {
    setFormData({ ...formData, social: { ...formData.social, [e.target.name]: e.target.value } });
  };

  // const handleFileChange = e => {

  //   setFormData({ ...formData, resume: e.target.files[0] });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    if (formData.password !== formData.confirmPassword) {
      return setError("Password do not match!")
    }
    try {
      const url = "http://localhost:8080/api/mentors/mentorRegister";
      const { data: res } = await axios.post(url, formData)
      setMsg(res.message)
    } catch (error) {
      console.log(error)
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);

      }
    }
    // code for handling form submission
  };

  return (
    <div className='mentorFormRegisration'>
      <div className='container'>
        <form className="mentorForm" onSubmit={handleSubmit}>
          <div>
            <label for="name">Your Name:</label>
            <input type="text" name="name" className="mentorFormInput" onChange={(e) => handleChange(e)} required />
          </div>
          <div>
            <label for="email">Your Email:</label>
            <input type="text" name="email" className="mentorFormInput" onChange={(e) => handleChange(e)} required />
          </div>
          <div>
            <label for="mobile">Your Mobile Phone Number:</label>
            <input type="text" name="mobile" className="mentorFormInput" onChange={(e) => handleChange(e)} required />
          </div>
          <div>
            <label for="internAt">Intern At:</label>
            <input type="text" name="internAt" className="mentorFormInput" onChange={(e) => handleChange(e)} required />
          </div>
          <div>
            <label for="currentStatus">Current Status:</label>
            <input type="text" name="currentStatus" className="mentorFormInput" onChange={(e) => handleChange(e)} required />
          </div>
          <div>
            <label for="linkedin">Your Linkedin Profile URL:</label>
            <input type="text" name="linkedin" className="mentorFormInput" onChange={(e) => handleSocialChange(e)} required />
          </div>
          <div>
            <label for="twitter">Your Twitter Profile URL:</label>
            <input type="text" name="twitter" className="mentorFormInput" onChange={(e) => handleSocialChange(e)} />
          </div>
          <div>
            <label for="description">Your Description:</label>
            <textarea cols="10" rows="10" name="description" className="mentorFormInput" onChange={(e) => handleChange(e)} required />
          </div>
          <div>
            <label for="sessionPrice">Your Session Price:</label>
            <input type="text" name="sessionPrice" className="mentorFormInput" onChange={(e) => handleChange(e)} required />
          </div>
          <div>
            <label for="password">Password:</label>
            <input type="password" name="password" className="mentorFormInput" onChange={(e) => handleChange(e)} required />
          </div>
          <div>
            <label for="confirmPassword">Confirm Password:</label>
            <input type="password" name="confirmPassword" className="mentorFormInput" onChange={(e) => handleChange(e)} required />
          </div>
          <div>
            <label for="resume">Your Resume/CV:</label>
            <input type="file" name="resume" className="mentorFormInput" />
          </div>
          {error && <div style={{ color: "red", gridColumn: "1/3" }}>{error}</div>}
          {msg && <div style={{ color: "green", gridColumn: "1/3" }}>{msg}</div>}
          <button type='submit' className='mentorFormButotn'>Register</button>
          <p>Already have mentor account? <a href="#">Login</a></p>
          <a href="#">Forgot password?</a>
        </form>
      </div>
    </div>
  )
} 