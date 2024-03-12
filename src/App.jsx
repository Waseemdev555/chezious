import React, { useState ,useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Headlinecard from './components/Headlinecard'
import Food from './components/Food'
import Catogry from './components/Catogry'

const App = () => {
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Headlinecard/>
      <Food/>
      <Catogry/>
    </div>
  )
}

export default App