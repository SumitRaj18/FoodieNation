import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import logo from '../images/Logo.jpg'
import Modal from '../Modal';
import Cart from './Cart';
import { useCart } from './ContextReducer';

export default function Navbar() {
  let data=useCart();
  const [cartView, setCartView] = useState(false)
  let navigate= useNavigate();
  const logout=()=>{
    localStorage.removeItem("authtoken");
    navigate("/login")
  }
 
  return (
    <div className='main-nav' style={{height:"90px"}}>
      <nav className="navbar navbar-dark  navbar-expand-md bg-black text-white "style={{zIndex:"1"}}> 
  <div className="container-fluid">
    <div className='mt-2' >
    <img src={logo} style={{height:"80px",width:"125px",objectFit:"fill"}} alt="" />
    </div>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
        <li style={{zIndex:"1"}} className="nav-item">
          <Link className="home nav-link active mt-2" style={{color:"white",fontFamily:"poppins",fontSize:"125%",borderWidth:'20px'}} aria-current="page" to="/">Home </Link>
        </li>

       { (localStorage.getItem("authtoken"))?
        <li style={{zIndex:"1"}} className="nav-item">
          <Link className="nav-link mt-2" style={{color:"white",fontFamily:"poppins",fontSize:"125%"}} to="/myorders">My Orders</Link>
        </li> : ""
}
       
      </ul>
      { (!localStorage.getItem("authtoken"))?
      <div > 
      <Link className="navbar-brand" style={{color:"white",fontFamily:"poppins",fontSize:"125%"}} to="/createuser">SignUp</Link>
      <Link className="navbar-brand" style={{color:"white",fontFamily:"poppins",fontSize:"125%"}} to="/login">Signin</Link>
      </div>
      : <div className='d-flex justify-content-center  '>
       <d iv className=' btn mx-2 '
        onClick={()=>{setCartView(true)}} style={{color:"white",fontFamily:"poppins",fontSize:"125%"}} >My Cart <span class="badge text-bg-secondary">{data.length}</span>
      </d>
      {cartView ? <Modal  onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
     <div className=' btn mx-3' style={{color:"white",fontFamily:"poppins",fontSize:"125%"}}onClick={logout}>LogOut </div>
      </div>
}  

    </div>
  </div>

</nav>
    </div>
    
  )
}
