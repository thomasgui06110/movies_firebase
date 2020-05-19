import React from "react";
import { Header } from "./components";
import apiMovie, { apiMovieMap } from "./conf/api.movie";
import apiFirebase from "./conf/api.firebase";
import Films from "./features/films";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Favoris from "./features/favoris";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false,
      favoris: null,
    };
  }

  componentDidMount() {
    apiMovie
      .get("/discover/movie")
      .then((response) => response.data.results)
      .then((moviesApi) => {
        const movies = moviesApi.map(apiMovieMap);

        this.updateMovies(movies);
      })
      .catch((err) => console.log(err));

    apiFirebase.get("favoris.json").then((response) => {
      //let favorisList = response.data ? (favorisList = response.data) : [];
      let favorisList = [];
      if (response.data) {
        favorisList = response.data;
      } else {
        favorisList = [];
      }
      this.updateFavori(favorisList);
    });
  }

  updateMovies = (movies) => {
    this.setState({
      movies,
      loaded: this.state.favoris ? true : false,
    });
  };

  updateFavori = (favorisList) => {
    this.setState({
      favoris: favorisList,
      loaded: this.state.movies ? true : false,
    });
  };

  updateSelectedMovie = (index) => {
    this.setState({ selectedMovie: index });
  };

  addFavori = (title) => {
    const favoris = this.state.favoris.slice();
    const film = this.state.movies.find((m) => m.title === title);
    favoris.push(film);
    this.setState(
      {
        favoris,
      },
      () => {
        this.saveFavoris();
      }
    );
  };

  saveFavoris = () => {
    apiFirebase.put("favoris.json", this.state.favoris);
  };

  removeFavori = (title) => {
    const favoris = this.state.favoris.slice();
    const index = this.state.favoris.findIndex((f) => f.title === title);
    favoris.splice(index, 1);
    this.setState(
      {
        favoris,
      },
      () => {
        this.saveFavoris();
      }
    );
  };

  render() {
    return (
      <Router>
        <div className="App d-flex flex-column">
          <Header />
          <Switch>
            <Route
              path="/films"
              render={(props) => {
                return (
                  <Films
                    {...props}
                    movies={this.state.movies}
                    updateMovies={this.updateMovies}
                    updateSelectedMovie={this.updateSelectedMovie}
                    loaded={this.state.loaded}
                    selectedMovie={this.state.selectedMovie}
                    addFavori={this.addFavori}
                    removeFavori={this.removeFavori}
                    favoris={this.state.favoris}
                  />
                );
              }}
            />
            <Route
              path="/favoris"
              render={(props) => {
                return (
                  <Favoris
                    {...props}
                    loaded={this.state.loaded}
                    favoris={this.state.favoris}
                    removeFavori={this.removeFavori}
                  />
                );
              }}
            />
            <Redirect to="/films" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
