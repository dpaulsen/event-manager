import React, { useState } from "react"

import MeetingIndexPage from "./MeetingIndexPage"

const MeetingIndexContainer = (props) => {

  const [meetingList, setMeetingList] = useState([]);

  React.useEffect(() => {
    fetch("/api/v1/meetings")
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
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  return(
    <div>
      <h2> List of Reunion Events </h2> 
      <MeetingIndexPage meetingList = {meetingList}/>
    </div>
  )
}

export default MeetingIndexContainer
