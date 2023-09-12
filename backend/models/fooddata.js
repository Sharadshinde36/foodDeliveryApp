const mongoose=require('mongoose');

const dataSchema=new mongoose.Schema({
    categoryName:{
        type:String,
        trim:true,

    },
    name:{
        type:String
    },
    img:{
        type:String,
    },
  
    description:{
        type:String,
    }

})
module.exports=mongoose.model('fooddata',dataSchema);