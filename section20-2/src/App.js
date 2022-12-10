import {Redirect, Route, Switch} from 'react-router-dom';

import MainNavigation from './components/layout/MainNavigation';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';
import Quotes from './pages/Quotes';

function App() {
  return (
    <div>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <Quotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
