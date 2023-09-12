const express=require('express');
const app=express();
const cors=require('cors')
app.use(cors())

app.use(express.json());
const foods=require('../backend/models/foods')
const dbConnect=require('./config/dbconnetc');
dbConnect();


app.get('/',(req,res)=>
{
    res.send('hello shra');
})
const userRouter=require('../backend/routes/Createuser');
app.use('/user',userRouter);
const foodRouter=require('./routes/food');
app.use('/food',foodRouter);

// app.get('/get',async(req,res)=>
// {
//     try{
//     const data=await foods.find({});
//     console.log(data);
//     return res.status(200).json({
//         msg:'success',
//         data:data,
//     })}catch(err)
//     {
//         console.log(err);
//     }
// })
app.listen(5000,()=>
{
    console.log('sever is started at 5000');
})