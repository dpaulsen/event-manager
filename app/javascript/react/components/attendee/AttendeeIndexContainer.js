import React from "react"
import AttendeeIndexPage from "./AttendeeIndexPage"

const AttendeeIndexContainer = (props) => {

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

  return (
    <AttendeeIndexPage guestList = {guestList}/>
  )

}

export default AttendeeIndexContainer
