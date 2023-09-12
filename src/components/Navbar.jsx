import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const navigate=useNavigate();
  const logoutHandler=()=>
  {

    localStorage.removeItem("authToken");
    navigate('/');
  }
  const token=localStorage.getItem("authToken");
  return (
    <div className='d-flex justify-content-between'>

<div className='btn d-flex flex-row gap-3 text-secondary'>
  <Link path="/" style={{"text-decoration":"none"}}> <h1> GO   FOOD</h1></Link>
  <Link path="/" style={{"text-decoration":"none"}}> <h3>My Order</h3></Link>
</div>
<div className="font-weight-bold gap-5 d-flex" >
{ token?<div> <Link to="/cart" style={{"text-decoration":"none"}}> My Cart</Link>
 <div className='btn btn-danger' onClick={()=>{logoutHandler()}}>Log Out</div></div>:<div> <Link to="/login" > Login</Link>
  <Link to="/signup" style={{"text-decoration":"none"}}> Signup</Link></div>}




</div>





    </div>
  )
}

export default Navbar