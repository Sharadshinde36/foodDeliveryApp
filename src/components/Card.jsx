import React, { useContext, useEffect } from 'react'
import {useState} from 'react'

import { useRef } from 'react';
import { useCart,useDipatchCart } from './ContextReducer'
function Card(props) {
  const priceRef=useRef();
let dispatch=useDipatchCart();
let data=useCart();
  const keys=Object.keys(props.options);
  const foodItem=props.foodItem;
const [size,setSize]=useState('');
  const[qty,setQty]=useState(1);
  const [s,setS]=useState("");
  const handleAddToCart=async ()=>{
await dispatch({type:"ADD",id:foodItem._id,name:foodItem.name,price:s,qty:qty,size:size,img:foodItem.img});

  }
 let temp;
  useEffect( ()=>
  {
 temp=priceRef.current.value;
setSize(temp);
switch(temp)
{
  case "half":  setS(props.options.half); break;
  case "full": setS(props.options.full);break;
  case "regular": setS(props.options.regular);break;
  case "medium": setS(props.options.medium);break;
  case "large": setS(props.options.large);break;

}


  

  },[s])
  let finalPrice=qty*parseInt(s);
console.log(size);

  return (
    <div>
        
        <div className="card mt-3 max-h-[360px]" style={{"width": "18rem",}}>
  <img src={foodItem.img} className="card-img-top" style={{"height":"286px","height":"289px"}} alt="..."/>
  <div className="card-body">
  <h3 className="card-title">{foodItem.name}</h3>
    <h5 className="card-title">{foodItem.CategoryName}</h5>
    <p className="card-text ">{foodItem.description}.</p>
    <div className="container w-100">
    <select className="m-2 h-100  bg-success" onChange={(e)=>setQty(e.target.value)} >
        {
            Array.from(Array(6),(e,i)=>
            {
                
                return (
                    <option key={i+1} value={i+1}>{i+1}</option>
                )
        })
        }
    </select>
    <select ref={priceRef} className="m-2 h-100  bg-success rounded " onChange={(e)=>setS(e.target.value)}>
    
        {keys.map((key)=>(<option  value={foodItem.options.kay}>{key}</option>))}
    </select>
    <div className="h-100 d-inline">{finalPrice}</div>

    </div>
    <button onClick={()=>handleAddToCart()}>Add To Cart</button>
  </div>
</div>
         
    </div>
  )
}

export default Card