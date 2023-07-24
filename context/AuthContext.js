import React, { useState, useContext, useEffect } from "react";
import { encryptData, decryptData } from "../hook/encryptDecrypt";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const [isMentorLoggedIn, setIsMentorLoggedIn] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(null);

  useEffect(() => {
    // fetching user from local storage and decrypting it
    const user =
      localStorage.getItem("userData") || localStorage.getItem("mentorData");
    const decryptedData = decryptData(user);

    // setting isMentorLoggedIn and isUserLoggedIn state on based of the role
    if (decryptedData.role == "user") {
      setIsUserLoggedIn(true);
      setIsMentorLoggedIn(false);
    } else {
      setIsMentorLoggedIn(true);
      setIsUserLoggedIn(false);
    }
  }, []);
  
  const value = {
    isMentorLoggedIn,
    setIsMentorLoggedIn,
    isUserLoggedIn,
    setIsUserLoggedIn,
  };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
