import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects.Jsx'
import Navbar from './components/navigation/Navbar'
import FullScreenNav from './components/navigation/fullScreenNav'

const App = () => {
  
  return (
    <div>
      <Navbar />
      {/* <FullScreenNav /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/agence' element={<Agence />} />
      </Routes>
    </div>
  )
}

export default App
