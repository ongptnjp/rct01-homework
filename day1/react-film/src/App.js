import React, { Component } from 'react';
import './App.css';

import TMBD from "./TMDB";

import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";

class App extends Component {
  render() {
    const { films } = TMBD;
    return (
        <div className="film-library">
          <FilmListing films={films} />

          <FilmDetails films={films} />
        </div>
    );
  }
}

export default App;
