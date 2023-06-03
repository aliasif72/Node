const express=require("express");

const router=express.Router();

router.get('/add-product',(req,res,next)=>
{
res.send('<html><body><form action="/admin/add-product" method="POST"><input type="text" name="title"><br><input type="number" name="size"><button type="submit">Add Data</button></form></body></html>');
});

router.post('/add-product',(req,res,next)=>
{
console.log(req.body);
res.redirect('/');
});

module.exports=router;