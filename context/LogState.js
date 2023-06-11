import LogContext from "./LogContext";
import { useState } from "react";

const LogState = (props) => {
  const [logpagestate, setlogpagestate] = useState(true);

  return (
    <LogContext.Provider value={{ logpagestate, setlogpagestate }}>
      {props.children}
    </LogContext.Provider>
  );
};

export default LogState;
