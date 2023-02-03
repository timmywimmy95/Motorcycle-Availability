import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter
      className='text-center text-white'
      style={{ backgroundColor: '#f1f1f1' }}
    >
      <MDBContainer className='pt-2'>
        <section>
          <MDBBtn
            rippleColor='dark'
            color='link'
            size='md'
            className='text-dark m-1'
            href='https://www.facebook.com/timmywimmy95/'
            role='button'
            target='_blank'
          >
            <MDBIcon fab className='fab fa-facebook-f' />
          </MDBBtn>

          <MDBBtn
            rippleColor='dark'
            color='link'
            size='md'
            className='text-dark m-1'
            href='https://www.instagram.com/_timmywimmy/'
            role='button'
            target='_blank'
          >
            <MDBIcon fab className='fa-instagram' />
          </MDBBtn>

          <MDBBtn
            rippleColor='dark'
            color='link'
            size='md'
            className='text-dark m-1'
            href='https://www.linkedin.com/in/timothy-kwok-a401a1140/'
            role='button'
            target='_blank'
          >
            <MDBIcon fab className='fa-linkedin' />
          </MDBBtn>

          <MDBBtn
            rippleColor='dark'
            color='link'
            size='md'
            className='text-dark m-1'
            href='https://github.com/timmywimmy95'
            role='button'
            target='_blank'
          >
            <MDBIcon fab className='fa-github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className='text-center text-dark p-3'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        © 2023 Copyright:
        <a className='text-dark' href='https://timothykwok.sg/'>
          timothykwok.sg
        </a>
      </div>
    </MDBFooter>
  );
}
