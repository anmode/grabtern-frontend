import React, { useState } from "react";
import AlertBox from "../components/basic/Alertbox";

const HomePage = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <button onClick={handleShowAlert}>Show Custom Alert</button>

      {showAlert && (
        <AlertBox
          message="This is a custom alert box!"
          redirectTo="/" // Replace '/' with the desired home page URL
        />
      )}
    </div>
  );
};
export default HomePage;
