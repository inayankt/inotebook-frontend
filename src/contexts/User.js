import React, { createContext, useState } from 'react'

export const UserContext = createContext();

export function UserState(props) {
  const [token, setToken] = useState("");
  const [details, setDetails] = useState({name: "", email: ""});
  return (
    <UserContext.Provider value={{token, setToken, details, setDetails}}>
      {props.children}
    </UserContext.Provider>
  );
}
