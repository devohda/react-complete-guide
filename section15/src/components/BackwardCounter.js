import Card from './Card';
import useCounter from '../hooks/use-counter';

const BackwardCounter = () => {
  const counter = useCounter({counterUpdateFn: prev => prev - 1});

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
