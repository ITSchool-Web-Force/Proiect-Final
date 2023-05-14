import { createContext, useState } from "react";
import data from "@/components/data";
import ProductGroup from "@/components/ProductGroup";

export const ShoppingCartContext = createContext(null);

const getDefaultCartStatus = () => {
    let cart = {};
    for (let i = 1; i < data.products.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

export const ShoppingCartContextProvider = (props) => {
    const[cartItems, setCartItems] = useState(getDefaultCartStatus());
    
    const getTotalCartAmount = () => {
      let totalAmount = 0;
      for (const item in cartItems) {
        if (cartItems[item] > 0) {
          let itemInfo = data.products.find((product) => product.id == Number(item));
          totalAmount += cartItems[item] * itemInfo.price;
          console.log({itemInfo})
        }
      }
      return totalAmount;
    };

    const addProducts = (itemID) => {
        setCartItems((prev) => ({...prev, [itemID]: prev[itemID] + 1}));
    }

    const removeProducts = (itemID) => {
        setCartItems((prev) => ({...prev, [itemID]: prev[itemID] - 1}));
    }

    const checkout = () => {
    setCartItems(getDefaultCartStatus());
    };
     
    const contextValue = {cartItems, addProducts, removeProducts, getTotalCartAmount, checkout};

    return <ShoppingCartContext.Provider value={contextValue}>
        {props.children}
    </ShoppingCartContext.Provider>
}