import React from 'react'
import './slide.css'
import banner from '../images/banner2.png'
export default function Slides(props) {
  return ( <div style={{backgroundColor:'#2b2222'}} >
    <div className='slide' style={{marginTop:"100px",display:'flex',alignItems:"center",justifyContent:"center",height:'400px',width:'100%'
      ,
    }}>
     <img src={banner} style={{height:'400px',width:'100%'}} alt="banner" />
      </div>
     
     
    
   </div>
  )
}
