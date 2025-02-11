import { useState } from 'react'
import './App.css'
import MainMenu from './pages/MainMenu'
import {Routes, Route} from "react-router-dom"
import ConquerYourFears from './pages/ConquerYourFears'

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<MainMenu />}/>
      <Route path="/conquer" element={<ConquerYourFears />}/>
    </Routes>
    </>
  )
}

export default App
