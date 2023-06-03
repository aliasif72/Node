//imported modules
const http=require("http");
const bodyParser= require("body-parser");
const express=require("express");

const app=express();

//imported route
const adminRoute=require("./node/route/admin.js");
const shopRoute=require("./node/route/shop.js");

//middleware
app.use(body-parser.urlencoded({extended:false}));
//app.use(adminRoute);
app.use('/admin',adminRoute);
app.use('/shop',shopRoute); 
app.use((req,res,next)=>               //for nothing send anything by using this.
{
    res.status(404).send('<h1>Page not found</h1>');   
});

//server listener
app.listen(3000);