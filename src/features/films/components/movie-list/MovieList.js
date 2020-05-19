import React, { Component } from "react";
import { MovieElement } from "..";

export default class MovieList extends Component {
  render() {
    return (
      <div className="w-75 d-flex flex-row flex-wrap justify-content-center">
        {this.props.movie.map((m, index) => {
          return (
            <MovieElement
              key={m.title + index}
              isFavori={this.props.favoris.includes(m.title)}
              updateSelectedMovie={() => this.props.updateSelectedMovie(index)}
              movie={m}
              addFavori={this.props.addFavori}
              removeFavori={this.props.removeFavori}
            />
          );
        })}
      </div>
    );
  }
}
