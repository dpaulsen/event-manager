import React, {useState} from "react"

const AttendeeSignupForm = (props) => {

  let displayList = null;

  displayList = props.meetingList.map( (meeting) =>{
    return (
      <div key = {meeting.id}>
        <input id = {meeting.id} type ="checkbox" onChange = {props.checkHandler} checked = {props.checkList[meeting.id]}/>
        <label htmlFor={meeting.id} > {meeting.name} </label>
      </div>
    )

  });

  return(
    <div>
      <h4> Which events is {props.attendee.fullName} attending: </h4>

      {displayList}

      <button onClick={props.submitSignupsHandler}>
       Submit 
      </button>

      <button onClick={props.onCancelHandler}> 
        Cancel 
      </button>
    </div>
  )

}

export default AttendeeSignupForm
