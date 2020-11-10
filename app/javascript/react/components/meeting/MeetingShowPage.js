import React from "react"

const MeetingShowPage = (props) => {

  return (
    <div>
      <h2> {props.meeting.name} </h2> 

      <hr/> 
      <h6> Place holder: map object here </h6>

      <hr/>
      <h6>Description:</h6> 
      <p>{props.meeting.description} </p>

    </div>

  )

}

export default MeetingShowPage
