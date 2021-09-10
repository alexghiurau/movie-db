import React, { Fragment, useEffect } from 'react';

import Searchbar from './components/layout/Searchbar';
import Movies from './components/movies/Movies';
import AddBtn from './components/layout/AddBtn';
import AddMovieModal from './components/movies/AddMovieModal';
import EditMovieModal from './components/movies/EditMovieModal';

import { Provider } from 'react-redux';
import store from './store';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

// Main app component, loads all needed components
const App = () => {
  useEffect(() => {
    // initialise materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <Searchbar />
        <div className='container'>
          <AddBtn />
          <AddMovieModal />
          <EditMovieModal />
          <Movies />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
