import { useState } from "react";
import data from "./data";
import Header from "./Header";
import Main from "./Main";
import Basket from "./Basket";

export default function App() {
    const {products} = data;
    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {
        const exist = cartItems.find((item) => item.id === product.id);
        if (exist) {
            setCartItems(
              cartItems.map((item) =>
                item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
              )
            );
          } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
          }
        };

    const onRemove = (product) => {
        const exist = cartItems.find((item) => item.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((item) => item.id !== product.id));
        } else {
            setCartItems(
            cartItems.map((item) =>
                item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
            )
            );
        }
        };

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
