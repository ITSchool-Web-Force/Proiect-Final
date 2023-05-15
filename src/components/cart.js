import React, { useState } from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const cartItems = cart.map((product) => (
    <div className="flex items-center justify-between mb-2" key={product.id}>
      <div className="font-medium">
        {product.name} x {product.quantity} - {product.quantity * product.price} RON
      </div>
      <div className="flex items-center">
        <button
          className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition-colors duration-300"
          onClick={() => handleRemoveFromCart(product.id)}
        >
          Remove
        </button>
      </div>
    </div>
  ));

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ position: 'absolute', top: '25px', right: '25px' }}>
      <div className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300" onClick={() => setIsOpen(!isOpen)}>
        Cos de cumparaturi ({cart.length})
      </div>
      {isOpen && (
        <div className="bg-white p-6 rounded-md shadow-lg">
          {cartItems}
          <div className="font-medium mt-2">Total: {totalPrice} RON</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
