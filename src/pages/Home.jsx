import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Slider from "../components/Slider";
import {useState,useEffect} from 'react'

function Home(){
    const [tab,setTab]=useState(null);
const [foodCat,setFoodCat]=useState([]);
const [foodItem,setFoodItem]=useState([]);
const [wholeData,setWholeData]=useState([]);
const clickHandler=(name)=>
{
    if(name=='FULL')
    {
        setFoodItem(wholeData);
    }else{
    console.log('is clic',name);
    console.log(foodItem);
     const filter=wholeData.filter((data)=>(data.CategoryName
===name))
console.log(filter)
setFoodItem(filter);}
  
}
const getCategory=async()=>
{
    const category=await fetch('http://localhost:5000/food/getCategory',{method:"GET"
});
const res=await category.json();
setFoodCat(res.data);
}
const getfood=async()=>
{console.log('fetchind dadta');
const response=await fetch('http://localhost:5000/food/get',{method:"GET",})
    const data=await response.json();
  
    setWholeData(data.data);
    setFoodItem(data.data);
   
}

useEffect(()=>
{ 
    getfood();
    getCategory();
},[])
console.log('render');
console.log(foodCat);
console.log(foodItem)
    return(
        <div>
         <div><Navbar/></div>   
          <div><Slider/></div>  
<div className="container">
{foodCat.length!==0?foodCat.map((cat)=>(<button onClick={(e)=>{clickHandler(cat.CategoryName)}}>{cat.
CategoryName}
</button>)):<div>hello</div>

}

</div>






          <div className="container d-flex flex-row flex-wrap justify-content-between m-t-2">
           {foodItem.map((data)=>(<Card foodItem={data} options={data.options[0]}/>))}
           </div>
   <Footer/>
        </div>
    )
}
export default Home;
