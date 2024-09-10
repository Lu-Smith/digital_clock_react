import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import DigitalClock from './assets/DigitalClock';
import Footer from './assets/Footer';
import MoonSun from './assets/MoonSun';
import StopWatch from './assets/StopWatch';

export const UserContext = createContext()

function App() {

  const [dayLight, setDayLight] = useState(true);

  const meridumSun = new Date().getHours();

  useEffect(() => {
    setDayLight(d => d = meridumSun > 5 && meridumSun < 18 ? true : false);
  }, [meridumSun]);


  return (
    <div className={dayLight ? "light" : "dark"}>
      <UserContext.Provider value={dayLight}>
        <MoonSun />
      </UserContext.Provider>
      <DigitalClock />
      <StopWatch />
      <Footer />
    </div>
  )
}

export default App;
