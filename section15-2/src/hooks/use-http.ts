import {useState} from 'react';

interface useHttpProps {
  requestConfig: {
    url: RequestInfo | URL;
    method?: string;
    headers?: HeadersInit;
    body?: BodyInit | null;
  };
  applyData: (data: Response) => void;
}

const useHttp = ({requestConfig, applyData}: useHttpProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig?.method || 'GET',
        headers: requestConfig?.headers || {},
        body: requestConfig?.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      applyData(data);
    } catch (err: any) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
