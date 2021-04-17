import React, { useState } from "react";

function App(){

    const now = new Date().toLocaleTimeString();
    const nowTime = now.replace("AM", "").replace("PM","");

    const[currentTime, setCurrentTime] = useState(nowTime);

    function updateTime() {
       const time = new Date().toLocaleTimeString();
       const newTime = time.replace("AM", "").replace("PM","");

        setCurrentTime(newTime);
    }

    setInterval(updateTime,1000);


    return(
        <div>
            <h1>{currentTime}</h1>
            <button onClick = {updateTime}>Get Time</button>
        </div>
    );
}
export default App;