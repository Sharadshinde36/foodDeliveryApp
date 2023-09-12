import React from 'react'
import {Link,useNavigate} from 'react-router-dom';
import { useState } from 'react';
function Login() {
  const navigate=useNavigate();
  const [credenditals,setCredenditals]=useState({
    email:"",
    password:"",
  })
  const onChangeHandler=(e)=>
  {
    setCredenditals((prev)=>({...prev,[e.target.name]:e.target.value}))
  }
  const handleSubmit=async(e)=>
  {
    e.preventDefault();
  const response=await fetch('http://localhost:5000/user/signin',{method:"POST",headers:{
    'Content-Type':'application/json'
  },body:JSON.stringify({
    email:credenditals.email,
    password:credenditals.password,
  })})
  const json=await response.json();
  console.log(json)
  if(json.success==true)
  {
    console.log(json);
    alert('you are logged in');
    
localStorage.setItem("authToken",json.token);
console.log(localStorage.getItem('authToken'));
    navigate('/');
  }else
  if(json.success==false)
  {
    alert('please enter valid credentials');
  }
}
  return (
    <div>
<form name='name' value={credenditals.name} onSubmit={(e)=>handleSubmit(e)}>

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
  <Link to="/signup"> <button className='btn btn-primary'>
 Not a user Please Signup
  </button></Link>
</form>




    </div>
  )
}

export default Login;