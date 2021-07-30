const Pagination = ({ pages, currentPage, handlePageChange }) => {
  return (
    <nav className="d-flex justify-content-center">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <p
              className="page-link"
              style={{ cursor: "pointer" }}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
