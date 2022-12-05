import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'

class Routers extends React.Component{
    render(){
        return(<Routes>
            <Route path='/' element={<Home />} />
        </Routes>)
    }
}

export default Routers