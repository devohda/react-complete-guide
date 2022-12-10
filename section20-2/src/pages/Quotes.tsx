import QuoteList from '../components/quotes/QuoteList';
import {Quote} from '../components/quotes/types';

interface QuotesProps {
  quotes: Quote[];
}

const Quotes = ({quotes}: QuotesProps) => {
  return <QuoteList quotes={quotes} />;
};

export default Quotes;
