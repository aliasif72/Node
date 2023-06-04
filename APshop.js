const path=require('path');
const express=require('express');
const router =express.Router();
const rootDir=require('./path');
const bodyParser = require('body-parser');

router.get('/', (req,res,next)=>
{
console.log(req.body.title);
res.sendFile(path.join(rootDir,'views','shop.html'));
})

router.get('/form', (req,res,next)=>
{
res.sendFile(path.join(rootDir,'contactusform.html'));
})

router.get('/success', (req,res,next)=>
{
res.send('<h1>Form successfull submitted</h1>')
});
module.exports=router;