import React from "react"
import AttendeeIndexTile from "./AttendeeIndexTile"

const AttendeeIndexPage = (props) => {

  const guestList = props.guestList.map(guest =>{
    return (
      <li key={guest.id}>
      <AttendeeIndexTile attendee = {guest}/>
      </li>
    )
  })
  
  return (
    <div>
      <h3> List of Attendees </h3>
      <ul> 
      {guestList}
      </ul>
    </div>
  )
}

export default AttendeeIndexPage
