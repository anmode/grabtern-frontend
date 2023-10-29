import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Loader from "./UI/Loader";

function MentorFormSetupPW({ mentorPWCode }) {
  const router = useRouter();

  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    newPassword: "",
    newConfirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitNewPW = async (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.newConfirmPassword) {
      return alert("Please write match confirm password!");
    }
    try {
      setLoader(true);
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/verify/setupPW/${mentorPWCode}`;
      console.log(url);
      const { data: res } = await axios.post(url, formData);
      console.log(res.status);
      router.push("/");
      setLoader(false);
    } catch (error) {
      setLoader(false);
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
    <div className="mentorFormRegisration">
      <div className="container">
        <h1>Setup new Password</h1>
        <br />
        <form
          className="mentorForm mentorFormSetupPW"
          onSubmit={handleSubmitNewPW}
        >
          <div>
            <label for="newPassword">New Password</label>
            <input
              type="password"
              name="newPassword"
              className="mentorFormInput"
              onChange={(e) => handleChange(e)}
              placeholder="e.g. newPassword123!@"
              required
            />
          </div>
          <div>
            <label for="newConfirmPassword">New Confirm Password</label>
            <input
              type="password"
              name="newConfirmPassword"
              className="mentorFormInput"
              onChange={(e) => handleChange(e)}
              placeholder="e.g. newPassword123!@"
              required
            />
          </div>
          {!loader ? (
            <button
              type="submit"
              style={{ width: "fit-content", padding: "15px 25px" }}
              className="mentorFormButotn"
            >
              Submit
            </button>
          ) : (
            <Loader />
          )}
          {error && (
            <div style={{ color: "red", gridColumn: "1/3" }}>{error}</div>
          )}
        </form>
      </div>
    </div>
  );
}

export default MentorFormSetupPW;
