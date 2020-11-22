import React from "react"

const HeaderPage = (props) => {

  const onResetDefaultsClick = (event) =>{
    fetch(`/api/v1/reset`)
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
    .then((response) => {
      debugger
      response.json()})
    .then((body) => {
      debugger
      
    })
    .catch((error) => console.error(`Error in fetch: ${error.message}`));
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
