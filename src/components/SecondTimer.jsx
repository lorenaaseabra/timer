import React, { useState, useEffect } from "react";

const SecondTimer = () => {
  const [secCount, setSecCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSecCount((prev) => Math.max(prev - 1, 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const resetTimer = () => {
    setSecCount(0);
    setIsRunning(false);
  };

  const handleStart = () => {
    const inputSeconds = parseInt(document.getElementById("sec-timer-input").value) || 0;
    setSecCount(inputSeconds);
    setIsRunning(true);
  };

  return (
    <div className="timer">
      <h3>Timer Decrescente (Segundos)</h3>
      <input type="number" id="sec-timer-input" placeholder="Digite segundos" />
      <div>{`00:${String(secCount).padStart(2, "0")}`}</div>
      <button onClick={handleStart}>Iniciar</button>
      <button onClick={() => setIsRunning(false)}>Pausar</button>
      <button onClick={resetTimer}>Reiniciar</button>
    </div>
  );
};

export default SecondTimer;
