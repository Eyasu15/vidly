import React, { Component } from "react";
import _ from "lodash";
class Pagination extends Component {
  state = {};
  render() {
    let { pageSize, itemsCount, onPageChange, activePage } = this.props;
    let pages = Math.ceil(itemsCount / pageSize);
    pages = _.range(1, pages + 1);
    if (pages <= 1) return null;
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={page === activePage ? "page-item active" : "page-item"}
            >
              <a className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
