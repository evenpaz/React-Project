import { useEffect, useState, memo } from "react";
import "./clock.scss";
const Clock = memo(() => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const clockInterval = setInterval(() => {
      setHours(new Date().getHours());
      setMinutes(new Date().getMinutes());
      setSeconds(new Date().getSeconds());
    });
    return () => clearInterval(clockInterval);
  }, []);

  return (
    <div className="clock">
      <div className="clock-box">
        <div className="digital">
          <div className="screen">
            <div className="time">
              <div id="hours">{hours}</div>
            </div>
          </div>
        </div>
      </div>
      <h1>:</h1>
      <div className="clock-box">
        <div className="digital">
          <div className="screen">
            <div className="time">
              <div id="minutes">{minutes}</div>
            </div>
          </div>
        </div>
      </div>
      <h1>:</h1>
      <div className="clock-box">
        <div className="digital">
          <div className="screen">
            <div className="time">
              <div id="seconds">{seconds}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Clock;
