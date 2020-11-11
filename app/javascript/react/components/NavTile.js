import React from "react"

const NavTile = (props) => {
  return (
    <div className="card box-shadow hover-zoom card-section text-center" >
      {props.text}
    </div>
  )
}

export default NavTile
