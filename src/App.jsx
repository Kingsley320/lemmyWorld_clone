import { useState } from 'react'
import './App.css'
// import HomePage from './Pages/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './Pages/SignUp'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<HomePage/>}/> */}
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
