import React, { Component } from "react";
import FilmRow from "./FilmRow";

class FilmListing extends Component {
  render() {
    const title = this.props.films.map(film => 
      <FilmRow 
        key={film.id}
        title={film.title}
        overview={film.overview}
        posterPath={film.poster_path}
        releaseDate={film.release_date}
        backdropPath={film.backdrop_path}
      />
    );
    return (
      <div>
        {title}
      </div>
    );
  }
}

export default FilmListing;
