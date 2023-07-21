import React, { useState } from "react";
import axios from "axios";
import router from "next/router";

const ResetPassword = (props) => {
  const { entity } = router.query;
  const entityTypeParam = entity === "user" ? "user" : "mentor";
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
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/resetPassword`,
        {
          resetToken: props.resetToken,
          newPassword: newPassword,
          confirmPassword: confirmPassword,
          entityType: entityTypeParam,
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
          // <Image
          //   src="/assets/img/gif/Spinner.gif"
          //   alt="loading..."
          //   width="50"
          //   height="50"
          //   style={{
          //     border: "none",
          //   }}
          // />
        )}
      </div>
      {error && <div className="error">{error}</div>}
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default ResetPassword;
