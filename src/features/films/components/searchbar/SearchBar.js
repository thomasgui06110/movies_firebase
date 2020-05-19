import React, { Component } from "react";
import { Formik } from "formik";
import apiMovie, { apiMovieMap } from "../../../../conf/api.movie";

export default class SearchBar extends Component {
  submit = (values, actions) => {
    const query =
      "?" +
      Object.keys(values)
        .map((k) => `${k}=${values[k]}&`)
        .join("");

    apiMovie
      .get("/search/movie" + query)
      .then((response) => response.data.results)
      .then((moviesApi) => {
        const movies = moviesApi.map(apiMovieMap);
        this.props.updateMovies(movies);
        actions.setSubmitting(false);
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <Formik
        onSubmit={this.submit}
        initialValues={{ query: "", language: "en-US" }}
      >
        {({ handleSubmit, handleChange, handleBlur, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="d-flex flex-row p-2 m-2">
            <input
              placeholder="Search ..."
              name="query"
              className="flex-fill from-control mr-2"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <select
              onChange={handleChange}
              onBlur={handleBlur}
              name="language"
              className="mr-2 w-25 form-control"
            >
              <option value="en-US">Anglais</option>
              <option value="fr-FR">Français</option>
            </select>
            <button
              className="btn btn-success"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    );
  }
}
