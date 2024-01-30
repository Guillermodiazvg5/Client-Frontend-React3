import React from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./ShoppingCartW.css";

import ImgCarritoVacio from "../assets/ImgCarritoVacio";

import { LuNutOff } from "react-icons/lu";
import { BsCartX } from "react-icons/bs";

export default function ShoppingCartW({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
  totaldeproductos,
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
        "http://localhost:7000/create-order",
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
      {allProducts.length < 1 ? (
        <>
          <Row>
            <Col md={6} className="  justify-content-end ">
              <ImgCarritoVacio></ImgCarritoVacio>
            </Col>

            <Col
              md={6}
              className="container d-flex align-items-center justify-content-start "
            >
              <Card.Title className="Title-carrito-vacio">
                Tu carrito HealthFood esta Vacío ...
              </Card.Title>
              <BsCartX size={25}></BsCartX>
            </Col>
            <Col>
              <Button variant="secondary">
                <Link
                  to="/"
                  className="nav-link px-2 text-light btn-outline-secondary rounded"
                >
                  Agrega tus Productos
                </Link>
              </Button>
            </Col>
          </Row>
        </>
      ) : (
        <div className="overflow">
          <Row className="container ">
            <Col md={9}>
              {allProducts.map((producto) => (
                <div key={producto.id} className=" container   ">
                  <Card className=" card text-center m-3 w-100">
                    <Row className="">
                      <Col className="container d-flex  justify-content-end">
                        <Card.Img
                          variant="top"
                          className="img-card  card-img-top"
                          src={producto.ruta_img}
                        />
                      </Col>

                      <Col className=" container align-items-start  text-start ">
                        <Card.Body>
                          <Card.Title className="titel-product">
                            {producto.producto}
                          </Card.Title>
                          <Card.Text>{producto.descripcion}</Card.Text>
                          <Card.Text> X {producto.cantidad_gramos}g </Card.Text>
                          <Card.Text>
                            Cantidad {producto.cantidad_carrito}
                          </Card.Text>
                        </Card.Body>
                      </Col>

                      <Col>
                        <Card.Body>
                          <Card.Text>$ {producto.precio_pesos}</Card.Text>
                          <Button
                            onClick={() => onDeleteProduct(producto)}
                            variant="secondary"
                            className="mt-5"
                          >
                            Eliminar
                          </Button>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </div>
              ))}
            </Col>

            <Col
              md={3}
              className="container d-flex align-items-start  justify-content-center"
            >
              <Card style={{ width: "17rem" }} className="mt-3">
                <Card.Body>
                  <Card.Title>Tu orden</Card.Title>
                  <Card.Text>
                    Subtotal ({totaldeproductos} items): $ {total}
                  </Card.Text>
                  <Button onClick={() => PagarProductos()} variant="success">
                    Pagar
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      )}

      <hr className="custom-hr" />
      <h2 className="text-end">Subtotal : $ {total}</h2>
    </div>
  );
}
