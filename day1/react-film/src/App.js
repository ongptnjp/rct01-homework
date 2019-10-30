import React, { Component } from 'react';
import './App.css';
import TMBD from "./TMDB";

import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";

class App extends Component {
  render() {
    const { films } = TMBD;
    console.log("film", films);
    return (
      
        <div className="film-library">
          <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <FilmListing films={films} />
          </div>

          <div className="film-details">
            <h1 className="section-title">DETAILS</h1>
            <FilmDetails films={films} />
          </div>
        </div>
      
    );
  }
}

export default App;
