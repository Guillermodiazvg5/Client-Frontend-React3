import React from "react";
import { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./ProductCard.css";

export default function ProductCard({
  allProducts,
  setAllProducts,
  imagen,
  producto,
  descripcion,
  precio,
  productDetails,
}) {
  const onAddProduct = (productDetails) => {
    console.log("Añadiendo al carrito ");

    setAllProducts([...allProducts, productDetails]);
  };

  console.log(allProducts);

  return (
    <Card className="card text-center m-3 " style={{ width: "16rem" }}>
      <div className="overflow">
        <Card.Img
          variant="top"
          src={imagen}
          className="card-img-top img-card"
        />
        <Card.Body>
          <Card.Title>{producto}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <Card.Text>$ {precio}</Card.Text>

          <Button
            onClick={() => onAddProduct(producto)}
            variant="outline-secondary"
          >
            Agregar al carrito
          </Button>
        </Card.Body>
      </div>
    </Card>
  );
}
