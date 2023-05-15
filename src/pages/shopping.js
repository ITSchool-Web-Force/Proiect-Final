import React from 'react';
import NavBar from './components/utilites/navbar';
import ShoppingCart from './components/cart';

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/utilites/footer';

const ShopCart = () => {
  return (
    <div>
  
        <NavBar />
        <ShoppingCart />
        <Footer />
     
    </div>
  );
};

export default ShopCart;
