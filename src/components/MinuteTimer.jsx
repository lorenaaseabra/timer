import React, { useState, useEffect } from "react";

const MinuteTimer = () => {
  const [minCount, setMinCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setMinCount((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const resetTimer = () => {
    setMinCount(0);
    setIsRunning(false);
  };

  const minutes = Math.floor(minCount / 60);
  const seconds = minCount % 60;

  return (
    <div className="timer">
      <h3>Timer Crescente (Minutos)</h3>
      <div>{`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
        2,
        "0"
      )}`}</div>
      <button onClick={() => setIsRunning(true)}>Iniciar</button>
      <button onClick={resetTimer}>Reiniciar</button>
    </div>
  );
};

export default MinuteTimer;
