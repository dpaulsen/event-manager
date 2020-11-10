import React from "react"
import {Link} from "react-router-dom"

const MeetingIndexTile = (props) => {
  return (
    <div>
      <Link to = {`/events/${props.meeting.id}`}> {props.meeting.name} </Link>
    </div>
  )
}

export default MeetingIndexTile
