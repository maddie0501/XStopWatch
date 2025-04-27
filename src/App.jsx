import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0); 
  const [isRunning, setIsRunning] = useState(false);  


  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else {

      clearInterval(intervalId);
    }


    return () => clearInterval(intervalId);
  }, [isRunning]);

  
  const handleToggle = () => {
    setIsRunning((prevState) => !prevState);
  };

  const handleReset = () => {
    setCount(0); 
  };


  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <h3>Time: {formatTime(count)}</h3>
      <button onClick={handleToggle}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
