import React, { Component } from "react";

export default class MovieDetails extends Component {
  render() {
    const { title, img, details, description } = this.props.movie;
    return (
      <>
        <div className="w-25 bg-light p-4 d-flex flex-column">
          <h5>{title}</h5>
          <hr className="w-100" />

          <div>
            <img alt={title} src={img} className="d-block mx-auto w-100" />
          </div>
          <hr className="w-100" />
          <span className="text-secondary">{details}</span>
          <span>{description}</span>
        </div>
      </>
    );
  }
}
