import React, {useState, useEffect, useContext} from 'react';
import sunDark from './media/sunClock.png';
import sunLight from './media/sunClockLight.png';
import moon from './media/moonClock.png';
import { UserContext } from '../App';

function MoonSun() {
  
  const [sun, setSun] = useState(sunLight);

  const dayLight = useContext(UserContext);
 
  useEffect(() => {
    if (!dayLight) {
      setSun(s => s = sunDark);
    } else {
      setSun(s => s = sunLight);
    } 
  },[dayLight])

    return (
      <div className="moon-sun-container">
        <img src={moon} className="logo moon" alt="moon" />
        <img src={sun} className="logo" alt="sun" />
      </div>
    )
}

export default MoonSun;