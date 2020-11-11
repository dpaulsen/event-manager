import React from "react"
import {Link} from "react-router-dom"

import MainPageTile from "./MainPageTile"

const MainPage = (props) => {
  
  return(
    <div>
      <h3> 
        Main page links:  
      </h3>
      <div className={"grid-x grid-margin-x grid-padding-x"+ 
        "grid-padding-y small-up-1 medium-up-2 large-up-4"}>

        <div className = "cell">
          <Link to="/attendees/"> 
            <MainPageTile text="Guest List" image=""/>
          </Link>
        </div>
        <div className = "cell">
          <Link to="/events/"> 
            <MainPageTile text="Event List" image=""/>
          </Link>
        </div>
        <div className = "cell">
          <Link to="/scrapbooks/">
            <MainPageTile text="Scrapbook" image=""/>
          </Link>
        </div>
        <div className = "cell">
          <Link to="/messages/"> 
            <MainPageTile text="Messages" image=""/>
          </Link> 
        </div>

        <div className = "cell">
          <Link to = "/signups/">
            <MainPageTile text="Sign Ups" image=""/>
          </Link>
        </div>

      </div>
    </div>

  )
}

export default MainPage
