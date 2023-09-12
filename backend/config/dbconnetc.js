const mongoose=require('mongoose');
const dbConnect=()=>
{
    mongoose.connect('mongodb://0.0.0.0:27017/Food').then((res)=>
    {
        console.log('connected to the db');
     
    }).catch((err)=>
    {
        console.log(err);
    })
}
    module.exports=dbConnect;