import {useState} from 'react';
import {Redirect, Route, Switch, useHistory} from 'react-router-dom';

import Layout from './components/layout/Layout';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
import QuoteDetail from './pages/QuoteDetail';
import Quotes from './pages/Quotes';

function App() {
  const DUMMY_QUOTES = [
    {id: 'q1', author: 'Max', text: 'Learning React is fun!'},
    {id: 'q2', author: 'Maximilian', text: 'Learning React is great!'},
  ];
  const [quotes, setQuotes] = useState(DUMMY_QUOTES);
  const history = useHistory();

  const addQuoteHandler = quote => {
    setQuotes(prevQuotes => {
      return prevQuotes.concat({
        id: `q${prevQuotes.length + 1}`,
        ...quote,
      });
    });

    history.push('/quotes');
  };

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <Quotes quotes={quotes} />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote onAddQuote={addQuoteHandler} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
