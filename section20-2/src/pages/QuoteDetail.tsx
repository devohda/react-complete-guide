import {Route, useParams} from 'react-router-dom';

import Comments from '../components/comments/Comments';

const QuoteDetail = () => {
  const param = useParams<{quoteId: string}>();
  return (
    <>
      <h1>Quote Detail</h1>
      <div>{param.quoteId}</div>
      <Route path="/quotes/:quoteId/comment">
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
