import React from 'react'
import { useCart, useDipatchCart } from './ContextReducer'
import { useNavigate } from 'react-router-dom';
function Cart() {
    const navigate=useNavigate();
    const data=useCart();
        console.log(data);
    let dispatch=useDipatchCart();
    if(data.length===0)
    {
        return(
            <div>
                <div className='m-5 w-100 text-center fs-3'>The cart is empty</div>
                <button onClick={()=>navigate(-1)}>Go To HOme</button>
            </div>
        )
    }
    console.log(data);
    let totalPrice=data.reduce((total,food)=>total+parseInt(food.price),0);
  return (
    <div>




      <div >
      <h1>elllo</h1>
      <table className='table table-hover'>

        <thead className='text-success fs-4'>
        <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Option</th>
            <th scope='col'>Amount</th>
        </tr>



        </thead>
        <tbody>
            {data.map((food,index)=>
                <tr>
                    <td scope='roe'>{index+1}</td>
                    <td >{food.name}</td>
                    <td >{food.qty}</td>
                    <td >{food.size}</td>
                    <td >{food.price}</td>
                </tr>
            )}
        </tbody>
      </table>
      <div> TOTAL AMOUNT IS {totalPrice}</div>
      <button className='btn btn-success' onClick={()=>navigate(-1)}>Go To HOme</button>
      </div>
    
    </div>




   
  )
}

export default Cart