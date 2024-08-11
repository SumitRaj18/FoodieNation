import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
export default function Login() {
  const [credentials,setCredentials]= useState({email:"",password:""})
  let navigate= useNavigate();
  const submit =async(e)=> {
   e.preventDefault();
   const response= await fetch("https://foodiebackend-bcu3.onrender.com/api/loginuser", {
    method:'POST',
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({email:credentials.email,password:credentials.password})
   });
   const json= await response.json()
   console.log(json);
   if (!json.success) {
       alert('Enter Valid credentials')
   }
     if (json.success) {
      localStorage.setItem("userEmail",credentials.email);

      localStorage.setItem("authtoken", json.authtoken);
      console.log(localStorage.getItem("authtoken"))
      navigate("/")
     }
  }
   const change =(e)=> {
    setCredentials({...credentials,[e.target.name]:e.target.value
    })
}
  return (
    <div>
   <div className='outside-login'>

    <div className="container6">
    <header>Login</header>
    <form onSubmit={submit}>
      <div className="field email-field">
        <div className="input-field">
          <input type="email" placeholder="Enter your email" className="form-control" name='email' value={credentials.email} onChange={change} required />
        </div>
        <span className="error email-error">
          <i className="bx bx-error-circle error-icon"></i>
          <p className="error-text">Please enter a valid email</p>
        </span>
      </div>
      <div className="field create-password">
        <div className="input-field">
          <input type="password" placeholder="Password" className="form-control" onChange={change} value={credentials.password} name='password' required />
          <i className="bx bx-hide show-hide"></i>
        </div>
        <span className="error password-error">
          <i className="bx bx-error-circle error-icon"></i>
         
        </span>
      </div>
    
     
      <div className="input-field button">
        <input type="submit" value="Login Now" />
      </div>
      <div className="links mt-10">
        <Link to="/createuser" style={{  color: " #00d5ff",marginTop:"10px"}}>Create an Account</Link>
      </div>
    </form>
  </div>
  </div>
  <Footer></Footer>
  </div>
  )
}
