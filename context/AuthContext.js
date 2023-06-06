import React, { useState, useContext } from "react";

const AuthContext = React.createContext();

export function useAuth(){
  return useContext(AuthContext);
}


export function LogState (props) {
  const [authUser, setauthUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const value = {
    authUser,
    setauthUser,
    isLoggedIn,
    setIsLoggedIn
  }
  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
};

