import React, {useState, useEffect} from 'react';
import sunDark from './media/sunClock.png';
import sunLight from './media/sunClockLight.png';
import moon from './media/moonClock.png';

function MoonSun() {
  
  const [sun, setSun] = useState(sunLight);
  const meridumSun = new Date().getHours();
  const dayLight = meridumSun > 5 && meridumSun < 18 ? true : false;

  useEffect(() => {
    if (!dayLight) {
      setSun(s => s = sunDark);
    } else {
      setSun(s => s = sunLight);
    } 
  },[meridumSun])

    return (
      <div className="moon-sun-container">
        <img src={moon} className="logo moon" alt="moon" />
        <img src={sun} className="logo" alt="sun" />
      </div>
    )
}

export default MoonSun;