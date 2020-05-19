import React, { Component } from "react";
import Style from "./MovieElement.module.scss";

export default class MovieElement extends Component {
  mouseEnter = () => {
    this.props.updateSelectedMovie(this.props.movie.title);
  };
  render() {
    return (
      <div
        onClick={this.mouseEnter}
        className={" d-flex bg-light " + Style.container}
      >
        <img width="180" alt="film" src={this.props.movie.img} />
        <div className="flex-fill d-flex flex-column p-3">
          <h5> {this.props.movie.title}</h5>
          <hr className="w-100" />
          <p className="flex-fill">{this.props.movie.details}</p>
          <div className="d-flex flex-row justify-content-end">
            {this.props.isFavori ? (
              <button
                onClick={() => {
                  this.props.removeFavori(this.props.movie.title);
                }}
                className="btn btn-danger btn-small"
              >
                Remove
              </button>
            ) : (
              <button
                onClick={() => {
                  this.props.addFavori(this.props.movie.title);
                }}
                className="btn btn-success btn-small"
              >
                Ajouter
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
