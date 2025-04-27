import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);  // keeps running every sec until stopped 

      setIntervalId(id);

      return () => clearInterval(id); // reset it or stop it at given interval
    }
  }, [isRunning]);

  const handleClick = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setCount(0);
    setIsRunning(false);
    if (intervalId) {
      clearInterval(intervalId);
    }
  };
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${minutes}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time:{formatTime(count)}</p>
      <button onClick={handleClick}>{count ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
