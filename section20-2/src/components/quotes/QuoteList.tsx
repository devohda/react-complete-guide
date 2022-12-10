import {useHistory, useLocation} from 'react-router-dom';

import {sortQuotes} from '../../utils/sorting';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
import {Quote} from './types';

interface QuoteListProps {
  quotes: Quote[];
}

const QuoteList = ({quotes}: QuoteListProps) => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get('sort') === 'asc';
  const changeSortingHandler = () => {
    history.replace({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? 'desc' : 'asc'}`,
    });
  };

  return (
    <>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {!isSortingAscending ? 'Ascending' : 'Descending'}
        </button>
      </div>
      <ul className={classes.list}>
        {sortQuotes(quotes, isSortingAscending).map(quote => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </>
  );
};

export default QuoteList;
