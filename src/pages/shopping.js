import React, { useState } from 'react';
import NavBar from './components/utilites/navbar';
import ShoppingCart from './components/cart';
import CartContext from './components/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function ShopCart() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <CartContext.Provider value={{ cart, setCart }}>
        <NavBar />
        <ShoppingCart />
      </CartContext.Provider>
    </div>
  );
}

export default ShopCart;
