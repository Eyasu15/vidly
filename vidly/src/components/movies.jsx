import React, { Component } from "react";
import { getMovies } from "./services/fakeMovieService";
import Pagination from "./pagination";
import { paginate } from "./utils/paginate";
import Genres from "./genres";
import { getGenres } from "./services/fakeGenreService";
import MoviesTable from "./moviesTable";
import { Route } from "react-router-dom";
import _ from "lodash";
import MovieForm from "./movieForm";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    activePage: 1,
    genres: [],
    activeGenre: "All Genres",
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

  handleDelete = (movie) => {
    let movies = [...this.state.movies];
    movies = movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (pageNumber) => {
    this.setState({ activePage: pageNumber });
  };

  handleGenreChange = (genre) => {
    this.setState({ activeGenre: genre.name, activePage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      activePage,
      movies: allMovies,
      activeGenre,
      sortColumn,
    } = this.state;

    const filtered =
      activeGenre !== "All Genres"
        ? allMovies.filter((movie) => movie.genre.name === activeGenre)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, pageSize, activePage);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    let { length: count } = this.state.movies;
    const { pageSize, activePage, sortColumn } = this.state;
    if (count < 1) return <p>There are no movies in the database</p>;

    const { totalCount, data: movies } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <Genres
            genres={getGenres()}
            activeGenre={this.state.activeGenre}
            onGenreChange={this.handleGenreChange}
          />
        </div>
        <div className="col">
          <p>Showing {totalCount} movies</p>
          <Route path="/movies/:id" component={MovieForm} />
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            activePage={activePage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
