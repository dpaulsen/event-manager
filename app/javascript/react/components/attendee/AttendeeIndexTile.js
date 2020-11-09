import React from "react"
import {Link} from "react-router-dom"
const AttendeeIndexTile = (props) => {
const attendee = props.attendee
  return (
    <div>  
      <Link to = {`/attendees/${attendee.id}`}> {attendee.fullName} </Link>

    </div>
  )
}

export default AttendeeIndexTile
