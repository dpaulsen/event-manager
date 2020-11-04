import React from "react"
import {Switch, Route} from "react-router-dom"

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
              {listElement}
            </div>

            <div className = "cell auto centerpane cell-block-y">
                <h2> center </h2> 
                {listElement}
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
