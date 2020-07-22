import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    return column.content ? column.content(item) : _.get(item, column.path);
  };

  render() {
    const { items, columns } = this.props;
    return (
      <tbody>
        {items.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <th>{this.renderCell(item, column)}</th>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;

// What are the interface of this component?
// items : array of objects //movies
// columns: array of paths

{
  /* <tbody>
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
</tbody> */
}
