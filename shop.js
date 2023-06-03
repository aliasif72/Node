const express=require("express");

const router=express.Router();

router.get('/',(req,res,next)=>
{
res.send('<html><body>HELLO FROM EXPRESS JS</body></html>');
});

module.exports=router;