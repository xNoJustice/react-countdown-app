import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const nextYear = new Date("Jan 1, 2022").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = nextYear - now;
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="countdown-title">New Year Countdown</div>
        <div className="countdown">
          <span>
            <div className="countdown-numbers">{days}</div>
            <div className="countdown-label">Days</div>
          </span>
          <span>
            <div className="countdown-numbers">{hours}</div>
            <div className="countdown-label">Hours</div>
          </span>
          <span>
            <div className="countdown-numbers">{minutes}</div>
            <div className="countdown-label">Minutes</div>
          </span>
          <span>
            <div className="countdown-numbers">{seconds}</div>
            <div className="countdown-label">Seconds</div>
          </span>
        </div>
        <div className="countdown-footer">
          Time until Saturday, 1 January 2022.
        </div>
      </header>
    </div>
  );
}

export default App;
