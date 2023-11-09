import React, { useContext, useEffect } from "react";
import axios from "axios";
import { LoaderContext } from "../contexts/Loader";
import { UserContext } from "../contexts/User";
import { ApiContext } from "../contexts/Api";
import { NotesContext } from "../contexts/Notes";

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
      const {name, email} = response.data.user;
      user.setDetails({name, email});
    };
    fetchDetails();
    loader.setProgress(100);
  }, []);
  return (
    <div>
      Home
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