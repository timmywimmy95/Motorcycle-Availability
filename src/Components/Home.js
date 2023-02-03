import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import gmaps from '../Images/google-maps-motorcycle-main.jpg';
import parking from '../Images/stock-open-air-carpark---632010.avif';
import menace from '../Images/parking_menace.webp';
import Footer from './Footer';

export default function App() {
  return (
    <>
      <div id='carousel' className='w-75'>
        <MDBCarousel showIndicators>
          <MDBCarouselItem
            className='w-100 d-block rounded-4 shadow-4'
            itemId={1}
            src={parking}
            alt='...'
          >
            <h5>Can't find motorcycle parking?</h5>
            <p>Now you never have to worry about parking spaces again.</p>
          </MDBCarouselItem>

          <MDBCarouselItem
            className='w-100 d-block rounded-4 shadow-4'
            itemId={2}
            src={gmaps}
            alt='...'
          >
            <h5>Simply Ride Away</h5>
            <p>To your desired carpark with available lots.</p>
          </MDBCarouselItem>

          <MDBCarouselItem
            className='w-100 d-block rounded-4 shadow-4'
            itemId={3}
            src={menace}
            alt='...'
          >
            <h5>Never resort to parking illegally</h5>
            <p>Or risk getting fined & stomped by the public again</p>
          </MDBCarouselItem>
        </MDBCarousel>
      </div>
      <Footer />
    </>
  );
}
