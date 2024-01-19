import React from 'react'
import './Footer.css'

import Button from "react-bootstrap/Button";

import Logo_HealtFood from '../assets/Logo_HealtFood2';

import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";




export default function Footer() {
  return (
    <div className="general-container-footer ">
        
        <footer className="container">
          <section className="container-section-footer d-flex justify-content-center align-items-center mb-5">
           <div className='background-image-footer'></div>
            <div className='container-section-footer__img-1'>
                <Logo_HealtFood ></Logo_HealtFood> 
            </div>
            
            
           

            <div className="contet-section-footer container d-flex flex-column">
              <h2 className="title-contet-section-footer text-center">
                Subscribe and get exclusive deals & offer
              </h2>
              <form action="#">
                <div className="input-container  align-items-center">
                  <input className="input-field w-100 rounded-2 border-0 px-3" type="email" placeholder="Enter your mail" />
                 <Button variant='warning ' className='btn__section-footer mt-2'>Subscribe</Button>
                </div>
              </form>
            </div>
          </section>
          
          <div className="general-container-content-footer d-flex flex-column flex-lg-row gap-4">
            <div className="content-footer_2 d-flex flex-column justify-content-start align-items-center ">
             
              <p className='justify-content-start' > Buy your fruits in minutes, take control of your health</p>
             
              
            
               <h3>Social Media</h3>
              <span>
                    <RiFacebookCircleLine className='m-2' size={45} color="blue" onClick={() => window.open('https://www.facebook.com/')}/>
                    <FaInstagram className='m-2' size={40} color="red" onClick={() => window.open('https://www.instagram.com/')} />
                    <BsTwitterX  className='m-2' size={40} color="black" onClick={() => window.open('https://twitter.com/')} />
             </span>
            </div>
            <ul className="content-footer_2 d-flex flex-column align-items-center align-items-lg-start">
              <li className="title-list">Company</li>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Logistic</a></li>
              <li><a href="#">Privacy & Policy</a></li>
            </ul>
            <ul className="content-footer_2 d-flex flex-column align-items-center align-items-lg-start">
              <li className="title-list">Contact</li>
              <li><a href="#">Help/FAQ</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Affilates</a></li>
            </ul>
            <ul className="content-footer_2 d-flex flex-column align-items-center align-items-lg-start">
              <li className="title-list">More</li>
              <li><a href="#">Press Cente</a></li>
              <li><a href="#">Our blog</a></li>
              <li><a href="#">Low fare tips</a></li>
            </ul>
          </div>
          <hr className="hr-section-7" />
          <div className="copy-container d-flex flex-row justify-content-between mb-5">
            <div className="copy-container__content w-50">
              Copyright, Health Food 2024. All rights reserved.
            </div>
            <div className="copy-container__content">Terms & Conditions</div>
          </div>
        </footer>
      </div>
  )
}
