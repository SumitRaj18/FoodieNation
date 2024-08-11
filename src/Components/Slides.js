import React from 'react'
import burger from '../images/burger.jpg'
import chicken from '../images/chicken.jpg'
import pizza from '../images/pizza.jpg'
export default function Slides(props) {
  return (
    <div className='slide' style={{marginTop:"20px"}}>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"cover",maxHeight:"500px"}}>
  <div className="carousel-inner" style={{height:"300px",objectFit:"fill"}} >
    <div className="carousel-item active" data-bs-interval="3000">
      <img src={pizza}  style={{filter:'brightness(100%)',height:"300px"}}className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src={chicken} style={{filter:'brightness(100%)',height:"300px"}} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={burger}  style={{filter:'brightness(100%)',height:"300px"}} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
