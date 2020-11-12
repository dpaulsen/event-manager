import React, {useState, useEffect} from "react"


const AttendeeSignupContainer = (props) => {
  const attendee = props.attendee;
  // pass on attendee
  const [meetingList, setMeetingList] = useState([]);

  useEffect(() => {
    debugger
    if(attendee.id !==null)
    fetch(`/api/v1/attendees/${attendee.id}/meetings`)
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
        setMeetingList(body);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  

  return (
    <div>
      <h6> Select events {props.attendee.fullName} wants to go to: </h6>
      <div> 
        <input type="checkbox"/> 
        <label> stuff</label>

      </div>
    </div>
  )
}

export default AttendeeSignupContainer
