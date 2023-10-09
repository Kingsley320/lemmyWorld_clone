import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './Pages/SignUp'
import Login from './Pages/LogIn'
import HomePage from './Pages/HomePage'
import CreatePost from './Pages/CreatePost'
import PostsPage from './Pages/PostsPage'
import SinglePost from './components/SinglePost'
import Dashboard from './admin/Pages/Dashboard'
import CreateCommunity from './Pages/CreateCommunity'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/create-post" element={<CreatePost/>}/>
          <Route path="/create-community" element={<CreateCommunity/>}/>
          <Route path="/feed" element={<PostsPage/>}/>
          <Route path="/feed/:id" element={<SinglePost/>}/>

          <Route path='/admin' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
           
    </>
  )
}

export default App
