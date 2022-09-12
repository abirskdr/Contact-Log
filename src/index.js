import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; //BrowserRouter is a component itself,

//router is a special tool that watches changes in the url and then changes whats visible on the screen based on the url

import './index.css';
import App from './App';
import { FavoritesContextProvider } from './store/favorites-context';

ReactDOM.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>,

  document.getElementById('root')
);
