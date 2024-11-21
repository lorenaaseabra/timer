import React, { useState, useEffect } from "react";

const MillisecondTimer = () => {
  const [msCount, setMsCount] = useState(0);
  const [msLimit, setMsLimit] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setMsCount((prev) => {
          if (prev < msLimit) return prev + 1;
          setIsRunning(false);
          return prev;
        });
      }, 1);
    }
    return () => clearInterval(interval);
  }, [isRunning, msLimit]);

  const resetTimer = () => {
    setMsCount(0);
    setIsRunning(false);
  };

  const handleStart = () => {
    const inputLimit = parseInt(document.getElementById("ms-timer-input").value) || 0;
    setMsLimit(inputLimit);
    setIsRunning(true);
  };

  return (
    <div className="timer">
      <h3>Timer Crescente (Milissegundos)</h3>
      <input type="number" id="ms-timer-input" placeholder="Digite ms" />
      <div>{String(msCount).padStart(3, "0")}</div>
      <button onClick={handleStart}>Iniciar</button>
      <button onClick={() => setIsRunning(false)}>Pausar</button>
      <button onClick={resetTimer}>Reiniciar</button>
    </div>
  );
};

export default MillisecondTimer;
