import { useState } from 'react'
import './App.css'
// import HomePage from './Pages/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './Pages/SignUp'
import Login from './Pages/LogIn'
import HomePage from './Pages/HomePage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
