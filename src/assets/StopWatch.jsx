import React, {useState, useEffect} from "react";

function StopWatch() {

    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {

    },[isRunning]);


    function formatTime() {
        return `00:00:00`;
    }

    return(
        <div className="stopwatch">
            <div className="display">
                {formatTime()}
            </div>
        </div>
    )
}

export default StopWatch;