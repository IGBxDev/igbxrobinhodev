import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routers from './routes'

class App extends React.Component{
  
  render(){
    return(<BrowserRouter>
      <Routers />
    </BrowserRouter>)
  }
}

export default App