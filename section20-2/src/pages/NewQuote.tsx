import QuoteForm from '../components/quotes/QuoteForm';
import {Quote} from '../components/quotes/types';

interface NewQuoteProps {
  onAddQuote: (props: Partial<Quote>) => void;
}

const NewQuote = ({onAddQuote}: NewQuoteProps) => {
  return <QuoteForm onAddQuote={onAddQuote} isLoading={false} />;
};

export default NewQuote;
