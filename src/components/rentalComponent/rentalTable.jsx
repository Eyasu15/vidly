import React, { Component } from "react";
import Table from "../common/table";

class RentalTable extends Component {
  columns = [
    { label: "Movie", path: "movieTitle", clicked: false },
    { label: "Customer", path: "customerName", clicked: false },
    { label: "Date Out", path: "dateOut", clicked: false },
    { label: "Return Date", path: "dateReturned", clicked: false },
    { label: "Status", path: "status", clicked: false },
    { label: "Total Fees", path: "rentalFee", clicked: false },
  ];

  render() {
    let { rentals, sortColumn, onSort } = this.props;
    const link = "/rentals";
    const itemPath = "movieTitle";
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
