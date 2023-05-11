import React, { useState, useEffect } from "react";
import CardComponent from "./utilites/Card";
import style from "./AllProducts.module.css";




function AllProducts() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]); 
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

  return (
    <div className={style.allproducts}>
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
          <CardComponent key={product.id} product={product} handleAddToCart={handleAddToCart} />
        ))}
        
      </div>
    </div>
  );
}

export default AllProducts;
