const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/buyume');

const db= mongoose.connection;


db.once('open',function(){
    console.log('sucessfully connect to database');
})

