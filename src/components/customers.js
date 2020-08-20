import React, { Component } from "react";
import CustomerForm from "./customerComponents/customerForm";
import { getAllCustomers } from "./services/customerService";
import { Link } from "react-router-dom";
import Search from "./common/search";
import CustomerTable from "./customerComponents/customerTable";
import Pagination from "./pagination";

class Customers extends Component {
  state = {
    customers: [],
    search: { active: false, value: "" },
    sortColumn: { path: "title", order: "asc" },
    pageSize: 5,
    activePage: 1,
  };

  async componentDidMount() {
    const { data: customers } = await getAllCustomers();
    console.log("customers", customers);
    this.setState({ customers });
  }

  render() {
    const { customers, search, sortColumn, pageSize, activePage } = this.state;
    const totalCount = customers.length;
    return (
      // <div>
      //   {customers.map((c) => (
      //     <h1>{c.name}</h1>
      //   ))}
      // </div>
      <div className="col">
        {customers && (
          <Link to="/customers/new" className="btn btn-primary mb-3">
            New Customer
          </Link>
        )}
        <Search onChange={this.handleSearch} data={search.value} />
        <p>Showing {totalCount} customers</p>
        <CustomerTable
          customers={customers}
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
    );
  }
}

export default Customers;
