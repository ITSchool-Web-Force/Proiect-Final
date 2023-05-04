import React from 'react';
import style from "../styles/Header.module.css"
import { useContext } from 'react';
import {SiteContext} from '@/contexts/SiteContext';

export default function Header(props) {
  const cartItems = useContext (SiteContext);
  
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