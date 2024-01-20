import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import './Blog.css'

export default function Blog() {
  return (
    <Container className='   mt-5'>
      <h1>Blog de alimentos saludables</h1>
      <Row className='mt-5 mb-3'>
        <Col>
          <Card className='color-card-blog'>
            <Card.Body>
              <Card.Title>Recetas saludables</Card.Title>
              <Card.Text>
                Aquí encontrarás recetas saludables y deliciosas para desayunos, almuerzos, cenas y postres.
              </Card.Text>
              <Button variant="secondary">Leer más</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='color-card-blog'>
            <Card.Body>
              <Card.Title>Consejos de nutrición</Card.Title>
              <Card.Text>
                Ofrecemos consejos prácticos sobre cómo llevar una dieta saludable, cómo leer las etiquetas de los alimentos y cómo planificar comidas saludables.
              </Card.Text>
              <Button variant="secondary">Leer más</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='m-3'>
        <Col>
          <Card className='color-card-blog'>
            <Card.Body>
              <Card.Title>Reseñas de productos</Card.Title>
              <Card.Text>
                Aquí encontrarás reseñas de productos alimenticios saludables que hemos probado, incluyendo almendras, nueces, cacahuetes, avellanas, pistachos, anacardos, macadamias y piñones.
              </Card.Text>
              <Button variant="secondary">Leer más</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='color-card-blog'>
            <Card.Body>
              <Card.Title>Consejos de estilo de vida saludable</Card.Title>
              <Card.Text>
                Ofrecemos consejos sobre cómo llevar un estilo de vida saludable en general, incluyendo la importancia del ejercicio, el sueño y la gestión del estrés.
              </Card.Text>
              <Button variant="secondary">Leer más</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='m-3'>
        <Col>
          <Card className='color-card-blog'>
            <Card.Body>
              <Card.Title>Noticias de la industria alimentaria</Card.Title>
              <Card.Text>
                Mantenemos a nuestros lectores informados sobre las últimas noticias y tendencias en la industria alimentaria, incluyendo nuevos productos, estudios de investigación y otros temas relevantes.
              </Card.Text>
              <Button variant="secondary">Leer más</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
