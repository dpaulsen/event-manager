import React from "react"

const AttendeeSignupIndex = (props) => {

  let displayList = []; 
  props.meetingList.forEach( (meeting) =>{
    if (meeting.status !== null && meeting.status === 2 ){
      displayList.push(<li key = {meeting.id}> {meeting.name} </li>)
    }
  })

  return (
    <div>
      <h4> {props.attendee.fullName} is currently signed up for: </h4>
      <ul>
        {displayList}
      </ul> 
      <button onClick={props.onEditHandler}> 
        Edit Event Signup 
      </button> 
    </div>
  )

}

export default AttendeeSignupIndex 
