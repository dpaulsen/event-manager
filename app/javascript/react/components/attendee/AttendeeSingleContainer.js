import React, { useState, useEffect } from "react"
import {Redirect} from "react-router-dom"

import AttendeeFormPage from "./AttendeeFormPage"
import AttendeeShowPage from "./AttendeeShowPage"
import AttendeeDeletePage from"./AttendeeDeletePage"

const AttendeeSingleContainer =(props) =>{

  const MODES = { 
    SHOW: 'show',
    EDIT: 'edit',
    DELETE: 'delete'
  }

  let id = props.match.params.id;

  const [mode, setMode] = useState(MODES.SHOW);
  const [toIndex, setToIndex] = useState(false);

  const [attendee, setAttendee] = useState({
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    fullName: null,
  })

  useEffect(() => {
    if (id !== "new")
    fetch(`/api/v1/attendees/${id}`)
      .then((response) => {
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
        setAttendee(body);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);
    
    const updateAttendee = (updates) => {
        let payload = updates;
        fetch(`/api/v1/attendees/${attendee.id}`, {
          credentials: "same-origin",
          method: "PATCH",
          body: JSON.stringify(payload),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (response.ok) {
              return response;
            } else {
              let errorMessage = `${response.status} (${response.statusText})`,
                error = new Error(errorMessage);
              throw error;
            }
          })
          .then((response) => response.json())
          .then((updatedAttendee) => {
            if (!updatedAttendee.errors) {
              setAttendee(updatedAttendee);
              setMode(MODES.SHOW)
            } else if (review.errors) {
              setErrors(review.errors);
            }
          })
          .catch((error) => console.error(`Error in fetch: ${error.message}`));
    };

    const deleteAttendee = () => {
        fetch(`/api/v1/attendees/${attendee.id}`, {
          credentials: "same-origin",
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (response.ok) {
              return response;
            } else {
              let errorMessage = `${response.status} (${response.statusText})`,
                error = new Error(errorMessage);
              throw error;
            }
          })
          .then((response) => response.json())
          .then((removeAttendee) => {
            if (!removeAttendee.errors) {
              setToIndex(true);
            }
          })
          .catch((error) => console.error(`Error in fetch: ${error.message}`));
    };
    
    let displayTile = null;
  
    const onCancleHandler = (event) =>{
      setMode(MODES.SHOW);
    }
    
  // ??  TODO design choice 
  if (id ==="new"){
    displayTile = (<p> new page </p>)
  } else{
    switch (mode) {
      case MODES.SHOW:
        displayTile = (<AttendeeShowPage attendee = {attendee}
          />)
        break;
      case MODES.EDIT:
        displayTile = (<AttendeeFormPage 
          attendee = {attendee}
          onCancleHandler = {onCancleHandler}
          submitAttendee = { updateAttendee}
        />)
        break;
      case MODES.DELETE: 
          displayTile = (<AttendeeDeletePage
          attendee = {attendee}
          onCancleHandler = {onCancleHandler}
          confirmDelete = { deleteAttendee}
          />)
          break;
      default : 
      displayTile = (<p> that is not implemented</p>)
    }

  } 
  
  let modeTemp = null;
  // switch (mode) {
  //   case MODES.SHOW:
  //     modeTemp =(<p> mode is show </p>);
  //     break;
  //   case MODES.EDIT:
  //     modeTemp =(<p> mode is edit </p>);
  //     break;
  //   case MODES.DELETE:
  //     modeTemp =(<p> mode is delete </p>);
  //     break;
  //   default: 
  //     modeTemp =(<p> error should never get here </p>);
  // }

  const onModeClick = (event) =>{
    switch (event.currentTarget.id) {
      case "edit-attendee":
        setMode(MODES.EDIT);
        break;
      case "delete-attendee":
        setMode(MODES.DELETE);
        break;
      case "show-attendee":
        setMode(MODES.SHOW);
        break;
      default :
        console.error(`that mode ${event.currentTarget.id} is not recognized`)
    }
  }


  let buttonModesGroup = null;

  buttonModesGroup = (<div className ="button-group">
    <button 
      className = "button"
      type = "button"
      id = "edit-attendee"
      onClick = {onModeClick}
    >
      Edit
    </button>
    
    <button 
      className ="button"
      type = "button"
      id = "delete-attendee"
      onClick = {onModeClick}
    >
      Delete
    </button>
    <button 
      className = "button"
      type = "button"
      id = "show-attendee"
      onClick = {onModeClick}
    >
      Show
    </button>
  </div>);

  
  if (toIndex){
    return <Redirect to="/attendees/" />;
  }

  return( 
    <div>
      <div >
        <div>
        <h3> Attendee Details </h3>
        <hr/>
        </div>
        <div>
          {buttonModesGroup}
          <hr/>
          {modeTemp}
        </div>
      </div>

      <div >
        {displayTile}
      </div>
    </div>
  )

}

export default AttendeeSingleContainer
