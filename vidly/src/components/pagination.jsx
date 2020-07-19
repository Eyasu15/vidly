import React, { Component } from "react";
import _ from "lodash";
class Pagination extends Component {
  state = {};
  render() {
    let { pageSize, itemsCount, onPageChange } = this.props;
    let pages = Math.ceil(itemsCount / pageSize);
    pages = _.range(1, pages + 1);
    console.log(pages);
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {}
          <li className="page-item">
            <a className="page-link" href="#" onClick={() => onPageChange(1)}>
              1
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
