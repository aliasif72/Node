const http=require("http");
const bodyParser= require("body-parser");
const express=require("express");
const app=express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/',(req,res,next)=>
{
console.log("hello");
next();
});

app.use('/add-product',(req,res,next)=>
{
res.send('<html><body><form action="/product" method="POST"><input type="text" name="title"><br><input type="number" name="size"><button type="submit">Add Data</button></form></body></html>');
});

app.use('/product',(req,res,next)=>
{
console.log(req.body);
res.redirect('/')
});

app.use('/',(req,res,next)=>
{
res.send('<html><body>HELLO FROM EXPRESS JS</body></html>');
});
app.listen(3000);
