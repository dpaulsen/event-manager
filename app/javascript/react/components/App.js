import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import PageLayout from "./PageLayout"
import TestLayout from "./TestLayout"

export const App = (props) => {
  return (<div>
    <BrowserRouter>
      <Route path ="/" component = {PageLayout}/>
     </BrowserRouter>

  </div>)
}

export default App
