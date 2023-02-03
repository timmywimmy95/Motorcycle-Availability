import React from 'react';
import {
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from 'mdb-react-ui-kit';

export default function Pagination({
  carparksPerPage,
  totalCarparks,
  paginate,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCarparks / carparksPerPage); i++) {
    pageNumbers.push(i);
  }

  let paginationPages = pageNumbers.map((pageNumber, index) => {
    return (
      <MDBPaginationItem key={index}>
        <MDBPaginationLink onClick={() => paginate(pageNumber)} href='#'>
          {pageNumber}
        </MDBPaginationLink>
      </MDBPaginationItem>
    );
  });
  return (
    <div className='text-center'>
      <nav aria-label='...'>
        <MDBPagination className='mb-0 text-centre'>
          {paginationPages}
        </MDBPagination>
      </nav>
    </div>
  );
}
