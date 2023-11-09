import React, { createContext, useState } from 'react'

export const NotesContext = createContext([]);

export function NotesState(props) {
  const [notes, setNotes] = useState([]);
  return (
    <NotesContext.Provider value={{notes, setNotes}}>
      {props.children}
    </NotesContext.Provider>
  );
}
