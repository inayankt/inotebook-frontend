import React, { createContext, useState } from "react";

export const AlertContext = createContext();

export function AlertState(props) {
  const [alert, setAlert] = useState({error: "", success: ""});
  const setError = (err) => {
    setAlert(prevAlert => {
      return {...prevAlert, error: err};
    });
  };
  const setSuccess = (suc) => {
    setAlert(prevAlert => {
      return {...prevAlert, success: suc};
    });
  };
  return (
    <AlertContext.Provider value={{error: alert.error, success: alert.success, setError, setSuccess}} >
      {props.children}
    </AlertContext.Provider>
  );
}
