import {useState, useEffect} from 'react';

interface useCounterProps {
  counterUpdateFn: (prevState: number) => number;
}

const useCounter = ({counterUpdateFn}: useCounterProps) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counterUpdateFn);
    }, 1000);

    return () => clearInterval(interval);
  }, [counterUpdateFn]);

  return counter;
};

export default useCounter;
