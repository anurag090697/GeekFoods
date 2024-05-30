import { useState } from 'react'
import './App.css'
import Navbar from "./Navbar.jsx"
import Hero from "./Hero.jsx"
import Datashow from "./Datashow.jsx"
import Footer from "./Footer.jsx"


function App() {
  

  return (
    <div className='container'>
      <Navbar/>
      <Hero/>
      <Datashow/>
      <Footer/>
    </div>
  )
}

export default App
