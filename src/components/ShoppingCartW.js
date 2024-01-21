import React from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";


import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import "./ShoppingCartW.css";



export default function ShoppingCartW({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) {
  const onDeleteProduct = (producto) => {
    const results = allProducts.filter((item) => item.id !== producto.id);

    setTotal(total - producto.precio_pesos * producto.cantidad_carrito);

    setCountProducts(countProducts - producto.cantidad_carrito);

    setAllProducts(results);
  };

  const onclearAllCart = () => {
    setAllProducts([]);
    setTotal(0);
  };

  const PagarProductos = async (productos) => {
    
    if (allProducts.length > 0) {
      const response = await axios.post(
        "https://render-nodejs-react-healthfoods.onrender.com/create-order",
        productos
      );

      window.location.href = response.data;
    } else {
      alert("Carrito Vacío, agrega productos para pagar");
    }
  };

  return (
    <div className="section-pago  container  mt-5 mb-5">
        <h2>Carrito</h2>
      {allProducts.map((producto) => (
        <div key={producto.id} className=" container justify-content-center  ">
          <Card className="m-3" style={{ width: '80%' }}>
            <Row >
              <Col md={4 } >
                <Card.Img variant="top" src={producto.ruta_img} />
              </Col>
              <Col md={6} >
                <Card.Body>
                  <Card.Title>{producto.producto}</Card.Title>
                  <Card.Text>{producto.descripcion}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                  <Button variant="secondary">Go somewhere else</Button>
                </Card.Body>
              </Col>
              <Col md={2} >
                <Card.Body>
                  <Card.Text>{producto.precio_pesos}</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      ))}
      
      <hr className="custom-hr" />
      <h2>Subtotal</h2>
    </div>
  );
}
  
  
