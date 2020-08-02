import React, { Component } from "react";
import { getAllMovies, deleteMovie } from "./services/movieService";
import Pagination from "./pagination";
import { paginate } from "./utils/paginate";
import Genres from "./genres";
import { getGenres } from "./services/genreService";
import MoviesTable from "./moviesTable";
import { Link } from "react-router-dom";
import Search from "./common/search";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    activePage: 1,
    genres: [],
    activeGenre: "All Genres",
    sortColumn: { path: "title", order: "asc" },
    search: { active: false, value: "" },
  };

  async componentDidMount() {
    const { data: movies } = await getAllMovies();
    const { data: genres } = await getGenres();

    this.setState({ movies, genres });
  }

  handleDelete = async (movie) => {
    let movies = [...this.state.movies];
    try {
      await deleteMovie(movie.id);
    } catch (ex) {}

    movies = movies.filter((m) => m.id !== movie.id);
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
      search,
    } = this.state;

    let filtered;
    if (!search.active)
      filtered =
        activeGenre !== "All Genres"
          ? allMovies.filter((movie) => movie.genre.name === activeGenre)
          : allMovies;
    else
      filtered = allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(search.value)
      );
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, pageSize, activePage);
    return { totalCount: filtered.length, data: movies };
  };

  handleSearch = ({ currentTarget: input }) => {
    let { search, activeGenre } = this.state;
    search.active = input.value === "" ? false : true;
    search.value = input.value;
    activeGenre = "All Genres";

    this.setState({ search, activeGenre });
  };

  render() {
    let { length: count } = this.state.movies;
    const { pageSize, activePage, sortColumn, search } = this.state;
    if (count < 1) return <p>There are no movies in the database</p>;

    const { totalCount, data: movies } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <Genres
            genres={this.state.genres}
            activeGenre={this.state.activeGenre}
            onGenreChange={this.handleGenreChange}
          />
        </div>
        <div className="col">
          <Link to="/movies/new" className="btn btn-primary mb-3">
            New Movie
          </Link>
          <Search onChange={this.handleSearch} data={search.value} />
          <p>Showing {totalCount} movies</p>
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
