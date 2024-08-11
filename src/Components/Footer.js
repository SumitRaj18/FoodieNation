import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faInstagram,faLinkedin,faGithub,faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div>

<footer className="border mt-5 text-center text-lg-start bg-black text-white">
  <div className="tan d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className=" w-100 text-center">
      <span className='ml-5'>Get connected with us on social networks:</span>
   
  
   
      <a href="" className=" ml-2 me-4 text-reset">
      <FontAwesomeIcon icon={faFacebookF} style={{color: "#04287c",fontSize:"25px",marginLeft:"10px"}} />      </a>
      <a href="" className="me-4 text-reset">
      <FontAwesomeIcon icon={faXTwitter} style={{color: "white",fontSize:"25px"}} />      </a>
    
      <a href="" className="me-4 text-reset">
      <FontAwesomeIcon icon={faInstagram} style={{color: "#e60a95", fontSize:"25px"}} />      </a>
      <a href="" className="me-4 text-reset">
      <FontAwesomeIcon icon={faLinkedin} style={{color: "#3054a6",fontSize:"25px"}} />      </a>
      <a href="" className="me-4 text-reset">
      <FontAwesomeIcon icon={faGithub} style={{color: "white",fontSize:"25px"}} />      </a>
    </div>
  </div>
  
  <div className="">
    <div className="container4 text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>About Us
          </h6>
          <p>
          Welcome to Foodie Nation – where your culinary cravings meet convenience and quality!

 Our mission is to bring delicious meals from your favorite local restaurants right to your doorstep, quickly and reliably.
       </p>
        </div>
       
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Biryani</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Starter</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Pizza</a>
          </p>
         
        </div>
      
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <Link to="/" className="text-reset">Home</Link>
          </p>
          <p>
            <Link to="/myorders" className="text-reset">My Orders</Link>
          </p>
          <p>
            <Link to="/" className="text-reset">My Cart</Link>
          </p>
          <p>
            <Link to="/login" className="text-reset">Help</Link>
          </p>
        </div>
       
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> New Delhi,India</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            foodienation@gmail.com
          </p>
          <p><i className="fas fa-phone me-3"></i> +91 8076924468</p>
          <p><i className="fas fa-print me-3"></i> +91 8527119979</p>
        </div>
      </div>
    </div>
  </div>
  <div className='text-center fw-bold fs-12'>Thank you for visiting</div>
  <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05);"}}>
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">FoodieNation.com</a>
  </div>
</footer>

    </div>
  )
}
