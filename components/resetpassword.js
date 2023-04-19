import React, { useState } from "react";
import axios from "axios";

const ResetPassword = (props) => {
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
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/resetPassword`, {
        resetToken: props.resetToken,
        newPassword: newPassword,
      });
      setMessage(response.data.message);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("Internal server error");
      }
    }
  };

  return (
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
    </div>
    {error && <div className="error">{error}</div>}
    {message && <div className="message">{message}</div>}
    </div>
    );
    };
    
    export default ResetPassword;