import React from "react"


const AttendeeIndexPage = (props) => {

  const attendeeList = [ (<li> Joe</li>), (<li> John </li>)]

  return (
    <div>
      <h3> List of Attendees </h3>

      <ul> 
      {attendeeList}
      </ul>

    </div>

  )

}

export default AttendeeIndexPage
