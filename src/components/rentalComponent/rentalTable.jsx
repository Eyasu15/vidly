import React, { Component } from "react";
import Table from "../common/table";

class RentalTable extends Component {
  columns = [
    { label: "Movie", path: "movie", clicked: false },
    { label: "Customer", path: "customer", clicked: false },
    { label: "Date Out", path: "dateOut", clicked: false },
    { label: "Return Date", path: "dateReturned", clicked: false },
    { label: "Total Fees", path: "rentalFee", clicked: false },
    {
      key: "Return",
      content: (rental) => (
        <button
          className="btn btn-danger"
          onClick={() => this.props.onReturn(rental)}
        >
          Return
        </button>
      ),
    },
  ];

  render() {
    let { rentals, sortColumn, onSort } = this.props;
    const link = "/rentals";
    const itemPath = "movie";
    return (
      <div>
        <Table
          columns={this.columns}
          sortColumn={sortColumn}
          items={rentals}
          onSort={onSort}
          link={link}
          itemPath={itemPath}
        />
      </div>
    );
  }
}
export default RentalTable;
