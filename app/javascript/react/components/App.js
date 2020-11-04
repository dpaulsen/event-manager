import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'

import TestLayout from "./TestLayout"
import PageLayout from "./PageLayout"

export const App = (props) => {
  return (<div>
    <BrowserRouter>
      <Route path ="/" component = {PageLayout}/>
     </BrowserRouter>

  </div>)
}

export default App
