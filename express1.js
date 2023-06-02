const http= require("http");

const helper = require('./exportreadwrite');

const express=require("express");

const app=express();

app.use((req,res,next)=>
{
    console.log("in first middleware");
    next();
});
app.use((req,res,next)=>
{console.log("in other middleware");
    res.send('<h1>HELLO FROM EXPRESS.JS</h1>');
});
app.listen(3000);