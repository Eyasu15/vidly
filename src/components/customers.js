import React, { Component } from "react";
import CustomerForm from "./customerComponents/customerForm";
import { getAllCustomers } from "./services/customerService";
import { Link } from "react-router-dom";
import Search from "./common/search";
import CustomerTable from "./customerComponents/customerTable";

class Customers extends Component {
  state = {
    customers: "",
  };

  async componentDidMount() {
    const { data: customers } = await getAllCustomers();
    this.setState({ customers });
  }

  render() {
    const { customers } = this.state;
    return (
      <div className="col">
        {customers && (
          <Link to="/customers/new" className="btn btn-primary mb-3">
            New Customer
          </Link>
        )}
        <Search onChange={this.handleSearch} data={search.value} />
        <p>Showing {totalCount} movies</p>
        <CustomerTable
          movies={movies}
          sortColumn={sortColumn}
          onLike={this.handleLike}
          onDelete={this.handleDelete}
          onSort={this.handleSort}
          user={user}
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
