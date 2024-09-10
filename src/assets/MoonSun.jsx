import sun from './media/sunClock.png'
import moon from './media/moonClock.png'

function MoonSun() {
    return (
      <div className="moon-sun-container">
        <img src={moon} className="logo moon" alt="moon" />
        <img src={sun} className="logo" alt="sun" />
      </div>
    )
}

export default MoonSun;