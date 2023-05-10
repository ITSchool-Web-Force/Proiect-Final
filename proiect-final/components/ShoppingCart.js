import style from "../styles/Basket.module.css"
import CheckoutForm from "./CheckoutForm"
import { useState } from "react";
import App from "./App";
import Product from "./Product";


export default function ShoppingCart (props) {
  const {addProducts, deleteProducts, cartItems, item, price, name, id} = props;
  const itemsPrice = price;
  const [active, setActive] = useState(false);
  
  return (
    <div className={style.basket}>
      <h2>Cart Items</h2>
      <div className={style.cart}>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={id} className={style.row}>
            <div className={style.row}>{name}</div>
            <div className={style.row}>
              <button className={style.button_add_remove} onClick={() => deleteProducts(item)}>
                -
              </button>{' '}
              <button className={style.button_add_remove} onClick={() => addProducts(item)}>
                +
              </button>
            </div>

            <div className={style.row}>
              {cartItems.qty} x ${price}
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
                <strong>${itemsPrice}</strong>
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