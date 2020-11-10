import React from "react"
import MeetingIndexTile from "./MeetingIndexTile"

const MeetingIndexPage = (props) => {

  const meetingList= props.meetingList.map( (meeting) => {
    return ( 
      <li key = {meeting.id}>
        <MeetingIndexTile meeting = {meeting} />
      </li>) 
  })

  return (
    <div>
      <ul>
        {meetingList}
      </ul>
    </div>
  )

}

export default MeetingIndexPage
