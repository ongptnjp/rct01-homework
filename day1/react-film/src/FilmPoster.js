import React, { Component } from "react";

class FilmPoster extends Component {
  render() {
    return <img src={`https://image.tmdb.org/t/p/w780/${this.props.posterPath}`} alt="" />;
  }
}

export default FilmPoster;
