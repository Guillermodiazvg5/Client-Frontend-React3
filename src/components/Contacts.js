import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Contacts() {
  return (
    <Container>
      <h1 className='m-5'>Contáctanos</h1>
      <Row className='m-5'>
        <Col>
          <h2>Bogotá</h2>
          <p>Dirección: Carrera 7 # 71-21</p>
          <p>Teléfono: (1) 123-4567</p>
          <p>Correo electrónico: healthfoodbogota@hotmail.com</p>
        </Col>
        <Col>
          <h2>Medellín</h2>
          <p>Dirección: Calle 10 # 40-20</p>
          <p>Teléfono: (4) 123-4567</p>
          <p>Correo electrónico: healthfoodmedellin@hotmail.com</p>
        </Col>
      </Row>
      <Row className='m-5'>
        <Col>
          <h2>Cali</h2>
          <p>Dirección: Avenida 3 Norte # 50-50</p>
          <p>Teléfono: (5) 123-4567</p>
          <p>Correo electrónico: healthfoodcali@ejemplo.com</p>
        </Col>
        <Col>
          <h2>Barranquilla</h2>
          <p>Dirección: Calle 72 # 45-23</p>
          <p>Teléfono: (5) 123-4567</p>
          <p>Correo electrónico: healthfoodbarranquilla@hotmail.com</p>
        </Col>
      </Row>
    </Container>
  );
}