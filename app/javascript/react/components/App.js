import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import PageLayout from "./PageLayout"

export const App = (props) => {
  return (<div>
    <h1>Make It So React</h1>
    <BrowserRouter>
      <Route path ="/" component = {PageLayout}/>
     </BrowserRouter>

  </div>)
}

export default App
