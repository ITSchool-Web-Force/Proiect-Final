import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://i.imgur.com/48kOsgO.jpeg"
          alt=""
          className="home__image"
        />

        <div className="home__row">
          <Product
            id="12462346"
            title="Stiutorii. Trei povestiri din Orbitor"
            price={5.99}
            rating={5}
            image="https://cdn4.libris.ro/img/pozeprod/1251/1250964-1.jpg"
          />
          <Product
            id="49546334"
            title="Inocentii"
            price={6.99}
            rating={5}
            image="https://cdn4.libris.ro/img/pozeprod/1073/1072091-1.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="62376528"
            title="Am scris o carte despre noi"
            price={7.99}
            rating={5}
            image="https://cdn4.libris.ro/img/pozeprod/28980/28979930-1.jpg"
          />
          <Product
            id="23445930"
            title="Theodoros"
            price={8.99}
            rating={5}
            image="https://cdn4.libris.ro/img/pozeprod/28509/28508333-1.jpg"
          />
          <Product
            id="37468569"
            title="Baltagul"
            price={8.99}
            rating={4}
            image="https://cdn4.libris.ro/img/pozeprod/690/689961-1.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="22222234"
            title="Vara in care mama a avut ochii verzi"
            price={7.5}
            rating={5}
            image="https://cdn4.libris.ro/img/pozeprod/28079/28078722-1.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
