import React, { Component } from "react";
import Table from "./common/table";
import Like from "./common/like";
import { getCurrentUser } from "./services/userService";

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
  ];

  constructor() {
    super();
    const user = getCurrentUser();
    if (user) this.columns.push(this.deleteColumn);
  }

  deleteColumn = {
    key: "delete",
    content: (movie) => (
      <button
        className="btn btn-danger"
        onClick={() => this.props.onDelete(movie)}
      >
        Delete
      </button>
    ),
  };

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
