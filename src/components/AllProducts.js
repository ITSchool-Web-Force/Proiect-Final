import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import style from "./AllProducts.module.css";
import Cart from "./cart";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      updatedCart.splice(index, 1);
      setCart(updatedCart);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    let url = "https://fakestoreapi.com/products";

    if (category !== "") {
      url += `/category/${category}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [category]);

  const openCart = () => {
    setShowCart(true);
  };

  return (
    <div className={style.allproducts}>
      <div>
        <Button onClick={openCart} className={style.button}>
          View Cart ({cart.length})
        </Button>
        {showCart && <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />}
      </div>
      <div className={style.buttons}>
        <button className={style.button} onClick={() => setCategory("")}>
          All
        </button>
        <button
          className={style.button}
          onClick={() => setCategory("electronics")}
        >
          Electronics
        </button>
        <button
          className={style.button}
          onClick={() => setCategory("jewelery")}
        >
          Jewelery
        </button>
        <button
          className={style.button}
          onClick={() => setCategory("men's clothing")}
        >
          Men's Clothing
        </button>
        <button
          className={style.button}
          onClick={() => setCategory("women's clothing")}
        >
          Women's Clothing
        </button>
      </div>
      <div className={style.products}>
        {products.map((product) => (
          <Card key={product.id} className={style.card}>
            <img alt={product.title} src={product.image} />
            <CardBody>
              <CardTitle tag="h5">{product.title}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {product.category}
              </CardSubtitle>
              <CardText>{product.price}$</CardText>
              <Button
                onClick={() => handleAddToCart(product)}
                className={style.button}
              >
                Buy Now
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
