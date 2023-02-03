import React, { useState } from 'react';
import {
  MDBSpinner,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from 'mdb-react-ui-kit';
import Pagination from './Pagination';
import Footer from './Footer';

export default function Carparks({ carparksData, loading, timestamp }) {
  const onHandleClick = (e) => {
    window.open(`http://maps.google.com/?q=${e} parking`);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const spinner = loading ? (
    <MDBSpinner role='status' className='text-center'>
      <span className='visually-hidden'>Loading...</span>
    </MDBSpinner>
  ) : null;

  let [currentPage, setCurrentPage] = useState(1);
  let [carparkPerPage] = useState(8);

  let motorcycleData = [];
  carparksData.forEach((carpark) => {
    if (carpark.carpark_info.length > 1) {
      if (carpark.carpark_info[1].lot_type === 'Y') {
        motorcycleData.push(carpark);
      }
    }
  });

  console.log(motorcycleData, 'motorcycle');

  const indexOfLastCarPark = currentPage * carparkPerPage;
  const indexOfFirstCarPark = indexOfLastCarPark - carparkPerPage;
  const currentCarParks = motorcycleData
    .slice(indexOfFirstCarPark, indexOfLastCarPark)
    .map((carpark, index) => {
      return carpark.carpark_info.length > 1 ? (
        carpark.carpark_info[1].lot_type === 'Y' ? (
          <tr
            key={index}
            onClick={() => {
              onHandleClick(carpark.carpark_number);
            }}
          >
            <td>M</td>
            <td>{carpark.carpark_info[1].lots_available}</td>
            <td>{carpark.carpark_number}</td>
          </tr>
        ) : undefined
      ) : undefined;
    });

  console.log(currentCarParks, 'current');

  return (
    <>
      <div>
        <div id='table-wrapper' className='mx-auto'>
          <MDBTable
            hover
            className='caption-bottom'
            // className='table table-bordered table-striped text-center'
          >
            <caption>Data Retrieved At: {timestamp}</caption>
            <MDBTableHead>
              <tr>
                <th>Type of Lot</th>
                <th>Lots Avail</th>
                <th>Carpark Code</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>{currentCarParks}</MDBTableBody>
          </MDBTable>
          {spinner}
          <div id='pagination-wrapper'>
            <Pagination
              carparksPerPage={carparkPerPage}
              totalCarparks={motorcycleData.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
