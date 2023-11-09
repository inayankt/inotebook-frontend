import React, { useState, createContext } from "react";

export const LoaderContext = createContext();

export function LoaderState(props) {
  const [progress, setProgress] = useState(0);
  return (
    <LoaderContext.Provider value={{progress, setProgress}}>
      {props.children}
    </LoaderContext.Provider>
  );
}