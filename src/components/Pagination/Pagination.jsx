import React from "react";

const Pagination = props => (
  <ul className="pagination">
    <li>
      <a onClick={() => props.setPage(1)}>First</a>
    </li>
    {props.pages.map((page, index) => (
      <li key={index} className={props.page === page ? "active" : ""}>
        <a onClick={() => props.setPage(page)}>{page}</a>
      </li>
    ))}
    <li>
      <a onClick={() => props.setPage(props.endPage)}>Last</a>
    </li>
  </ul>
);

export default Pagination;