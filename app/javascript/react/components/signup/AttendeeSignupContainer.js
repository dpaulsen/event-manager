import React, {useState, useEffect} from "react"

import AttendeeeSignupIndex from "./AttendeeSignupIndex"
import AttendeeSignupForm from "./AttendeeSignupForm"


const AttendeeSignupContainer = (props) => {
  const attendee = props.attendee;
  // pass on attendee
  const [meetingList, setMeetingList] = useState([]);
  const [checkList, setCheckList] = useState({});
  const [reload, setReload] = useState(0); 
  const [errors, setErrors] = useState();

  const MODES = { 
    INDEX: 'index',
    EDIT: 'edit',
  }

  const [mode, setMode] = useState(MODES.INDEX);

  useEffect(() => {
    let id = attendee.id // temp need to get props to pass this correctly ( or not call to esarly)
    fetch(`/api/v1/attendees/${id}/meetings`)
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
        setMeetingList(body);
        let x = {}        
        body.forEach( (item) =>{
                  x[item.id] = item.status === null ? null :item.status === 2 
                })
        setCheckList(x);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, [reload]);

  const updateSignups = (updates) => {
    let payload = updates;
    fetch(`/api/v1/signups/1`, {
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
          setReload(reload+1);
        } else if (review.errors) {
          setErrors(review.errors);
        }
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
};

  const resetCheckList = () =>{
    let baseCheck = {}        
    meetingList.forEach( (item) =>{
              baseCheck[item.id] = item.status === null ? null :item.status === 2 
            })
    setCheckList(baseCheck);
  }

  const onCancelHandler = (event) =>{
    resetCheckList()
    setMode(MODES.INDEX);
  }

  const onEditHandler = (event) =>{
    setMode(MODES.EDIT);
  }

  const onSubmitHandler = (event) => { 
    let payload = {attendee_id: attendee.id,
                   meeting_list: meetingList,
                   check_list: checkList}
    updateSignups(payload);
    setMode(MODES.INDEX)
  }

  const checkHandler = (event) => {
    setCheckList({...checkList, 
      [event.currentTarget.id]: event.currentTarget.checked,
    })
  }

  let displayTile = null;
  switch (mode) {
    case MODES.INDEX:
      displayTile = (<AttendeeeSignupIndex 
        attendee = {attendee}
        meetingList ={meetingList}
        onEditHandler ={onEditHandler}
        />)
      break;
    case MODES.EDIT:
      displayTile = (<AttendeeSignupForm 
        attendee = {attendee}
        meetingList = {meetingList}
        checkList = {checkList}
        onCancelHandler = {onCancelHandler}
        submitSignupsHandler = {onSubmitHandler}
        checkHandler = {checkHandler}
      />)
      break;
    default : 
    displayTile = (<p> that is not implemented</p>)
  }

  return (
    <div>
      

      {displayTile}

      <div> 
    
      </div>
    </div>
  )
}

export default AttendeeSignupContainer
