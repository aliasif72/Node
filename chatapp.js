//imported modules
const http=require('http');
const bodyParser=require('body-parser');
const express=require('express');
const app=express();

//imported route
const loginRoute=require('./chatlogin');
const msgRoute=require('./chatmsg');

//middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(loginRoute);
app.use(msgRoute); 


//server listener
app.listen(3000);