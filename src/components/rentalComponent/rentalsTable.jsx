import React, { Component } from "react";

class RentalsTable extends Component {
  columns = [
    { label: "Movie", path: "movie", clicked: false },
    { label: "Customer", path: "customer", clicked: false },
    { label: "Date Out", path: "dateOut", clicked: false },
    { label: "Return Date", path: "dateReturn", clicked: false },
    { label: "Fee", path: "rentalFee", clicked: false },
    {
      key: "delete",
      content: (customer) => (
        <button
          className="btn btn-danger"
          onClick={() => this.props.onDelete(customer)}
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    return <div></div>;
  }
}
export default RentalsTable;
