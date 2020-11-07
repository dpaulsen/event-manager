import React, { useState, useEffect } from "react"


import AttendeeShowPage from "./AttendeeShowPage"

const AttendeeSingleContainer =(props) =>{

  const modes = { 
    SHOW: 'show',
    EDIT: 'edit',
    DELETE: 'delete'
  }

  let id = props.match.params.id

  const [mode, setMode] = useState(modes.SHOW)

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
  } else{ 
  displayTile = (<p> that is not implemented</p>)
}
  
  let modeTemp = null;
  switch (mode) {
    case modes.SHOW:
      modeTemp =(<p> mode is show </p>);
      break;
    case modes.EDIT:
      modeTemp =(<p> mode is edit </p>);
      break;
    case modes.DELETE:
      modeTemp =(<p> mode is delete </p>);
      break;
    default: 
      modeTemp =(<p> error should never get here </p>);
  }

  const onModeClick = (event) =>{
    debugger
    switch (event.currentTarget.id) {
      case "edit-attendee":
        setMode(modes.EDIT);
        break;
      case "delete-attendee":
        setMode(modes.DELETE);
        break;
      case "show-attendee":
        setMode(modes.SHOW);
        break;
      default :
        console.error(`that mode ${event.currentTarget.id} is not recognized`)
    }
  }
  
  let buttonModesGroup = null;

  buttonModesGroup = (<div>
    <button 
    type = "button"
    id = "edit-attendee"
    onClick = {onModeClick}
    >
    Edit
    </button>
    <button 
    type = "button"
    id = "delete-attendee"
    onClick = {onModeClick}
    >
    Delete
    </button>
    <button 
    type = "button"
    id = "show-attendee"
    onClick = {onModeClick}
    >
    Show
    </button>
  </div>);

 

  return( 
    <div>
      <div >
        <div>
        <h3> Attendee details </h3>
        </div>
        <div>
          <p> button choices </p> 
          {buttonModesGroup}
          <hr/>
          {modeTemp}
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
