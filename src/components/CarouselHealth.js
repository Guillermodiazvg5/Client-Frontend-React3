import React from 'react'


import './CarouselHealth.css'

import FrutosSecos from '../assets/FrutosSecos.jpg'

import Carousel2 from '../assets/Carousel2.jpg'

import Carousel3 from '../assets/Carousel3.jpg'

import carouselModel22 from '../assets/carouselModel22.png'





import Carousel from 'react-bootstrap/Carousel';



export default function CarouselHealth() {
  return (
    <div>
      <Carousel data-bs-theme="dark">

      <Carousel.Item>
        <img
          className="d-block w-100  h-70 img-carousel"
          src={carouselModel22}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 img-carousel "
          src={Carousel3}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 h-70 img-carousel"
          src={Carousel2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
