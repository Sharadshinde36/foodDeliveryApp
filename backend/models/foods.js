const mongoose=require('mongoose');
const foodsSchema=new mongoose.Schema({
    categoryName:{
        type:String,
        trim:true,
    }
})
module.exports=mongoose.model("foods",foodsSchema)