import React, { useEffect, useState } from 'react'
import Footer from './Footer'

export default function MyOrder() {

    const [orderData, setorderData] = useState({})

    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'))
        await fetch("https://foodiebackend-bcu3.onrender.com/api/myOrderData", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json()
            await setorderData(response)
        })



        // await res.map((data)=>{
        //    console.log(data)
        // })


    }

    useEffect(() => {
        fetchMyOrder()
    }, [])

    return (

        <div style={{backgroundColor:"white"}}> 
           

            <div className='containerOrder'>
                <div className='row1'>
                 
                    {orderData !== null ? Array(orderData).map(data => {
                        return (
                            data.orderData ?
                                data.orderData.order_data.slice(0).reverse().map((item) => {
                                   
                                    return (
                                        item.map((arrayData) => {
                                            console.log(arrayData.img);
                                            return (
                                                <div style={{color:"black"}} >
                                                    {arrayData.Order_date ? <div className='m-auto mt-3'>

                                                        {data = arrayData.Order_date}
                                                        <hr />
                                                    </div> :

                <div className='col-12 col-md-6 col-lg-3' style={{marginLeft:"100px"}} >
    <div className="card   " style={{ width: "16rem", maxHeight: "360px" }}>
    {//<img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
    }
   <div className="card-body">
     <h5 className="card-title3">{arrayData.name}</h5>
     <div className='container9 w-100 p-0' style={{ height: "38px" }}>
        <span className='m-1'>{arrayData.qty}</span>
            <span className='m-1'>{arrayData.size}</span>
            <span className='m-1'>{data}</span>
       <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                ₹{arrayData.price}/-
                                </div>
                                  </div>
                                     </div>
                                     </div>

                                      </div>



                                                    }

                                                </div>
                                            )
                                        })

                                    )
                                }) : ""
                        )
                    }) : <div style={{height:'200px'}} No Orders to Display />}
                </div>


            </div>

           <Footer></Footer>
        </div>
    )
}
