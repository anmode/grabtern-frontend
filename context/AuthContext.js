import React, { useState, useContext, useEffect } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const [isMentorLoggedIn, setIsMentorLoggedIn] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(null);

  useEffect(() => {
    // fetching user from local storage
    const user = localStorage.getItem("userData");
    const mentor = localStorage.getItem("mentorData");

    // setting isMentorLoggedIn and isUserLoggedIn state on based of the role
    if (user) {
      setIsUserLoggedIn(true);
      setIsMentorLoggedIn(false);
    } else if (mentor) {
      setIsMentorLoggedIn(true);
      setIsUserLoggedIn(false);
    } else {
      setIsMentorLoggedIn(false);
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
