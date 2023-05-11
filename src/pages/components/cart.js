import React, { useContext } from 'react';
import CartContext from './CartContext';

function ShoppingCart() {
  const { cart, setCart } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    const newCart = cart.filter((product) => product.id !== productId);
    setCart(newCart);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div>
      <h2>Coș de cumpărături</h2>
      {cart.length === 0 ? (
        <p>Coșul dvs. de cumpărături este gol.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <img alt={product.title} src={product.image} />
              <p>{product.price}</p>
              <button onClick={() => handleRemoveFromCart(product.id)}>Eliminați</button>
            </div>
          ))}
          <button onClick={handleClearCart}>Goliți coșul</button>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
