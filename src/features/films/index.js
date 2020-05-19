import React from "react";
import { MovieDetails, MovieList, SearchBar } from "./components";
import Loaded from "../../components/utils/Loaded";

export default function index(props) {
  return (
    <>
      <SearchBar updateMovies={props.updateMovies} />
      {props.loaded ? (
        <div className="d-flex flex-row flex-fill pt-4 p-2">
          <MovieList
            movie={props.movies}
            updateSelectedMovie={props.updateSelectedMovie}
            favoris={props.favoris.map((f) => f.title)}
            removeFavori={props.removeFavori}
            addFavori={props.addFavori}
          ></MovieList>
          <MovieDetails movie={props.movies[props.selectedMovie]} />
        </div>
      ) : (
        <Loaded />
      )}
    </>
  );
}
