import React , {useState, useEffect} from "react"
import MeetingShowPage from "./MeetingShowPage"

const MeetingSingleContainer = (props) => {

  let id = props.match.params.id;

  const [meeting, setMeeting] = useState({
    id: null,
    name: "",
    description: ""
  });

  let displayTile = null;

  useEffect(() => {
    if (id !== "new")
    fetch(`/api/v1/meetings/${id}`)
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
        setMeeting(body);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);


  displayTile = <MeetingShowPage meeting = {meeting}
    />

  return(<div>
    <h4> Event Details: </h4>
    {displayTile}
  </div>)
}

export default MeetingSingleContainer
