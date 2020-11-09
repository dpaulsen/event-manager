import React from "react"
import {Switch, Route} from "react-router-dom"

import AttendeeIndexContainer from "./attendee/AttendeeIndexContainer"
import AttendeeNewContainer from "./attendee/AttendeeNewContainer"
import AttendeeShowPage from "./attendee/AttendeeShowPage"
import AttendeeSingleContainer from "./attendee/AttendeeSingleContainer"

import NavBar from "./NavBar"

import MainPage from "./MainPage"
import EventIndexContainer from "./events/EventIndexContainer"
import ScrapbookIndexContainer from "./scrapbook/ScrapbookIndexContainer"


const PageLayout = (props) => {

  // generate content for testing scrolling on page
  const list = []
  for (let i= 1; i<=30; i++){
    list.push(<li key={i}> {i} </li>)
  }
  const listElement = (
    <ul>
      {list}
    </ul>
  )

  return(
    
      <div className="grid-y grid-margin-y grid-frame wrapper" > 
      
        <div className = "cell shirnk small-1 medium-2 large-2 headerpane">
          <h2>  top </h2>
        </div>

        <div className = "cell auto small-4 medium-8 large-8 mainpane" >
          <div className = "grid-x grid-margin-x" style={{ height: "100%" }}>

            <div className = "cell small-1 medium-2 large-2 cell-block-y leftpane" style={{ height: "100%" }}>
              <h2> left</h2>
              <NavBar/>
              {listElement}
            </div>

            <div className = "cell auto centerpane cell-block-y">
                <h2> center </h2> 
                <Switch>
                  <Route exact path = "/" component ={MainPage} />
                  <Route exact path = "/attendees/" component ={AttendeeIndexContainer} />
                  <Route exact path = "/attendees/new" component = {AttendeeNewContainer} />
                  <Route path = "/attendees/:id" component = {AttendeeSingleContainer} />

                  <Route exact path = "/events/" component ={EventIndexContainer} />
                  
                  <Route exact path = "/scrapbooks/" component ={ScrapbookIndexContainer} />
                </Switch>
            </div>

            <div className ="cell small-1 medium-2 large-2 cell-block-y rightpane">
              <h2> right </h2>
              {listElement}
            </div>

          </div>
        </div>

        <div className="cell shrink small-1 medium-2 large-2 footerpane" > 
          <h2> bottom </h2>
        </div>
 
      </div>

  )

}

export default PageLayout
