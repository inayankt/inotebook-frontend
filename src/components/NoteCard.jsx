import React from "react";

function NoteCard(props) {
  return (
    <div className="note-card">
      <div className="card-top">
        <div>
          <h5 className="top-left">{props.title}</h5>
          <small className="text-muted">{props.tag}</small>
        </div>
        <span className="top-right">
          <button className="card-btn"><i class="fa-solid fa-pen-to-square"></i></button>
          <button className="card-btn"><i class="fa-solid fa-trash"></i></button>
        </span>
      </div>
      <div className="card-bottom">
        <span>{props.description}</span>
      </div>
    </div>
  );
}

export default NoteCard;