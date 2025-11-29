import { useState, useRef, useEffect } from "react";

function StopWatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  // Start
  const startTimer = () => {
    if (isRunning) return;
    setIsRunning(true);

    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  // Stop
  const stopTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  // Reset
  const resetTimer = () => {
    clearInterval(timerRef.current);
    setSeconds(0);
    setIsRunning(false);
  };

  // Cleanup on unmount (good practice)
  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  // Format time → m:ss (0:00)
  const formatTime = () => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="stopwatch-container">
      <h1>Stopwatch</h1>

      {/* Render label and formatted time together so tests can find "Time: 0:00" */}
      <h2>Time: {formatTime()}</h2>

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
