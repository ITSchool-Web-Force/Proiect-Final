import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import style from "./card.module.css"

const CardComponent = ({ product, handleAddToCart }) => { 
  return ( 
    <Card className={style.card}>
      <img alt={product.title} src={product.image} />
      <CardBody>
        <CardTitle tag="h5">
          {product.title}
        </CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {product.category}
        </CardSubtitle>
        {/* <CardText>
          {product.description}
        </CardText> */}
        <CardText>
          {product.price}$
        </CardText>
        <Button onClick={() => handleAddToCart(product)} className={style.button}>
          Buy Now
        </Button>
      </CardBody>
    </Card>
  );
};

export default CardComponent;
