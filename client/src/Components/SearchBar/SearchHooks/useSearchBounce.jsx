import { useState, useEffect } from 'react';

function useSearchBounce(value, delay, func) {
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    const clearTimer = () => {
      if (timer) clearTimeout(timer);
    };

    if (value) {
      const newTimer = setTimeout(func, delay);
      setTimer(newTimer);

      return () => clearTimer();
    }
  }, [value]);
}

export default useSearchBounce;
