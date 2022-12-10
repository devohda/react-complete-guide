import {Route, useParams} from 'react-router-dom';

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  {id: 'q1', author: 'Max', text: 'Learning React is fun!'},
  {id: 'q2', author: 'Maximilian', text: 'Learning React is great!'},
];

const QuoteDetail = () => {
  const param = useParams<{quoteId: string}>();

  const quote = DUMMY_QUOTES.find(quote => quote.id === param.quoteId);

  if (quote) {
    return (
      <>
        <HighlightedQuote text={quote.text} author={quote.author} />
        <Route path="/quotes/:quoteId/comment">
          <Comments />
        </Route>
      </>
    );
  }

  return <p>No quote found!</p>;
};

export default QuoteDetail;
