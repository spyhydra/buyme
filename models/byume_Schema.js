//creating a Schema model for api

const mongoose=require('mongoose');

const buyumeSchema=new mongoose.Schema({

    product:{
        type:String,
        required:true
    },
    qty:{
        type:Number,
        required:true
    }

},{timestamps:true})

const buyume=mongoose.model('buyme',buyumeSchema);

//exporting
module.exports=buyume;