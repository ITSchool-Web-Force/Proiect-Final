import React from 'react';
import style from "../styles/Header.module.css"

export default function Header(props) {
  
  return (
    
      <div className={style.cart_button}>
        <a href="#/cart" className={style.cart}>
          Cart{' '}
          {props.countCartItems ? (
            <button className={style.button}>{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
      </div>
    
  );
}