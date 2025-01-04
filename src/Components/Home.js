import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import Slides from './Slides'
import Footer from './Footer';
export default function Home() {
  const [foodCat,setFoodCat] =useState([]);
  const [FoodItem,setFoodItem]= useState([]);
  const loadData= async ()=> {
    let response= await fetch("https://foodiebackend-bcu3.onrender.com/api/displaydata",{
      method:'POST',
      headers:{
        "Content-Type":"application/json"}
    });
    response=await response.json();
    //console.log(response[0],response[1]);
    setFoodItem(response[0]);
    setFoodCat(response[1]);

  }
    useEffect(()=>{
      loadData()
    },[])
  return (
    <div className='jan'>
      <Slides />
      <div className="containerhome">
        {
          foodCat.length!==0?foodCat.map((data)=>{
            return( <div>
              <div className='mt-3 ' style={{color:"white",fontSize:"25px"}} key={data._id}> 
                {data.CategoryName}
              </div>
              <hr style={{color:"white"}}/>
              {FoodItem!==null && FoodItem.filter((item)=> item.CategoryName === data.CategoryName)
              .map(filteritems=>{
                return(
                 
                  <div className='tawa col-12 col-md-6 col-lg-3 m-4 d-inline-flex' style={{gap:"50px"}} >
                    <Cards 
                    key={filteritems._id}
                    FoodItem={filteritems}
                    foodname={filteritems.name}
                    options= {filteritems.options[0]}
                    
                    imgSrc={filteritems.img}
                    ></Cards>
                     
                    </div>
                    
                    
                    
                );
              })
            }  </div>

             
            )
              } ):
           ""
        }
     
     </div>
     <div style={{backgroundColor:"white",height:"100px"}}>
     <div>
      <Footer></Footer>
     </div>
     </div>
    </div>
  )
}
