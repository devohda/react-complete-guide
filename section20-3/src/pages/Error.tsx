import {useRouteError} from 'react-router-dom';

const Error = () => {
  const error = useRouteError() as {message: string};
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>{error.message}</p>
    </div>
  );
};

export default Error;
