import { ShoppingCartContext } from "@/context/ShoppingCartContext";
import { useContext } from "react";
import Product from "./Product"
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm"
import style from "../styles/Cart.module.css"

export default function Cart ({products}) {
  const { cartItems, getTotalCartAmount } = useContext(ShoppingCartContext);
  const totalAmount = getTotalCartAmount();
  return <>
      <div>
        <h1 className={style.text}>Your cart items</h1>
        {products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return 
              <CartItem key={product.nr}>
                id={product.id}
                product={product} 
                image={product.image}
                name={product.name}
                price={product.price}
                </CartItem>
          }          
        })}
      </div>
      {totalAmount > 0 ? (
        <div>
          <div className={style.final_price}>
            <p className={style.total_pay}> Total: {totalAmount}$</p>
            <button className={style.checkout_button}>
              <CheckoutForm totalAmount={totalAmount}/>
            </button>
          </div>
        </div>
        ) : (
        <h1 className={style.text}>Your Shopping Cart is Empty</h1>
      )}
  </>
}