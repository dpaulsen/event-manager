import React from "react"

const MainPageTile = (props) => {
  return (
    <div className="card box-shadow hover-zoom">
      <img className="icon-tile" src={props.image}/>
      <div className ="card-section text-center" >
        {props.text}
      </div>
    </div>
  )
}

export default MainPageTile
