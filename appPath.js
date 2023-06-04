//imported modules
const http= require('http');
const path=require('path');
const bodyParser=require('body-parser');
const express=require('express');

const app=express();

//imported route
const addRouter=require('./APaddProd');
const shopRouter=require('./APshop');
const errorRouter=require('./error');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(addRouter);
app.use(shopRouter);
app.use(errorRouter.getError404);
app.listen(3000);
