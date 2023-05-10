import { useEffect, useState } from "react";
import ProductGroup from "./ProductGroup";
import ShoppingCart from "./ShoppingCart";
import data from "./data";


export default function App() {
    const [cartItems, setCartItems] = useState([]);
    const {products} = data;

    const addProducts = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            const newCartItems = (
              cartItems.map((x) =>
                x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
              )
            );
            setCartItems(newCartItems);
            localStorage.setItem("cartItems", JSON.stringify(newCartItems));
          } else {
            const newCartItems = ([...cartItems, { ...product, qty: 1 }]);
            setCartItems(newCartItems);
            localStorage.setItem("cartItems", JSON.stringify(newCartItems));
          }
        };

    const deleteProducts = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            const newCartItems = (
                cartItems.filter((x) => x.id !== product.id));
            setCartItems(newCartItems);
            localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        } else {
            const newCartItems = (
                cartItems.map((x) =>
                x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
            )
            );
            setCartItems(newCartItems);
            localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        }
        };

    useEffect(() => {
        setCartItems(localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []);
    },[]);

    return (
        <div>
            <ProductGroup 
                cartItems={cartItems}
                addProducts={addProducts} 
                deleteProducts={deleteProducts}
                products={products}>
            </ProductGroup>
            <ShoppingCart
                cartItems={cartItems}
                addProducts={addProducts}
                deleteProducts={deleteProducts}>                
            </ShoppingCart>
        </div>
        );
    }
