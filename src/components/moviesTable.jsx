import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";

class MoviesTable extends Component {
  columns = [
    { label: "Title", path: "title", clicked: false },
    { label: "Genre", path: "genre.name", clicked: false },
    { label: "Stock", path: "numberInStock", clicked: false },
    { label: "Rate", path: "dailyRentalRate", clicked: false },
    {
      key: "like",
      content: (movie) => <Like movie={movie} onLike={this.props.onLike} />,
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          className="btn btn-danger"
          onClick={() => this.props.onDelete(movie)}
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    let { movies, sortColumn, onSort } = this.props;

    return (
      <Table
        columns={this.columns}
        sortColumn={sortColumn}
        items={movies}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
