const express=require('express');
const app=express();
const fooddata=require('../models/fooddata');
const foods=require('../models/foods')
const router=express.Router();
router.get('/get',async(req,res)=>
{
    try{
const data=await fooddata.find({});
return res.status(200).json({
    success:true,
    data:data,
})
    }catch(err)
    {
        return res.status(505).json({
            success:false,
            msg:err.messsage,
        })
    }
})
router.post('/add',async(req,res)=>
{
    try{
        const {name,description}=req.body;
        const save=await fooddata.create({
            name:name,
            description:description,
        })
        return res.status(200).json({
            msg:'new food is added',
            data:save,
        })

    }catch(err)
    {
        return res.status(404).json({
            msg:err.message,
            err:'err in adding food item'
        })
    }
})
router.get('/getCategory',async(req,res)=>
{
    try{
const data=await foods.find({});
return res.status(200).json({
    success:true,
    data:data,
})

    }catch(err)
    {
        return res.status(404).json({
            success:false,
            err:err.message,
        })
    }
})
module.exports=router;