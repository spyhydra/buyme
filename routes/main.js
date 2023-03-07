//api routes
const express=require('express');
const main_controller=require('../controllers/main_controller')

const router=express.Router();

router.get('/',main_controller.index);

//adding and subt
router.post('/product',main_controller.api)






module.exports=router;