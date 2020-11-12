import React from "react"
import {Redirect} from "react-router-dom"
import AttendeeIndexPage from "./AttendeeIndexPage"

const AttendeeIndexContainer = (props) => {
  
  const [toNew,setToNew] =React.useState(false)

  const [guestList, setGuestList] = React.useState([])



  React.useEffect(() => {
    fetch("/api/v1/attendees")
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
        setGuestList(body);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const onAddHandler = (event) => {
    setToNew(true);
  }

  if (toNew){
    return (<Redirect to="/attendees/new" />);
  }

  return (
    <div>
      <AttendeeIndexPage guestList = {guestList}/>
      <hr/>
      <button 
        className = "button"
        type = "button"
        id = "edit-attendee"
        onClick = {onAddHandler}
      >
        Add - New Guest
      </button>
    </div>
  )

}

export default AttendeeIndexContainer
