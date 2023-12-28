import React from 'react';


import './SloganImage'
import Logo_HealtFood from '../assets/Logo_HealtFood';

import './Header.css'
import SloganImage from './SloganImage';


export default function Header() {
  

  
  

  

  return (

    

    <div className='header '>

      <div className='container '>

    

      <div class="row mb-5 mt-1 align-items-center rounded-pill first-row">
        <div class="col-4 ">
          <nav class="navbar navbar-light ">
            <div class="container-fluid">
              <a class="navbar-brand" href="a">
              <Logo_HealtFood></Logo_HealtFood>
              </a>
            </div>
          </nav>
        </div>

        <div class="col-4   ">
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ">
            <li>
              <a
                href="a"
                class="nav-link px-2 text-dark btn-outline-warning rounded"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="a"
                class="nav-link px-2 text-dark btn-outline-warning rounded"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="a"
                class="nav-link px-2 text-dark btn-outline-warning rounded"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="a"
                class="nav-link px-2 text-dark btn-outline-warning rounded"
              >
                Contacts
              </a>
            </li>
            <li>
              <a
                href="a"
                class="nav-link px-2 text-dark btn-outline-warning rounded"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div class=" col-4 text-end ">
          <button type="button" class="btn btn-outline-secondary me-2">
            Loginn
          </button>
          <button type="button" class="btn btn-warning">
            Sign-up
          </button>
        </div>
      </div>

     <SloganImage></SloganImage>
    
    </div>
    </div>
  );
}
