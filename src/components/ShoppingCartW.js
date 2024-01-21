import React from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";

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
  {allProducts.length < 1 ? (
    <>

    <Row>

      <Col md={6} className="  justify-content-end ">
        
         <ImgCarritoVacio ></ImgCarritoVacio>  
      
       </Col>

      <Col md={6} className=" align-items-center justify-content-start " >

<Card.Title>Tu carrito HealthFood esta Vacío ...</Card.Title>
<BsCartX size={25}></BsCartX>
      </Col>
    </Row>

   
    </>





  ) : (
    <Row className="justify-content-between">
      <Col md={9}>
        {allProducts.map((producto) => (
          <div key={producto.id} className=" container   ">
            <Card className="mb-3">
              <Row className="">
                <Col md={4}>
                  <Card.Img
                    variant="top"
                    className="img-card"
                    src={producto.ruta_img}
                  />
                </Col>

                <Col md={6} className=" align-items-start text-start">
                  <Card.Body>
                    <Card.Title className="titel-product">
                      {producto.producto}
                    </Card.Title>
                    <Card.Text>{producto.descripcion}</Card.Text>

                    <Card.Text>
                      Cantidad {producto.cantidad_carrito}
                    </Card.Text>
                  </Card.Body>
                </Col>

                <Col md={2}>
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


      <Col md={3}>
          <Card style={{ width: "18rem" }}>
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




  )}


<hr className="custom-hr" />
      <h2 className="text-end">Subtotal : $ {total}</h2>


  


  
</div>






  );
}
