
const Buyme=require('../models/byume_Schema');
const { report } = require('../routes/main');

module.exports.index=function(req,res){
    console.log('enter');
   
}

module.exports.api=async function(req,res){

    try{
        const {product,qty}=req.body;

       
      const newProduct =new Buyme({
          product,
          qty
      })

      await newProduct.save();
      return res.send(newProduct)


    }catch(error){
        console.log(error);
    }
    

}







