import React from "react"


const AttendeeShowPage = (props) => {
  const attendee = props.attendee;
  debugger

  return (
    <div>
      <h4> Name: {attendee.fullName} </h4>
      <h6> email: {attendee.email}</h6>


    </div>
  )

}

export default AttendeeShowPage
