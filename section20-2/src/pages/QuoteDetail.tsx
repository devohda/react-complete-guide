import {useParams} from 'react-router-dom';

const QuoteDetail = () => {
  const param = useParams<{quoteId: string}>();
  return <div>{param.quoteId}</div>;
};

export default QuoteDetail;
