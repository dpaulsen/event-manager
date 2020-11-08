import React from "react"
import {Link} from "react-router-dom"
const AttendeeIndexTile = (props) => {
const attendee = props.attendee
  return (
    <div>  
      <Link to = {`/attendees/${attendee.id}`}> {attendee.first_name} {attendee.last_name}</Link>

    </div>
  )
}

export default AttendeeIndexTile
