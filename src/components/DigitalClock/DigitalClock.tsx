import React, { useState, useEffect } from 'react';
import { FaClock } from 'react-icons/fa';
import './DigitalClock.css';

const DigitalClock: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());
  const [isDay, setIsDay] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  const handleDayClick = () => {
    setIsDay(true);
  };

  const handleNightClick = () => {
    setIsDay(false);
  };

  return (
    <div className={`digital-clock ${isDay ? 'day-theme' : 'night-theme'}`}>
      <FaClock className="clock-icon" />
      <span className="time">
        {hours}:{minutes}:{seconds}
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

export default DigitalClock;
