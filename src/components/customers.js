import React, { Component } from "react";
import CustomerForm from "./customerComponents/customerForm";
import { getAllCustomers, deleteCustomer } from "./services/customerService";
import { Link } from "react-router-dom";
import Search from "./common/search";
import CustomerTable from "./customerComponents/customerTable";
import Pagination from "./pagination";
import { toast } from "react-toastify";
import { getCurrentUser } from "./services/userService";

class Customers extends Component {
  state = {
    customers: [],
    search: { active: false, value: "" },
    sortColumn: { path: "name", order: "asc" },
    pageSize: 5,
    activePage: 1,
  };

  async componentDidMount() {
    const { data: customers } = await getAllCustomers();
    this.setState({ customers });
  }
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  handleDelete = async (id) => {
    const originalCustomers = [...this.state.customers];
    const customers = originalCustomers.filter((c) => c.id !== id);
    try {
      await deleteCustomer(id);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error(ex.response.message);
        this.setState({ customers: originalCustomers });
      }
    }
    this.setState({ customers });
  };

  render() {
    const { customers, search, sortColumn, pageSize, activePage } = this.state;
    const totalCount = customers.length;
    return (
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
