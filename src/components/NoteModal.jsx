import React from "react";

function NoteModal(props) {
  const {modalNote, setModalNote} = props;
  const handleChange = (e) => {
    setModalNote(prevNote => {
      return {...prevNote, [e.target.name]: e.target.value};
    });
  };
  return (
    <div class="modal fade" id={props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">{props.title}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form className="col-12 form-col">
              <input name="title" type="text" className="form-control input-common form-height" placeholder="Title" value={modalNote.title} onChange={handleChange} />
              <textarea name="description" type="text" className="form-control input-common" placeholder="Description" rows={4} value={modalNote.description} onChange={handleChange} />
              <input name="tag" type="text" className="form-control input-common form-height" placeholder="Tag" value={modalNote.tag} onChange={handleChange} />
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" onClick={props.onSubmit}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteModal;