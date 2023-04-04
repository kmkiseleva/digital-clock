// Core
import React, { useState, useEffect } from 'react';

// Styles
import './DigitalClock.css';

const DigitalDial: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());
  const [isDay, setIsDay] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDegree = hours * 30 + minutes / 2 + 90;
  const minuteDegree = minutes * 6 + 90;
  const secondDegree = seconds * 6;

  const handleDayClick = () => {
    setIsDay(true);
  };

  const handleNightClick = () => {
    setIsDay(false);
  };

  return (
    <div className={`digital-clock ${isDay ? 'day-theme' : 'night-theme'}`}>
      <div className="clock">
        <div className="clock-face">
          {Array(12)
            .fill('')
            .map((stroke, index) => (
              <span
                className="clock__stroke"
                style={{ transform: `rotate(${index * 30}deg)` }}
              ></span>
            ))}

          <div
            className="hand hour-hand"
            style={{ transform: `rotate(${hourDegree}deg)` }}
          />
          <div
            className="hand minute-hand"
            style={{ transform: `rotate(${minuteDegree}deg)` }}
          />
          <div
            className="hand second-hand"
            style={{ transform: `rotate(${secondDegree}deg)` }}
          />
        </div>
      </div>
      <span className="time">
        {hours}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </span>
      <div className="theme-switchers">
        <button
          className="day-switcher"
          onClick={handleDayClick}
        >
          Day
        </button>
        <button
          className="night-switcher"
          onClick={handleNightClick}
        >
          Night
        </button>
      </div>
    </div>
  );
};

export default DigitalDial;
