import React, { Component } from "react";
import rentalsService from "../services/rentalsService";
import { toast } from "react-toastify";
import Status from "./status";
import RentalTable from "./rentalTable";
import _ from "lodash";
import { paginate } from "../utils/paginate";
import { Link } from "react-router-dom";
import Search from "../common/search";
import Pagination from "../pagination";

class Rentals extends Component {
  state = {
    rentals: [],
    search: { active: false, value: "" },
    sortColumn: { path: "movie", order: "asc" },
    status: [
      { name: "Returned" },
      { name: "Late" },
      { name: "Rented" },
      { name: "All" },
    ],
    activeStatus: "All",
    pageSize: 3,
    activePage: 1,
  };

  async componentDidMount() {
    const { data: rentals } = await rentalsService.getAllRentals();
    this.setState({ rentals });
  }
  handleStatusChange = (status) => {
    this.setState({ activeStatus: status });
  };

  handleReturn = async (rental) => {
    const allRentals = [...this.state.rentals];
    const rentals = allRentals.map((r) => {
      if (r.id === rental.id) r.isReturned = true;
    });

    try {
      await rentalsService.returnRental(rental);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error(ex.response.message);
        this.setState({ rentals: allRentals });
      }
    }
    this.setState({ rentals });
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
      rentals: allRentals,
      sortColumn,
      search,
      activeStatus,
    } = this.state;

    let filtered;
    if (!search.active)
      filtered =
        activeStatus !== "All"
          ? allRentals.filter((r) => r.status === activeStatus)
          : allRentals;
    else
      filtered = allRentals.filter((r) =>
        r.movie.name.toLowerCase().includes(search.value)
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const rentals = paginate(sorted, pageSize, activePage);
    return { totalCount: filtered.length, rentals };
  };

  render() {
    const {
      search,
      sortColumn,
      pageSize,
      activePage,
      status,
      activeStatus,
    } = this.state;

    const { totalCount, rentals } = this.getPagedData();
    return (
      <div className="row">
        <div className="col-3">
          <Status
            status={status}
            activeStatus={activeStatus}
            onStatusChange={this.handleStatusChange}
          />
        </div>
        <div className="col">
          {rentals && (
            <Link to="/rentals/new" className="btn btn-primary mb-3">
              New Rental
            </Link>
          )}
          <Search onChange={this.handleSearch} data={search.value} />
          <p>Showing {totalCount} rentals</p>
          <RentalTable
            rentals={rentals}
            sortColumn={sortColumn}
            onReturn={this.handleReturn}
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

export default Rentals;
