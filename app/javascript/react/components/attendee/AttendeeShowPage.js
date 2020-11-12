import React from "react"
import AttendeeSignupContainer from "../signup/AttendeeSignupContainer";



const AttendeeShowPage = (props) => {
  const attendee = props.attendee;

  debugger
  return (
    <div>
      <h4> Name: {attendee.fullName} </h4>
      <h6> email: {attendee.email}</h6>

      <AttendeeSignupContainer attendee = {attendee}/>
    </div>
  )

}

export default AttendeeShowPage
