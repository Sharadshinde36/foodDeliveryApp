const mongoose=require('mongoose');
const Users =require('./Users')
const cartSchema=new mongoose.Schema({
    user:mongoose.Schema.Types.ObjectId,
    ref:Users,
    name:{
        type:String,
    },
    quantity:{
        type:String,
    },
    category:{
        type:String,
    }
})