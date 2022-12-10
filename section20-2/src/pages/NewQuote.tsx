import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';
import {Quote} from '../components/quotes/types';
import useHttp from '../hooks/use-http';
import {addQuote} from '../lib/api';

const NewQuote = () => {
  const history = useHistory();
  const {sendRequest, status} = useHttp(addQuote);
  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes');
    }
  }, [status, history]);
  const addQuoteHandler = (quote: Partial<Quote>) => {
    sendRequest(quote);
  };

  return (
    <QuoteForm onAddQuote={addQuoteHandler} isLoading={status === 'pending'} />
  );
};

export default NewQuote;
