import React from "react"
import AttendeeShowPage from "./AttendeeShowPage"

const AttendeeDeletePage = (props) => {

  return (
    <div>
      <AttendeeShowPage attendee = {props.attendee} />
      <hr/>
      <h4> Confirm Delete? </h4>
      <div className = "button-group">
        <button
          className="button"
          type="button"
          onClick={props.confirmDelete}
        >
          Yes - Delete
        </button>
        <button
          className="button"
          type="button"
          onClick={props.onCancleHandler}
        >
          No - Cancel 
        </button>
      </div>
    </div>
  )

}

export default AttendeeDeletePage
