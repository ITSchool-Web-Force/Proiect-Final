import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

const footerStyle = {
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
};

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ ...footerStyle, backgroundColor: '#f1f1f1' }}>
      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Coler Alberto
      </div>
    </MDBFooter>
  );
}
