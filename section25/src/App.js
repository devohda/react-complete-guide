import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Navigation from './components/Nav/Navigation';
import FavoritesPage from './containers/Favorites';
import ProductsPage from './containers/Products';

const App = props => {
  return (
    <React.Fragment>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
