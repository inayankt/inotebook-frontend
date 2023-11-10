import React from "react";

function AddNote(props) {
  return (
    <button type="button" onClick={() => props.setModalNote({})} data-bs-toggle="modal" data-bs-target="#addNoteModal" className="add-note-card">
      <div><i class="fa-solid fa-plus"></i></div>
      <div>Add a note</div>
    </button>
  );
}

export default AddNote;