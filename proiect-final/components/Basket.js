import Product from "./Product";
import Header from "./Header";
import style from "../styles/Basket.module.css"
import CheckoutForm from "../components/CheckoutForm"
import { useState } from "react";


export default function Basket(props) {
  const { cartItems, onAdd, onRemove, item } = props;
  const { price } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const [active, setActive] = useState(false);


  return (
    <div className={style.basket}>
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className={style.row}>
            <div className={style.row}>{item.name}</div>
            <div className={style.row}>
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className={style.row}>
              {item.qty} x ${itemsPrice.toFixed(2)}
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
              <button onClick={() => setActive(!active)} >
                <CheckoutForm itemsPrice={itemsPrice}/>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}