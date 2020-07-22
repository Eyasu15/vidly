import React, { Component } from "react";
import Like from "./common/like";
import { render } from "@testing-library/react";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

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

  handleSort = (path) => {
    let sortColumn = { ...this.props.sortColumn };

    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  render() {
    let { movies, onLike, onDelete, sortColumn } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={this.handleSort}
        />
        <TableBody columns={this.columns} items={movies} />
      </table>
    );
  }
}

export default MoviesTable;
