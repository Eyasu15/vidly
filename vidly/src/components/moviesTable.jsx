import React from "react";
import Like from "./common/like";

const MoviesTable = (props) => {
  let { movies, onLike, onDelete } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Genre</th>
          <th scope="col">Stock</th>
          <th scope="col">Rate</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {movies.map((m) => (
          <tr key={m._id}>
            <th scope="row">{m.title}</th>
            <td>{m.genre.name}</td>
            <td>{m.numberInStock}</td>
            <td>{m.dailyRentalRate}</td>
            <td>
              <Like movie={m} onLike={onLike} />
            </td>
            <td>
              <button className="btn btn-danger" onClick={() => onDelete(m)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
