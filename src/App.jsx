import { useState } from 'react'
import sun from './assets/media/sunClock.png'
import moon from './assets/media/moonClock.png'
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
