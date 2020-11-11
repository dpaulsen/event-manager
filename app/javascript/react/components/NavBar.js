import React from "react"
import {Link} from "react-router-dom"
import NavTile from "./NavTile"

const NavBar = (props) => {

  return(<div className ="">
    <h4> Back To:</h4>
    <div >

      <Link className = "cell" to = "/"> 
        <NavTile text = "Main Page"/> 
      </Link> 
     
      <Link className = "cell" to ="/attendees/">
        <NavTile text ="Guest List"/>
      </Link>
    
      <Link className = "cell" to ="/events/"> 
        <NavTile text="Event List"/>
       </Link>
      <Link className = "cell" to ="/scrapbooks/"> 
        <NavTile text = "Scrapbook"/>
      </Link>
 
      <Link className = "cell" to ="/messages/"> 
       <NavTile text="Messages"/>
      </Link>

    </div>
  </div>)


}

export default NavBar
