import React, { useState, useEffect } from "react"


import AttendeeShowPage from "./AttendeeShowPage"

const AttendeeSingleContainer =(props) =>{

  let id = props.match.params.id

  

  const [attendee, setAttendee] = useState({
    id: null,
    first_name: null,
    last_name: null,
    email: null
  })

  useEffect(() => {
    debugger 
    if (id !== "new")
    fetch(`/api/v1/attendees/${id}`)
      .then((response) => {
        debugger
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => response.json())
      .then((body) => {
        debugger
        setAttendee(body);
        debugger
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  let displayTile = null;

  if (id ==="new"){
    displayTile = (<p> new page </p>)
  } else if(true){
    debugger
    displayTile = (<AttendeeShowPage attendee = {attendee}
    />)
  }

  return( 
    <div>
      <div >
        <div>
        <h3> Attendee details </h3>
        </div>
        <div>
          <p> button choices </p> 
        </div>
      </div>

      <div >
        <p> info selection </p>
        {displayTile}
      </div>
      <div> 
        check name: 
        {attendee.first_name}
      </div>



    </div>
  )

}

export default AttendeeSingleContainer
