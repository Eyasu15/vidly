import React, { Component } from "react";
import { getAllCustomers, deleteCustomer } from "./services/customerService";
import { Link } from "react-router-dom";
import Search from "./common/search";
import CustomerTable from "./customerComponents/customerTable";
import Pagination from "./pagination";
import { toast } from "react-toastify";
import _ from "lodash";
import { paginate } from "./utils/paginate";
import Movies from "./movies";
import Members from "./customerComponents/members";

class Customers extends Component {
  state = {
    customers: [],
    search: { active: false, value: "" },
    sortColumn: { path: "name", order: "asc" },
    members: [{ name: "Gold Members" }, { name: "All" }],
    activeMember: "All",
    pageSize: 5,
    activePage: 1,
  };

  async componentDidMount() {
    const { data: customers } = await getAllCustomers();
    this.setState({ customers });
  }

  handleMemberChange = (member) => {
    this.setState({ activeMember: member });
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

  handlePageChange = (pageNumber) => {
    this.setState({ activePage: pageNumber });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleSearch = ({ currentTarget: input }) => {
    let { search } = this.state;
    search.active = input.value === "" ? false : true;
    search.value = input.value;

    this.setState({ search });
  };

  getPagedData = () => {
    const {
      pageSize,
      activePage,
      customers: allCustomers,
      sortColumn,
      search,
      activeMember,
    } = this.state;

    let filtered;
    if (!search.active)
      filtered =
        activeMember !== "All"
          ? allCustomers.filter((c) => c.isGold === true)
          : allCustomers;
    else
      filtered = allCustomers.filter((customer) =>
        customer.name.toLowerCase().includes(search.value)
      );
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const customers = paginate(sorted, pageSize, activePage);
    return { totalCount: filtered.length, customers };
  };

  render() {
    const {
      search,
      sortColumn,
      pageSize,
      activePage,
      members,
      activeMember,
    } = this.state;
    const { totalCount, customers } = this.getPagedData();
    return (
      <div className="row">
        <div className="col-3">
          <Members
            members={members}
            activeMember={activeMember}
            onMemberChange={this.handleMemberChange}
          />
        </div>
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
      </div>
    );
  }
}

export default Customers;
