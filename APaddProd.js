const path=require('path');
const express=require('express');
const router =express.Router();
const rootDir=require('./path');

router.get('/addProduct', (req,res,next)=>
{
res.sendFile(path.join(rootDir,'views','addProduct.html'));
})

router.post('/addProduct', (req,res)=>
{
    res.redirect('/');
})

module.exports=router;