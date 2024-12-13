import { useRef, useState } from "react";

const useTimer = (maxTimer: number) => {
  const [time, setTime] = useState(maxTimer);
  const interval = useRef<NodeJS.Timeout>();

  const startTimer = () => {
    setTime(20);

    interval.current = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);
  };

  const clearTimer = () => {
    clearInterval(interval.current);
  };

  return {
    time,
    startTimer,
    clearTimer,
  };
};

export default useTimer;
