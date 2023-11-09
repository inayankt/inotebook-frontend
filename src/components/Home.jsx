import React, { useContext, useEffect } from "react";
import axios from "axios";
import { LoaderContext } from "../contexts/Loader";
import { UserContext } from "../contexts/User";
import { ApiContext } from "../contexts/Api";
import { NotesContext } from "../contexts/Notes";
import NoteCard from "./NoteCard";
import AddNote from "./AddNote";

function Home() {
  const loader = useContext(LoaderContext);
  const user = useContext(UserContext);
  const api_url = useContext(ApiContext);
  const notes = useContext(NotesContext);
  useEffect(() => {
    loader.setProgress(10);
    const fetchNotes = async () => {
      const response = await axios.get(`${api_url}/api/notes`, {
        headers: {
          "Auth-Token": user.token
        }
      });
      notes.setNotes(response.data.notes);
    };
    fetchNotes();
    loader.setProgress(60);
    const fetchDetails = async () => {
      const response = await axios.get(`${api_url}/api/auth/user`, {
        headers: {
          "Auth-Token": user.token
        }
      });
      const { name, email } = response.data.user;
      user.setDetails({ name, email });
    };
    fetchDetails();
    loader.setProgress(100);
  }, []);
  return (
    <div className="container">
      <div className="row mb-3">
        <h4 className="col-sm-9 col-12">Your notes</h4>
        <div className="col-sm-3 col-12 notes-filter-div">
          <label htmlFor="noteTag">Tag: </label>
          <select class="form-select form-height" name="noteTag">
            <option selected>All</option>
            <option value="General">General</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div className="row notes-container">
        {notes.notes.map(note => {
          return (
            <NoteCard title={note.title} tag={note.tag} description={note.description} />
          );
        })}
        <AddNote />
      </div>
      {/* <div>
        {notes.notes.map((note) => {
          return (
            <div key={note._id}>
              <p>{note.title}</p>
              <p>{note.description}</p>
              <p>{note.tag}</p>
            </div>
          )
        })}
      </div> */}
    </div>
  );
}

export default Home;