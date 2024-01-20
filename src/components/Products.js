import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import './Products.css'

export default function Products() {
  return (
    <Container className='  mt-5'>
      <h1 >Nuestros productos</h1>
      <Row className='mt-5 mb-3'>
        <Col>
          <Card className='color-card-products'>
            <Card.Body>
              <Card.Title>Almendras</Card.Title>
              <Card.Text>
                Las almendras son originarias del Medio Oriente y se han cultivado durante miles de años. Son una excelente fuente de proteínas, fibra, grasas saludables, vitamina E y magnesio. Se recomienda comer una porción de 1 onza (28 gramos) al día.
              </Card.Text>
              <Button variant="secondary">Comprar ahora</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='color-card-products'>
            <Card.Body>
              <Card.Title>Nueces</Card.Title>
              <Card.Text>
                Las nueces son originarias de Asia y se han cultivado durante miles de años. Son una excelente fuente de proteínas, fibra, grasas saludables, vitamina E y magnesio. Se recomienda comer una porción de 1 onza (28 gramos) al día.
              </Card.Text>
              <Button variant="secondary">Comprar ahora</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='m-3'>
        <Col >
          <Card className='color-card-products'>
            <Card.Body>
              <Card.Title>Cacahuetes</Card.Title>
              <Card.Text>
                Los cacahuetes son originarios de América del Sur y se han cultivado durante miles de años. Son una excelente fuente de proteínas, fibra, grasas saludables, vitamina E y magnesio. Se recomienda comer una porción de 1 onza (28 gramos) al día.
              </Card.Text>
              <Button variant="secondary">Comprar ahora</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='color-card-products'>
            <Card.Body>
              <Card.Title>Avellanas</Card.Title>
              <Card.Text>
                Las avellanas son originarias de Europa y Asia y se han cultivado durante miles de años. Son una excelente fuente de proteínas, fibra, grasas saludables, vitamina E y magnesio. Se recomienda comer una porción de 1 onza (28 gramos) al día.
              </Card.Text>
              <Button variant="secondary">Comprar ahora</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='m-3'>
        <Col>
          <Card className='color-card-products'>
            <Card.Body>
              <Card.Title>Pistachos</Card.Title>
              <Card.Text>
                Los pistachos son originarios de Asia y se han cultivado durante miles de años. Son una excelente fuente de proteínas, fibra, grasas saludables, vitamina E y magnesio. Se recomienda comer una porción de 1 onza (28 gramos) al día.
              </Card.Text>
              <Button variant="secondary">Comprar ahora</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='color-card-products'>
            <Card.Body>
              <Card.Title>Anacardos</Card.Title>
              <Card.Text>
                Los anacardos son originarios de Brasil y se han cultivado durante miles de años. Son una excelente fuente de proteínas, fibra, grasas saludables, vitamina E y magnesio. Se recomienda comer una porción de 1 onza (28 gramos) al día.
              </Card.Text>
              <Button variant="secondary">Comprar ahora</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row >
      <Row className='m-3'>
        <Col>
          <Card className='color-card-products'>
            <Card.Body>
              <Card.Title>Macadamias</Card.Title>
              <Card.Text>
                Las macadamias son originarias de Australia y se han cultivado durante miles de años. Son una excelente fuente de proteínas, fibra, grasas saludables, vitamina E y magnesio. Se recomienda comer una porción de 1 onza (28 gramos) al día.
              </Card.Text>
              <Button variant="secondary">Comprar ahora</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='color-card-products'>
            <Card.Body>
              <Card.Title>Piñones</Card.Title>
              <Card.Text>
                Los piñones son una excelente fuente de proteínas, fibra, grasas saludables, vitamina E y magnesio. Se recomienda comer una porción de 1 onza (28 gramos) al día.
              </Card.Text>
              <Button variant="secondary">Comprar ahora</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}