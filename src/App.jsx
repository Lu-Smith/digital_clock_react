import { useState } from 'react'
import './App.css'
import DigitalClock from './assets/DigitalClock'
import Footer from './assets/Footer'
import MoonSun from './assets/MoonSun'

function App() {

  return (
    <>
      <MoonSun />
      <DigitalClock />
      <Footer />
    </>
  )
}

export default App
