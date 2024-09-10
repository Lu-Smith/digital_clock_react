import React, {useState, useEffect} from "react";

function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return (
        <div className="clock-container">
            <div className="clock">
                <h1>00 : 00 : 00</h1>
            </div>
        </div>
    )
}

export default DigitalClock;