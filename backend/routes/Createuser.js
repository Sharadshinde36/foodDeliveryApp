const express=require('express')
const router=express.Router();
const User=require('../models/Users');
const bcrypt=require('bcrypt');
const JWT_SECRET="sharad"
const jwt=require('jsonwebtoken')
const {body,validationResult}=require('express-validator')

router.post('/createUser',async(req,res)=>
{
try{

    const {name,location,email}=req.body;
    let password=req.body.password
   
   const hash=await bcrypt.hash(password,10);
   password=hash
    const saved=await User.create({name,location,email,password})
return res.status(200).json(
    {
        success:true,
        data:saved,
    }
)
}catch(err)
{
    return res.status(404).json({
        msg:err.message,
    })
}
})
router.post('/signin',async(req,res)=>
{
    try{
const{email,password}=req.body;
const emailCheck=await User.findOne({email:email});
if(!emailCheck)
{
    return res.status(404).json({
        msg:'user not found'
    })
}
if(await bcrypt.compare(password,emailCheck.password))
{
    const payload={
        user:{
            id:emailCheck._id
        }
    }
    const token=await jwt.sign(payload,JWT_SECRET)
 
    return res.status(200).json({
        success:true,
        msg:'you are logged in',
       token,
    })
}else
{
    return res.status(303).json({
        success:false,
        msg:'password doent match'
    })
}






    }catch(err)
    {
        return res.status(404).json({
            msg:'eror in signin',
            err:err.message
        })
    }
})
module.exports=router;