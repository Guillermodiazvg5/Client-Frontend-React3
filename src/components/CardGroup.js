import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import './CardGroup.css'



export default function CardGroup() {
  const [productos, setProductos] = useState([]);

  const cargarProductos = async () => {
    const response = await fetch("http://localhost:7000/products");          // captura de datos desde el 7000 del servidor - backend
    const data = await response.json();
    console.log(data);
    setProductos(data);
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  return (
    <>
      <h1>GroupCards</h1>

      <Container
        fluid
        className="container mt-5 d-flex justify-content-center align-items-center h-100 background-nuts rounded "
      >
        <Row>
          {productos.map((producto, index) => (
            <Col className="col-md-4" key={index}>
              <ProductCard
                imagen={producto.ruta_img}
                producto={producto.producto}
                descripcion={producto.descripcion}
                precio={producto.precio_pesos}
              ></ProductCard>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}