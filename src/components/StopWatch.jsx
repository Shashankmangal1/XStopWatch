import { useState, useRef } from "react";

function StopWatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  
  const startTimer = () => {
    if (isRunning) return;

    setIsRunning(true);

    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  
  const stopTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  
  const resetTimer = () => {
    clearInterval(timerRef.current);
    setSeconds(0);
    setIsRunning(false);
  };

  
  const formatTime = () => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="stopwatch-container">
      <h1>Stopwatch</h1>

      <h2>Time</h2>
      <div className="display">{formatTime()}</div>

      <div>
        {isRunning ? (
          <button onClick={stopTimer}>Stop</button>
        ) : (
          <button onClick={startTimer}>Start</button>
        )}

        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default StopWatch;
