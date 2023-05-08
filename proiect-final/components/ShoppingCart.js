import style from "../styles/Basket.module.css"
import CheckoutForm from "./CheckoutForm"
import { useState } from "react";


export default function ShoppingCart ({addProducts, deleteProducts, cartItems}) {
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const [active, setActive] = useState(false);
  
  return (
    <div className={style.basket}>
      <h2>Cart Items</h2>
      <div className={style.cart}>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className={style.row}>
            <div className={style.row}>{item.name}</div>
            <div className={style.row}>
              <button className={style.button_add_remove} onClick={() => deleteProducts(item)}>
                -
              </button>{' '}
              <button className={style.button_add_remove} onClick={() => addProducts(item)}>
                +
              </button>
            </div>

            <div className={style.row}>
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
              <div className={style.row}>
              <div className={style.row}>
                <strong>Final price</strong>
              </div>
              <div className={style.row}>
                <strong>${itemsPrice.toFixed(1)}</strong>
              </div>
            </div>
            <hr />
            <div className={style.row}>
              <button className={style.checkout_button} onClick={() => setActive(!active)} >
                <CheckoutForm itemsPrice={itemsPrice}/>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}