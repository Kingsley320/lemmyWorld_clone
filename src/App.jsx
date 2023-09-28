import { useState } from 'react'
import './App.css'
// import HomePage from './Pages/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './Pages/SignUp'
import Login from './Pages/LogIn'
import HomePage from './Pages/HomePage'
import CreatePost from './Pages/CreatePost'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/create-post" element={<CreatePost/>}/>
        </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
