import React, {useState, useEffect} from "react";

function StopWatch() {

    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {

    },[isRunning]);

    function start(){

    }

    function stop(){

    }

    function reset(){

    }

    function formatTime() {
        return `00:00:00`;
    }

    return(
        <div className="stopwatch">
            <div className="display">
                {formatTime()}
            </div>
            <div className="controls">
                <button onClick="start" className="start-button">Start</button>
                <button onClick="stop" className="stop-button">Stop</button>
                <button onClick="reset" className="reset-button">Reset</button>
            </div>
        </div>
    )
}

export default StopWatch;