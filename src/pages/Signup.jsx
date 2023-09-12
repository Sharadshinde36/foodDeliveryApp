import React from 'react'
import { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom'

function Signup() {
    const navigate=useNavigate();
    const[credenditals,setCredenditals]=useState({
        name:"",
        location:"",
        email:"",
        password:""
    })

    const handleSubmit=async(e)=>{
        console.log(credenditals);
e.preventDefault();
const response=await fetch('http://127.0.0.1:5000/user/createuser',{method:"POST",headers:{
    'Content-Type':'application/json'
},body:JSON.stringify({
    name:credenditals.name,
    location:credenditals.location,
    email:credenditals.email,
    password:credenditals.password
})})
const json=await response.json();
e.target.reset();
console.log(json);
if(!json.success)
{
alert('enter valid credenditails');

    }else{
        alert('user is created go to log in page');
        navigate('/login');
       
    }
    }





const onChangeHandler=(e)=>
{
setCredenditals((prev)=>({...prev,[e.target.name]:e.target.value}))
}
  return (
    <div>
<form name='name' value={credenditals.name} onSubmit={(e)=>handleSubmit(e)}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Enter Name</label>
    <input name='name' value={credenditals.name} onChange={(e)=>onChangeHandler(e)} type="text" className="form-control" id="exampleInputEmai" aria-describedby="emailHelp"/>
  
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEm" className="form-label">Enter location</label>
    <input type="text" name='location' value={credenditals.location} onChange={(e)=>onChangeHandler(e)} className="form-control" id="exampleInpu" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
    <input name='email' value={credenditals.email} onChange={(e)=>onChangeHandler(e)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input name='password' value={credenditals.password} onChange={(e)=>onChangeHandler(e)} type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to="/login"> <button className='btn btn-primary'>
  Already a user Please Login
  </button></Link>
</form>

    </div>
  )
}

export default Signup;