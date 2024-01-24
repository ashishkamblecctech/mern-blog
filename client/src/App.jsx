import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Sign-In' element={<SignIn />} />
      <Route path='/Sign-Up' element={<SignUp />} />
      <Route path='/Dashboard' element={<Dashboard />} />
      <Route path='/Projects' element={<Projects/>} />
    </Routes>
    </BrowserRouter>
  )
}
