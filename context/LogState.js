import LogContext from "./LogContext";
import { useState } from "react";

const LogState = (props) => {
  const [logPageState, setLogPageState] = useState(true);

  return (
    <LogContext.Provider value={{ logPageState, setLogPageState }}>
      {props.children}
    </LogContext.Provider>
  );
};

export default LogState;
