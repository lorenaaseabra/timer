import React from "react";
import MinuteTimer from "./components/MinuteTimer";
import SecondTimer from "./components/SecondTimer";
import MillisecondTimer from "./components/MillisecondTimer";
import "./styles.css";

const App = () => {
  return (
    <div className="timer-container">
      <MinuteTimer />
      <SecondTimer />
      <MillisecondTimer />
    </div>
  );
};

export default App;
