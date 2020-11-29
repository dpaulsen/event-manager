import React, {useState} from "react"
import {Redirect} from "react-router-dom"

const HeaderPage = (props) => {

  const [toMain, setToMain] = useState(false);

  const onResetDefaultsClick = (event) =>{
    fetch(`/api/v1/reset`)
    .then((response) => {
      
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw error;
      }
    })
    .then((response) => {
      response.json()})
    .then((body) => {
      setToMain(true);
    })
    .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }

  // not working quite right.  
  if (toMain){
    setToMain(false);
    return <Redirect to="/" />;
  }


  return ( <div>
    <h6> in header </h6>
    <button 
      className = "button"
      type = "button"
      id = "edit-attendee"
      onClick = {onResetDefaultsClick}
    >
      Reset to Default
    </button>

  </div>)


}

export default HeaderPage
