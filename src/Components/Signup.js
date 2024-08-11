import React, { useState } from 'react'
import { Link,Navigate,useNavigate } from 'react-router-dom';
import Footer from './Footer';
function Signup() {
  const [credentials,setCredentials]= useState({name:"",email:"",password:"",location:""})
  let navigate=useNavigate();
  const submit =async(e)=> {
   e.preventDefault();
   const response= await fetch("https://foodiebackend-bcu3.onrender.com/api/createuser", {
    method:'POST',
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.location})
   });
   const json= await response.json()
   console.log(json);
   if (!json.success) {
       alert('Enter Valid credentials')
   }
    else{
      navigate("/login")
    }
  }
  const change =(e)=> {
          setCredentials({...credentials,[e.target.name]:e.target.value
          })
  }
  return (
    <div>
    <div className='outside-signup'>

    <div className="container5">
  <header>Sign Up</header>
  <form onSubmit={submit}>
    <div className="field name-field">
      <div className="input-field">
        <input type="text" placeholder="Enter your Name"  name='name' value={credentials.name} onChange={change} required />
      </div>
      <span className="error name-error">
        <i className="bx bx-error-circle error-icon"></i>
        <p className="error-text">Please enter a valid Name</p>
      </span>
    </div>
  
    <div className="field email-field">
      <div className="input-field">
        <input type="email" placeholder="Enter your email"  name='email' value={credentials.email}  onChange={change} required />
      </div>
      <span className="error email-error">
        <i className="bx bx-error-circle error-icon"></i>
        <p className="error-text">Please enter a valid email</p>
      </span>
    </div>
    <div className="field create-password">
      <div className="input-field">
        <input type="password" placeholder="Password"  name='password' value={credentials.password} onChange={change} required />
        <i className="bx bx-hide show-hide"></i>
      </div>
      <span className="error password-error">
        <i className="bx bx-error-circle error-icon"></i>
        <p className="error-text">
          Please enter atleast 8 charatcer with number, symbol, small and
          capital letter.
        </p>
      </span>
    </div>
    <div className="field confirm-password">
      <div className="input-field">
        <input type="password" placeholder="Confirm Password"name='password' value={credentials.password} onChange={change} required />
        <i className="bx bx-hide show-hide"></i>
      </div>
      <span className="error cPassword-error">
        <i className="bx bx-error-circle error-icon"></i>
        <p className="error-text">Password didn't match</p>
      </span>
    </div>
    <div className="field name-field">
      <div className="input-field">
        <input type="text" placeholder="Enter Location" className="form-contro" name='location' value={credentials.location} onChange={change} required />
      </div>
      <span className="error name-error">
        <i className="bx bx-error-circle error-icon"></i>
        <p className="error-text">Please enter a valid Name</p>
      </span>
    </div>
  
  
    <div className="input-field button">
      <input type="submit" value="Signup Now" />
    </div>
    <div className="links">
      <Link to="/login" style={{color: " #00d5ff",marginTop:"10px"}} >Already have an account?</Link>
    </div>
  </form>
</div>
</div>
<Footer></Footer>
</div>
  )
}

export default Signup
