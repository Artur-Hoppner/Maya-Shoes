// Possible improvments: Limit how many numbers is shown ex 1 ... 12 13 14 ... 129 & Disable clickfunction when for active page
const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='text-2xl mt-16 mb-10 flex justify-end gap-5'>
        {pageNumbers.map(number => (
          // set active page, extra padding to increase clickarea for function to change page
          <li className={`${currentPage == number ? "text-gray-400" : ""} px-1 cursor-pointer duration-300 hover:scale-110`} key={number}>
            <a onClick={() => paginate(number)}  className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;