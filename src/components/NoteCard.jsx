import React from "react";

function NoteCard(props) {
  const handleNoteEvt = (note) => {
    props.setModalNote(note);
  };
  return (
    <div className="note-card">
      <div className="card-top">
        <div>
          <h5 className="top-left">{props.title}</h5>
          <small className="text-muted">{props.tag}</small>
        </div>
        <span className="top-right">
          <button type="button" data-bs-toggle="modal" data-bs-target="#updateNoteModal" className="card-btn" onClick={() => {handleNoteEvt(props.note)}}><i className="fa-solid fa-pen-to-square"></i></button>
          <button type="button" data-bs-toggle="modal" data-bs-target="#delNoteModal" className="card-btn" onClick={() => {handleNoteEvt(props.note)}}><i className="fa-solid fa-trash"></i></button>
        </span>
      </div>
      <div className="card-bottom">
        <span>{props.description}</span>
      </div>
    </div>
  );
}

export default NoteCard;