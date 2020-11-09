import React from "react"
import {Link} from "react-router-dom"

const NavBar = (props) => {

  return(<div >
    <div>

      <Link className = "cell" to = "/"> Main Page </Link> 
      <br/>
      <Link className = "cell" to ="/attendees/"> Guest List </Link>
      <br/>
      <Link className = "cell" to ="/events/"> Event List </Link>
      <br/> 
      <Link className = "cell" to ="/scrapbooks/"> Scrapbook </Link>

    </div>
  </div>)


}

export default NavBar
