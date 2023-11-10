import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LoaderContext } from "../contexts/Loader";
import { UserContext } from "../contexts/User";
import { ApiContext } from "../contexts/Api";
import { NotesContext } from "../contexts/Notes";
import NoteCard from "./NoteCard";
import AddNote from "./AddNote";
import NoteModal from "./NoteModal";
import DelModal from "./DelModal";
import { AlertContext } from "../contexts/Alert";

function Home() {
  const loader = useContext(LoaderContext);
  const user = useContext(UserContext);
  const api_url = useContext(ApiContext);
  const notes = useContext(NotesContext);
  const alert = useContext(AlertContext);
  const [modalNote, setModalNote] = useState({});
  const fetchNotes = async () => {
    const response = await axios.get(`${api_url}/api/notes`, {
      headers: {
        "Auth-Token": user.token
      }
    });
    notes.setNotes(response.data.notes);
  };
  const fetchUserDetails = async () => {
    const response = await axios.get(`${api_url}/api/auth/user`, {
      headers: {
        "Auth-Token": user.token
      }
    });
    const { name, email } = response.data.user;
    user.setDetails({ name, email });
  };
  useEffect(() => {
    loader.setProgress(10);
    fetchNotes();
    loader.setProgress(60);
    fetchUserDetails();
    loader.setProgress(100);
  }, []);
  useEffect(() => {
    fetchNotes();
  }, [modalNote]);
  const handleAddNote = async (e) => {
    loader.setProgress(10);
    e.preventDefault();
    loader.setProgress(60);
    try {
      const response = await axios.post(`${api_url}/api/notes/add`, modalNote, {
        headers: {
          "Content-Type": "application/json",
          "Auth-Token": user.token
        }
      });
      const addedNote = response.data;
      alert.setSuccess(addedNote.message);
      setTimeout(() => {
        alert.setSuccess("");
      }, 3000);
    } catch(err) {
      console.log(err.response.data);
      alert.setError(err.response.data.message);
      setTimeout(() => {
        alert.setError("");
      }, 3000);
    }
    setModalNote({});
    loader.setProgress(100);
  };
  const handleEditNote = async (e) => {
    loader.setProgress(10);
    e.preventDefault();
    loader.setProgress(60);
    try {
      const response = await axios.patch(`${api_url}/api/notes/update/${modalNote._id}`, modalNote, {
        headers: {
          "Content-Type": "application/json",
          "Auth-Token": user.token
        }
      });
      const updatedNote = response.data;
      alert.setSuccess(updatedNote.message);
      setTimeout(() => {
        alert.setSuccess("");
      }, 3000);
    } catch(err) {
      console.log(err.response.data);
      alert.setError(err.response.data.message);
      setTimeout(() => {
        alert.setError("");
      }, 3000);
    }
    setModalNote({});
    loader.setProgress(100);
  };
  const handleDelNote = async (e) => {
    e.preventDefault();
    loader.setProgress(10);
    e.preventDefault();
    loader.setProgress(60);
    try {
      const response = await axios.delete(`${api_url}/api/notes/delete/${modalNote._id}`, {
        headers: {
          "Auth-Token": user.token
        }
      });
      const deletedNote = response.data;
      alert.setSuccess(deletedNote.message);
      setTimeout(() => {
        alert.setSuccess("");
      }, 3000);
      
    } catch(err) {
      console.log(err.response.data);
      alert.setError(err.response.data.message);
      setTimeout(() => {
        alert.setError("");
      }, 3000);
    }
    setModalNote({});
    loader.setProgress(100);
  };
  return (
    <div className="container">
      <div className="row mb-3">
        <h3 className="col-sm-9 col-12">Your notes</h3>
        <div className="col-sm-3 col-12 notes-filter-div">
          <label htmlFor="noteTag">Tag: </label>
          <select className="form-select form-height" name="noteTag" defaultValue="all">
            <option value="all">All</option>
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
            <NoteCard key={note._id} note={note} setModalNote={setModalNote} title={note.title} tag={note.tag} description={note.description} />
          );
        })}
        <AddNote setModalNote={setModalNote} />
      </div>
      <NoteModal modalNote={modalNote} setModalNote={setModalNote} onSubmit={handleAddNote} id="addNoteModal" title="Add a note" />
      <NoteModal modalNote={modalNote} setModalNote={setModalNote} onSubmit={handleEditNote} id="updateNoteModal" title="Update note" />
      <DelModal modalNote={modalNote} setModalNote={setModalNote} onSubmit={handleDelNote} id="delNoteModal" title="Delete note?" />
    </div>
  );
}

export default Home;