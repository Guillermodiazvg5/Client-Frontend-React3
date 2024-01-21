import React from 'react';

import { useState , useEffect } from 'react';



import { Link } from 'react-router-dom';


import './SloganImage'
import Logo_HealtFood from '../assets/Logo_HealtFood';

import './Header.css'
import SloganImage from './SloganImage';
import { FiShoppingCart } from "react-icons/fi";
import Icons_Carrito from '../assets/Icons_Carrito';


export default function Header({totaldeproductos, setTotaldeproductos , total , allProducts , countProducts , language , setLanguage }) {
  

  
  useEffect(() => {
    const result = allProducts.reduce((total, producto) => total + producto.cantidad_carrito, 0);
    setTotaldeproductos(result);
  }, [allProducts]);


   //const totaldeproductos = allProducts.reduce((total, producto) => total + producto.cantidad_carrito, 0);
   /// module.exports.totaldeproductos = totaldeproductos;
  //module.exports = totaldeproductos;

  return (

    

    <div className='header  '>

      <div className='container '>

    

      <div class="row mb-5 mt-1 align-items-center  first-row nav-home ">
        <div class="col-4 ">
          <nav class="navbar navbar-light ">
            <div class="container-fluid">
              <a class="navbar-brand" href="">
              <Logo_HealtFood></Logo_HealtFood>
              </a>
            </div>
          </nav>
        </div>

        <div class="col-4  background-home  ">
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ">
            <li>
             

            <Link to="/" className="nav-link px-2 text-dark btn-outline-warning rounded">
                  Home
            </Link>


            </li>


            <li>

            <Link to="/products" className="nav-link px-2 text-dark btn-outline-warning rounded">
                  Products
            </Link>

            </li>


             <li>
              
            <Link to="/blog" className="nav-link px-2 text-dark btn-outline-warning rounded">
                  Blog
            </Link>

            </li>
           

            <li>

            <Link to="/contacts" className="nav-link px-2 text-dark btn-outline-warning rounded">
                  Contacts
            </Link>
             
            </li>


           




          </ul>
        </div>

       

        <div class=" col-4 text-end ">

           

          
          <button type="button" class="btn btn-outline-secondary m-2">
            Loginn
          </button>
          <button type="button" class="btn btn-warning m-3">
            Sign-up
          </button>
          
          <button type="button" class="btn btn-outline-warning">
          <Link to="/ShoppingCartW" className="nav-link px-2 text-dark btn-outline-warning rounded">
          <Icons_Carrito  total = {totaldeproductos} />
          </Link>
          </button>


        </div>
      </div>

     <SloganImage></SloganImage>
    
    </div>
    </div>
  );
}

