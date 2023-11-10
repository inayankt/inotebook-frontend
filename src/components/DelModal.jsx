import React from 'react'

function DelModal(props) {
  return (
    <div class="modal fade" id={props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">{props.title}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Are you sure you want to delete the note?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">No</button>
            <button type="submit" class="btn btn-outline-primary" data-bs-dismiss="modal" onClick={props.onSubmit}>Yes</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DelModal