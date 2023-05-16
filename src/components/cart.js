import React from "react";
import style from "./Cart.module.css";

function Cart({ cart, removeFromCart, clearCart }) {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);


  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((product) => (
          <div className="wrapper">
            <li key={product.id} className={style.li}>
              <img src={product.image} alt={product.title} className={style.image} />
              {product.title} - {product.price}$
              <button onClick={() => removeFromCart(product)} className={style.remove}>Remove</button>
            </li>
          </div>
        ))}
      </ul>
      <p>Total Price: {totalPrice}$</p>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default Cart;
