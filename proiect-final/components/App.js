import { useEffect, useState } from "react";
import data from "./data";
import Header from "./Header";
import Main from "./Main";
import Basket from "./Basket";
import Image from "next/image";

export default function App() {
    const {products} = data;
    const [cartItems, setCartItems] = useState([]);
    

    const onAdd = (product) => {
        const exist = cartItems.find((item) => item.id === product.id);
        if (exist) {
            const newCartItems = (
              cartItems.map((item) =>
                item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
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

    const onRemove = (product) => {
        const exist = cartItems.find((item) => item.id === product.id);
        if (exist.qty === 1) {
            const newCartItems = (
                cartItems.filter((item) => item.id !== product.id));
            setCartItems(newCartItems);
            localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        } else {
            const newCartItems = (
                cartItems.map((item) =>
                item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
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
        <div className="App">
            <Header countCartItems={cartItems.length}></Header>
            <div className="row">
            <Main products={products} onAdd={onAdd}></Main>
            <Basket
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}                
            ></Basket>
            </div>
        </div>
        );
    }
