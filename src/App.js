import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './routes/index/Home'
import Launches from './routes/launches/Launches'
import LaunchInfo from './routes/launch-id/LaunchInfo'
import FourOFourError from './routes/not-found/FourOFourError'


const App = () => {
  return (
    <Routes>
        <Route path='*' element={<FourOFourError/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/launches' element={<Launches/>}/>
        <Route path='/launch/:id' element={<LaunchInfo/>}/>
    </Routes>
  )
}

export default App