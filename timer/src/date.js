import React, { useEffect, useRef, useState } from "react";

function CountDownTimer({ time }) {
  const [currentTime, setCurrentTime] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    setCurrentTime(time);
    return () => {
      clearTimeout(timer.current);
    };
  }, [time]);

  function decrement() {
    setCurrentTime(currentTime - 1);
  }

  useEffect(() => {
    timer.current = setTimeout(() => {
      decrement();
    }, 1000);

    if (currentTime <= 0) {
      clearTimeout(timer.current);
    }
  }, [currentTime]);
  return <p> {currentTime} </p>;
}

export default CountDownTimer;
