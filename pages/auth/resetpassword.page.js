import React, { useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import router from "next/router";
const Header = dynamic(() => import("../../components/layout/Header.js"));
import { encryptData, decryptData } from "../../hook/encryptDecrypt.js";
const Footer = dynamic(() => import("../../components/layout/Footer"));

const ResetPassword = () => {
  const { entityType, resetToken } = router.query;
  const [isLoading, setIsLoading] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async () => {
    setError("");
    setMessage("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setIsLoading(true);
      const data = {
        resetToken: resetToken,
        newPassword: newPassword,
        confirmPassword: confirmPassword,
      };
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/resetPassword?entityType=${entityType}`,
        {
          token: encryptData(data),
        },
      );
      setIsLoading(false);
      setMessage(response.data.message);
      router.push("/");
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("Internal server error");
      }
    }
  };

  return (
    <>
      <Header navbarBackground={true} />
      <div className="reset-password-container">
        <h2>Reset Password</h2>
        <div>
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleResetPassword}>Reset Password</button>
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
        {error && <div className="error">{error}</div>}
        {message && <div className="message">{message}</div>}
      </div>
      <Footer />
    </>
  );
};

export default ResetPassword;
