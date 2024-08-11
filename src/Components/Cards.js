import React, { useState,useEffect,useRef} from 'react'
import { useDispatchCart,useCart } from './ContextReducer'
import'./index.css'
export default function Cards(props) {
  let dispatch = useDispatchCart();
  let data=useCart()
  const priceRef = useRef();
  let options = props.options;
  let priceOptions = Object.keys(options);
 
  const AddtoCart=async()=>{
    let food = []
    for (const item of data) {
      if (item.id === props.FoodItem._id) {
        food = item;

        break;
      }
    }
    console.log(food)
    console.log(new Date())
    if (food !== null) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.FoodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: props.FoodItem._id, name: props.FoodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
        console.log("Size different so simply ADD one more to the list")
        return
      }
      return
    }
   await dispatch({ type: "ADD", id: props.FoodItem._id, name: props.FoodItem.name, price:finalPrice, qty: qty, size: size, img: props.FoodItem.img })
    console.log(data)
  }
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")

 let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])
  return (
   
   
        
      <div className="card" style={{width: "18rem",maxHeight:"375px",backgroundColor:"black",color:"white",borderColor:"white"} }>
  <img src={props.imgSrc} style={{height:"150px",objectFit:"fill"}} className="card-img-top" alt="..."/>
   <div>
  <div className="card-body"  >
    <h5 className="card-title">{props.foodname}</h5>
  </div>
<div className="quantity" style={{maxHeight:"30%"}}>
<select className="m-2 h-100 w-20 text-black rounded"  onChange={(e)=> setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>)
              })}
            </select>

<select className="m-2 h-80 w-20  text-black rounded" ref={priceRef} onChange={(e)=> setSize(e.target.value)}  >
{priceOptions.map((data) => {
                return <option key={data} value={data}>{data}</option>
              })}
            </select>
            </div>
   <div className='d-inline h-80 fs-5'>
   ₹{finalPrice}
   </div>
  
   <hr>
   </hr>
   <div className='d-flex justify-content-center'><button className='btn1' onClick={AddtoCart}>Add to Cart</button></div>
</div>
    </div>
  )
}
