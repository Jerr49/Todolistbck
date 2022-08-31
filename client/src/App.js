import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Details from './pages/Details'
import Home from './pages/Home'
import Create from './pages/Create'
import Navbar from './pages/Navbar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Create' element={<Create/>}/>
        <Route path='/:id' element={<Details/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


