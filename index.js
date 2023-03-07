//server config file

const express=require('express');
const port =80;
const app=express();
const db=require('./config/mongoose');
const indexRoute=require('./routes/main')

app.use(express.urlencoded());
app.use('/',indexRoute);

// start server listen

app.listen(port,function(err){
    if(err){
        console.log(err);
    }
    console.log('server started port 80');
})


