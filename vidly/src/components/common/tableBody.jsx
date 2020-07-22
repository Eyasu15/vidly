import React, { Component } from "react";

class TableBody extends Component {
  render() {
    const { items, columns } = this.props;
    console.log(items);

    return (
      <tbody>
        {items.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <th>
                {item[column.path]}
                {/* {console.log(item[column.path])} */}
              </th>
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
