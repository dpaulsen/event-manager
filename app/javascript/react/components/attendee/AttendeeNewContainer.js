import React from "react"
import {useState} from "react"
import { Redirect } from "react-router-dom";
import AttendeeFormPage from "./AttendeeFormPage";
import AttendeeShowPage from "./AttendeeShowPage";

const AttendeeNewContainer = (props) => {

  const MODES = {FORM: 'form', SHOW: 'show'};

  const [mode, setMode] = useState(MODES.FORM)
  const [toIndex, setToIndex] = useState (false)

  const blankAttendee = {
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    fullName: "",
  };

  const [attendee, setAttendee] = useState(blankAttendee)

  const onCancleHandler = (event) => {
    setToIndex(true);
  }

  const onAnotherHandler = (event) => {
    setMode(MODES.FORM);
    setAttendee(blankAttendee);
  }

  const buttonGroup = (<div>
     <h4> Add another Attendee? </h4>
    <button
      className="button"
      type="button"
      onClick={onAnotherHandler}
    >
      Yes - Another
    </button>
    <button
      className="button"
      type="button"
      onClick={onCancleHandler}
    >
      No - Finished
    </button>
  </div>);

  const addAttendee = (formPayLoad) => {
    
    fetch(`/api/v1/attendees`, {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(formPayLoad),
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
    .then((newAttendee) => {
      if (!newAttendee.errors) {
        
        setAttendee(newAttendee);
        setMode(MODES.SHOW);
      } else if (review.errors) {
        setErrors(review.errors);
      }
    })
    .catch((error) => console.error(`Error in fetch: ${error.message}`));
};


  let displayTile = null;
  switch (mode){
    case MODES.FORM :
      displayTile = (<AttendeeFormPage attendee = {attendee}
        onCancleHandler = {onCancleHandler}
        submitAttendee = {addAttendee}
      />)
      break;
    case MODES.SHOW : 
      displayTile = (<div>
        <AttendeeShowPage attendee = {attendee}/>
        <hr/>
        {buttonGroup}
        
      </div>)

    break;
    default: displayTile = (<p> error </p>);
  }


  if (toIndex){
    return <Redirect to="/attendees/" />;
  }

  return(
    <div>
      <h4> New Attendee </h4> 
      {displayTile}

    </div>
  )


}

export default AttendeeNewContainer
