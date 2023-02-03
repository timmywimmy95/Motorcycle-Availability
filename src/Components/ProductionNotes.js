import React from 'react';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import Footer from './Footer';

export default function ProductionNotes() {
  return (
    <>
      <div id='production-notes-wrapper' className='w-75'>
        <MDBAccordion alwaysOpen initialActive={1} flush>
          <MDBAccordionItem collapseId={1} headerTitle='Project Inspiration'>
            <strong>
              This project was created to make parking a breeze for Singaporean
              motorcyclists.
            </strong>
            <p>
              I'm a motorcyclist myself and I often find myself unable to find
              parking; especially in the CBD. Some malls do not provide parking
              for motorcycles as well. Hence, the inspiration came about when I
              was on Google trying to find a parking lot.
            </p>
            <br />
            <p>
              Currently, this project can only pull HDB carparks. Further
              iterations will include URA & Shopping Mall Carparks.
            </p>
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={2} headerTitle='Updates to be Made'>
            <ul>
              <li>Search bar filtering at the homepage</li>
              <li>Favourites Table with Local Storage</li>
              <li>Resizing Homepage Carousel Images</li>
              <li>Display Map in Individual Carpark Page (Mapbox API) </li>
            </ul>
          </MDBAccordionItem>
        </MDBAccordion>
      </div>
      <Footer />
    </>
  );
}
