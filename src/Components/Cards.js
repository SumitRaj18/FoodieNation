import React, { useState,useEffect,useRef} from 'react'
import { useDispatchCart,useCart } from './ContextReducer'
import'./index.css'
import toast from 'react-hot-toast';
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
        toast.success("Added to Cart")

        return
      }
      return
    }
   await dispatch({ type: "ADD", id: props.FoodItem._id, name: props.FoodItem.name, price:finalPrice, qty: qty, size: size, img: props.FoodItem.img })
    console.log(data)
  }
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")

 let finalPrice =qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])
  return (
   
   
        
      <div className="minni card" style={{width: "18rem",maxHeight:"350px",backgroundColor:"black",color:"white",borderColor:"white"} }>
  <img className="minni1 card-img-top" src={props.imgSrc} style={{height:"40%",objectFit:"fill"}}  alt="..."/>
   <div className='card-f'>
  <div className="ball card-body"  >
    <h5 className="card-title">{props.foodname}</h5>
  </div>
<div className="quantity" style={{maxHeight:"30%"}}>
<select className="numberss m-2  rounded"   onChange={(e)=> setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option className='number3' key={i + 1} value={i + 1}>{i + 1}  </option>)
              })}
            </select>

<select className="numbers  rounded" ref={priceRef} onChange={(e)=> setSize(e.target.value)}  >
{priceOptions.map((data) => {
                return <option className='number3' key={data} value={data}>{data}</option>
              })}
            </select>
            </div>
   <div className='pricing2  d-inline ' style={{fontSize:"20px"}}>
   ₹{finalPrice}
   </div>
  
  <div className='line' style={{height:'0.5px',width:'100%',backgroundColor:'white'}}></div>
   <div className='button-add d-flex justify-content-center'><button className='btn1 ' style={{marginTop:'15px'}} onClick={AddtoCart}>Add to Cart</button></div>
</div>
    </div>
  )
}
