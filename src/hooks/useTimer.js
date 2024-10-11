import { useState, useEffect } from "react";

export const useTimer = (initialTime, onTimeUp) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isTimerActive, setIsTimerActive] = useState(true);

  useEffect(() => {
    let timer;
    if (isTimerActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          const newTime = Math.max(prevTime - 1, 0);
          if (newTime === 0) {
            setIsTimerActive(false);
            onTimeUp?.();
          }
          return newTime;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isTimerActive, timeLeft, onTimeUp]);

  const startTimer = () => setIsTimerActive(true);
  const stopTimer = () => setIsTimerActive(false);
  const resetTimer = () => setTimeLeft(initialTime);

  return {
    timeLeft,
    isTimerActive,
    startTimer,
    stopTimer,
    resetTimer,
  };
};
