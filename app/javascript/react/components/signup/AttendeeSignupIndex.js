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
     <h6> Events {props.attendee.fullName} is Signed up to go to: </h6>
      <ul>
        {displayList}
      </ul> 
      <button className = "button" onClick={props.onEditHandler}> 
        Edit Event Signup 
      </button> 
    </div>
  )

}

export default AttendeeSignupIndex 
