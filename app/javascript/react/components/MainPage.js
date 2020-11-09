import React from "react"
import {Link} from "react-router-dom"

const MainPage = (props) => {

  return(
    <div>
      <h3> 
        Main page links:  
      </h3>
      <Link to="/attendees/"> Guest List </Link>
      <br/>
      <Link to="/events/"> Event List </Link>
      <br/>
      <Link to="/scrapbooks/"> Scrapbook </Link>
      <br/>
    </div>

  )
}

export default MainPage
