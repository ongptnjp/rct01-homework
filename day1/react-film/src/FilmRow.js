import React, { Component } from "react";
import FilmPoster from "./FilmPoster";

class FilmRow extends Component {
  render() {
    return (
      <div className="film-row">
        <FilmPoster posterPath={this.props.posterPath} />
      
        <div className="film-summary">
          <h1>{this.props.title}</h1>
          <p>{new Date(this.props.releaseDate).getFullYear()}</p>
        </div>
      </div>
    );
  }
}

export default FilmRow;
