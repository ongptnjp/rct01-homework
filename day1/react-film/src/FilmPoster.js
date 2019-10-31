import React, { Component } from "react";

const POSTER_PREFIX = "https://image.tmdb.org/t/p/w780/";
class FilmPoster extends Component {
  render() {
    const posterUrl = POSTER_PREFIX + this.props.posterPath;
    
    return <img src={posterUrl} alt="" />;
  }
}

export default FilmPoster;
