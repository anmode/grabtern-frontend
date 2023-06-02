import React from "react";
import styles from "../styles/SignIn.module.css";
import { useState } from "react";
function LoginDropdown() {
  const [value, setValue] = useState("Login");

  return (
    <select
      className={styles.dropdown}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option value={value}>Login</option>
      <option value={value}>User</option>
      <option value={value}>Mentor</option>
    </select>
  );
}

export default LoginDropdown;
