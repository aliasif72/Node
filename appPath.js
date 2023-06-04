//imported modules
const http= require('http');
const path=require('path');
const bodyParser=require('body-parser');
const express=require('express');

const app=express();

//imported route
const addRouter=require('./APaddProd');
const shopRouter=require('./APshop');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(addRouter);
app.use(shopRouter);
app.use((req,res)=>
{
    res.status(404).sendFile(path.join(__dirname,'views','error.html'));  
})
app.listen(3000);
