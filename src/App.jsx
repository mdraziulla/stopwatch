import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <>
      <div className="App">
      <h1>Stopwatch</h1>
      <p>Time : {formatTime(time)}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button onClick={() => setTime(0)}>Reset</button>
    </div>
    </>
  )
}

export default App
