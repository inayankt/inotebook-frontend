import React, { createContext } from "react";

export const ApiContext = createContext();

export function ApiState(props) {
  const host = "http://localhost:5000"
  return (
    <ApiContext.Provider value={host}>
      {props.children}
    </ApiContext.Provider>
  )
}
